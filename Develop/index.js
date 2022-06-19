// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is the title of your project? (This is required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a project name!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'githubUsername',
        message: 'What is your Github username? (This is required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('You need to enter your Github username!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'what',
        message: 'What is the the purpose of your project? (This is required)',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('You need to enter the purpose of your project!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'why',
        message: 'Why did you build this project? (This is required)',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('You need to enter why you built your project!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'who',
        message: 'Who is this project for built for? (This is required)',
        validate: whoInput => {
            if (whoInput) {
                return true;
            } else {
                console.log('You need to enter who you built this project for!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'installation',
        message: 'Please provide a step-by-step guide for users to install your project (This is required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to enter how to install your project!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'usage',
        message: 'Please provide a guide for how to use your project (This is required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to enter steps for how to use your project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you be using for your project?',
        choices: ['mit', 'apache', 'agpl', 'no license']
    },
    {
        type: 'confirm',
        name: 'allowContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide guidelines for contributing.  (This is required)',
        when: ({ allowContributers }) => {
            if (allowContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Enter your guidelines for contributers!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test your app. (This is required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your use test instructions!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
