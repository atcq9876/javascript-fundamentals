const { get } = require('callback-fetch');

const fetchRepositoryInfo = (repoPath, callbackFunction) => {
  let url = 'https://api.github.com/repos/' + repoPath;
  get(url, (response) => {
    let responseObject = JSON.parse(response);
    return callbackFunction(responseObject);
  })
};

module.exports = fetchRepositoryInfo;

// fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
//   console.log(receivedResponse);
// });