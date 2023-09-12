CREATE DATABASE SmartConecta;

USE SmartConecta;

CREATE TABLE Usuario(
	idUser INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(15) NOT NULL,
    telefone VARCHAR(15)
);

CREATE TABLE Despesa(
	idDesp INT PRIMARY KEY AUTO_INCREMENT,
    nomeDesp VARCHAR(45) NOT NULL,
    dataDesp DATE NOT NULL,
    horaDesp TIME,
    descDesp VARCHAR(200) NOT NULL,
    fkUser INT,
    FOREIGN KEY(fkUser) REFERENCES Usuario(idUser)
);

CREATE TABLE Entrada(
	idEntr INT PRIMARY KEY AUTO_INCREMENT,
    nomeEntr VARCHAR(45) NOT NULL,
    dataEntr DATE NOT NULL,
    horaEntr TIME,
    descEntr VARCHAR(200) NOT NULL,
    fkUser INT,
    FOREIGN KEY(fkUser) REFERENCES Usuario(idUser)
);

select * from Usuario;