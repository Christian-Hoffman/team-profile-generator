const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(newName,newId,newEmail,Github) {
    super(newName,newId,newEmail);
    this.github = Github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
