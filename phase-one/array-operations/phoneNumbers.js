const checkLength = (phone_number) => {
  if (phone_number.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (array_of_phone_numbers) => {
  return array_of_phone_numbers.filter(checkLength);
}

array = ['1763687364',
'4763687363',
'7867867862',
'aaaaaaaabbbbbbbcccccdddddddd'];

// const validPhoneNumbers = filterLongNumbers(array);
// console.log(validPhoneNumbers);

console.log(filterLongNumbers(array));
console.log(filterLongNumbers(['4763687363', '7867867862']));
console.log(filterLongNumbers([]));