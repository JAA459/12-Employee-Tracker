const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Error@ppear1",
    database: "tracker_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    runSearch();
  });

  function runSearch() {
      inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "what would you like to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Department",
                "View Role",
                "View Employee",
                "Update Employee roles"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
            case "Add Department":
                addDep();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "View Department":
                viewDep();
                break;

            case "View Role":
                viewRole();
                break;

            case "View Employee":
                viewEmployee();
                break;

            case "Update Employee roles":
                updateEmployeeRoles();
                break;
            }
        })
  }