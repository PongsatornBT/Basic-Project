// Array of quiz questions and answers
const questions = [
    // Question 1
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the largest animal in the world? (2)",
        answers: [
            { text: "Shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the largest animal in the world? (3)",
        answers: [
            { text: "Blue whale", correct: true },
            { text: "Shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the largest animal in the world? (4)",
        answers: [
            { text: "Shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue whale", correct: true },
        ]
    },
];

// Get HTML elements by their IDs
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables to track the current question index and user's score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    // Reset variables to their initial state
    currentQuestionIndex = 0;
    score = 0;
    // Update the "Next" button text
    nextButton.innerHTML = "Next";
    // Display the first question
    showQuestion();
}

// Function to display a question and its answer options
function showQuestion() {
    // Reset the UI state
    resetState();
    // Get the current question from the array
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // Display the question text
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Create buttons for each answer option
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        // Set button text
        button.innerHTML = answer.text;
        // Add CSS class to style the button
        button.classList.add("btn");
        // Append the button to the answer-buttons div
        answerButtons.appendChild(button);
        // If the answer is correct, store that information in the button's dataset
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // Add an event listener to handle button clicks
        button.addEventListener("click", selectAnswer);
    })
}

// Function to reset the UI state
function resetState() {
    // Hide the "Next" button
    nextButton.style.display = "none";
    // Remove all child elements from the answer-buttons div
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle user's answer selection
function selectAnswer(e) {
    // Get the selected button
    const selectedBtn = e.target;
    // Check if the selected answer is correct
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Update UI based on the correctness of the answer
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Disable all buttons to prevent further clicks
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    // Display the "Next" button
    nextButton.style.display = "block";
}

// Function to display the user's score at the end of the quiz
function showScore() {
    // Reset the UI state
    resetState();
    // Display the user's score
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    // Update the "Next" button text
    nextButton.innerHTML = "Play Again";
    // Display the "Next" button
    nextButton.style.display = "block";
}

// Function to handle the "Next" button click
function handleNextButton() {
    // Move to the next question or show the final score
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for the "Next" button click
nextButton.addEventListener("click", () => {
    // Check if there are more questions or if the quiz should be restarted
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Start the quiz when the page loads
startQuiz();
