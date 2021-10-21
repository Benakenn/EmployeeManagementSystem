const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { prompt } = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Array that holds all employee information.
let employeeInformation = []

const renderEmployees = () => {

  // console.log(render(employeeInformation))
  // Write the rendered html to a file.
  fs.writeFile('./output/team.html', render(employeeInformation), error => {
    if (error) { console.log(error) }
  })

}

const createIntern = (name, title, id, email) => {

  prompt([
    {
      type: 'input',
      name: 'internSchool',
      message: `Enter the current school that ${name} is attending: `
    }
  ])
    .then(({ internSchool }) => {
      // Create new manager object with passed data and new specific manager data.
      let intern = new Intern()
      intern.setName(name)
      intern.setRole(title)
      intern.setID(id)
      intern.setEmail(email)
      intern.setSchool(internSchool)

      // Push the object into the employee information array.
      employeeInformation.push(intern)

      // Prompt the user to continue adding employees or move on to render.
      prompt([
        {
          type: 'confirm',
          name: 'addAnother',
          message: 'Would you like to add another employee? (y/n): '
        }
      ])
        .then(({ addAnother }) => addAnother === true ? mainMenu() : renderEmployees())
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))

}

const createEngineer = (name, title, id, email) => {

  prompt([
    {
      type: 'input',
      name: 'engineerLink',
      message: `Enter ${name}'s GitHub username: `
    }
  ])
    .then(({ engineerLink }) => {
      // Create new manager object with passed data and new specific manager data.
      let engineer = new Engineer()
      engineer.setName(name)
      engineer.setRole(title)
      engineer.setID(id)
      engineer.setEmail(email)
      engineer.setGithub(engineerLink)

      // Push the object into the employee information array.
      employeeInformation.push(engineer)

      // Prompt the user to continue adding employees or move on to render.
      prompt([
        {
          type: 'confirm',
          name: 'addAnother',
          message: 'Would you like to add another employee? (y/n): '
        }
      ])
        .then(({ addAnother }) => addAnother === true ? mainMenu() : renderEmployees())
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))

}

const createManager = (name, role, id, email) => {

  prompt ([
    {
      type: 'input',
      name: 'managerNumber',
      message: `Enter ${name}'s office number: `
    }
  ])
    .then(({ managerNumber }) => {
      // Create new manager object with passed data and new specific manager data.
      let manager = new Manager()
      manager.setName(name)
      manager.setRole(role)
      manager.setID(id)
      manager.setEmail(email)
      manager.setOfficeNumber(managerNumber)

      // Push the object into the employee information array.
      employeeInformation.push(manager)

      // Prompt the user to continue adding employees or move on to render.
      prompt([
        {
          type: 'confirm',
          name: 'addAnother',
          message: 'Would you like to add another employee? (y/n): '
        }
      ])
        .then(({ addAnother }) => addAnother === true ? mainMenu() : renderEmployees())
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))

}

const createNewEmployee = employeeTitle => {

  prompt ([
    {
      type: 'input',
      name: 'employeeName',
      message: `Enter the employee's name: `
    },
    {
      type: 'input',
      name: 'employeeID',
      message: `Enter the employee's ID number: `
    },
    {
      type: 'input',
      name: 'employeeEmail',
      message: `Enter the employee's email: `
    }
  ])
    .then(({ employeeName, employeeID, employeeEmail }) => {
      switch (employeeTitle) {
        case 'Manager':
          // Pass general information to manager create function.
          createManager(employeeName, employeeTitle, employeeID, employeeEmail)
          break
        case 'Engineer':
          createEngineer(employeeName, employeeTitle, employeeID, employeeEmail)
          break
        case 'Intern':
          createIntern(employeeName, employeeTitle, employeeID, employeeEmail)
          break
        default:
          console.log('Program terminating.')
          process.exit()
      }
      

      
    })
    .catch(error => console.log(error))

}

// Array for menu choices.
const employeeChoices = ['Manager', 'Engineer', 'Intern', 'Exit']

const mainMenu = () => {

  // Prompt user for an employee choice.
  prompt ([
    {
      type: 'list',
      name: 'menuChoice',
      message: 'Select an employee type.',
      choices: employeeChoices
    }
  ])
    .then(({ menuChoice }) => menuChoice !== 'Exit' ? createNewEmployee(menuChoice) : console.log('Goodbye!'))
    .catch(error => console.log(error))

}

mainMenu()



          ////////////// Project Instructions //////////////

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
