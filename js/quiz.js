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
    let allCorrect = true;

    questions.forEach((q, qIndex) => {
      const qContainer = form.querySelector(`[data-question-index="${qIndex}"]`);
      const selectedInput = form.querySelector(`input[name="question-${lessonData.id}-${qIndex}"]:checked`);
      const feedback = qContainer.querySelector(".quiz-feedback");

      if (!selectedInput) {
        allCorrect = false;
        return;
      }

      const selectedValue = parseInt(selectedInput.value, 10);
      feedback.style.display = "block";

      if (selectedValue === q.correct) {
        qContainer.classList.remove("incorrect");
        qContainer.classList.add("correct");
        feedback.className = "quiz-feedback correct-feedback";
        feedback.innerHTML = "Correct";
      } else {
        allCorrect = false;
        qContainer.classList.remove("correct");
        qContainer.classList.add("incorrect");
        feedback.className = "quiz-feedback incorrect-feedback";
        feedback.innerHTML = `Incorrect. <strong>Hint:</strong> ${q.hint || "Try again!"}`;
      }
    });

    if (allCorrect) {
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
    }
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

    form.querySelectorAll("input").forEach(input => input.disabled = true);
    const submitBtn = form.querySelector(".quiz-submit-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Completed";
      submitBtn.classList.add("success");
    }
  }
};
