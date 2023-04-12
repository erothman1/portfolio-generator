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
            type: "input", 
            message: "Where are you located?",
            name: "location",
        },
        {
            type: "input",
            message: "What do you want your bio to be?",
            name: "bio",
        },
        {
            type: "input",
            message: "What is your LinkedIn?",
            name: "linkedin",
        },
        {
            type: "input",
            message: "What is your GitHub?",
            name: "github",
        },
    ])
    .then((response) =>
        writeHTML("index.html", response)
        
    )

const writeHTML = (fileName, data) => {
    const fileContent = generateHTML(data)

    fs.writeFile(fileName, fileContent, (err) =>
    err ? console.error(err) : console.log("Success")
    )
}

const generateHTML = (data) => {
    return ``
}