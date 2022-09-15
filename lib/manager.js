const Employee = require("./Employee");

class Manager extends Employee {
  constructor(newName,newId,newEmail,newOffice) {
    super(newName,newId,newEmail);
    this.office = newOffice;
  }
  getOffice() {
    return this.office;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
