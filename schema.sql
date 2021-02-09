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
VALUES ("Joshua", "Arroyo", 59, 520);

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 100000, 42);

INSERT INTO department (name)
VALUES ("Executive Officers");


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nick", "Bosa", 62, 343);

INSERT INTO role (title, salary, department_id)
VALUES ("CFO", 100000, 29);

INSERT INTO department (name)
VALUES ("Enginerring");


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joey", "Lee", 23, 619);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Assistant", 125000, 23);

INSERT INTO department (name)
VALUES ("Sales");


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Smith", 68, 960);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Developer", 250000, 35);

INSERT INTO department (name)
VALUES ("Developers");


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jerry", "Rice", 60, 960);

INSERT INTO role (title, salary, department_id)
VALUES ("General Manager", 325681, 49);

INSERT INTO department (name)
VALUES ("Management");