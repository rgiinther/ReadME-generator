// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./Develop/generateMarkdown.js');
// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project name?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter your project description'
      },
      {
        type: 'input',
        name: 'Table of Contents',
        message: 'Provide some information for the Table of Contents'
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Please provide intallation instructions'
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Please provide information for usage of this project'
      },
      {
        type: 'input',
        name: 'License',
        message: 'What Licenses does this project have?'
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Please list contributors'
      }, 
      {
          type: 'input',
          name: 'Tests',
          message: 'Please provide project tests:'
      },
      {
          type: 'input',
          name: 'Questions',
          message: 'Type any questions you have'
      }
    ])
inquirer.promptUser(questions)
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers))

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
      err ? console.log(err) : console.log('Readme successfully written!')
    );
 

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
//fs.writeFile("README.md", generate(fileName, data), function(err){
    //if (err) {
        //throw err;
   // };

   // console.log("New README file created with success!");
 // });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
