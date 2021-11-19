// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Validate input.  Return false if blank, true otherwise.
const falseIfBlank = string => {
    if (!string.trim()) {
        return false;
    } else {
        return true;
    }
}

// Array of questions for user input
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        validate: falseIfBlank
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
        message: "Describe the project",
        validate: falseIfBlank
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install?",
        validate: falseIfBlank
    },
    {
        type: "input",
        name: "usage",
        message: "Instructions for usage",
        validate: falseIfBlank
    },
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute?",
        validate: falseIfBlank
    },
    {
        type: "input",
        name: "tests",
        message: "How can the user run tests?",
        validate: falseIfBlank
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
        validate: falseIfBlank
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: falseIfBlank
    }
];

// Write the content to a file.
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

// Prompt the user with the questions
const promptUser = () => {
    return inquirer.prompt(questions);
}

// Run the program.
function init() {
    promptUser()
        .then(data => {
            return generateMarkdown(data);
        })
        .then(markdown => {
            return writeToFile(markdown);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse.message);
        })
        .catch(error => {
            console.log(error);
        });
}

// Function call to initialize app
init();