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

class Github {
  constructor(client) {
    this.client = client;
  }

  fetch(repoPath) {
    this.client.fetchRepositoryData(repoPath, (repositoryData) => {
      this.repoData = repositoryData;
    });
  }

  getRepoData() {
    setTimeout(() => { return this.repoData; }, 500);
    // return this.repoData // immediate return for testing
  }
}

module.exports = Github;

const client = new GithubClient();

// We inject the instance of `GithubClient`:
const github = new Github(client);

// This method will delegate to `GithubClient.fetchRepositoryData()`
github.fetch('sinatra/sinatra');

// And after a few moments, this should return a JS object with the repo information.
github.getRepoData();