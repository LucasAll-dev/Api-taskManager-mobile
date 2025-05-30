create database IF NOT EXISTS taskDB CHARACTER SET = utf8 ;
use taskDB;

-- tabela de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
id_users INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL
) DEFAULT CHARSET = utf8;

-- tabela de tarefas 
CREATE TABLE IF NOT EXISTS tarefas (
    id_tasks INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id INT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    prioridade INT,
    descricao TEXT NOT NULL,
    concluida VARCHAR(60) DEFAULT 'Não concluida',
    data_criacao DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id_users)
) ENGINE=InnoDB DEFAULT CHARSET = utf8;