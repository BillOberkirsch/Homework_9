
// External packages
const inquirer = require('inquirer');
const fs = require('fs');
/* const util = require('util'); */
const Choice = require('inquirer/lib/objects/choice');

/* const api = require('./node_modules/utils/api.js');
const generateMarkdown = require('./node_modules/utils/generateMarkdown.js'); */

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
        
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {//need to find the proj with choice
        type: 'list',
        message: "What language is it written in?.",
        name: 'language',
        default: 'C#',
        choices:['Javascript', 'C#', 'VB'],
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid language is required.");
            }
            return true;
        }
    },

];


function writeToFile(fileName, data){
    fs.writeFile(fileName, data, err=>{
        if(err){
            return console.log(err);
        }
    });
};

async function init(){
    
    const userResponse = await inquirer.prompt(questions);
    console.log('Your Response: ', userResponse);
    const strFile = '<h1>' + userResponse;

};


init();