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

// function pressDivide() {
//     // this should be &divide;?
//     expression = expression + '/';
//     // expression += '\u00F7';
//     // expression = expression + '&divide;';
//     // both work for display, but not for eval.  Prob easier to 
//     // oh there's displayedExpression.
//     console.log('Divider was pressed. New expression:', expression);
//     updateDisplay();
// }
// function pressTimes() {
//     // should this be x?  In the video, it's x.
//     expression = expression + '*';  
//     console.log('Times was pressed. New expression:', expression);
//     updateDisplay();
// }
// function pressMinus() {
//     expression = expression + '-';
//     console.log('Minus was pressed. New expression:', expression);
//     updateDisplay();
// }
// function pressPlus() {
//     expression = expression + '+';
//     console.log('Plus was pressed. New expression:', expression);
//     updateDisplay();
// }


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

        if (lastChar === '²' || lastChar === '³') {
            expression = _removeLastCharacters(expression, 3);
            // TODO: handle % here? 
        } else if (lastChar === '%') {
            expression = _removeLastCharacters(expression, 4);  // remove '/100'
        } else if (lastChar === '‰') {
            expression = _removeLastCharacters(expression, 6);  // remove '/10000' (should this be /1000?)
        } else {
            // all other cases
            expression = _removeLastCharacters(expression, 1);
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

    console.log(symbol, 'was pressed. New expression:', expression, ', new displayExpression:', displayedExpression);
    updateDisplay();
}

/*
   Loads the numeric result of the last computation into the expression
*/
function loadResult() {
    // numeric result, so the result is either a number or null at start
    if (result === null) {
        // result is null -> no op? or load empty? 
        // assume no op for now
        console.log('No result to load; no op');
    } else {
        // numeric so just set both to 
        expression = displayedExpression = result;
        updateDisplay();
        console.log('Loaded result:', result);
    }
}


/*
   Appends the current expression to the "receipt" below the calculator
*/
function addToReceipt() {
    if (result === null) {
        // first time running - just update with text
        let receiptDiv = document.querySelector('#receipt_contents')
        receiptDiv.innerHTML = receipt;
    } else {
        let receiptDiv = document.querySelector('#receipt_contents')
        // maybe p tag?  there's a <br>.   append <br>
        receipt += displayedExpression + ' = ' + result  + '<br>';
        // receipt += expression + ' = ' + eval(expression) + '<br>';   // this causes undefined at the start
        receiptDiv.innerHTML = receipt;
    }


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



}

/*
   Display error message to screen
*/
function showError(message) {
    // TODO: Fill this in!
    // error mesage
}

addToReceipt(); // Call right away to show the default message
