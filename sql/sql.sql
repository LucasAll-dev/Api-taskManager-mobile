create database taskDB;
use taskDB;

-- tabela de usuarios
CREATE TABLE usuarios (
id_users INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL
);