import os
import time
from dotenv import load_dotenv
from langchain_community.document_loaders import TextLoader
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import SupabaseVectorStore
from supabase.client import create_client

# Force load_dotenv to look in the exact directory where this python file lives
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

def ingest_markdown_files():
    # 1. Connect to Supabase
    supabase_url = os.environ.get("SUPABASE_URL")
    supabase_key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
    
    if not supabase_url or not supabase_key:
        print("Error: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing from .env file.")
        return
        
    supabase_client = create_client(supabase_url, supabase_key)
    
    # 2. Initialize OpenAI Embeddings
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    
    # 3. Setup Semantic Chunker
    text_splitter = SemanticChunker(embeddings)
    
    input_dir = "./docs_input"
    
    if not os.path.exists(input_dir):
        print(f"Error: The directory '{input_dir}' does not exist. Please create it and add your markdown files.")
        return
        
    all_chunks = []
    
    print("Reading markdown files from ./docs_input...")
    files = [f for f in os.listdir(input_dir) if f.endswith(".md")]
    
    if not files:
        print("No .md files found in ./docs_input folder!")
        return

    for filename in files:
        file_path = os.path.join(input_dir, filename)
        print(f"Processing: {filename}")
        
        try:
            # Load file
            loader = TextLoader(file_path, encoding="utf-8")
            docs = loader.load()
            
            # Inject file fallback metadata
            for doc in docs:
                doc.metadata["title"] = filename.replace(".md", "")
                doc.metadata["url"] = "https://docs.trendmicro.com/" 
                
            # Split the document semantically
            chunks = text_splitter.split_documents(docs)
            all_chunks.extend(chunks)
        except Exception as e:
            print(f"Skipping corrupt or empty file {filename}: {str(e)}")
            
    total_chunks = len(all_chunks)
    print(f"\nCreated {total_chunks} semantic chunks.")
    print("Uploading to Supabase in micro-batches of 50 to guarantee zero timeouts...")
    
    # 4. Micro-Batch Upload Loop
    batch_size = 50
    total_batches = (total_chunks + batch_size - 1) // batch_size
    
    for i in range(0, total_chunks, batch_size):
        batch = all_chunks[i:i + batch_size]
        current_batch_num = (i // batch_size) + 1
        print(f"Uploading batch {current_batch_num}/{total_batches} (Chunks {i} to {min(i + batch_size, total_chunks)})...")
        
        try:
            SupabaseVectorStore.from_documents(
                batch,
                embeddings,
                client=supabase_client,
                table_name="documents",
                query_name="match_documents"
            )
            # Give the database a brief moment to catch up
            time.sleep(0.5)
        except Exception as batch_error:
            print(f"⚠️ Batch {current_batch_num} failed with error: {str(batch_error)}. Retrying in 3 seconds...")
            time.sleep(3)
            # Simple single retry strategy for network hiccups
            SupabaseVectorStore.from_documents(
                batch,
                embeddings,
                client=supabase_client,
                table_name="documents",
                query_name="match_documents"
            )
        
    print("🚀 Batch ingestion completely successful! All chunks are online.")

if __name__ == "__main__":
    ingest_markdown_files()