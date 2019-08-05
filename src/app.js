// smooth scrolling with JQuery
$("#nav-bar a").click(function() {
  var id = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - $("#nav-bar").height(),
    },
    500
  );
});

const projectList = [
  {
    name: "JetSweat",
    // siteUrl: "https://jetsweatfitness.com/",
    description:
      "Exclusive access to stream unlimited workout videos from leading boutique studios, wherever, whenever.",
    tools: ["React", "Redux", "CSS"],
  },
];

const classNameConfig = {
  React: "purple",
  Redux: "purple",
  CSS: "purple",
  Javascript: "purple",
  "React-native": "purple",
  WordPress: "black",
  PHP: "purple",
  "Google Graphs": "db",
  Sequelize: "db",
  mongoDB: "db",
  GraphQL: "db",
  Node: "dark-blue",
  Express: "dark-blue",
  Heroku: "heroku",
  Electron: "electron",
};

class Project {
  constructor(project) {
    this.name = project.name;
    this.siteUrl = project.siteUrl;
    this.videoUrl = project.videoUrl;
    this.repoUrl = project.repoUrl;
    this.description = project.description;
    this.tools = project.tools;
  }

  result(target) {
    let container = document.createElement("div");

    // title
    let title = document.createElement("h2");
    if (!this.siteUrl) {
      title.textContent = this.name;
    } else {
      let titleLink = document.createElement("a");
      titleLink.target = "blank";
      titleLink.href = this.siteUrl;
      titleLink.textContent = this.name;
      title.appendChild(titleLink);
    }
    container.appendChild(title);

    // text Container
    let textContainer = document.createElement("div");
    textContainer.classList.add("text");

    // video url
    if (this.siteUrl) {
      let videoUrlContainer = document.createElement("div");
      let videoUrl = document.createElement("a");
      videoUrl.target = "blank";
      videoUrl.href = this.videoUrl;
      videoUrl.textContent = "Demo Video";

      videoUrlContainer.appendChild(videoUrl);
      textContainer.appendChild(videoUrlContainer);
    }

    // repo url
    let repoUrlContainer = document.createElement("div");
    if (this.repoUrl) {
      let repoUrl = document.createElement("a");
      repoUrl.target = "blank";
      repoUrl.href = this.repoUrl;
      repoUrl.textContent = "GitHub";
      repoUrlContainer.appendChild(repoUrl);
    } else {
      repoUrlContainer.innerHTML = "[Private Repository]";
    }
    textContainer.appendChild(repoUrlContainer);

    // description
    let description = document.createElement("p");
    description.textContent = this.description;
    textContainer.appendChild(description);
    container.appendChild(textContainer);

    // tools
    let toolsContainer = document.createElement("div");
    toolsContainer.classList.add("icon-list");
    for (let i = 0; i < this.tools.length; i++) {
      let span = document.createElement("span");
      span.classList.add(classNameConfig[this.tools[i]]);
      (span.textContent = this.tools[i]), "<br><br>";
      toolsContainer.appendChild(span);
    }
    container.appendChild(toolsContainer);

    target.appendChild(container);
  }
}

let projectsContainer = document.getElementById("projects");

projectList.forEach(project => {
  let instance = new Project(project);
  instance.result(projectsContainer);
});
