create database dbloja;
use dbloja;
create table categoria(
id_categoria int auto_increment,
nome varchar(100),
constraint PK_Categoria primary key(id_categoria)
);

-- show create table cliente;
 CREATE TABLE `cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `cep` varchar(10) DEFAULT NULL,
  `limite` decimal(5,2) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `logradouro` varchar(200) DEFAULT NULL,
  `numero` int  DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
) ;

-- show create table pedido;
CREATE TABLE `pedido` (
 `id_pedido` int NOT NULL AUTO_INCREMENT,
 `id_cliente` int NOT NULL,
  `data`date NOT NULL,
  `total/pedido` decimal(5,2) NOT NULL,
PRIMARY KEY (`id_pedido`),
  KEY `FK_clientepedido` (`id_cliente`),
  CONSTRAINT `FK_clientepedido` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`)
 ) ;
 
 
 create table produto(
 id_produto int auto_increment,
 nome varchar(100),
preco decimal(5,2),
