create database site_rachel;
use site_rachel;

create table usuarios(
id int not null auto_increment primary key,
nome varchar(45) not null,
genero char(1) not null,
data_nasc date not null,
Email varchar(80) not null,
senha varchar(80) not null
);