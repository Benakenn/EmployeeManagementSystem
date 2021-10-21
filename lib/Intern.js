// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name, role, id, email) {
    super(name, role, id, email);
    this.school;
  }

  // Setter Methods
  setSchool = school => this.school = school

  // Getter Methods
  getSchool = _ => this.school

}

module.exports = Intern