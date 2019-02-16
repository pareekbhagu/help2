-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2019 at 09:02 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `log`
--

-- --------------------------------------------------------

--
-- Table structure for table `click`
--

CREATE TABLE IF NOT EXISTS `click` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `btnnum` varchar(50) NOT NULL,
  `tasknum` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE IF NOT EXISTS `data` (
  `srno` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(50) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `date_entry` datetime NOT NULL,
  `api_key` varchar(50) NOT NULL,
  PRIMARY KEY (`srno`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`srno`, `id`, `uname`, `pass`, `ip`, `date_entry`, `api_key`) VALUES
(20, '95019', '95019', '95019', '95019', '2019-01-24 21:46:27', 'PFWPVIXjQQIZ'),
(19, 'balwinder', 'balsingh', '123456', '123bal', '2019-01-24 21:15:00', 'tznkBOkSXZFN'),
(23, 'dfbgn', 'bnm', 'xbnm', 'vbnm', '2019-01-25 15:27:17', 'buIzXZjLMAsz'),
(22, 'vbvnm', 'cvbn', 'cvbnm', 'xcvbn', '2019-01-25 00:46:31', 'cSYfIxtYOMAV'),
(21, 'abc', 'dfnb', 'dfg', 'sdfgnhm', '2019-01-25 00:46:31', 'cSYfIxtYOMAV'),
(24, 'dfbgn', 'bnm', 'xbnm', 'vbnm', '2019-01-25 15:27:17', 'buIzXZjLMAsz'),
(25, '', '', '', '', '2019-01-26 10:10:44', 'XosIRQLTMTuS');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `task` varchar(50) NOT NULL,
  `subtask` varchar(50) NOT NULL,
  `userid` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`task_id`),
  KEY `fk_tasks_users` (`userid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`task_id`, `task`, `subtask`, `userid`, `date`) VALUES
(1, '4', '5', 1, '2019-02-05 10:42:12');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` int(10) DEFAULT NULL,
  `sponsor` varchar(65) DEFAULT NULL,
  `u1` varchar(65) NOT NULL DEFAULT '0',
  `u2` varchar(65) NOT NULL DEFAULT '0',
  `u3` varchar(65) NOT NULL DEFAULT '0',
  `u4` varchar(65) NOT NULL DEFAULT '0',
  `u5` varchar(65) NOT NULL DEFAULT '0',
  `u6` varchar(65) NOT NULL,
  `u7` varchar(65) NOT NULL DEFAULT '0',
  `u8` varchar(65) NOT NULL DEFAULT '0',
  `u9` varchar(65) NOT NULL DEFAULT '0',
  `u10` varchar(65) NOT NULL DEFAULT '0',
  `pan` varchar(65) DEFAULT NULL,
  `Address` varchar(1000) DEFAULT NULL,
  `bank_ac` varchar(65) DEFAULT NULL,
  `ifsc` varchar(65) DEFAULT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `paid` int(1) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `token` varchar(100) DEFAULT NULL,
  `status` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `user_name`, `email`, `mobile`, `sponsor`, `u1`, `u2`, `u3`, `u4`, `u5`, `u6`, `u7`, `u8`, `u9`, `u10`, `pan`, `Address`, `bank_ac`, `ifsc`, `date_created`, `paid`, `password`, `token`, `status`) VALUES
(1, 'bal', 'singh', '78566', 'balsingh123', 950193374, '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2019-02-04 09:12:52', 0, '12345', 'UfMsqQpyGAlT', '0'),
(2, 'deep', 'singh', '80473', 'bal', 950193374, '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2019-02-04 09:20:49', 0, '12345', 'TDjVYeDRdGpf', '1'),
(3, 'hardeep', 'singh', '48352', 'bal', 950193374, '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2019-02-04 10:02:34', 0, '12345', 'DnPZCbRpmhiF', '1'),
(4, 'hardeep123', 'singh', '48352', 'bal', 950193374, '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2019-02-04 10:02:34', 0, '12345', 'DnPZCbRpmhiF', '1'),
(5, 'varinder', 'singh', '75143', 'bal@gmail.com', 2147483647, '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2019-02-04 10:15:22', 0, '1234567', 'ZitRTQQuEDLI', '0'),
(6, 'simmu', 'dk', '22499', 'dkl@gmail.com', 2147483647, '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', NULL, NULL, NULL, NULL, '2019-02-04 10:44:30', NULL, '123', 'XMNqlrLAeDKc', '0'),
(7, 'simmu', 'dk', '73675', 'dkl@gmail.com', 2147483647, '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', NULL, NULL, NULL, NULL, '2019-02-04 10:46:34', NULL, '123', 'acpVFAxABQHd', '0'),
(8, 'simmu', 'dk', '22091', 'dkl@gmail.com', 2147483647, '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', NULL, NULL, NULL, NULL, '2019-02-04 10:47:39', NULL, '123', 'mYVGXZbgyjvX', '0'),
(9, 'simmu', 'dk', '12249', 'dkl@gmail.com', 2147483647, '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', NULL, NULL, NULL, NULL, '2019-02-04 10:50:29', NULL, '123', 'CboDZqQyxTrQ', '0'),
(10, 'hjbmgh', 'jnbgv', 'H90403', 'bvccvvbn', 967874674, NULL, '0', '0', '0', '0', '0', '', '0', '0', '0', '0', NULL, NULL, NULL, NULL, '2019-02-04 12:36:00', NULL, 'dfgh', 'hdZNxRMJaNXh', '1');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `fk_tasks_users` FOREIGN KEY (`userid`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
