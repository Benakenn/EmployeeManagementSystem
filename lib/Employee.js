// TODO: Write code to define and export the Employee class

class Employee {
  constructor () {
    this.name;
    this.role;
    this.id;
    this.email;
  }

  // Setters
  setName = name => this.name = name
  setRole = role => this.role = role
  setID = id => this.id = id
  setEmail = email => this.email = email

  // Getters
  getName = _ => this.name
  getRole = _ => this.role
  getId = _ => this.id
  getEmail = _ => this.email

}

module.exports = Employee