// More API
"use strict";

// 'sloppy mode';

class GitHubApi {
  constructor(options = {}) {
    this.options = {
      container: "#anyElement",
    };
    Object.assign(this.options, options);
    this.apiUrl = "https://api.github.com";
    this.userNameEndpoint = "/users/:username/repos";
    // start elements obj
    this.elements = {};
    // start widget init
    this.init();
  }
  init() {
    this.elements.container = document.querySelector(this.options.container);
    this.elements.container.innerHTML = this.parsedInitialTemplate();
    // getting all the elements
    this.elements.form = this.elements.container.querySelector(".form");
    this.elements.input = this.elements.container.querySelector(".inputText");
    this.elements.list = this.elements.container.querySelector(".repositories");
    // events
    this.registerEvents();
  }

  registerEvents() {
    this.elements.form.addEventListener("submit", (e) => {
      e.preventDefault();
      // getting the value from input field
      const username = this.elements.input.value.trim();
      this.getRepositories(username, (repositories) => {
        repositories = this.filterRepositoryResults(repositories);
        const markup = this.createListTemplate(repositories);
        this.elements.list.innerHTML = markup;
      });
    });
  }

  getRepositories(username, callback) {
    const url = `${this.apiUrl}${this.userNameEndpoint}`.replace(
      ":username",
      encodeURIComponent(username)
    );
    console.log(url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        callback(data);
      });
  }
  filterRepositoryResults(repositoryData) {
    const repositories = repositoryData.map((repo) => {
      return {
        description: repo.description,
        name: repo.name,
        url: repo.html_url,
        createdAt: repo.created_at,
      };
    });
    return repositories;
  }
  parsedInitialTemplate() {
    return `
    <form class="form">
    <label for="username">Name</label>
    <input type="text" class="inputText" placeholder="Github username" required>
    <input type="submit" class="btn" value="Submit"/>
  </form>
  <div class="repositories"></div>
    `;
  }
  createListTemplate(repositories) {
    return ` 
  <div>
  ${repositories.map((repository) => this.listTemplate(repository)).join("")}
</div>
  `;
  }
  listTemplate(repository) {
    return `
  <a href="${repository.url}" target="_blank" class="widget-box">
      <h4>${repository.name}</h4>
      <small>${repository.createdAt}</small>
    <p>
      ${repository.description}
    </p>
  </a>
`;
  }
}

const widget = new GitHubApi({ container: ".result" });
//const widgetTwo = new GitHubApi({ container: ".number2" });
