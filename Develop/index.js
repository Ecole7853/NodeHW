// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Github',
      },
      {
        type: 'input',
        message: 'What is you What is your Email address?',
        name: 'Email',
      },
      {
        type: 'input',
        message: 'What is your project name?',
        name: 'Project',
      },
      {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: ' What kind of license should your project have?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usingrepo',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributingrepo',
      }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then(data);
    {

    }
}

// Function call to initialize app
init();
