-- Cria o banco de dados --
CREATE DATABASE doamais;

-- Usa o banco de dados --
USE doamais;

-- Cria as tabelas --
CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT UNIQUE,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL PRIMARY KEY,
    telefone VARCHAR(15),
    tipo_pessoa INT NOT NULL  -- 0 para CPF, 1 para CNPJ
);

CREATE TABLE Cupons (
    id_cupom INT  AUTO_INCREMENT PRIMARY KEY,
    data_envio DATETIME NOT NULL,
    ong_beneficiada VARCHAR(100),
    valor_cupom DOUBLE NOT NULL,
    email VARCHAR(100),
    CONSTRAINT Fkid_usuario FOREIGN KEY (email) REFERENCES Usuarios(email)
);

CREATE TABLE ongs (
    id_ong INT AUTO_INCREMENT UNIQUE,
    nome_ong VARCHAR(100) PRIMARY KEY,
    senha VARCHAR(255) NOT NULL,
    cnpj VARCHAR(14) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(18) NOT NULL
);

CREATE TABLE recebe (
    id_documento INT PRIMARY KEY AUTO_INCREMENT,
    documento VARCHAR(500) NOT NULL,
    email VARCHAR(100) NOT NULL,
    nome_ong VARCHAR(100) NOT NULL,
    CONSTRAINT Fkid_doador FOREIGN KEY (email) REFERENCES usuarios(email),
    CONSTRAINT Fkid_ong FOREIGN KEY (nome_ong) REFERENCES ongs(nome_ong)
);