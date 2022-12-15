// Exercise 1. Edit this function
const sayHello = () => {
  console.log("Hello!");
};

const doubleCall = (callback) => {
  callback();
  callback();
};

doubleCall(sayHello);



// Exercise 2. Edit this function
const obnoxiousFn = (callback) => {
  console.log('EXECUTING CALLBACK!');
  return callback();
};

const four = obnoxiousFn(() => {
  return 2 + 2;
}); // Should print 'EXECUTING CALLBACK!' and return 4

console.log(four);



// Exercise 3. Edit this function
const currentTime = (callback) => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  callback(currentTime);
};

currentTime((time) => {
  console.log(`The time is ${time}`);
}); // Should output the current time in the format: "The time is 16:48:07".



// Bonus Exercise. Edit this function
const myMap = (array, callback) => {
  let newArray = [];
  array.forEach((element) => {
    newArray.push(callback(element));
  });
  return newArray;
};

// Example behaviour
const lettersArray = ["a", "b", "c"];
const numbersArray = [1, 2, 3, 5];

const toUpperCase = (str) => {
  return str.toUpperCase();
};
const double = (num) => {
  return num * 2;
};

const uppercaseArray = myMap(lettersArray, toUpperCase); // uppercaseArray should be ['A', 'B', 'C']
const doubledArray = myMap(numbersArray, double);   // doubledArray should be [2, 4, 6, 10]

console.log(uppercaseArray);
console.log(doubledArray);



module.exports = {
  doubleCall,
  obnoxiousFn,
  currentTime,
  myMap,
};