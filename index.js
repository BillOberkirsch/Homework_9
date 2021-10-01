
// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const questions=
[
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'BillOberkirsch',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'Homework_9',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of our project?",
        name: 'title',
        default: 'Any title will do',
        validate: function(answer)
        {
            if(answer.length < 1)
            {
                return console.log("A valid title is needed.");
            }
            return true;
        }
    }

];

async function init(){
    
    const userResponse = await inquirer.prompt(questions);
    console.log('Your Response: ', userResponse);
};


init();