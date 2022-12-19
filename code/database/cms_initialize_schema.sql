DROP SCHEMA IF EXISTS `cms`;
CREATE SCHEMA `cms` DEFAULT CHARACTER SET=utf8;
USE cms;

CREATE TABLE `account` (
	`account_id` VARCHAR(10) NOT NULL PRIMARY KEY,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `SSN` VARCHAR(11) UNIQUE NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `birthdate` DATE,
    `address` VARCHAR(255),
    `phone` VARCHAR(12),
    `permissions` VARCHAR(50) DEFAULT 'user'
) ENGINE=InnoDB;


CREATE TABLE `department` (
  `dept_id` VARCHAR(4) NOT NULL,
  `dept_name` VARCHAR(50) UNIQUE NOT NULL,
  PRIMARY KEY(`dept_id`),
  UNIQUE KEY `ix_dept_id` (`dept_id`)
) ENGINE=InnoDB;

CREATE TABLE `student` (
    `stud_id` VARCHAR(10) UNIQUE NOT NULL PRIMARY KEY,
    `dept_id` VARCHAR(4) NOT NULL,
    FOREIGN KEY (`stud_id`) REFERENCES `account` (`account_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`)
	ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `lecturer` (
	`lec_id` VARCHAR(10) UNIQUE NOT NULL PRIMARY KEY,
    `dept_id` VARCHAR(4) NOT NULL,
    FOREIGN KEY (`lec_id`) REFERENCES `account` (`account_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`)
	ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `course` (
	`course_id` VARCHAR(10) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `dept_id` VARCHAR(4) NOT NULL,
	`lec_id` VARCHAR(10) NOT NULL,
    `credit` INT(1) NOT NULL,
    `term` VARCHAR(6) NOT NULL,
    `stud_limit` INT(3) NOT NULL,
    CONSTRAINT PK_course PRIMARY KEY (`course_id`, `dept_id`),
    FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`)
	ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (`lec_id`) REFERENCES `lecturer` (`lec_id`)
	ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `course_enrollment` (
	`stud_id` VARCHAR(10) NOT NULL,
    `course_id` VARCHAR(10) NOT NULL,
    FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT PK_course_enrollment PRIMARY KEY (`stud_id`, `course_id`)
) ENGINE=InnoDB;

CREATE TABLE `prereq` (
  `course_id` VARCHAR(10) NOT NULL,
  `prereq_id` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`course_id`, `prereq_id`),
  FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`)
  ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (`prereq_id`) REFERENCES `course` (`course_id`)
  ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;
