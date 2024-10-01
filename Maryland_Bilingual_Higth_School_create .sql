drop database dbmaryland;
create database dbmaryland;
use dbmaryland;
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
    email varchar(100)  NULL COMMENT 'Contiene el email del usuario',
    telefono char(9)  NULL COMMENT 'Contiene los datos del telefono',
    mensaje varchar(90)  NULL COMMENT 'contiene los mensajes',
    fecha_envio datetime  NULL COMMENT 'obtiene la fecha y envio del mensaje ',
    CONSTRAINT USUARIO_pk PRIMARY KEY (id)
) COMMENT 'Contiene los datos del Usuario';


-- foreign keys
-- Reference: COLEGIO_USUARIO (table: COLEGIO)
ALTER TABLE COLEGIO ADD CONSTRAINT COLEGIO_USUARIO FOREIGN KEY COLEGIO_USUARIO (USUARIO_id)
    REFERENCES USUARIO (id);

-- End of file.
INSERT INTO usuario (nombres, apellidos, email, telefono, mensaje)
VALUES
('Alicia', 'García Campos', 'alicia.garcia@gmail.com', '998459872', 'Quiero saber cuantos alumnos aceptan en el 5 de primaria'),
('Juana', 'Ávila Chumpitaz', 'juana.avila@gmail.com', '923568741', 'Quisiera saber uantos idiomas enseñan en la Institucion'),
('Ana', 'Torrez de la Cruz', 'ana.torrez@gmail.com', '935785225', 'Desde que edad aceptan a los niños de inicial'),
('Luis', 'Salvador Neyra', 'luis.salvador@gmail.com', '925860723', 'Cuantas secciones de 3 de secundaria tienen'),
('William', 'Manrique Martinez', 'william.manrique@gmail.com', '973561752', 'La institucion cuenta con una sala de Computacion'),
('Anthony', 'Carbonel Ezpinoza', 'anthony.carbonel@gmail.com', '965510782', 'Quisiera saber cuantos alumnos aceptan en el 1 de secundaria'),
('Marcos', 'Godoy Chumpitaz', 'marcos.godoy@gmail.com', '927689748', 'Cuanto es la mensualidad del nivel Inicial'),
('Patricia', 'Aguirre Palomino', 'patricia.aguirre@gmail.com', '993568759', 'La institucion tiene contactos con Universidad o Instituto '),
('Danny', 'Souza Sangineti', 'danny.souza@gmail.com', '954688787', 'Que documentos piden para inscribir ami hijo'),
('Mirella', 'Peña Perez', 'mirella.peña@gmail.com', '900568721', 'Cuanto es la mensualidad del nivel Primaria');

SELECT * FROM usuario;

