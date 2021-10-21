// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee')

class Manager extends Employee {
  constructor (name, role, id, email) {
    super(name, role, id, email);
    this.officeNumber;
  }

  // Setter Methods
  setOfficeNumber = number => this.officeNumber = number

  // Getter Methods
  getOfficeNumber = _ => this.officeNumber

}

module.exports = Manager