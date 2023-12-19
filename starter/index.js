const fs = require("fs"); //file system
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide the languages and technologies used?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license you would like to use?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "ISC", "BSD2", "none"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Provide a list of contributors if any?",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "creator",
    message: "Provide your GitHub username?",
  },
  {
    type: "input",
    name: "name",
    message: "Provide your full name?",
  },
  {
    type: "input",
    name: "email",
    message: "Provide your email address?",
  },
];

// // function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// // function to initialize program
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("ExampleREADME.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// function call to initialize program
init();

