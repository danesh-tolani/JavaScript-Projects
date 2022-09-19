const quizData = [
  {
    question: "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// Start the quiz for the first time
loadQuiz(currentQuiz);

// Load question and answers based on the array index i.e. quiz no
function loadQuiz(quiz_no) {
  questionEl.innerText = quizData[quiz_no].question;
  a_text.innerText = quizData[quiz_no].a;
  b_text.innerText = quizData[quiz_no].b;
  c_text.innerText = quizData[quiz_no].c;
  d_text.innerText = quizData[quiz_no].d;
}

// function to deselect the selected option when the next question loads
function deselectAnswers() {
  for (let ele = 0; ele < answerEls.length; ele++) {
    if (answerEls[ele].checked) {
      answerEls[ele].checked = false;
    }
  }
}

// function to get id of the selected radio button
function getSelected() {
  let checked_btn;

  for (let ele = 0; ele < answerEls.length; ele++) {
    if (answerEls[ele].checked) {
      checked_btn = answerEls[ele].id;
      return checked_btn;
    }
  }
}

submitBtn.addEventListener("click", () => {
  // if the id of selected radio button is equal to the correct option, increase the score
  if (getSelected() == quizData[currentQuiz].correct) {
    score++;
  }
  deselectAnswers(); // deselect the option when submit button is clicked
  //   run the quiz till the question gets completed
  if (currentQuiz < quizData.length - 1) {
    currentQuiz++;
    loadQuiz(currentQuiz); //
  } else {
    questionEl.innerText = "Quiz Finished";
    document.getElementsByTagName("ul")[0].style.display = "none"; // hide options after the last question is completed
    submitBtn.innerText = `Your Score is ${score}`;
  }
});
