-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-06-11 02:34:24.573

-- tables
-- Table: COLEGIO
CREATE TABLE COLEGIO (
    id int  NOT NULL,
    Correo varchar(90)  NULL,
    USUARIO_id int  NOT NULL,
    CONSTRAINT COLEGIO_pk PRIMARY KEY (id)
) COMMENT 'Contienen los datos del Colegio';

-- Table: USUARIO
CREATE TABLE USUARIO (
    id int  NOT NULL AUTO_INCREMENT COMMENT 'Contiene el id del usuario',
    nombres varchar(50)  NULL COMMENT 'Contiene los no,bres del usuario',
    apellidos varchar(50)  NULL COMMENT 'Contiene los apellidos del usuario',
    email varchar(20)  NULL COMMENT 'Contiene el email del usuario',
    telefono char(9)  NULL COMMENT 'Contiene los datos del telefono',
    mensaje varchar(90)  NULL COMMENT 'contiene los mensajes',
    fecha_envio datetime  NULL COMMENT 'obtiene la fecha y envio del mensaje ',
    CONSTRAINT USUARIO_pk PRIMARY KEY (id)
) COMMENT 'Contiene los datos del Usario';

-- End of file.

