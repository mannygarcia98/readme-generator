const generateReadMe = (readmeData) => {
  console.log(readmeData);
  const { title, description, installationInstructions, usageDescription, contributingInstructions, testExample, license, githubUsername, email } = readmeData;
  return `
  <div id="top"></div>

  ![license-badge]

  <h1 align="center">${title}</h1>
  
  <!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ul>
      <li><a href="#description">Description</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#tests">Tests</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#questions">Questions</a></li>
    </ul>
  </details>

  </br>
  
  ## Description
  ${description}
  
  ## Installation
  ${installationInstructions}

  ## Usage
  ${usageDescription}

  ## Contributing
  ${contributingInstructions}

  ## Tests
  ${testExample}

  ## License
  Licensed under the ${license} License.
  
  ## Questions
  Email: [${email}](mailto:${email})
  
  Github: [https://github.com/${githubUsername}](https://github.com/${githubUsername})
  
  <!-- MARKDOWN LINKS & IMAGES -->
  [license-badge]: https://img.shields.io/badge/LICENSE-${license}-brightgreen?style=plastic
`;
};
module.exports = generateReadMe;
