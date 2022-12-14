const { get } = require('callback-fetch');

const fetchJson = (url, callbackFunction) => {
  get(url, callbackFunction);
};

module.exports = fetchJson;

fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
});