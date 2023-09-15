-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15/09/2023 às 02:05
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `test`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `valor` float(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `quantidade`, `valor`) VALUES
(1, 'game 2015', 10, 2000.00),
(2, 'game 2018', 15, 1000.00),
(3, 'jogo ps1', 10, 100.00),
(4, 'jogo ps2', 16, 150.00);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `data_cadastro`) VALUES
(1, 'Beto Silva', 'bsilva@email.com', '2023-09-14 00:15:54'),
(2, 'Rodrigo', 'rodrigo@terra.com', '2023-09-14 08:13:48'),
(3, 'ana maria', 'anam@gmail.com', '2023-09-14 08:13:48'),
(4, 'beto silva', 'bsilta@gmail.com', '2023-09-14 08:14:12'),
(5, 'cris oliveira', 'coliveira@hotmail.com', '2023-09-14 08:14:12'),
(6, 'maria eduarda', 'medu@gmail.com', '2023-09-14 08:14:53'),
(7, 'daniel sousa', 'dsousa@terra.com', '2023-09-14 08:14:53'),
(8, 'Alexandre Silva', 'asilva@gmail.com', '2023-09-14 08:15:32'),
(9, 'Alexia Sosua', 'asousa@gmail.com', '2023-09-14 08:15:32'),
(10, 'AAAAAAAAAA', 'aaa@gmail.com', '2023-09-14 09:08:51');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
