// Write an if/else statement to check if a user is eligible to vote based on their age (consider voting age in your country).
const minimumAge = 18;
const yourAge = prompt("Enter your age:");

if (yourAge >= minimumAge) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote!");
}


// Use a for loop to print all the even numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }


// Create a while loop that iterates as long as a user enters a specific keyword (e.g., "quit").
const keyword = "only";
let input;

while (input !== keyword) {
  input = prompt("Enter a keyword:");
}

console.log("Exiting the loop.");
