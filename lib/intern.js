const Employee = require("./Employee");

class Intern extends Employee {
  constructor(newName,newId,newEmail,School) {
    super(newName,newId,newEmail);
    this.school = School;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
