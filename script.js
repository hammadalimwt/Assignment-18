//for Loop (1 to 5;
// Teacher prints roll numbers

console.log("For Loops: Roll numbers from 1 to 5");
for (let i = 1;
    i <= 5;
    i++) {
    console.log(i);
}

//while Loop (1 to 3)
// Shop selling items
console.log("While Loop: Item numbers from 1 to 3");
let item = 1;
while (item <= 3) {
    console.log("Item number: " + item);
    item++;
}


// DDo-while Loop 
// User must enter PIN at least once

let correctPIN = "1234";
let userPIN;

do {
    userPIN = prompt("Enter your PIN:");
} while (userPIN !== correctPIN);

alert("PIN is correct! Access granted.");

//User Input with Loop
// Print Hello many times

let times = prompt("How many times do you want to print Hello?");
console.log("Printing Hello:");
for (let i = 1;
    i <= times; 
    i++) {
    console.log("Hello");
}

// Bonus Section (Optional
// Print numbers from 10 to 1
console.log("Numbers from 10 to 1");

for (let i = 10;
    i >= 1; 
    i--) {
    console.log(i);
}

// Print even numbers from 1 to 10
console.log("Even numbers from 1 to 10");

for (let i = 1;
     i <= 10; 
     i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
