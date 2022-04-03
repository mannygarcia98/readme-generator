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

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of your project.",
    },
  ])
  .then((answers) => console.log(answers));
