// 1. Write a program that takes two integers as input and 
//prints their sum using a for loop.

const num = (74);
let sum = 0;                                         // looping from i = 1 to number
for (let x = 1; x <= num; x++) {                 // in each iteration, i is increased by 1
    sum += x;
}
console.log(sum);

  

// 2. Write a program that prints all the even numbers from 1 to
// 100 using a for loop statement

for (let x=2; x <= 100;x+=2){
    console.log(x);
}



// 3. Write a program that takes a string as input and prints "Long" if the length of the string
// is greater than 10, "Medium" if it is between 5 and 10, and "Short" if it is less than 5.

let string =("Clarah");

if (string.length > 10) {
  console.log("Long");
} else if (string.length >= 5) {
  console.log("Medium");
} else {
  console.log("Short");
}


// 4. Write a program that takes a number as input and prints "Positive" if the number is
// greater than 0, "Negative" if it is less than 0, and "Zero" if it is equal to 0.

let nums =(0);

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}


//                                SOME OF THE TAKEAWAY KEYS INCLUDE
// 1. The if-else statement is used to execute different blocks of code based on a specified condition.

// 2. The if statement is evaluated first, and if its condition is true, the code inside its block is executed.
                               
// 3. The for loop is used for iterating over arrays or executing a block of code a specific number of times.
                               
