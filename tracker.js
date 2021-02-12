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
  function viewDep() {
      var query = connection.query("SELECT * FROM department", function(err, res) {
          if (err) throw err;
          console.table(res);
          runSearch();
      });
    //   console.log(query.sql);
  }

  function viewRole() {
    var query = connection.query(`SELECT title, salary, name
    FROM role
    INNER JOIN department
    ON role.department_id = department.id`, function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
  }

  function viewEmployee() {
      var query = connection.query(`SELECT employee.first_name, employee.last_name, employee.role_id, title, salary, name
      FROM employee
      INNER JOIN role
      ON employee.role_id = role.id
      INNER JOIN department
      ON role.department_id = department.id`,
     function(err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
  }

  function addDep() {
      inquirer
        .prompt({
            name: "title",
            type: "input",
            message: "What is the name of the department you would like to add?"

        })
        .then(function(answer) {
            var query = connection.query("INSERT INTO department (name) VALUES (?)", answer.title, function(err, res) {
                if(err) throw err;
                // console.log(res);
                viewDep();
            } )
        })
  }

  function addRole () {
    inquirer
      .prompt([{
          name: "title",
          type: "input",
          message: "What is the name of the Role you would like to add?"

      },
      {
        name: "salary",
        type: "input",
        message: "Please enter the salary amount for this role"
      },
      {
          name: "id",
          type: "input",
          message: "Please enter the department id number"
      }
    ])
      .then(function(answer) {
          var query = connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [answer.title, answer.salary, answer.id], function(err, res) {
              if(err) throw err;
              // console.log(res);
              viewRole();
          } )
      })
}

function addEmployee() {
    inquirer
      .prompt([{
          name: "first",
          type: "input",
          message: "What is the first name of the employee you would like to add?"

      },
      {
        name: "last",
        type: "input",
        message: "what is the last name of the employee you would like to add?"
      },
      {
          name: "role",
          type: "input",
          message: "Please enter the role id number for this employee"
      },
      {
        name: "manager",
        type: "input",
        message: "Please enter the managers id who will be managing this employee."
    }
    ])
      .then(function(answer) {
          var query = connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [answer.first, answer.last, answer.role, answer.manager], function(err, res) {
              if(err) throw err;
              // console.log(res);
              viewEmployee();
          } )
      })
}

function updateEmployeeRoles() {
    inquirer
      .prompt([{
          name: "eId",
          type: "input",
          message: "What is the ID of the Employee you would like to update"

      },
      {
        name: "roleId",
        type: "input",
        message: "what is there new role ID?"
      },
    ])
      .then(function(answer) {
          var query = connection.query("UPDATE employee SET role_id = ? WHERE id = ?",
           [answer.roleId, answer.eId], function(err, res) {
              if(err) throw err;
              // console.log(res);
              viewEmployee();
          } )
      })
}
