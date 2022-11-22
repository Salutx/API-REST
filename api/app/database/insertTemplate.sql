INSERT INTO institution (name, endereco_cep, endereco_cidade, endereco_rua, telefonePrimario, telefoneSecundario, email)
VALUES ("ETEC UIRAPURU", "05565060", "Sâo Paulo", "Rua Nazir Miguel", "123", "321", "uirapuru@etec.sp.gov.br");

INSERT INTO institution_admin (registroMatricula, birth_date, email, passwordHash, user_type, institution_id)
VALUES (0, "00000000", "uirapuru_admin@etec.sp.gov.br", "$2a$10$8gQeEhvYf0CTrueQGorF9.8D7Y13GDIdXcbmuD6Z0sGI2cQN429Vu", "Admin", 1);

INSERT INTO course_level (level)
VALUES ("3ETIM");

INSERT INTO course (name, course_level_id)
VALUES ("Desenvolvimento de Sistemas", 1);

INSERT INTO student (registroMatricula, first_name, last_name, birth_date, email, passwordHash, user_type, telefone, is_active, course_id, institution_id)
VALUES (2260, "Lucas", "Costa", "08092004", "lucas.costa391@etec.sp.gov.br", "$2a$10$iATTjeLFM98gb1F0JfsJUOmovbE3FLXIBWMc8dYcIHgPmWqSFLsC.", "Aluno", "11941819864", 1, 1, 1);

INSERT INTO teacher (registroMatricula, first_name, last_name, birth_date, email, passwordHash, user_type, telefone, is_active, institution_id)
VALUES (1147, "Claudio", "Vargar", "14041997", "claudio.vargas@etec.sp.gov.br", "$2a$10$7dMhHlNsZTRoN3kVLKeEcu.GgGNad2PJSGicF9DwpnwkM8k525zlm", "Professor", "11942219287", 1, 1);