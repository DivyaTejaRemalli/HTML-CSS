const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Jupiter"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const nextButton = document.getElementById('next-button');
    const resultElement = document.getElementById('result');

    // Check if the quiz is complete
    if (currentQuestionIndex >= questions.length) {
        questionElement.textContent = '';
        answersElement.innerHTML = '';
        nextButton.style.display = 'none';
        
        // Use backticks for the template literal
        resultElement.textContent = `Quiz complete! Your score: ${score}/${questions.length}`;
        return;
    }

    // Load the current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    // Display answer options
    currentQuestion.answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener('click', () => {
            if (answer === currentQuestion.correct) {
                score++;
            }
            currentQuestionIndex++;
            showQuestion();
        });
        answersElement.appendChild(li);
    });
}

// Event listener for the "Next Question" button
document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

// Start the quiz
showQuestion();
