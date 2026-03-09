let randomNumber = 0;
let attempts = 0;

while (randomNumber <= 8) {
  // Math.random() gives a number between 0 and 1.
  // We multiply by 10 and use Math.floor() to get an integer from 0-9.
  randomNumber = Math.floor(Math.random() * 10);
  attempts++; // Increment our attempts counter
  console.log("Attempt " + attempts + ": The random number is " + randomNumber);
}

console.log(
  "Success! We got a number bigger than 8 in " + attempts + " attempts.",
);

//Basic example of a do-while loop
let i = 10;

do {
  console.log("The value of i is: " + i);
  i++;
} while (i < 5);

//Practical example of a do-while loop
/*
let userChoice;

do {
  //In a real app, this prompt would be a part of the UI.
  // The "prompt()" function is a simple browser pop-up.
  userChoice = prompt("Enter 'exit' to quit.");
  console.log("You  entered;" + userChoice);
} while (userChoice !== "exit");

console.log("You have exited the program.");
*/
console.log("userChoice is disabled in the environment.");
