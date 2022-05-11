// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
 if (license === 'Apache 2.0'){
   return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
 };
 if (license === 'MIT'){
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
};
if (license === 'GNU GPL V3'){
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
};
if (license === 'None'){
  return ''
};
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license === 'None') {
  return ''
 }
else {
  return '* [License](#License)'
};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }
  else {
    return `# License
This is under this license ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

# Description
${data.description}

# Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
${renderLicenseLink(data.license)}
* [Contributors](#contributors)
* [Tests](#Tests)
* [Questions](#Questions)

# Installation
${data.installation}

# Usage
${data.usage}

${renderLicenseSection(data.license)}

# Contributors
${data.contributors}

# Tests
${data.tests}

# Questions
If you have any questions please email me at: 
[Email](mailto:${data.email})
Check out my work on Github: 
[${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
