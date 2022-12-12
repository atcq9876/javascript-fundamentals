const printHello = () => {
  console.log('Hello!')
}

const executeAfterDelay = (seconds, callbackFunction) => {
  setTimeout(callbackFunction, (seconds * 1000));
}

executeAfterDelay(5, printHello);