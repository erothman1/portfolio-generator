const inquirer = require("inquirer")
const fs = require("fs")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "list", 
            message: "What languages do you know?",
            choices: ["English", "Spanish", "French"],
            name: "language",
        },
        {
            type: "list",
            message: "What is your preferred method of communication?",
            choices: ["text", "call", "letter"],
            name: "communication",
        },
    ])
    .then((response) =>
        // response.ok ? console.log("yay") : console.log("oh no")
        fs.writeFile("log.txt", `${response.name} preferrs to use ${response.communication} in the language ${response.language} for communication`, (err) =>  
        err ? console.error(err) : console.log('Success!')
        )
        
    )