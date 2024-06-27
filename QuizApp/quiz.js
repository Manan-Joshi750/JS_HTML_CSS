const quizData = [
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "The <head> section",
        b: "The <body> section",
        c: "Both the <head> and the <body> section are correct",
        d: "none of the above",
        correct: "c"
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "Who developed the theory of relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Stephen Hawking",
        correct: "b"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Claude Monet",
        correct: "b"
    },
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "What is the smallest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Mercury",
        d: "Venus",
        correct: "c"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Platinum",
        correct: "c"
    },
    {
        question: "How many time zones are there in Russia?",
        a: "11",
        b: "07",
        c: "04",
        d: "12",
        correct: "a"
    },
    {
        question: "How many days does it take for the Earth to orbit the Sun?",
        a: "110",
        b: "207",
        c: "365",
        d: "366",
        correct: "c"
    },
    {
        question: "Where is the lowest natural place on planet Earth?",
        a: "The Mariana Trench",
        b: "Grand Canyon",
        c: "Great Barrier Reef",
        d: "Cappadocia",
        correct: "a"
    },
    {
        question: "Which language has the most words (according to dictionary entries)?",
        a: "French",
        b: "English",
        c: "Japanese",
        d: "Hindi",
        correct: "b"
    },
    {
        question: "When was Netflix founded?",
        a: "1997",
        b: "2007",
        c: "1995",
        d: "2000",
        correct: "a"
    }
];

const quiz = document.querySelector(".quiz-body");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;
let userCorrectAnswers = 0;
const totalQuestions = 5;

// Array to store user's answers
let userAnswers = [];
// Shuffle questions and pick the first 5
const shuffledQuestions = quizData.sort(() => 0.5 - Math.random()).slice(0, totalQuestions);
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = shuffledQuestions[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_txt.innerText = currentQuizData.a;
    b_txt.innerText = currentQuizData.b;
    c_txt.innerText = currentQuizData.c;
    d_txt.innerText = currentQuizData.d;
    quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${totalQuestions}</p>`;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

btnSubmit.addEventListener("click", function () {
    const answer = getSelected();

    if (answer) {
        userAnswers.push(answer); // Store the user's answer
        if (answer === shuffledQuestions[currentQuiz].correct) {
            score++;
        }
        userCorrectAnswers++;

        // Check if the user can proceed to the fifth question
        if (currentQuiz === 3 && score < 2) {
            quiz.innerHTML = `<h2>You answered less than 2 questions correctly. You cannot proceed to the fifth question.</h2>
                <button onclick="location.reload()">Reload</button>`;
            footerEl.style.display = "none";
            return;
        }
        currentQuiz++;

        if (currentQuiz < totalQuestions) {
            loadQuiz();
        } else {
            showResults();
        }
    }
});

function showResults() {
    quiz.innerHTML = `<h2>Congratulations! You answered ${score} out of ${totalQuestions} questions correctly. Quiz Completed!</h2>`;
    shuffledQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index]; // Retrieve user's answer for the question
        const userAnswerText = question[userAnswer]; // Get the text of the user's answer
        const correctAnswerText = question[question.correct]; // Get the text of the correct answer
        quiz.innerHTML += `
            <div class="answer-review">
                <p><strong>Q: ${question.question}</strong></p>
                <p>Your answer: ${userAnswerText}</p>
                <p>Correct answer: ${correctAnswerText}</p>
            </div>
        `;
    });
    footerEl.innerHTML = '<button onclick="location.reload()">Reload</button>';
}