create table calendarie (
	IDCAL		int auto_increment,
    NAMECAL		varchar(100),
    DESCCAL		varchar(500),
    DATECAL     date,
    PRIMARY KEY (IDCAL)
);
insert into calendarie 
(NAMECAL, DESCCAL, DATECAL) 
VALUES 
("Dia Internacional de la Mujer", "Esta jornada tiene como objetivo reconocer y homenajear los logros y luchas de las mujeres en la búsqueda de la igualdad de género y los derechos de las mujeres.", (STR_TO_DATE('08/03/2024', '%d/%m/%Y'))),
("Dia del Agua", "Esta celebración nos invita a reflexionar sobre nuestra responsabilidad individual y colectiva en la protección y preservación del agua, así como a tomar medidas concretas para garantizar su disponibilidad para las generaciones futuras.", (STR_TO_DATE('22/03/2024', '%d/%m/%Y'))),
("La Hora del Planeta", "La Hora del Planeta es más que un simple gesto simbólico. Pretende inspirar a las personas a adoptar medidas concretas en su vida diaria para reducir su huella ecológica, promover la energía renovable, utilizar transporte sostenible, reciclar y adoptar prácticas más amigables con el medio ambiente.", (STR_TO_DATE('26/03/2024', '%d/%m/%Y'))),
("Día de la Educación", "El Día de la Educación es una ocasión para reflexionar sobre los desafíos que enfrenta el sistema educativo a nivel mundial y promover acciones que garanticen una educación inclusiva y de calidad para todos.", (STR_TO_DATE('01/04/2024', '%d/%m/%Y'))),
("Día Mundial de la Salud", "El objetivo principal del Día Mundial de la Salud es promover la equidad en el acceso a la atención médica, destacar la importancia de la prevención de enfermedades y promover la conciencia sobre los determinantes sociales de la salud.", (STR_TO_DATE('07/04/2024', '%d/%m/%Y'))),
("Día de la Tierra", "El Día de la Tierra nos invita a reflexionar sobre nuestro papel como guardianes del planeta y a tomar medidas para proteger y preservar el medio ambiente. ", (STR_TO_DATE('22/04/2024', '%d/%m/%Y'))),
("Día Mundial del Trabajo", "Día del Trabajo es una fecha para reconocer y valorar la labor de los trabajadores en todas las industrias y destacar la importancia de garantizar condiciones laborales justas y equitativas para todos.", (STR_TO_DATE('01/05/2024', '%d/%m/%Y'))),
("Día de la Madre", "Día de la Madre es una ocasión para celebrar y honrar a las madres, expresar amor y agradecimiento por su amor incondicional y reconocer la importancia de su presencia en nuestras vidas.", (STR_TO_DATE('05/05/2024', '%d/%m/%Y'))),
("Día Mundial del Medio Ambiente", "Día Mundial del Medio Ambiente es una oportunidad para recordarnos la importancia de proteger y preservar nuestro entorno natural, así como para promover la responsabilidad individual y colectiva en la búsqueda de un futuro sostenible.", (STR_TO_DATE('05/06/2024', '%d/%m/%Y'))),
("Día del Padre", "Día del Padre es un momento para reconocer y valorar el amor y el compromiso de los padres en la vida de sus hijos.", (STR_TO_DATE('18/06/2023', '%d/%m/%Y'))),
("Día del Papa - San Pedro y San Pablo "," Día del Papa no solo se limita a los católicos, sino que también es reconocido y respetado por otras confesiones cristianas y personas de diferentes creencias como un símbolo de liderazgo espiritual y unión cristiana.", (STR_TO_DATE('29/06/2023', '%d/%m/%Y'))),
("Día del Maestro", "Día del Maestro es una oportunidad para expresar gratitud y reconocimiento a los maestros por su dedicación, paciencia, pasión y compromiso en la tarea de formar a las futuras generaciones, influyendo positivamente en el desarrollo de la sociedad.", (STR_TO_DATE('06/07/2023', '%d/%m/%Y'))),
("Día del Niño", "El Día del Niño es una fecha importante para reconocer la importancia de la infancia y trabajar en conjunto para asegurar un futuro mejor para todos los niños, brindándoles amor, cuidado, educación y oportunidades para crecer y desarrollarse plenamente.", (STR_TO_DATE('20/07/2023', '%d/%m/%Y'))),
("Día de la Proclamación de la Independencia del Perú", "El Día de la Proclamación de la Independencia del Perú es un momento para recordar y honrar el legado de aquellos que lucharon por la independencia y para renovar el compromiso de construir un Perú mejor, más justo y próspero para las futuras generaciones.", (STR_TO_DATE('28/07/2023', '%d/%m/%Y'))),
("Día de la Familia", "Día de la Familia se celebra en una fecha específica, es importante recordar y valorar el papel de la familia en nuestra vida cotidiana durante todo el año. ", (STR_TO_DATE('14/09/2023', '%d/%m/%Y'))),
("Día de la Primavera, de la Juventud", " Día de la Primavera y de la Juventud puede variar en cuanto a las actividades y tradiciones específicas de cada país, en general, la fecha se asocia con la alegría, la energía juvenil y el optimismo que trae consigo la llegada de la primavera.", (STR_TO_DATE('23/09/2023', '%d/%m/%Y'))),
("Navidad", "Navidad es una festividad que combina elementos religiosos y culturales, enfocada en celebrar el nacimiento de Jesucristo y promover valores como el amor, la generosidad y la unidad familiar.", (STR_TO_DATE('25/12/2023', '%d/%m/%Y')));


select * from calendarie;

select NAMECAL, DESCCAL, DATE_FORMAT(DATECAL, '%d/%m/%Y') AS DATECAL from calendarie;


