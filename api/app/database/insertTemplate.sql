INSERT INTO institution (name, endereco_cep, endereco_cidade, endereco_rua, telefonePrimario, telefoneSecundario, email)
VALUES ("ETEC UIRAPURU", "05565060", "Sâo Paulo", "Rua Nazir Miguel", "123", "321", "uirapuru@etec.sp.gov.br");

INSERT INTO institution_admin (registroMatricula, birth_date, email, passwordHash, user_type, institution_id)
VALUES (0, "00000000", "uirapuru_admin@etec.sp.gov.br", "$2a$10$8gQeEhvYf0CTrueQGorF9.8D7Y13GDIdXcbmuD6Z0sGI2cQN429Vu", "Admin", 1);

INSERT INTO course_level (level)
VALUES ("3ETIM");

INSERT INTO course (course_name, course_abbr, course_level_id)
VALUES ("Desenvolvimento de Sistemas", "DS", 1);