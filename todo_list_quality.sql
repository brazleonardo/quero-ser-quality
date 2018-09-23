-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 23-Set-2018 às 18:34
-- Versão do servidor: 10.1.9-MariaDB
-- PHP Version: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo_list_quality`
--
CREATE DATABASE IF NOT EXISTS `todo_list_quality` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `todo_list_quality`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2018_09_22_200633_create_tarefas_table', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tarefas`
--

CREATE TABLE `tarefas` (
  `id` int(10) UNSIGNED NOT NULL,
  `titulo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `descricao` text COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `tarefas`
--

INSERT INTO `tarefas` (`id`, `titulo`, `descricao`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Atualização do novo site', 'Alterar cores do layout de a cordo com a solicitação do cliente pediu por e-mail.', 'concluído', '2018-09-22 21:00:59', '2018-09-23 15:13:44'),
(3, 'Site cliente X', 'Reunião sobre o projeto do novo site para o cliente X.', 'concluído', '2018-09-22 21:25:23', '2018-09-23 02:02:23'),
(5, 'Livro sobre php', 'Estudar sexta de 25 o conteúdo que fala sobre a classe string do php.', 'pendente', '2018-09-22 21:36:36', '2018-09-23 03:35:13'),
(6, 'Reunião TX coleção', 'Falar com o pessoal do designer sobre layout do site.', 'concluído', '2018-09-22 21:48:48', '2018-09-22 21:48:48'),
(7, 'Nova reunião S48', 'Falar sobre a página de contato e seus formulários.', 'concluído', '2018-09-22 21:53:44', '2018-09-22 21:53:44'),
(8, 'Teste novo sistema', 'Fazer no cadastro de informações dos usuários dos sistemas.', 'concluído', '2018-09-22 22:05:31', '2018-09-23 14:43:01'),
(9, 'App de turismo', 'Reunião sobre as telas do app.', 'pendente', '2018-09-22 23:02:29', '2018-09-23 14:43:03'),
(10, 'Formulário de contato', 'Verificar qual e-mail está configurado de todos os site internos.', 'concluído', '2018-09-23 00:07:47', '2018-09-23 02:46:19'),
(11, 'Criar uma newsletter', 'Cria o html da newletter da bobstore.', 'pendente', '2018-09-23 00:10:39', '2018-09-23 02:02:41'),
(13, 'Teste sistema app core 2', 'Fazer todos os testes do app core 2, para finalizar todas a pendências.', 'concluído', '2018-09-23 03:23:51', '2018-09-23 15:09:08'),
(14, 'Entrevista segunda 24', 'Entrevista na segunda feira as 15h.', 'pendente', '2018-09-23 14:41:42', '2018-09-23 14:43:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tarefas`
--
ALTER TABLE `tarefas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tarefas`
--
ALTER TABLE `tarefas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
