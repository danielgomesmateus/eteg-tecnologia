-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `db_eteg` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_eteg`;

DROP TABLE IF EXISTS `filme`;
CREATE TABLE `filme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `genero` varchar(35) NOT NULL,
  `diretor` varchar(35) NOT NULL,
  `quantidade` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `filme` (`id`, `nome`, `genero`, `diretor`, `quantidade`) VALUES
(1,	'De Volta Para o Futuro',	'Ficção cientifica',	'Robert Zemeckis',	15),
(2,	'De Volta Para o Futuro 2',	'Ficção cientifica',	'Robert Zemeckis',	4),
(3,	'De Volta Para o Futuro 3',	'Ficção cientifica',	'Robert Zemeckis',	9),
(4,	'O Poderoso Chefão',	'Drama',	'Francis Ford Coppola',	5);

DROP TABLE IF EXISTS `locacao`;
CREATE TABLE `locacao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filme_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `data_locacao` date NOT NULL,
  `data_devolucao` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `filme_id` (`filme_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `locacao_ibfk_1` FOREIGN KEY (`filme_id`) REFERENCES `filme` (`id`),
  CONSTRAINT `locacao_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `locacao` (`id`, `filme_id`, `usuario_id`, `data_locacao`, `data_devolucao`) VALUES
(2,	1,	4,	'2020-09-01',	'2020-11-19'),
(3,	1,	1,	'2020-11-03',	'2020-11-06'),
(4,	3,	1,	'2020-11-03',	'2020-11-06');

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sexo` char(1) DEFAULT NULL,
  `cpf` varchar(14) NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `usuario` (`id`, `nome`, `sexo`, `cpf`, `data_nascimento`) VALUES
(1,	'Jimi Hendrix',	'M',	'249.743.800-52',	'1942-12-27'),
(4,	'Gary Moore',	'M',	'037.520.510-19',	'1987-09-17'),
(10,	'BB King',	'M',	'604.410.210-69',	'1976-10-10'),
(11,	'Aretha Franklin',	'F',	'796.711.410-80',	'1942-03-24'),
(12,	'Joe Bonamassa',	'M',	'810.338.130-60',	'1977-05-08');

-- 2020-03-07 21:58:02
