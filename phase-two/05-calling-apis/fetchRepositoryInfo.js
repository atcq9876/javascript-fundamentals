const { get } = require('callback-fetch');

const fetchRepositoryInfo = (repoPath, callbackFunction) => {
  url = 'https://api.github.com/repos/' + repoPath;
  (get(url, callbackFunction));
};

module.exports = fetchRepositoryInfo;

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(JSON.parse(receivedResponse));
});