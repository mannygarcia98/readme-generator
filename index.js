const inquirer = require("inquirer");
const writeFile = require("./utils/generate-readme");
const generateReadMe = require("./src/README-template.js");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter a title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description.",
    },
    {
      type: "input",
      name: "installationInstructions",
      message: "Enter instructions for how to install your application.",
    },
    {
      type: "input",
      name: "usageDescription",
      message: "Enter a paragraph to add to the 'Usage' section.",
    },
    {
      type: "input",
      name: "contributingInstructions",
      message: "Explain how others can contribute to your project.",
    },
    {
      type: "input",
      name: "testExample",
      message: "Enter test instructions.",
    },
    {
      type: "list",
      name: "license",
      message: "What is your project licensed under?",
      choices: ["MIT", "GPLv2", "GPLv3", "Apache"],
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Enter your Github username.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address.",
    },
  ]);
};

promptUser()
  //inserts answers to the prompts into the README template
  .then((readmeData) => {
    return generateReadMe(readmeData);
  })
  //creates the readme file
  .then((markdown) => {
    return writeFile(markdown);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
