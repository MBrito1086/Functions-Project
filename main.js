// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
    // Your answer here
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1,num2,num3){
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  }
    // Your answer here
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === 'a') {
    return true;}

  if (char === 'e') {
    return true;}

  if (char === 'i') {
    return true;}

  if (char === 'o') {
    return true;}

  if (char === 'u') {
    return true;}

  else {
    return false;
  }
}
    // Your answer here

console.log(isVowel('p'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(num3,num4) {
  return num3 + num4;
}

console.log(sum(20,40));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(num5,num6,num7) {
  return (num5 + num6 + num7) / 3;
}

console.log(avg(20,25,15));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

let name = "Miguel";

function getLength() {
  return name.length;
}

console.log(getLength());

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num6,num7) {
  if (num7 > num6) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(3,8));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name) {
  return "Hello, " + name;
}

console.log(greet('Miguel!'));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(noun1,noun2,adj,adv) {
  return "I love " + noun1 + " so much, " + noun2 + " is okay, it's just " + noun1 + " is " + adj + " which is " + adv + " so I prefer it."
}

console.log(madlib("peanut butter", "jelly", "creamy", "better"))






//
