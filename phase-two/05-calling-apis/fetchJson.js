const { get } = require('callback-fetch');

const fetchJson = (url, callbackFunction) => {
  get(url, callbackFunction);
};

module.exports = fetchJson;