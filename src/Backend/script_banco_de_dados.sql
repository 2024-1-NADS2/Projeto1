-- Cria o banco de dados --
CREATE DATABASE doamais;

-- Usa o banco de dados --
USE doamais;

-- Cria as tabelas --

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT UNIQUE,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL PRIMARY KEY,
    telefone VARCHAR(15),
    tipo_pessoa INT NOT NULL  -- 0 para CPF, 1 para CNPJ --
);

CREATE TABLE cupons (
    id_cupons INT  AUTO_INCREMENT PRIMARY KEY,
    data_envio DATETIME NOT NULL,
    ong_beneficiada VARCHAR(100),
    valor_cupom DOUBLE NOT NULL,
    email VARCHAR(100),
    CONSTRAINT Fkemail_usuario FOREIGN KEY (email) REFERENCES usuarios(email)
);

CREATE TABLE ongs(
	id_ong INT PRIMARY KEY,
	senha VARCHAR(12) NOT NULL,
    cnpj VARCHAR(14) NOT NULL,
    nome_ong VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(18) NOT NULL
);

CREATE TABLE recebe(
	documento VARCHAR(255) NOT NULL, -- Caminmho onde foi armazenado o cupons fiscal --
    email VARCHAR(100) NOT NULL,
    id_ong INT NOT NULL,
    CONSTRAINT Fkemail_doador FOREIGN KEY (email) REFERENCES usuarios(email),
    CONSTRAINT Fkid_ong FOREIGN KEY (id_ong) REFERENCES ongs(id_ong)
);