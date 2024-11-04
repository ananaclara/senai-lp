create database dbclinica;
use dbclinica;
-- create table medico(
CREATE TABLE `medico` (
 `crm` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `idade` int check(idade > 23),
  `especialidade` varchar(20) NOT NULL default('ortopedia'),
  `cpf` varchar(15) unique not null,
  constraint PK_medico primary key(crm)
 ) ;
 
 create table sala(
 `numero_sala` int check(numero_sala>1 and numero_sala < 50),
 `andar` int not null,
 constraint PK_sala primary key(numero_sala)
 );
 
 create table paciente(
 cpf varchar(11),
 nome varchar(40) not null,
 dt_nascimento date,
 cidade varchar(30) default('taguatinga'),
 doenca varchar(40) not null,
 plano_saude varchar(40) not null default('SUS'),
 constraint  PK_paciente primary key(cpf)
 );
  
create table funcionario(
matricula int auto_increment,
nome varchar(40) not null,
dt_nascimento date not null,
dt_admissao date not null,
cargo varchar(40) not null default('assistente medico'),
salario decimal(8,2) not null  default(1510.00),
constraint PK_Funcionario primary key (matricula)
);

create table consulta(
codigo_consulta int auto_increment,
dt_horario datetime,
constraint PK_consulta primary key (codigo_consulta)
);

alter table consulta add(
crm int not null,
cpf varchar(11) not null,
constraint FK_ConsultaMedico foreign key(crm) references medico(crm),
constraint FK_Consulta_Paciente foreign key(cpf) references paciente(cpf)
);

alter table sala add(
crm int,
constraint FK_SalaMedico foreign key(crm) references medico(crm)
);
