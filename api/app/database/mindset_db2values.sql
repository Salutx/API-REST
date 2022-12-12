-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Dez-2022 às 06:39
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mindset_db2`
--
CREATE DATABASE IF NOT EXISTS `mindset_db2` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mindset_db2`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `assignment`
--

CREATE TABLE `assignment` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `mention` tinyint(4) DEFAULT NULL,
  `term` date DEFAULT NULL,
  `is_delivered` tinyint(4) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT NULL,
  `matter_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `assignment`
--

INSERT INTO `assignment` (`id`, `title`, `description`, `mention`, `term`, `is_delivered`, `create_at`, `update_at`, `matter_id`, `student_id`) VALUES
(2, 'Equações do 2° Grau', 'Olá, Alunos. A teacher is responsible for preparing lesson plans and educating students at all levels. Their duties include assigning homework, grading tests, and documenting progress. Teachers must be able to instruct in a variety of subjects and reach s', NULL, '2022-12-19', 0, '2022-12-11 23:23:24', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_abbr` varchar(5) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `course_level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `course`
--

INSERT INTO `course` (`id`, `course_name`, `course_abbr`, `created_at`, `updated_at`, `course_level_id`) VALUES
(1, 'Desenvolvimento de Sistemas', 'DS', '2022-12-09 03:59:17', NULL, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `course_level`
--

CREATE TABLE `course_level` (
  `id` int(11) NOT NULL,
  `level` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `course_level`
--

INSERT INTO `course_level` (`id`, `level`, `created_at`, `updated_at`) VALUES
(1, '3ETIM', '2022-12-09 03:59:17', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `institution`
--

CREATE TABLE `institution` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `endereco_cep` varchar(255) NOT NULL,
  `endereco_cidade` varchar(255) NOT NULL,
  `endereco_rua` varchar(255) NOT NULL,
  `telefonePrimario` varchar(255) NOT NULL,
  `telefoneSecundario` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `institution`
--

INSERT INTO `institution` (`id`, `name`, `endereco_cep`, `endereco_cidade`, `endereco_rua`, `telefonePrimario`, `telefoneSecundario`, `email`, `created_at`, `updated_at`) VALUES
(1, 'ETEC UIRAPURU', '05565060', 'Sâo Paulo', 'Rua Nazir Miguel', '123', '321', 'uirapuru@etec.sp.gov.br', '2022-12-09 00:59:17', NULL),
(2, 'ETEC Raposo', '05565060', 'São Paulo', 'Rua Nazaré Paulista', '5474', '4875', 'etec_raposo@etec.sp.gov.br', '2022-12-12 01:29:19', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `institution_admin`
--

CREATE TABLE `institution_admin` (
  `id` int(11) NOT NULL,
  `registroMatricula` int(11) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `birth_date` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `passwordHash` varchar(255) NOT NULL,
  `user_type` varchar(30) NOT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `is_active` tinyint(5) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `institution_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `institution_admin`
--

