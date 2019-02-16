-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 15, 2019 at 08:42 AM
-- Server version: 5.7.25-0ubuntu0.16.04.2
-- PHP Version: 7.1.17-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `log`
--

-- --------------------------------------------------------

--
-- Table structure for table `click`
--

CREATE TABLE `click` (
  `id` int(11) NOT NULL,
  `userid` varchar(50) NOT NULL,
  `btnnum` varchar(50) NOT NULL,
  `tasknum` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `srno` int(11) NOT NULL,
  `id` varchar(50) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `date_entry` datetime NOT NULL,
  `api_key` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
-- Table structure for table `incomes`
--

CREATE TABLE `incomes` (
  `id` int(11) NOT NULL,
  `income` decimal(13,2) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `userid` varchar(100) NOT NULL,
  `from_id` varchar(100) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `image`, `description`, `date`) VALUES
(1, '9 dead as fire breaks out at Delhi hotel; people jump from balcony', 'At least nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:18:01'),
(2, '1 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(3, '3 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(4, '4 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(5, '5 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(6, '6 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(7, '7 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(8, '8 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(9, '9 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(10, '10 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(11, '11 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(12, '12 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(13, '13 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(14, '14 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(15, '15 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(16, '16 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(17, '17 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(18, '18 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(19, '19 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01'),
(20, '20 - News \'s title is this for testing purposes', 'content of news 1 Hotel Arpit Palace in Delhi\'s Karol Bagh on Tuesday morning. "A couple of staff members jumped from the balcony of the hotel...We\'re not certain if they made it out alive," a fire official said. Around 20 fire engines were rushed to the spot.', '', 'nine people have been killed in a fire that broke out at Hotel Arpit Palace in Delhi\'s Karol Bagh', '2019-02-12 05:21:01');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL,
  `task` varchar(50) NOT NULL,
  `subtask` varchar(50) NOT NULL,
  `userid` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `sponsor` varchar(65) DEFAULT NULL,
  `u1` varchar(65) NOT NULL DEFAULT '0',
  `u2` varchar(65) NOT NULL DEFAULT '0',
  `u3` varchar(65) NOT NULL DEFAULT '0',
  `u4` varchar(65) NOT NULL DEFAULT '0',
  `u5` varchar(65) NOT NULL DEFAULT '0',
  `u6` varchar(65) DEFAULT '0',
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
  `status` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `click`
--
ALTER TABLE `click`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`srno`);

--
-- Indexes for table `incomes`
--
ALTER TABLE `incomes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `fk_tasks_users` (`userid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `click`
--
ALTER TABLE `click`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `srno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `incomes`
--
ALTER TABLE `incomes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
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
