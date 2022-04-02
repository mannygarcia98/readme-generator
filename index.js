const fs = require("fs");
const generateReadMe = require("./src/README-template.js");
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [title, description] = profileDataArgs;

fs.writeFile("README_1.md", generateReadMe(title, description), (err) => {
  if (err) throw err;

  console.log("README complete! Check out README_1.html to see the output.");
});
