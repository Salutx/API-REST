DROP SCHEMA IF EXISTS `mindset_db` ;
CREATE SCHEMA IF NOT EXISTS `mindset_db` DEFAULT CHARACTER SET utf8 ;
USE `mindset_db` ;

-- -----------------------------------------------------
-- Table `mindset_db`.`Instituicao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Instituicao` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Instituicao` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `endereco_cep` VARCHAR(255) NOT NULL,
  `endereco_cidade` VARCHAR(255) NOT NULL,
  `endereco_rua` VARCHAR(255) NOT NULL,
  `telefonePrimario` VARCHAR(14) NOT NULL,
  `telefoneSecundario` VARCHAR(14),
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `mindset_db`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Usuario` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `registroMatricula` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `telefone` VARCHAR(14) NOT NULL,
  `dataNascimento` VARCHAR(8) NOT NULL,
  `avatar` VARCHAR(500) NOT NULL,
  `Instituicao_id` SMALLINT(5) NOT NULL,
  `user_permissions` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`id`, `Instituicao_id`),
  INDEX `fk_Usuario_Instituicao1_idx` (`Instituicao_id` ASC),
  CONSTRAINT `fk_Usuario_Instituicao1`
    FOREIGN KEY (`Instituicao_id`)
    REFERENCES `mindset_db`.`Instituicao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `mindset_db`.`Agenda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Agenda` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Agenda` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `tituloMarcacao` VARCHAR(64) NOT NULL,
  `data` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Usuario_id` SMALLINT(5) NOT NULL,
  `Usuario_Instituicao_id` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`id`, `Usuario_id`, `Usuario_Instituicao_id`),
  INDEX `fk_Agenda_Usuario1_idx` (`Usuario_id` ASC, `Usuario_Instituicao_id` ASC),
  CONSTRAINT `fk_Agenda_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `mindset_db`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `mindset_db`.`Batepapo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Batepapo` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Batepapo` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  `dataCriacao` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `mindset_db`.`Curso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Curso` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Curso` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `mindset_db`.`Aluno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Aluno` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Aluno` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `serie` VARCHAR(255) NOT NULL,
  `Usuario_id` SMALLINT(5) NOT NULL,
  `Curso_id` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`id`, `Usuario_id`, `Curso_id`),
  INDEX `fk_Aluno_Usuario1_idx` (`Usuario_id` ASC),
  INDEX `fk_Aluno_Curso1_idx` (`Curso_id` ASC),
  CONSTRAINT `fk_Aluno_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `mindset_db`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aluno_Curso1`
    FOREIGN KEY (`Curso_id`)
    REFERENCES `mindset_db`.`Curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `mindset_db`.`Notificacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Notificacao` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Notificacao` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NULL,
  `horaEnvio` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Usuario_id` SMALLINT(5) NOT NULL,
  `Usuario_Instituicao_id` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`id`, `Usuario_id`, `Usuario_Instituicao_id`),
  INDEX `fk_Notificacao_Usuario1_idx` (`Usuario_id` ASC, `Usuario_Instituicao_id` ASC),
  CONSTRAINT `fk_Notificacao_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `mindset_db`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `mindset_db`.`Boletim`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Boletim` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Boletim` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `mindset_db`.`Professor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Professor` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Professor` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `Usuario_id` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`id`, `Usuario_id`),
  INDEX `fk_Professor_Usuario1_idx` (`Usuario_id` ASC),
  CONSTRAINT `fk_Professor_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `mindset_db`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `mindset_db`.`Materia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Materia` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Materia` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `media` INT NULL,
  `Curso_id` SMALLINT(5) NOT NULL,
  `Boletim_id` SMALLINT(5) NOT NULL,
  `Professor_id` SMALLINT(5) NOT NULL,
  `Professor_Usuario_id` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`id`, `Curso_id`, `Boletim_id`, `Professor_id`, `Professor_Usuario_id`),
  INDEX `fk_Materia_Curso1_idx` (`Curso_id` ASC),
  INDEX `fk_Materia_Professor1_idx` (`Professor_id` ASC, `Professor_Usuario_id` ASC),
  INDEX `fk_Materia_Boletim1_idx` (`Boletim_id` ASC),
  CONSTRAINT `fk_Materia_Curso1`
    FOREIGN KEY (`Curso_id`)
    REFERENCES `mindset_db`.`Curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Materia_Boletim1`
    FOREIGN KEY (`Boletim_id`)
    REFERENCES `mindset_db`.`Boletim` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Materia_Professor1`
    FOREIGN KEY (`Professor_id` , `Professor_Usuario_id`)
    REFERENCES `mindset_db`.`Professor` (`id` , `Usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `mindset_db`.`Atividade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Atividade` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Atividade` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NULL DEFAULT CURRENT_TIMESTAMP,
  `mencao` INT NULL,
  `prazo` DATETIME NULL,
  `entrada` VARCHAR(45) NULL,
  `entregue` INT NOT NULL,
  `Materia_id` SMALLINT(5) NOT NULL,
  `Materia_Curso_id` SMALLINT(5) NOT NULL,
  `Materia_Boletim_id` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`id`, `Materia_id`, `Materia_Curso_id`, `Materia_Boletim_id`),
  INDEX `fk_Atividade_Materia1_idx` (`Materia_id` ASC, `Materia_Curso_id` ASC, `Materia_Boletim_id` ASC),
  CONSTRAINT `fk_Atividade_Materia1`
    FOREIGN KEY (`Materia_id` , `Materia_Curso_id` , `Materia_Boletim_id`)
    REFERENCES `mindset_db`.`Materia` (`id` , `Curso_id` , `Boletim_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `mindset_db`.`Aviso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Aviso` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Aviso` (
  `id` SMALLINT(5) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(32) NOT NULL,
  `horaEnvio` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `prioridade` INT NOT NULL,
  `Usuario_id` SMALLINT(5) NOT NULL,
  `Usuario_Instituicao_id` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`id`, `Usuario_id`, `Usuario_Instituicao_id`),
  INDEX `fk_Aviso_Usuario1_idx` (`Usuario_id` ASC, `Usuario_Instituicao_id` ASC),
  CONSTRAINT `fk_Aviso_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `mindset_db`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `mindset_db`.`Batepapo_has_Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mindset_db`.`Batepapo_has_Usuario` ;

