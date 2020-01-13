# HackathonAgoraVai
Projeto para aprendizado utilizando Angular e Spring :D

*(Primeira vez que o Angular rodar após a clonagem:

npm install

ng update

npm update

)

Banco:

CREATE DATABASE concursos;

CREATE TABLE `concursos`.`candidatos`(
`id` BIGINT NOT NULL AUTO_INCREMENT,
`nome` VARCHAR(255) NOT NULL,
`cidade` VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `concursos`.`exames`(
`id` BIGINT NOT NULL AUTO_INCREMENT,
`nome` VARCHAR(255) NOT NULL,
`quantidade_vagas` INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `concursos`.`inscricao` (
`exame_id` bigint(20) NOT NULL,
`candidato_id` bigint(20) NOT NULL,
`nota` double DEFAULT NULL,
PRIMARY KEY (`exame_id`, `candidato_id`),
FOREIGN KEY (`candidato_id`) REFERENCES candidatos(id),
FOREIGN KEY (`exame_id`) REFERENCES exames(id)
)
