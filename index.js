// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);




//Prompt the user questions to populate the README.md
function promptUser()
{
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your GitHub username? (No @ needed)",
            name: 'username',
            default: 'Bill Oberkirsch ',
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
            default: 'readme-generator',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid GitHub repo is required for a badge.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title',
            default: 'Project Title',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid project title is required.");
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
        {
            type: 'list',
            message: "What is the language it is written in?",
            name: 'installation',
            default:'C#',
            choices:['C#', 'VB', 'Python', 'Java', 'Javascript', 'Node.js']
        },
        {
            type: 'input',
            message: "Provide instructions and examples of your project in use for the Usage section.",
            name: 'usage'
        },
        {
            type: 'input',
            message: "If applicable, provide guidelines on how other developers can contribute to your project.",
            name: 'contributing'
        },
        {
            type: 'input',
            message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
            name: 'tests'
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license'
        }
    ]);
} 


  async function init() 
  {
    try 
    {
        const answers = await promptUser();
        const generateContent = generateReadme(answers);

  
/*         const generateContent = generateContent(answers);
        console.log(generateContent);
        // Write new README.md to dist directory */
        await writeFileAsync('./dist/README.md', generateContent);
        console.log(' Successfully wrote to README.md');
    }   
     catch(err) 
        {

        console.log(err); 
        }

  }
  
  init(); 