CREATE TABLE IF NOT EXISTS `mindset_db`.`Batepapo_has_Usuario` (
  `Batepapo_id` SMALLINT(5) NOT NULL,
  `Usuario_id` SMALLINT(5) NOT NULL,
  `Usuario_Instituicao_id` SMALLINT(5) NOT NULL,
  PRIMARY KEY (`Batepapo_id`, `Usuario_id`, `Usuario_Instituicao_id`),
  INDEX `fk_Batepapo_has_Usuario_Usuario1_idx` (`Usuario_id` ASC, `Usuario_Instituicao_id` ASC),
  INDEX `fk_Batepapo_has_Usuario_Batepapo1_idx` (`Batepapo_id` ASC),
  CONSTRAINT `fk_Batepapo_has_Usuario_Batepapo1`
    FOREIGN KEY (`Batepapo_id`)
    REFERENCES `mindset_db`.`Batepapo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Batepapo_has_Usuario_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `mindset_db`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO instituicao (name, endereco_cep, endereco_cidade, endereco_rua, telefonePrimario, telefoneSecundario, email)
VALUES ("ETEC UIRAPURU", "05565060", "Sâo Paulo", "Rua Nazir Miguel", "123", "321", "uirapuru@etec.sp.gov.br");

INSERT INTO usuario (registroMatricula, name, senha, email, telefone, dataNascimento, avatar, Instituicao_id, user_permissions)
VALUES ("0", "0", "$2a$10$.9yHPHjOx1W1Rfi0ny6pvOcqlOwaC/6mrO1hr627.aLh11.O32GxO", "admin@admin", "0", "00000000", "0", "1", "0")