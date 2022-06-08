// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
}, {
    type: "input",
    message: "What is this project about?",
    name: "Descriptionn"

}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"

}, {
    type: "input",
    message: "What packages need to be installed to run the project?",
    name: "Installation"

}, {
    type: "input",
    message: "What is the project used for?",
    name: "Usage"
}, {
    type: "list",
    message: "What kind of license would you want?",
    name: "license",
    choices: ["Unlicense", "MIT", "Apache", "None"]
}, {
    type: "input",
    message: "List all contributors",
    name: "contributer"
}, {
    type: "input",
    message: "What command is used to run a test",
    name: "tests",
}, {
    type: "input",
    message: "What is your Github username?",
    name: "githubUsername"
}, {
    type: "input",
    message: "What is your email address?",
    name: "email"

}, {
    type: "input",
    message: "What is your email address?",
    name: "email"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err){
        if (err) {
            throw err;
        }
        console.log("Readme file written successfully");
    });

 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then(answers => {
        const markdownText = generateMarkdown(answers);
        writeToFile("README.md", markdownText);
    });
}

// Function call to initialize app
init();
