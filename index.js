// TODO: Include package needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    "What is the purpose of this project?",
    "What is the title of this project?",
    "Who are the creators of this project?",
    "What are the licenses and terms of use for this project?",
    "How do you install this project?",
    "How can this project be improved in the future?",
    "How do you report bugs in this project?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'Purpose',
           },
        {
            type: 'input',
            message: questions[1],
            name: 'Title',
           },
        {
            type: 'input',
            message: questions[2],
            name: 'Creators',
           },
        {
            type: 'input',
            message: questions[3],
            name: 'Licenses',
           },
           {
            type: 'input',
            message: questions[4],
            name: 'Install',
           },
           {
            type: 'input',
            message: questions[5],
            name: 'Improvements',
           },
        {
            type: 'input',
            message: questions[6],
            name: 'Bugs',
           },
        
        {
            type: "checkbox",
            name: "licenceChoice",
            message: "Select license.",
            choices: [
                {name: "MIT", value: "https://opensource.org/licenses/MIT"},
                {name: "Apache 2.0", value: "https://opensource.org/licenses/Apache-2.0)"},
                {name: "GPL 3.0", value: "https://opensource.org/licenses/GPL-3.0"},
                {name: "none", value: " "},]
            
            }
    ])
.then((answers => {
    const {Purpose, Title, Creators, Licenses, Install, Improvements, Bugs} = answers;

    const layout = `
    # ${Title}
    
    ## Description
    ${Purpose}
    
    ## Creators
    ${Creators}
    
    ## License
    ${Licenses}
    
    ## Installation
    ${Install}
    
    ## Future Improvements
    ${Improvements}
    
    ## Reporting Bugs
    ${Bugs}
    `;
    
            writeToFile('README.md', layout);
        }));
    }

// Function call to initialize app
init();
