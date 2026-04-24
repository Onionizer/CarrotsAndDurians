// main.js

// The following functions are partially complete. Use your knowledge of DOM
// manipulation and events to complete them and complete the game.  Feel free
// to test and inspect other code here, but you only need to actually fill in
// the blank areas of functions marked with "TODO":


// Retrieve an array of matching button DOM elements, if the given "numberButton" were clicked
function getMatchingButtons(numberButton) {
    let myValue = numberButton.getAttribute('data-value');
    let myTD = numberButton.parentNode;
    let myTR = myTD.parentNode;

    let buttons = []; // This will be a "bucket" to hold all the matching buttons

    // Get my right sibling... (e.g. NEXT <td></td> cell after me)
    let nextTD = myTD.nextSibling;
    if (nextTD) { // There is a next cell (e.g. not at the right side)
        let nextButton = nextTD.querySelector('button');
        if (nextButton) { // A button was added to this next cell...
            let nextButtonValue = nextButton.getAttribute('data-value');
            if (nextButtonValue === myValue) {
                buttons.push(nextButton); // Add it to the Array
            }
        }
    }

    // TODO: You'll need to make it check for the other 3 possible matching buttons.
    // Hint: Note that checking to the left will be very similar (except using
    // "previousSibling"), however, checking above and below will require
    // somewhat different code, due to it needing to select a certain element
    // in the next or previous table row (tr).
    // let prevTD = myTD.previousSibling;
    // if (prevTD) { // ...

  















  
    // Always remember to return the variables you need outside!
    return buttons;
};

function setupNumberButton(numberButton) {
    numberButton.addEventListener('click', function () {
        let buttons = getMatchingButtons(numberButton);
        console.log(buttons);
        if (buttons.length >= 2) {
            // This means there are at least 2 other matching buttons, thus 3 total,
            // and we have a match.
            console.log('We have a MATCH!')
            // TODO: Complete this 

     
     
     
     
     
     
     
        }
    });

    numberButton.addEventListener('mouseover', function () {
        // This means the user "hovered" or moved their mouse over
        let buttons = getMatchingButtons(numberButton);
        // TODO: Complete this 
        // Hint: Similar to click, but only add the class Tile--highlight to the button's parent element






    });

    // TODO: Add another event for mouseleave
    // Hint: Similar to mouseover, but removing









}

console.log('Main.js loaded');
