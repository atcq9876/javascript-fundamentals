const { get } = require('callback-fetch');

class GithubClient {
  constructor() {}

  fetchRepositoryData(repoPath, callbackFunction) {
    let url = 'https://api.github.com/repos/' + repoPath;
    get(url, (response) => {
      let responseObject = JSON.parse(response);
      return callbackFunction(responseObject);
    });
  }
}

module.exports = GithubClient;

// const client = new GithubClient();
// client.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
//   console.log(repositoryData);
// });







// Approach using a second function to handle the received response

// class GithubClient {
//   constructor() {}

//   fetchRepositoryData(repoPath, callbackFunction) {
//     let url = 'https://api.github.com/repos/' + repoPath;
//     get(url, callbackFunction);
//   }
// }

// const handleReceivedResponse = (body) => {
//   return JSON.parse(body);
// };

// const handleReceivedResponse = (body) => {
//   return JSON.parse(body);
// };

// client.fetchRepositoryData('sinatra/sinatra', handleReceivedResponse);