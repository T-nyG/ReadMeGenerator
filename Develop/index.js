const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your project name?",
      name: "projectname"
    },
    {
      type: "input",
      message: "Enter a description of your project",
      name: "description"
    },
    {
      type: "input",
      message: "What are the installation procedures?",
      name: "installation"
    },
    {
      type: "input",
      message: "Enter a description of how to use the app",
      name: "usage"
    },
    {
      type: "input",
      message: "Which license are you using?",
      name: "license"
    },
    {
      type: "input",
      message: "Who is contributing to the project?",
      name: "contributing"
    },
    {
      type: "input",
      message: "What tests are you running?",
      name: "tests"
    },
    {
      type: "input",
      message: "Enter questions you would like to be answered",
      name: "questions"
    }
  ])
  .then(function(response) {
    writeFile("newREADME.md", generateMarkdown({...response}));
  });

  function writeFile(filename, data) {
      return fs.writeFile(filename, data, function(err) {
          if (err) {
              return console.log(err);
          }
          console.log("success!");
      })
  }