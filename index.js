// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./Develop/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project name?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your project description'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide intallation instructions'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide information for usage of this project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What Licenses does this project have?',
    choices: ['Apache 2.0', 'MIT', 'GNU GPL V3', 'None']
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Please list contributors'
  }, 
  {
      type: 'input',
      name: 'tests',
      message: 'Please provide project tests:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'what is your github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email?'
  },
];


// TODO: Create a function to write README file
function writeToFile(template) {
fs.writeFile('README.md', template, function(err){
    if (err) {
        throw err;
   };

   console.log("New README file created with success!");
 });
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt (questions)
  .then(answers => {
    console.log(answers)
    var readMeTemplate = generatePage (answers);
    console.log(readMeTemplate);
    writeToFile(readMeTemplate);
  })
}

// Function call to initialize app
init();
