const generateReadMe = (title, description) => {
  return `

<div id="top"></div>
<h1 align="center">${title}</h1>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ul>
</details>
<!-- </br> -->
<!-- Description -->

## Description 
${description} `;
};
module.exports = generateReadMe;
