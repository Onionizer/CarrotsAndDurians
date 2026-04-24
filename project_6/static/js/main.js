// main.js

// Edit this file to add any necessary functions or code to complete the assignment.

// Hint: The "hints/" directory contains more JavaScript hints, including function suggestions.

function setupNumberButton(numberButton) {

    numberButton.addEventListener('click', function () {
    
        alert('Button was clicked! ' + numberButton.textContent);
        console.log(numberButton);

    });

}

console.log('Main.js loaded!');
