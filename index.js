const writeFile = require("./utils/generate-readme");
const inquirer = require("inquirer");
const fs = require("fs");
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

// promptUser().then((answers) => console.log(answers));

// promptUser().then((readmeData) => {
//   const markdown = generateReadMe(readmeData);

//   fs.writeFile("./dist/README.md", markdown, (err) => {
//     if (err) throw new Error(err);

//     console.log("README complete! Check out README.md in the 'dist' folder to view your file.");
//   });
// });

promptUser()
  .then((readmeData) => {
    return generateReadMe(readmeData);
  })
  .then((markdown) => {
    return writeFile(markdown);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });
