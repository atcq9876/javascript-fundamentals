const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// // Approach one:
// const generateMessage = (name) => {
//   return `Hi ${name}! 50% off our best candies for you today!`;
// }

// const generateMessages = (nameList) => {
//   console.log(nameList.map(generateMessage));
// }

// generateMessages(names);


// Approach two:

const generateMessages = (nameList) => {
  return nameList.map((name) => {
    return `Hi ${name}! 50% off our best candies for you today!`;
  })
}

console.log(generateMessages(names));