// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "list",
        name: "license",
        message: "What is the license?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "description",
        message: "Describe the project"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install?"
    },
    {
        type: "input",
        name: "usage",
        message: "Instructions for usage"
    },
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute?"
    },
    {
        type: "input",
        name: "tests",
        message: "How can the user run tests?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to initialize app
function init() {

    promptUser()
        .then(data => {
            return generateMarkdown(data);
        })
        .then(markdown => {
            return writeToFile(markdown);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(error => {
            console.log(error);
        });
}

// Function call to initialize app
init();