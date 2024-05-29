const quizData =[
    {
        question:"How did Jotaro get the stand?",
        a:"Got a stand with an arrow",
        b:"The blood of the Joestars got stands",
        c:"Dio activated the blood josters",
        d:"With the help of hamon",
        correct:"c",
        
    },
    {
        question:"When was Minecraft created?",
        a:"2009",
        b:"2011",
        c:"2007",
        d:"2004",
        correct:"b",
        
    },
    {
        question:"How many regions are there in Kazakhstan?",
        a:"11",
        b:"17",
        c:"13",
        d:"14",
        correct:"d",
        
    },
    {
        question:"What is the name of the luffy fruit from one pease?",
        a:"Yami yami no mi",
        b:"Ope ope no mi",
        c:"Gomu gomu no mi ",
        d:"Mero mero no mi",
        correct:"c",
        
    }
]
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElemnt = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currenQuiz = 0;
let score = 0;

const deselectAnswer = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelect = () => {
    let answer; 
    answerElements.forEach((answerElements) => {
        if(answerElements.checked) answer = answerElements.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswer();
    const currentQuizData = quizData[currenQuiz];
    questionElemnt.innerText = currentQuizData.question;
    a_text.innTerext = currentQuizData.a;
    b_text.innTerext = currentQuizData.b;
    c_text.innTerext = currentQuizData.c;
    d_text.innTerext = currentQuizData.d;
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
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
  });