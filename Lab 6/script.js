
// --- 1. QUIZ DATA ---
const initialQuestions = [ // Renamed array for shuffling purposes
    {
        question: "What is 5 + 3?",
        options: ["7", "8", "10", "2"],
        answer: "8"
    },
    {
        question: "What is 10 - 4?",
        options: ["5", "6", "14", "4"],
        answer: "6"
    },
    {
        question: "What is 2 * 4?",
        options: ["6", "8", "4", "2"],
        answer: "8"
    }
];

// --- 2. GLOBAL VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
let timeLimit = 30; // Seconds
let timerInterval;
let selectedOption = null;
let shuffledQuestions = []; // Array to hold the randomized questions

// --- 3. DOM ELEMENTS ---
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const nextBtn = document.getElementById('next-btn');

// New DOM Elements
const resultsScreen = document.getElementById('results-screen');
const finalScoreElement = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');


// --- 4. CORE FUNCTIONS ---

// Helper function to shuffle questions
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to start the quiz (used for initial load and restart)
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.textContent = score;

    // Shuffle questions
    shuffledQuestions = shuffleQuestions([...initialQuestions]);

    // Restore quiz UI visibility
    document.querySelector('#quiz').style.display = 'block'; 
    document.getElementById('timer').style.display = 'block';
    nextBtn.style.display = 'block';
    
    // Hide results screen
    resultsScreen.style.display = 'none';
    
    // Load the first question
    loadQuestion();
}
function startTimer() {
    clearInterval(timerInterval);
    let timeLeft = timeLimit;
    timeElement.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    displayFeedback("Time's up! The correct answer was: " + shuffledQuestions[currentQuestionIndex].answer, false);
    disableOptions(true); 
    nextBtn.disabled = false;
}
function loadQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showResults();
        return;
    }

    // Reset for new question
    clearInterval(timerInterval);
    selectedOption = null;
    optionsContainer.innerHTML = '';
    feedbackElement.textContent = '';
    nextBtn.disabled = true;
    nextBtn.textContent = 'Next Question'; // Reset button text
    startTimer();

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    // Create option buttons
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.onclick = () => handleOptionClick(button, option);
        optionsContainer.appendChild(button);
    });
}

function handleOptionClick(button, selectedAnswer) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedOption = selectedAnswer;
    nextBtn.disabled = false;
}


function checkAnswer() {
    if (selectedOption === null) {
        // If timeout, selectedOption is null, treat as incorrect/unanswered
        selectedOption = "N/A"; 
    }

    clearInterval(timerInterval);

    const correct = shuffledQuestions[currentQuestionIndex].answer;
    const isCorrect = selectedOption === correct;

    // Give feedback
    displayFeedback(isCorrect ? "Correct! Well done!" : "Incorrect. The answer was " + correct, isCorrect);
    
    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
    }

    // Highlight the correct/incorrect buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true; 
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedOption) {
            btn.classList.add('incorrect');
        }
    });

}

function displayFeedback(message, isPositive) {
    feedbackElement.textContent = message;
    feedbackElement.style.color = isPositive ? '#4CAF50' : '#f44336';
}

function disableOptions(state) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = state);
}

function showResults() {
    // Hide the main quiz elements
    document.querySelector('#quiz').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    
    // Display the results screen in the footer
    resultsScreen.style.display = 'block';
    finalScoreElement.textContent = `You scored ${score} out of ${shuffledQuestions.length}.`;

    // Reset score display in the footer temporarily for clean look
    document.querySelector('footer h3').style.display = 'none'; 
}
// --- 5. EVENT LISTENERS ---
nextBtn.addEventListener('click', () => {
    checkAnswer(); 

    // Use a slight delay to let the user see the result before loading the next question
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1500); 
});

// Event listener for the restart button
restartBtn.addEventListener('click', () => {
    document.querySelector('footer h3').style.display = 'block'; // Show score again
    startQuiz();
});
// --- 6. INITIALIZATION ---
window.onload = startQuiz; // Start the quiz when the page loads