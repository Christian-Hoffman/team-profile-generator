const fs = require('fs');
const createPage = require('./src/pageTemplate');
const pageTemplate = require('./src/pageTemplate');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const managerQ = [
    {
        name: 'newName',
        message: 'Enter Managers name',
    },
    {
        input: 'number',
        name: 'newId',
        message: 'Enter Managers Id',
    },
    {
        name: 'newEmail',
        message: 'Enter Managers Email',
    },
    {
        input: 'number',
        name: 'newOffice',
        message: 'Enter office number'
    },
    {
        name: 'doNext',
        type: 'list',
        choices: [
            'Add Engineer',
            'Add Intern',
            'No more to add',
        ],
        message: 'Do you need to add anymore employees?'
    },
];

const engineerQ = [
    {
        name: 'newName',
        message: 'Enter Engineers name',
    },
    {
        input: 'number',
        name: 'newId',
        message: 'Enter Engineers Id',
    },
    {
        name: 'newEmail',
        message: 'Enter Engineers Email',
    },
    {
        name: 'Github',
        message: 'Enter Github Username'
    },
    {
        name: 'doNext',
        type: 'list',
        choices: [
            'Add Engineer',
            'Add Intern',
            'No more to add',
        ],
        message: 'Do you need to add anymore employees?'
    },
];

const internQ = [
    {
        name: 'newName',
        message: 'Enter Interns name',
    },
    {
        input: 'number',
        name: 'newId',
        message: 'Enter Interns Id',
    },
    {
        name: 'newEmail',
        message: 'Enter Interns Email',
    },
    {
        name: 'School',
        message: 'Enter school'
    },
    {
        name: 'doNext',
        type: 'list',
        choices: [
            'Add Engineer',
            'Add Intern',
            'No more to add',
        ],
        message: 'Do you need to add anymore employees?'
    },
];

team = [];

const askQ = function(questions,role) {
    inquirer.prompt(questions)
    .then(res => {
        if(role == 0) {
            const newMan = new Manager(res.newName,res.newId,res.newEmail,res.newOffice);
            team.push(newMan);
        }
        if(role == 1) {
            const newEn = new Engineer(res.newName,res.newId,res.newEmail,res.Github);
            team.push(newEn);
        }
        if(role == 2) {
            const newInt = new Intern(res.newName,res.newId,res.newEmail,res.School);
            team.push(newInt);
        }
        if(res.doNext === 'Add Engineer') {
            askQ(engineerQ, 1);
        }
        if(res.doNext === 'Add Intern') {
            askQ(internQ, 2);
        }
        if(res.doNext === 'No more to add') {
            teamDone(team);
        }
    });
};

askQ(managerQ, 0);

const teamDone = function(data) {
    const createPage = pageTemplate(data);
    fs.writeFileSync('./dist/index.html', createPage);
};