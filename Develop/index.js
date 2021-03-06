// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is you What is your Email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your project name?',
        name: 'project',
      },
      {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
      },
      {
        type: 'list',
        message: ' What kind of license should your project have?',
        name: 'license',
        choices: ["Apache", "Boost", "BSD", "BSD-2", "Eclispe", "GNU", "ISC", "MIT","None"]
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
function writeToFile(fileName, data) {
    let template = markdown(data)
    fs.writeFile(fileName, template, (error) =>
  error ? console.error(error) : console.log('Success!')
)}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile("README.md", data);
    });
}

// Function call to initialize app
init();
