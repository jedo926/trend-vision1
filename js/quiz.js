// Vision One Interactive Training Website - Quiz Engine
// Renders multiple choice questions, checks answers, displays hints, and triggers completion.

window.V1Quiz = {
  render(lessonData, container) {
    if (!lessonData.quiz || !lessonData.quiz.questions || lessonData.quiz.questions.length === 0) {
      container.innerHTML = `<p class="no-quiz">No quick check for this lesson.</p>`;
      return;
    }

    container.innerHTML = "";
    const form = document.createElement("form");
    form.className = "quiz-form";
    form.id = `quiz-form-${lessonData.id}`;
    form.setAttribute("autocomplete", "off");

    const header = document.createElement("h4");
    header.className = "quiz-title";
    header.innerText = "Quick Knowledge Check";
    form.appendChild(header);

    lessonData.quiz.questions.forEach((q, qIndex) => {
      const qContainer = document.createElement("div");
      qContainer.className = "quiz-question-container";
      qContainer.dataset.questionIndex = qIndex;

      const qText = document.createElement("p");
      qText.className = "quiz-question-text";
      qText.innerHTML = `<span class="q-num">Question ${qIndex + 1}:</span> ${q.question}`;
      qContainer.appendChild(qText);

      const optionsContainer = document.createElement("div");
      optionsContainer.className = "quiz-options-group";
      optionsContainer.setAttribute("role", "radiogroup");
      optionsContainer.setAttribute("aria-label", q.question);

      q.options.forEach((opt, optIndex) => {
        const label = document.createElement("label");
        label.className = "quiz-option-label";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question-${lessonData.id}-${qIndex}`;
        input.value = optIndex;
        input.className = "quiz-option-input";
        input.required = true;

        // Accessibility
        input.setAttribute("role", "radio");
        input.setAttribute("aria-checked", "false");

        input.addEventListener("change", () => {
          // Reset status on change
          qContainer.classList.remove("correct", "incorrect");
          const feedback = qContainer.querySelector(".quiz-feedback");
          if (feedback) feedback.style.display = "none";
          
          // Update accessibility state
          optionsContainer.querySelectorAll("input").forEach(i => {
            i.setAttribute("aria-checked", i.checked ? "true" : "false");
          });
        });

        const span = document.createElement("span");
        span.className = "quiz-option-text";
        span.innerText = opt;

        label.appendChild(input);
        label.appendChild(span);
        optionsContainer.appendChild(label);
      });

      qContainer.appendChild(optionsContainer);

      // Feedback message element
      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      feedback.style.display = "none";
      qContainer.appendChild(feedback);

      form.appendChild(qContainer);
    });

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.className = "quiz-submit-btn";
    submitBtn.innerText = "Submit Answers";
    form.appendChild(submitBtn);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.checkAnswers(lessonData, form);
    });

    container.appendChild(form);

    // If already completed, pre-fill correct answers and disable
    if (window.V1Storage.getCompleted().has(lessonData.id)) {
      this.prefillAndDisable(lessonData, form);
    }
  },

  checkAnswers(lessonData, form) {
    const questions = lessonData.quiz.questions;
    let correctCount = 0;

    questions.forEach((q, qIndex) => {
      const qContainer = form.querySelector(`[data-question-index="${qIndex}"]`);
      const selectedInput = form.querySelector(`input[name="question-${lessonData.id}-${qIndex}"]:checked`);
      const feedback = qContainer.querySelector(".quiz-feedback");

      if (!selectedInput) {
        return;
      }

      const selectedValue = parseInt(selectedInput.value, 10);
      feedback.style.display = "block";

      if (selectedValue === q.correct) {
        correctCount++;
        qContainer.classList.remove("incorrect");
        qContainer.classList.add("correct");
        feedback.className = "quiz-feedback correct-feedback";
        feedback.innerHTML = "Correct";
      } else {
        qContainer.classList.remove("correct");
        qContainer.classList.add("incorrect");
        feedback.className = "quiz-feedback incorrect-feedback";
        feedback.innerHTML = `Incorrect. <strong>Hint:</strong> ${q.hint || "Try again!"}`;
      }
    });

    const total = questions.length;
    const percent = Math.round((correctCount / total) * 100);
    const threshold = lessonData.quiz.passThreshold || 70;
    const passed = percent >= threshold;

    this.renderScoreSummary(form, correctCount, total, percent, threshold, passed);
    window.V1Storage.setScore(lessonData.id, { correct: correctCount, total, percent, passed });

    if (passed) {
      // Disable inputs and submit button
      form.querySelectorAll("input").forEach(input => input.disabled = true);
      const submitBtn = form.querySelector(".quiz-submit-btn");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Completed";
        submitBtn.classList.add("success");
      }

      // Trigger completion in progress layer
      if (window.V1Progress) {
        window.V1Progress.markComplete(lessonData.id);
      }

      if (lessonData.id === "fa-quiz") {
        this.showCertificatePrompt(lessonData, percent);
      }
    }
  },

  renderScoreSummary(form, correct, total, percent, threshold, passed) {
    let summary = form.querySelector(".quiz-score-summary");
    if (!summary) {
      summary = document.createElement("div");
      summary.className = "quiz-score-summary";
      const submitBtn = form.querySelector(".quiz-submit-btn");
      form.insertBefore(summary, submitBtn);
    }
    summary.className = `quiz-score-summary ${passed ? "correct-feedback" : "incorrect-feedback"}`;
    summary.innerText = passed
      ? `${correct}/${total} correct — ${percent}% (Passed)`
      : `${correct}/${total} correct — ${percent}% (Need ${threshold}% to pass)`;
  },

  showCertificatePrompt(lessonData, percent) {
    const container = document.getElementById(`quiz-form-${lessonData.id}`)?.parentElement;
    if (!container || document.getElementById("certificate-prompt")) return;

    const prompt = document.createElement("div");
    prompt.id = "certificate-prompt";
    prompt.className = "certificate-prompt";
    prompt.innerHTML = `
      <label for="certificate-name-input">Enter your name for your certificate:</label>
      <input type="text" id="certificate-name-input" value="${window.V1Storage.getCertificateName()}" placeholder="Your name" />
      <button type="button" class="generate-cert-btn">Generate Certificate</button>
      <div id="completion-certificate-section">
        <h2>Certificate of Completion</h2>
        <p>This certifies that</p>
        <p class="cert-name"></p>
        <p>has successfully completed</p>
        <p class="cert-course">Trend Vision One Core Training</p>
        <p class="cert-score"></p>
        <p class="cert-date"></p>
        <button type="button" class="print-cert-btn">Print Certificate</button>
      </div>
    `;
    container.appendChild(prompt);

    const nameInput = prompt.querySelector("#certificate-name-input");
    const certSection = prompt.querySelector("#completion-certificate-section");

    const generate = () => {
      const name = nameInput.value.trim() || "Trainee";
      window.V1Storage.setCertificateName(name);
      certSection.querySelector(".cert-name").innerText = name;
      certSection.querySelector(".cert-score").innerText = `Score: ${percent}%`;
      certSection.querySelector(".cert-date").innerText = new Date().toLocaleDateString();
      certSection.style.display = "block";
    };

    prompt.querySelector(".generate-cert-btn").addEventListener("click", generate);
    prompt.querySelector(".print-cert-btn").addEventListener("click", () => window.print());

    // Auto-populate if a name was already saved from a previous visit
    if (window.V1Storage.getCertificateName()) generate();
  },

  prefillAndDisable(lessonData, form) {
    const questions = lessonData.quiz.questions;
    questions.forEach((q, qIndex) => {
      const qContainer = form.querySelector(`[data-question-index="${qIndex}"]`);
      const correctInput = form.querySelector(`input[name="question-${lessonData.id}-${qIndex}"][value="${q.correct}"]`);
      if (correctInput) {
        correctInput.checked = true;
        correctInput.setAttribute("aria-checked", "true");
      }

      // Style as correct
      if (qContainer) {
        qContainer.classList.add("correct");
        const feedback = qContainer.querySelector(".quiz-feedback");
        if (feedback) {
          feedback.style.display = "block";
          feedback.className = "quiz-feedback correct-feedback";
          feedback.innerHTML = "Correct (Passed)";
        }
      }
    });

    const score = window.V1Storage.getScore(lessonData.id);
    if (score) {
      this.renderScoreSummary(form, score.correct, score.total, score.percent, lessonData.quiz.passThreshold || 70, true);
    }

    form.querySelectorAll("input").forEach(input => input.disabled = true);
    const submitBtn = form.querySelector(".quiz-submit-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Completed";
      submitBtn.classList.add("success");
    }

    if (lessonData.id === "fa-quiz") {
      this.showCertificatePrompt(lessonData, score ? score.percent : 100);
    }
  }
};
