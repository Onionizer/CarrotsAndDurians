/*
    This part of the lab is intended to give you more practice with using Callbacks
    "simuread" is a function written to simulate reading from a file, but could
     stand in for any sort of asynchronous code.

    Note we here are NOT using async/await, but better understanding how it works.
    Note that even with async/await, the behavior is mostly the same as below, it
    simply "detangles" your code by "blocking" at that spot (but allowing other code
     to continue, potentially changing variables, etc).

    Optional: To run this file from a terminal, use:
        node async_challenge.js
*/



console.log('Challenge 2 --------------------------');
/*
  Challenge 2:
  Predict what will happen when you run this file. What order will the
  console.log statements occur, and why?

  Run it, and see if you are right.
*/
console.log('C2 - Before challenge');
simuread('challenge2.txt', (err, data) => {
  // Got data back
  console.log('C2 - Finished reading challenge2.txt');
  console.log('C2 - Read: ', data);
});
console.log('C2 - After challenge');


console.log('Challenge 3 --------------------------');
/*
  Challenge 3: Uncomment and modify the following code to print out part1
  followed by part2, consistently every time this is run
*/

/*
simuread('challenge3-part1.txt', (err, data) => {
  console.log('C3 - Read: ', data);
});
simuread('challenge3-part2.txt', (err, data) => {
  console.log('C3 - Read: ', data);
});
*/


/*
  Challenge 4: Same as above, but your ownly goal is to get C4-LAST to always
  print out after FIRST1 and FIRST2. FIRST1 and FIRST2 can be in any order.

  Hint: Use a "callback counter", and only when it gets to 2, then do the
  C4-LAST.
*/

/*
simuread('C4-FIRST1.txt', (err, data) => {
});
simuread('C4-FIRST2.txt', (err, data) => {
});
simuread('C4-LAST.txt', (err, data) => {
});
*/


/*
  Challenge 5: Time for the dreaded for-loop! Your task is to call
  checkChallenge5Data only after you have looped through all the files.
*/
const filenames = ['C5-a', 'C5-b', 'C5-c', 'C5-d', 'C5-e', 'C5-f'];
const fileData = {};
for (const filename of filenames) {
  simuread(filename, (err, data) => {
    // Need to do something....
    fileData[filename] = data;
  });
}

checkChallenge5Data();


/*
  Challenge 6: Now, you must "simuread" from all these files, with one catch:
  you must always read from a "1" before you read from its "2". However, you
  should be reading from a1, b1, c1 simultaneously.

  When you are done, print out the -->Challenge 6<-- at the end
*/
const c6filenames = ['C6-a1', 'C6-a2', 'C6-b1', 'C6-b2', 'C6-c1', 'C6-c2'];

console.log('-->Challenge 6<--');










/*
  PAY NO ATTENTION TO EVERYTHING BELOW HERE

  This is function intended to simulate reading from a file.  It uses
  JavaScript's setTimeout to cause something to take a little bit of time.
*/
function simuread(file, callback) {
  const data = `[[[[${file} contents]]]]`;
  const err = null;
  setTimeout(() => {
    callback(err, data);
  }, Math.random() * 2000);
}


function checkChallenge5Data () {
  console.log('Challenge 5 is over:');
  if ((new Set(Object.keys(fileData))).size === 6 &&
        (new Set(Object.values(fileData))).size === 6) {
    // All keys and values are distinct
    console.log('Success 5: Success, populated');
  } else {
    console.log('Challenge 5: Failure, not populated');
  }
}
