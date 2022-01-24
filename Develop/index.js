const fs = require("fs");
const inquirer = require("inquirer");

const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the project name?",
            name: "project"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your github repo?",
            name: "repo"
        },
        {
            type: "input",
            message: "What is your project about?",
            name: "description"
        },
        {
            type: "input",
            message: "How do you install the project?",
            name: "installation"
        },
        {
            type: "input",
            message: "What is the use?",
            name: "usage"
        },
        {
            type: "list",
            message: "What is the license of your project?",
            name: "license",
            choices: ['ISC', 'BSD-3-Clause', 'MIT', 'UNLICENSED'],
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
    ]);
  };

const generateReadme = ({ project, username, description, installation, usage, license, email, repo }) =>
    `# ${project}|

    ## Description of Project:
    ${description}

    ## Installation:
    Install node, go to my repo at ${repo} and clone the project from there.
    ${installation}
    
    ## Usage:
    ${usage}

    ## License:
    ${license}

    ## Questions:
    If you have any questions feel free to look at my personal Github Profile ${username} or reach out to me
    via my email at ${email}. I'll respond as soon as possible!
    `

const init = () => {
    questions()
      .then((answers) => fs.writeFileSync('README.md', generateReadme (answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

init();
