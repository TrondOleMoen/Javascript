const requiredAge = 18;
let userAge = 20;

const isOldEnough = userAge >= requiredAge;
console.log("Is the user old enough? " + isOldEnough);

const winningScore = 100;
let playerScore = 99;

const hasWonGame = playerScore === winningScore;
console.log("Has won the game:", hasWonGame);

//Challenge
let value1 = 5;
let value2 = "5";

console.log("Loose equality (==): " + (value1 == value2)); // true
console.log("Strict equality (===): " + (value1 === value2)); // false
// Loose equality (==) converts both values to the same type before comparing, so 5 == "5" is true.
// Strict equality (===) checks both value and type, so 5 === "5" is false because number !== string.
