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

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

# Description
${data.description}

# Table of Contents

# Installation
${data.installation}

# Usage
${data.usage}

#License
${data.license}

#Contributors
${data.contributors}

# Tests
${data.tests}

# Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
