// TODO: Write JavaScript code here! e.g. to test:
console.log('Individual Project 1, ready to start!');

console.log('Initializing vars');
let correctCount = 0;
let incorrectCount = 0;
let lives = 10;

function correct() {
    console.log('Correct answer');
    // Increase correct count
    correctCount++;

    // update the displayed correct count
    // <span id="correct_count">0</span>
    document.querySelector('#correct_count').textContent = correctCount;

    // display Correct, good job box
    // <div class="left-floating-message" id="message"></div>
    document.querySelector('#message').textContent = "Correct, good job!";

    // Check if won.
    if (correctCount === 5) {
        youWin();
    }
}

function incorrect() {
    // Increase incorrect count, update
    //  <span id="incorrect_count">0</span>
    incorrectCount++;
    document.querySelector('#incorrect_count').textContent = incorrectCount;

    // decrease life, and update
    lives--;
    // <span id="lives_count">10</span>
    document.querySelector('#lives_count').textContent = lives;

    // 
    let incorrectMessage = "Incorrect! You lose a life."
    document.querySelector('#message').textContent = incorrectMessage;

    // check if lost
    if (lives === 0) {
        youLose();
    }
}

// <div class="questions-container" id="all_questions"></div>

function youLose() {
    // display things?
    console.log("You lose!")
    // <p>YOU LOSE!</p>
    let gameoverHTML = '<h1 class="gameover">GAME OVER!</h1>';
    document.querySelector('#all_questions').innerHTML = gameoverHTML;

}

function youWin() {
    console.log("You win!")

    let youWinHTML = '<h1 class="gameover">YOU WIN!</h1>';
    document.querySelector('#all_questions').innerHTML = youWinHTML;
}
