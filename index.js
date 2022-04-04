const inquirer = require("inquirer");
// const fs = require("fs");
// const generateReadMe = require("./src/README-template.js");
// // const profileDataArgs = process.argv.slice(2, process.argv.length);
// const markdown = generateReadMe(title, description);
// // const [title, description] = profileDataArgs;

// fs.writeFile("README_1.md", markdown, (err) => {
//   if (err) throw err;

//   console.log("README complete! Check out README_1.html to see the output.");
// });
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
promptUser().then((answers) => console.log(answers));
