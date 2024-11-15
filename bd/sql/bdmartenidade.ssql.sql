-- drop database dbmaternidade;
create database dbmaternidade;
use dbmaternidade;
 -- show create table mae;
 CREATE TABLE `Mae` (
  `id_mae` int NOT NULL AUTO_INCREMENT,
  `rg` varchar(150) NOT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  constraint PK_Mae PRIMARY KEY (`id_mae`)
) ;

-- show create table medico; 
CREATE TABLE `medico` (
 `crm` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `especialidade` varchar(150) NOT NULL,
  constraint PK_Medico PRIMARY KEY (`crm`)
 ) ;

-- show create table bebe;
CREATE TABLE `bebe` (
  `id_bebe` int NOT NULL AUTO_INCREMENT,
  `id_mae` int NOT NULL,
  `crm` int NOT NULL,
  `dt_nascimento` date NOT NULL,
  `peso` decimal(5,2) NOT NULL,
  `altura` int NOT NULL,
 constraint PK_Bebe PRIMARY KEY (`id_bebe`),
  CONSTRAINT `FK_MaeBebe` FOREIGN KEY (`id_mae`) REFERENCES `mae` (`id_mae`),
  CONSTRAINT `FK_MedicoBebe` FOREIGN KEY (`crm`) REFERENCES `medico` (`crm`)
) ;