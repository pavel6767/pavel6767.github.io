// smooth scrolling with JQuery
$("#nav-bar a").click(function() {
  var id = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: 0,
      // scrollTop: $(id).offset().top - $("#nav-bar").height(),
    },
    500
  );
});

const navBar = document.getElementById("nav-bar");

window.addEventListener("scroll", function(evt) {
  console.log("scrolling");
  console.log(window.pageYOffset);
  if (window.pageYOffset > 80) {
    navBar.style.opacity = "1";
  } else {
    navBar.style.opacity = "0";
  }
});

// single project
// {
//   name:,
//   siteUrl: ,
//   videoUrl: ,
//   repoUrl: ,
//   description: ,
//   tools: []
// },

const projectList = [
  {
    name: "JetSweat",
    siteUrl: "https://jetsweatfitness.com/",
    description:
      "Exclusive access to stream unlimited workout videos from leading boutique studios, wherever, whenever.",
    tools: ["React", "Redux", "CSS"],
  },
  {
    name: "Energy Healing Online",
    siteUrl: "http://www.energy-healing-online.com/",
    description:
      "Application that guides users through emotional and psychological healing.",
    tools: ["WordPress", "Google Graphs", "PHP", "Javascript", "CSS"],
  },
  {
    name: "Fullstack Demo App",
    siteUrl: "https://nerds-demo.herokuapp.com/",
    repoUrl: "https://github.com/pavel6767/fullstack-demo-campus-students",
    description:
      "A Fullstack demo application, can create students, that can belong to campuses.",
    tools: ["Node", "Express", "Sequelize", "React", "Redux", "Heroku"],
  },
  {
    name: "Save for Later",
    videoUrl: "https://www.youtube.com/watch?v=fmU0xobQLxc",
    repoUrl: "https://github.com/the-keyboard-shredders",
    description:
      "An application that allows users to save articles through a google chrome extension and access them on a mobile application",
    tools: ["Node", "mongoDB", "GraphQL", "React Native", "Chrome Extension"],
  },
  {
    name: "Tetris clone",
    siteUrl: "http://stackathon1810.herokuapp.com/",
    videoUrl: "https://www.youtube.com/watch?v=hohA2UQJFnY",
    repoUrl: "https://github.com/catmaze/stackathon1810",
    description:
      "Tetris clone using vanilla JS. Deployed on heroku and Electron as a desktop app.",
    tools: ["Javascript", "Electron", "Heroku"],
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

  getTitle() {
    let title = document.createElement("h2");
    if (this.siteUrl) {
      let titleLink = document.createElement("a");
      titleLink.target = "blank";
      titleLink.href = this.siteUrl;
      titleLink.textContent = this.name;
      title.appendChild(titleLink);
    } else {
      title.textContent = this.name;
      title.classList.add("black-font");
    }
    return title;
  }

  getVideo() {
    let videoUrlContainer = document.createElement("div");
    let videoUrl = document.createElement("a");
    videoUrl.target = "blank";
    videoUrl.href = this.videoUrl;
    videoUrl.textContent = "Demo Video";

    videoUrlContainer.appendChild(videoUrl);
    return videoUrlContainer;
  }

  getRepo() {
    let repoUrlContainer = document.createElement("div");
    if (this.repoUrl) {
      let repoUrl = document.createElement("a");
      repoUrl.target = "blank";
      repoUrl.href = this.repoUrl;
      repoUrl.textContent = "GitHub";
      repoUrlContainer.appendChild(repoUrl);
    } else {
      repoUrlContainer.innerHTML = "[Private Repository]";
      repoUrlContainer.classList.add("black-font");
    }
    return repoUrlContainer;
  }

  getTools() {
    let toolsContainer = document.createElement("div");
    toolsContainer.classList.add("icon-list");
    for (let i = 0; i < this.tools.length; i++) {
      let span = document.createElement("span");
      if (classNameConfig.hasOwnProperty(this.tools[i])) {
        span.classList.add(classNameConfig[this.tools[i]]);
      } else {
        span.classList.add("purple");
      }

      span.textContent = this.tools[i];
      toolsContainer.appendChild(span);
    }
    return toolsContainer;
  }

  getTextContainer() {
    let textContainer = document.createElement("div");
    textContainer.classList.add("project-text");

    // // video url
    if (this.videoUrl) {
      let videoUrlContainer = this.getVideo();
      textContainer.appendChild(videoUrlContainer);
    }

    // // repo url
    let repoUrlContainer = this.getRepo();
    textContainer.appendChild(repoUrlContainer);

    // // description
    let description = document.createElement("p");
    description.textContent = this.description;
    textContainer.appendChild(description);

    return textContainer;
  }

  result(target) {
    let container = document.createElement("div");

    container.classList.add("project-instance");

    // title
    let title = this.getTitle();
    container.appendChild(title);

    // text Container
    let textContainer = this.getTextContainer();
    container.appendChild(textContainer);

    // tools
    let toolsContainer = this.getTools();
    container.appendChild(toolsContainer);

    target.appendChild(container);
  }
}

let projectsContainer = document.getElementById("projects-grid");

projectList.forEach((project, inx, self) => {
  let instance = new Project(project);
  instance.result(projectsContainer);
});
