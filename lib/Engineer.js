// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, role, id, email) {
    super(name, role, id, email);
    this.github;
  }

  // Setter Methods
  setGithub = link => this.github = link

  // Getter Methods
  getGithub = _ => this.github

}

module.exports = Engineer