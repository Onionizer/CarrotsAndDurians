console.log("Loaded main.js")

const emptyExpression = "&nbsp;";

// Note: Two basic functions are here for you to examine.
// Open the Console to see the results.
// function pressZero() {
//     typeSymbol('0');
// }
// function pressOne() {
//     typeSymbol('1');
// }
// function pressTwo() {
//     typeSymbol('2');
// }
// function pressThree() {
//     typeSymbol('3');
// }
// function pressFour() {
//     typeSymbol('4');
// }
// function pressFive() {
//     typeSymbol('5');
// }
// function pressSix() {
//     typeSymbol('6');    // can just call typeSymbol? on click?
// }
// function pressSeven() {
//     expression = expression + '7';
//     console.log('7 was pressed. New expression:', expression);
//     updateDisplay();
// }
// function pressEight() {
//     expression = expression + '8';
//     console.log('8 was pressed. New expression:', expression);
//     updateDisplay();
// }
// function pressNine() {
//     expression = expression + '9';
//     console.log('Nine was pressed. New expression:', expression);
//     updateDisplay();
// }

// function pressDecimal() {
//     expression += '.';
//     updateDisplay();
// }



function pressDivide() {
    expression = expression + '/';
    console.log('Divider was pressed. New expression:', expression);
    updateDisplay();
}
function pressTimes() {
    expression = expression + '*';
    console.log('Times was pressed. New expression:', expression);
    updateDisplay();
}
function pressMinus() {
    expression = expression + '-';
    console.log('Minus was pressed. New expression:', expression);
    updateDisplay();
}
function pressPlus() {
    expression = expression + '+';
    console.log('Plus was pressed. New expression:', expression);
    updateDisplay();
}


/* ***************************************** */
// The following is the function structure of the solution.
// Feel free to use this as a guide, or change it to your own!

/*
   Updates the calculator display
*/
function updateDisplay() {
    let displayDiv = document.querySelector('#display')
    // Hint: Will eventually need changes!
    displayDiv.innerHTML = expression;
}

/*
   Deletes the last typed character
*/
function backspace() {
    // TODO: Fill this in! - done?
    if (expression === "") {
        // No op?
        console.log('backspace - expression is empty, so no op');
    } else {
        // delete the last character
        expression = _removeLastCharacters(expression, 1);
        console.log('backspace - removed 1 char');

        // the display seems to shrink/narrow down. Do I need to fix that? 
    }
    updateDisplay();
}

/*
   Clears what's typed
*/
function clearExpression() {
    // TODO: Fill this in!
    expression = emptyExpression;
    updateDisplay();
    console.log('Cleared expression');
}

/*
   Adds one symbol to the expression
*/
function typeSymbol(symbol) {
    // TODO: Fill this in!
    // isn't this just done as is as a helper function? other than just console.log
    if (expression === emptyExpression) {
        expression = symbol;    // don't keep the nbsp
    } else {
        expression = expression + symbol;
    }
    console.log(symbol, 'was pressed. New expression:', expression);
    updateDisplay();
}

/*
   Adds one symbol to the expression, but with a different user-visible label
*/
function typeSpecialSymbol(symbol, label) {
    // handle square, cube

    // TODO: Fill this in!
    updateDisplay();
}

/*
   Loads the numeric result of the last computation into the expression
*/
function loadResult() {
    // TODO: Fill this in!
    // can get the last of the receipt
    // split by <br/> and 
    // and then assign to expression
    // then update display?
}


/*
   Appends the current expression to the "receipt" below the calculator
*/
function addToReceipt() {
    // if (expression === '') {
    //     // If expression is empty, or invalid, then no op
    //     console.log('Expression is empty; no op');
    // } else {
    //     try {
    //         eval_result = eval(expression)
    //     } catch (e) {
    //         console.log('Error occured:', e);
    //     }

    //     // add this to 
    //     let receiptDiv = document.querySelector('#receipt_contents')
    //     // DONE: Fill this in!
    //     // maybe p tag?  there's a <br>.  So append <br>
    //     receipt += expression + ' = ' + eval(expression) + '<br>';
    //     receiptDiv.innerHTML = receipt;
    // }

        // add this to 
    let receiptDiv = document.querySelector('#receipt_contents')
    // DONE: Fill this in!
    // maybe p tag?  there's a <br>.  So append <br>


    // receipt += expression + ' = ' + eval(expression) + '<br>';   // this causes undefined at the start
    receipt += expression + '<br>';
    receiptDiv.innerHTML = receipt;

}

/*
   Display error message to screen
*/
function showError(message) {
    // TODO: Fill this in!
}

addToReceipt(); // Call right away to show the default message
