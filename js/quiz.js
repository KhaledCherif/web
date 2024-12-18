const questions = [
    {
      question: "What is Khaled's favorite Arctic Monkeys song?",
      options: ["R u mine?", "do i wanna know?", "i wanna be yours", "No.1 party anthem"],
      answer: "do i wanna know?",
    },
    {
      question: "What is khaled's favorite natural scene?",
      options: ["full moon", "sunrise", "sunset"],
      answer: "full moon",
    },
    {
      question: "did khaled ever worked with unreal engine?",
      options: ["Yes", "NO"],
      answer: "NO",
    },
    {
      question: "how old is khaled?",
      options: ["22 years old", "23 years old", "24 years old","21 years old"],
      answer: "22 years old",
    },
    {
      question: "did khaled study in 15 Novembre 1955 high school?",
      options: ["Yes", "NO"],
      answer: "NO",
    },
    {
      question: "in what language khaled is better?",
      options: ["english",'french' ],
      answer: "english",
    },
    {
      question: "what is khaled's dream?",
      options: ["get a farm", "help people make more art", "become a politician"],
      answer: "help people make more art",
    },
    {
      question: "what degree khaled curently studying?",
      options: ["engineering degree", "licence degree", "bachelor degree"],
      answer: "engineering degree",
    },
    {
      question: "what is khaled's favourite movie ?",
      options: ["troy", "the wolf of wall street", "wardogs"],
      answer: "wardogs",
    },
    {
      question: "What is Khaled's favorite coldplay song?",
      options: ["fix you", "paradise", "a sky full of stars","viva la vida"],
      answer: "viva la vida",
    }
  ];
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  let userAnswers = [];
  
  const questionContainer = document.getElementById("question-container");
  const nextBtn = document.getElementById("next-btn");
  const scoreModal = document.getElementById("score-modal");
  const scoreText = document.getElementById("score");
  const scoreFeedback = document.getElementById("score-feedback");
  const correctAnswersList = document.getElementById("correct-answers-list");
  const restartBtn = document.getElementById("restart-btn");
  const answerGrid = document.getElementById("answer-grid");
  
  function showQuestion(index) {
    const question = questions[index];
  
  
    questionContainer.innerHTML = `
      <h2>${index + 1}. ${question.question}</h2>
    `;
  
    // Populate the grid with options
    answerGrid.innerHTML = question.options
      .map((option, i) => {
        return `<label><input type="radio" name="answer" value="${option}"> ${option}</label>`;
      })
      .join("");
  }
  
  function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progress = ((currentQuestionIndex / questions.length) * 100).toFixed(0);
    progressBar.style.width = `${progress}%`;
  }
  
  function showScore() {
    const percentage = ((score / questions.length) * 100).toFixed(0);
    document.getElementById("score-display").innerText = `${percentage}%`;
  
    // Personalized feedback
    if (percentage >= 80) {
      scoreFeedback.innerText = "Excellent work! 🎉";
      scoreFeedback.style.color = "#4caf50";
    } else if (percentage >= 50) {
      scoreFeedback.innerText = "Good job, but you can do better! 👍";
      scoreFeedback.style.color = "#ffc107";
    } else {
      scoreFeedback.innerText = "Keep practicing! 💪";
      scoreFeedback.style.color = "#f44336";
    }
  
    // Show correct answers
    correctAnswersList.innerHTML = questions
      .map(
        (q, i) => `<li>${i + 1}. ${q.question} - <b>Correct Answer:</b> ${q.answer}</li>`
      )
      .join("");
  
    scoreModal.style.display = "flex";
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    scoreModal.style.display = "none";
    showQuestion(currentQuestionIndex);
    updateProgressBar();
  }
  
  nextBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
      const answer = selectedOption.value;
      userAnswers.push(answer);
      if (answer === questions[currentQuestionIndex].answer) score++;
      currentQuestionIndex++;
      updateProgressBar();
      if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
      } else {
        showScore();
      }
    } else {
      alert("Please select an answer!");
    }
  });
  
  restartBtn.addEventListener("click", restartQuiz);
  
  showQuestion(currentQuestionIndex);
  updateProgressBar();
  