INSERT INTO `institution_admin` (`id`, `registroMatricula`, `first_name`, `last_name`, `birth_date`, `email`, `passwordHash`, `user_type`, `telefone`, `avatar`, `is_active`, `created_at`, `updated_at`, `institution_id`) VALUES
(1, 0, NULL, NULL, '00000000', 'uirapuru_admin@etec.sp.gov.br', '$2a$10$8gQeEhvYf0CTrueQGorF9.8D7Y13GDIdXcbmuD6Z0sGI2cQN429Vu', 'Admin', NULL, NULL, NULL, '2022-12-09 00:59:17', NULL, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `matter`
--

CREATE TABLE `matter` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `course_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `matter`
--

INSERT INTO `matter` (`id`, `name`, `created_at`, `updated_at`, `course_id`, `teacher_id`) VALUES
(1, 'Matemática', '2022-12-11 23:19:57', NULL, 1, 1),
(2, 'Educação Física', '2022-12-11 23:30:09', NULL, 1, 1),
(3, 'Física', '2022-12-11 23:30:09', NULL, 1, 1),
(4, 'Lingua Portuguesa', '2022-12-11 23:32:46', NULL, 1, 1),
(5, 'Lingua Estrangeira Moderna (Inglês)', '2022-12-11 23:32:46', NULL, 1, 1),
(6, 'Lingua Estrangeira Moderna (Espanhol)', '2022-12-11 23:32:46', NULL, 1, 1),
(7, 'Sociologia', '2022-12-11 23:32:46', NULL, 1, 1),
(8, 'Geografia', '2022-12-11 23:32:46', NULL, 1, 1),
(9, 'Historia', '2022-12-11 23:32:46', NULL, 1, 1),
(10, 'Biologia', '2022-12-11 23:32:46', NULL, 1, 1),
(11, 'Química', '2022-12-11 23:32:46', NULL, 1, 1),
(12, 'Programação Web III', '2022-12-11 23:32:46', NULL, 1, 1),
(13, 'Programação de Aplicativos Mobile II', '2022-12-11 23:32:46', NULL, 1, 1),
(14, 'Internet, Prot. e Seg. de Sistemas da Info.', '2022-12-11 23:33:28', NULL, 1, 1),
(15, 'Plan. e Desen. do Trabalho de Conclusão de Curso', '2022-12-11 23:33:28', NULL, 1, 1),
(16, 'Qualidade e Teste de Software', '2022-12-11 23:33:28', NULL, 1, 1),
(17, 'Filosofia', '2022-12-11 23:34:22', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `matter_avarege`
--

CREATE TABLE `matter_avarege` (
  `id` int(11) NOT NULL,
  `avarege` varchar(4) NOT NULL,
  `matter_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `matter_avarege`
--

INSERT INTO `matter_avarege` (`id`, `avarege`, `matter_id`, `student_id`) VALUES
(1, 'MB', 10, 1),
(2, 'MB', 2, 1),
(3, 'MB', 17, 1),
(4, 'MB', 3, 1),
(5, 'B', 8, 1),
(6, 'B', 9, 1),
(7, 'MB', 14, 1),
(8, 'MB', 6, 1),
(9, 'MB', 5, 1),
(10, 'MB', 4, 1),
(11, 'MB', 15, 1),
(12, 'B', 13, 1),
(13, 'MB', 16, 1),
(14, 'B', 11, 1),
(15, 'B', 7, 1),
(16, 'MB', 1, 1),
(17, 'B', 12, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `registroMatricula` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `birth_date` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `passwordHash` varchar(255) NOT NULL,
  `user_type` varchar(30) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `is_active` varchar(7) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `course_id` int(11) NOT NULL,
  `institution_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `student`
--

INSERT INTO `student` (`id`, `registroMatricula`, `first_name`, `last_name`, `birth_date`, `email`, `passwordHash`, `user_type`, `telefone`, `avatar`, `is_active`, `created_at`, `updated_at`, `course_id`, `institution_id`) VALUES
(1, 2260, 'Lucas', 'Matos', '08092004', 'lucas.costa391@etec.sp.gov.br', '$2b$10$MB0FP6vww5i0gvUXJJ8apuscjK.P8N3zuClu1IY1Y7oM0qkjnsLxS', 'Aluno', '11941819864', '..\\client\\public\\uploads\\1670590432718--perfil.jpg', 'Ativo', '2022-12-09 09:53:53', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `registroMatricula` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `birth_date` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `passwordHash` varchar(255) NOT NULL,
  `user_type` varchar(30) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `is_active` varchar(7) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `institution_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `teacher`
--

INSERT INTO `teacher` (`id`, `registroMatricula`, `first_name`, `last_name`, `birth_date`, `email`, `passwordHash`, `user_type`, `telefone`, `avatar`, `is_active`, `created_at`, `updated_at`, `institution_id`) VALUES
(1, 4747, 'José', 'Antonio', '08092004', 'jose.antonio@etec.sp.gov.br', '$2b$10$4DyJXf3qa3Pd.QwvArR7tuKmyHeZfN5xX3RPDX4JUydU7bhDJT8rW', 'Professor', '11941819864', '..\\client\\public\\uploads\\1670811026124--IMG_20180305_074850735.jpg', 'Ativo', '2022-12-11 23:10:30', NULL, 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_assignment_matter1_idx` (`matter_id`),
  ADD KEY `fk_assignment_student1_idx` (`student_id`);

--
-- Índices para tabela `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_course_course_level1_idx` (`course_level_id`);

--
-- Índices para tabela `course_level`
--
ALTER TABLE `course_level`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `institution`
--
ALTER TABLE `institution`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `institution_admin`
--
ALTER TABLE `institution_admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_institution_admin_institution1_idx` (`institution_id`);

--
-- Índices para tabela `matter`
--
ALTER TABLE `matter`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_matter_course1_idx` (`course_id`),
  ADD KEY `fk_matter_teacher1_idx` (`teacher_id`);

--
-- Índices para tabela `matter_avarege`
--
ALTER TABLE `matter_avarege`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_matter_avarege_matter1_idx` (`matter_id`),
  ADD KEY `fk_matter_avarege_student1_idx` (`student_id`);

--
-- Índices para tabela `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_student_course1_idx` (`course_id`),
  ADD KEY `fk_student_institution1_idx` (`institution_id`);

--
-- Índices para tabela `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_teacher_institution1_idx` (`institution_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `assignment`
--
ALTER TABLE `assignment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `course_level`
--
ALTER TABLE `course_level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `institution`
--
ALTER TABLE `institution`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `institution_admin`
--
ALTER TABLE `institution_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `matter`
--
ALTER TABLE `matter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `matter_avarege`
--
ALTER TABLE `matter_avarege`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `assignment`
--
ALTER TABLE `assignment`
  ADD CONSTRAINT `fk_assignment_matter1` FOREIGN KEY (`matter_id`) REFERENCES `matter` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_assignment_student1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `fk_course_course_level1` FOREIGN KEY (`course_level_id`) REFERENCES `course_level` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `institution_admin`
--
ALTER TABLE `institution_admin`
  ADD CONSTRAINT `fk_institution_admin_institution1` FOREIGN KEY (`institution_id`) REFERENCES `institution` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `matter`
--
ALTER TABLE `matter`
  ADD CONSTRAINT `fk_matter_course1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_matter_teacher1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `matter_avarege`
--
ALTER TABLE `matter_avarege`
  ADD CONSTRAINT `fk_matter_avarege_matter1` FOREIGN KEY (`matter_id`) REFERENCES `matter` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_matter_avarege_student1` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `fk_student_course1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_student_institution1` FOREIGN KEY (`institution_id`) REFERENCES `institution` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `fk_teacher_institution1` FOREIGN KEY (`institution_id`) REFERENCES `institution` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
