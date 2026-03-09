// Store the result of each dice roll, starting at 0 so the loop runs at least once.
let diceRoll = 0;
// Track how many times we have rolled the dice.
let rollCount = 0;

// Keep rolling the dice until we get a 6.
while (diceRoll !== 6) {
  // Generate a random number between 1 and 6 to simulate a dice roll.
  diceRoll = Math.floor(Math.random() * 6) + 1;
  // Increment the roll counter
  rollCount++;
  // Log the result of this roll to the console.
  console.log("Roll " + rollCount + ": You rolled a " + diceRoll);
}

// The loop has ended, which means we rolled a 6. Log the total number of rolls it took.
console.log("It took " + rollCount + " rolls to get a 6!");
