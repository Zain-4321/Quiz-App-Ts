
interface Question {
    question: string;
    answers: string[];
    correctAnswer: number;
}

let questions: Question[] = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
        correctAnswer: 2
    },
    
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question")!.innerHTML = questions[currentQuestion].question;

document.getElementById("answers")!.innerHTML = questions[currentQuestion].answers.map((answer, index) => {
    return `<li><input type="radio" id="answer${index + 1}" name="answer"><label for="answer${index + 1}">${answer}</label></li>`;
}).join("");

document.getElementById("submit")!.addEventListener("click", () => {
    let selectedAnswer = document.querySelector("input[name='answer']:checked")!.id;
    let correctAnswer = questions[currentQuestion].correctAnswer + 1;

    if (selectedAnswer === `answer${correctAnswer}`) {
        score++;
        document.getElementById("result")!.innerHTML = "Correct!";
    } else {
        document.getElementById("result")!.innerHTML = `Incorrect. The correct answer is ${questions[currentQuestion].answers[questions[currentQuestion].correctAnswer]}.`;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById("question")!.innerHTML = questions[currentQuestion].question;
        document.getElementById("answers")!.innerHTML = questions[currentQuestion].answers.map((answer, index) => {
            return `<li><input type="radio" id="answer${index + 1}" name="answer"><label for="answer${index + 1}">${answer}</label></li>`;
        }).join("");
    } else {
        document.getElementById("submit")!.setAttribute("disabled", "true"); 
        (document.getElementById("submit") as HTMLButtonElement).disabled = true;
    }
});