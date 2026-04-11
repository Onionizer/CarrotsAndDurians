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
    // this should be &divide;?
    expression = expression + '/';
    // expression += '\u00F7';
    // expression = expression + '&divide;';
    // both work for display, but not for eval.  Prob easier to 
    // oh there's displayedExpression.
    console.log('Divider was pressed. New expression:', expression);
    updateDisplay();
}
function pressTimes() {
    // should this be x?  In the video, it's x.
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
    displayDiv.innerHTML = displayedExpression;
}

/*
   Deletes the last typed character
*/
function backspace() {
    
    if (expression === "") {
        // No op?
        console.log('backspace - expression is empty, so no op');
    } else {
        let lastChar = displayedExpression.at(-1);
        displayedExpression = _removeLastCharacters(displayedExpression, 1);

        if (lastChar === '²') {
            expression = _removeLastCharacters(expression, 3);
        } else if (lastChar === '³') {
            expression = _removeLastCharacters(expression, 3);
        }

        console.log('Removed', lastChar, ', new displayedExpression:', displayedExpression, ', new expression:', expression);
    }   
    updateDisplay();
}

/*
   Clears what's typed
*/
function clearExpression() {
    expression = "";
    displayedExpression = emptyExpression;
    updateDisplay();
    console.log('Cleared expression');
}

/*
   Adds one symbol to the expression
*/
function typeSymbol(symbol) {
    if (expression === emptyExpression) {
        expression = symbol;    // don't keep the nbsp
        displayedExpression = symbol;
    } else {
        expression += symbol;
        displayedExpression += symbol;
    }
    console.log(symbol, 'was pressed. New expression:', expression, 'displayedExpression:', displayedExpression);
    updateDisplay();
}

/*
   Adds one symbol to the expression, but with a different user-visible label
*/
function typeSpecialSymbol(symbol, label) {
    if (expression === emptyExpression) {
        expression = symbol;
        displayedExpression = label;
    } else {
        expression += symbol;
        displayedExpression += label;
    }



    //   Superscript? 
    // handle squared: \u00B2
    //  cubed: \u00B3


    console.log(symbol, 'was pressed. New expression:', expression);
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
    // error mesage
}

addToReceipt(); // Call right away to show the default message
