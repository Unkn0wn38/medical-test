const quizData = [
    {
      question:  "Выберите излечимые заболевания,передающиеся половым путем?",
      a: "Генитальный герпес",
      b: "Гепатит",
      c: "Вич",
      d: "Гонорея",
      correct: "d",
    },
    {
      question: "Какой из этих сексуальных практик самая опасная с точки зрения передачи ВИЧ?",
      a: "Оральный секс",
      b: "Анальный секс",
      c: "Вагинальный секс",
      d: "Не знаю",
      correct: "b",
    },
    {
      question: "Какие два правила безопасности секса вы знаете?",
      a: " Защищенность и чувства",
      b: "Доверие и любовь",
      c: " Согласие и защищенность",
      d: "Затрудняюсь ответить",
      correct: "a",
    },
    {
      question: "Что относится к высокоэффективным методам котрацепции?",
      a: "Презервативы",
      b: " Внутриматочные",
      c: "химическая(спермициды)",
      d: "ППА(Прерванный половой акт)",
      correct: "b",
    },
    {
        question: "Знаете ли вы,что незащищенный половой акт может привести к ЗППП?",
      a: "Знаю",
      b: "Не знаю",
      c: "Сомневаюсь",
      d: "что такое ЗППП?",
      correct: "a",
    }
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>Вы правильно ответили на ${score}/${quizData.length} вопросов </h2>
              <button onclick="history.go(0)"> Начать заново</button>
          `
      }
    }
  });

  