const getNumberSign = (num) => {
  if (num < 0) {
    console.log('negative')
  } else if (num === 0) {
    console.log('zero')
  } else {
    console.log('positive')
  }
};

getNumberSign(-1);
getNumberSign(0);
getNumberSign(1);