"use strict";

// Date object
const today = new Date();

// logging the whole date object
console.log(`Todays date is: ${today}`);

// 1. Log Month Day Year
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(months[today.getMonth()], today.getDate(), today.getFullYear());

// 2. Log the Day of the week: Use the array + date object together

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(`Today is: ${dayNames[today.getDay()]}`);

// 3. Update the variable to it gives tomorrows date and log it

let tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);

console.log(tomorrow);

// Math Object

const piValue = Math.PI;

console.log(`The value of pi: ${piValue}`);

// 1. Get the square root of 25

const squareRoot = Math.sqrt(25);

console.log(`Square root of 25 is: ${squareRoot}`);

// 2. Round 3.75

const roundedValue = Math.round(3.75);

console.log(`3.75 rounded is: ${roundedValue}`);

// 3. Round 22.85 down
const roundedDown = Math.floor(22.85);

console.log(roundedDown);

// 4. Find the largest number between 5, 12, and 8

const largestNumber = Math.max(5, 12, 8);

console.log(largestNumber);

// 5. Generate a random number between 0 and 1

const randomNumberSmall = Math.random();

console.log(randomNumberSmall);

// Bonus. Generate a random number between 1 and 100

const randomNumberBig = Math.round(Math.random() * 100);

console.log(randomNumberBig);
