SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mindset_db2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mindset_db2
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mindset_db2`;
CREATE SCHEMA IF NOT EXISTS `mindset_db2` DEFAULT CHARACTER SET utf8 ;
USE `mindset_db2` ;

-- -----------------------------------------------------
-- Table `mindset_db2`.`institution`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mindset_db2`.`institution` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `endereco_cep` VARCHAR(255) NOT NULL,
  `endereco_cidade` VARCHAR(255) NOT NULL,
  `endereco_rua` VARCHAR(255) NOT NULL,
  `telefonePrimario` VARCHAR(255) NOT NULL,
  `telefoneSecundario` VARCHAR(255) NULL,
  `email` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mindset_db2`.`course_level`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mindset_db2`.`course_level` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `level` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mindset_db2`.`course`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mindset_db2`.`course` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(255) NOT NULL,
  `course_abbr` VARCHAR(5) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `course_level_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_course_course_level1_idx` (`course_level_id` ASC),
  CONSTRAINT `fk_course_course_level1`
    FOREIGN KEY (`course_level_id`)
    REFERENCES `mindset_db2`.`course_level` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mindset_db2`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mindset_db2`.`student` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `registroMatricula` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `birth_date` VARCHAR(10) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `passwordHash` VARCHAR(255) NOT NULL,
  `user_type` VARCHAR(30) NOT NULL,
  `telefone` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255) NULL,
  `is_active` VARCHAR(7) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  `course_id` INT NOT NULL,
  `institution_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_student_course1_idx` (`course_id` ASC),
  INDEX `fk_student_institution1_idx` (`institution_id` ASC),
  CONSTRAINT `fk_student_course1`
    FOREIGN KEY (`course_id`)
    REFERENCES `mindset_db2`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_student_institution1`
    FOREIGN KEY (`institution_id`)
    REFERENCES `mindset_db2`.`institution` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mindset_db2`.`teacher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mindset_db2`.`teacher` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `registroMatricula` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `birth_date` VARCHAR(10) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `passwordHash` VARCHAR(255) NOT NULL,
  `user_type` VARCHAR(30) NOT NULL,
  `telefone` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255) NULL,
  `is_active` VARCHAR(7) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  `institution_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_teacher_institution1_idx` (`institution_id` ASC),
  CONSTRAINT `fk_teacher_institution1`
    FOREIGN KEY (`institution_id`)
    REFERENCES `mindset_db2`.`institution` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mindset_db2`.`matter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mindset_db2`.`matter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  `course_id` INT NOT NULL,
  `teacher_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_matter_course1_idx` (`course_id` ASC),
  INDEX `fk_matter_teacher1_idx` (`teacher_id` ASC),
  CONSTRAINT `fk_matter_course1`
    FOREIGN KEY (`course_id`)
    REFERENCES `mindset_db2`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matter_teacher1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `mindset_db2`.`teacher` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mindset_db2`.`assignment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mindset_db2`.`assignment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL,
  `mention` TINYINT NULL,
  `term` DATE NULL,
  `is_delivered` TINYINT NOT NULL,
  `create_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` DATETIME NULL,
  `matter_id` INT NOT NULL,
  `student_id` INT NOT NULL,
  INDEX `fk_assignment_matter1_idx` (`matter_id` ASC),
  PRIMARY KEY (`id`),
  INDEX `fk_assignment_student1_idx` (`student_id` ASC),
  CONSTRAINT `fk_assignment_matter1`
    FOREIGN KEY (`matter_id`)
    REFERENCES `mindset_db2`.`matter` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assignment_student1`
    FOREIGN KEY (`student_id`)
    REFERENCES `mindset_db2`.`student` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mindset_db2`.`matter_avarege`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mindset_db2`.`matter_avarege` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `avarege` TINYINT NOT NULL,
  `matter_id` INT NOT NULL,
  `student_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_matter_avarege_matter1_idx` (`matter_id` ASC),
  INDEX `fk_matter_avarege_student1_idx` (`student_id` ASC),
  CONSTRAINT `fk_matter_avarege_matter1`
    FOREIGN KEY (`matter_id`)
    REFERENCES `mindset_db2`.`matter` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_matter_avarege_student1`
    FOREIGN KEY (`student_id`)
    REFERENCES `mindset_db2`.`student` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mindset_db2`.`institution_admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mindset_db2`.`institution_admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `registroMatricula` INT NOT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `birth_date` VARCHAR(10) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `passwordHash` VARCHAR(255) NOT NULL,
  `user_type` VARCHAR(30) NOT NULL,
  `telefone` VARCHAR(255) NULL,
  `avatar` VARCHAR(255) NULL,
  `is_active` TINYINT(5) NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  `institution_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_institution_admin_institution1_idx` (`institution_id` ASC),
  CONSTRAINT `fk_institution_admin_institution1`
    FOREIGN KEY (`institution_id`)
    REFERENCES `mindset_db2`.`institution` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
