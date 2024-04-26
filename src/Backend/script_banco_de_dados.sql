-- Cria o banco de dados --
CREATE database doamais;

-- Usa o banco de dados --
USE doamais;

-- Cria as tabelas --
CREATE TABLE usuarios(
	id_usuario INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(12) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(18)
);

CREATE TABLE cupons(
	id_cupom INT PRIMARY KEY,
    data_envio DATETIME NOT NULL,
    ong_beneficiada VARCHAR(100) NOT NULL,
	valor_cupom DOUBLE NOT NULL,
    id_usuario INT NOT NULL,
    CONSTRAINT Fkid_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
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
	documento VARCHAR(255) NOT NULL, -- Caminmho onde foi armazenado o cupom fiscal --
    id_usuario INT NOT NULL,
    id_ong INT NOT NULL,
    CONSTRAINT Fkid_doador FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    CONSTRAINT Fkid_ong FOREIGN KEY (id_ong) REFERENCES ongs(id_ong)
);