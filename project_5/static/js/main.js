// Your code will go into this file to complete the adventure game!
// See "TODO" for hints if you are stuck.


// BEHAVIOR
// You must have 4 locations: castle, town, forest, and house. Town connects to all (both ways), and forest has a "back door" to castle.
// The solution to your game must be as follows:
//  Talk to the farmer 3x. The third time he gives in and agrees to learn JavaScript

// 
// HINTS
// (These hints are also in the main.js file)

// Castle object is complete. You need to complete "town" (almost done), "house", and "forest"
//  The forest scene needs new properties and use of setupScene
// Farmer is complete. You need to complete "queen" and "knight".
// You will need to make "afterTalking" methods for queen and knight (farmer's is done already)
// Most doors are incomplete - you will need to "connect" the scenes to have a way to and from the forest, as well as two ways back into the castle


function setupGame() {

    let castleScene = { };
    castleScene.imageSource = './static/images/backdrops/Castle.png';
    castleScene.title = 'A Huge Stone Castle';
    setupScene(castleScene);

    // DONE - Castle is complete. Complete "town" (almost done), "house", and "forest"
    let beachTownScene = { };
    beachTownScene.imageSource = './static/images/backdrops/BeachTown.png';
    beachTownScene.title = 'A Village by the Beach';
    setupScene(beachTownScene);

    // TODO - The house scene needs new properties...
    let houseScene = { };
    houseScene.imageSource = './static/images/backdrops/House.png';
    houseScene.title = 'A Cosy Cottage in the Village';
    setupScene(houseScene);

    // TODO - The forest scene needs new properties and setupScene...
    let forestScene = { };
    forestScene.imageSource = './static/images/backdrops/Forest.png';
    forestScene.title = 'A Dark and Gloomy Forest';
    setupScene(forestScene);

    // Now, add in our characters
    // TODO - Farmer is complete. Complete "queen" and "knight".
    let farmer = {
        name: 'The Farmer',
        imageSource: './static/images/people/Farmer.png',
        dialog1: 'Learn JavaScript? Only if you ask me enough...',
        dialog2: 'Okay, okay! I am studying JavaScript now...',
        currentDialog: 'dialog1',
    };

    let queen = {
        name: 'The Queen',
        imageSource: './static/images/people/Queen.png',
        dialog1: 'Ask The Knight. If The Knight learns, I too shall learn.',        // Hint - Queen dialog 1: 'Ask The Knight. If The Knight learns, I too shall learn.',
        dialog2: 'The Knight is starting? I guess is JS for me! (YOU WIN!)',        // Hint - Queen dialog 2: 'The Knight is starting? I guess is JS for me! (YOU WIN!)',
        currentDialog: 'dialog1',
    };

    let knight = {
        name: 'The Knight',
        imageSource: './static/images/people/Knight.png',
        dialog1: 'I only will learn JavaScript if you get The Farmer to first!',
        dialog2: 'The Farmer is learning? Time to play catch up!',
        currentDialog: 'dialog1',
    };

    // TODO - Create "afterTalking" methods for all three below
    let askCount = 0;
    farmer.afterTalking = function () {
        askCount++;
        if (askCount > 1) { // asked 2 times, 3rd will succeed
            // change "currentDialog" to be "dialog2"
            farmer.currentDialog = 'dialog2';
        }
    };
    // Note: To understand why this changes dialog, see around line 93 of adventureGameEngine.js

    // Talk to the knight - the second time he gives in and will agree to learn JavaScript
    // do I need to check farmer's current dialog?
    let knightAskCount = 0;
    knight.afterTalking = function () {
        if (farmer.currentDialog === 'dialog2') {
            knightAskCount++;
        }
        if (knightAskCount > 0) {
            knight.currentDialog = 'dialog2';
        }
    };

    //  After, talk to the queen - the second time she gives in and will agree to learn JavaScript, and then say "YOU WIN!"
    //  If you talk in the wrong order, the character will only repeat the first line
    let queenAskCount = 0;
    queen.afterTalking = function () { 
        if (knight.currentDialog === 'dialog2') {
            queenAskCount++;
        }
        if (queenAskCount > 0) {
            queen.currentDialog = 'dialog2';
        }
    };

    
    setupPerson(farmer);
    houseScene.addPerson(farmer);
    // DONE -- Call "setupPerson" and "addPerson" for queen (castle) and knight (forest)
    setupPerson(queen);
    castleScene.addPerson(queen);
    setupPerson(knight);
    forestScene.addPerson(knight);

    // Now, set-up our "web" of connections:
    castleScene.addDoor('Exit the castle to nearby beach town', beachTownScene);
    beachTownScene.addDoor('Enter house', houseScene);
    houseScene.addDoor('Exit house', beachTownScene);

    // DONE -- Add a way to enter the forest and back into the castle
    beachTownScene.addDoor('Enter castle', castleScene);
    beachTownScene.addDoor('Wander off into the forest', forestScene);

    // DONE -- Add TWO doors to exit the forest
    forestScene.addDoor('Enter the castle back door',  castleScene);
    forestScene.addDoor('Walk back to the beach town', beachTownScene);

    return castleScene;
}

function startGame() {
    // Start the game by being at the castle scene
    let castleScene = setupGame();
    castleScene.showScene('#game');
    castleScene.showDoors('#game');
    castleScene.showAllPeople('#game');
}

startGame();
