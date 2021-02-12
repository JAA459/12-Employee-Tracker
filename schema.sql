DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id int AUTO_INCREMENT NOT NULL,
  title varchar(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id int NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE employee (
  id int AUTO_INCREMENT NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  manager_id int,
  PRIMARY KEY(id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joshua", "Arroyo", 1, null);

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 100000, 1);

INSERT INTO department (name)
VALUES ("Executive Officers");


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nick", "Bosa", 2, null);

INSERT INTO role (title, salary, department_id)
VALUES ("CFO", 100000, 2);

INSERT INTO department (name)
VALUES ("Enginerring");


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joey", "Lee", 3, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Assistant", 125000, 3);

INSERT INTO department (name)
VALUES ("Sales");


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Smith", 4, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Developer", 250000, 4);

INSERT INTO department (name)
VALUES ("Developers");


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jerry", "Rice", 5, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("General Manager", 325681, 5);

INSERT INTO department (name)
VALUES ("Management");

SELECT employee.first_name, employee.last_name, title, salary, name, E.first_name, E.last_name
FROM employee
INNER JOIN role
ON employee.role_id = role.id
INNER JOIN department
ON role.department_id = department.id
INNER JOIN employee E
ON employee.manager_id = E.id