-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: 2016-12-25 05:55:40
-- 服务器版本： 5.5.49-log
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) CHARACTER SET utf8 NOT NULL,
  `newstitle` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 NOT NULL,
  `newsdate` datetime NOT NULL,
  `newssrc` char(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newsdate`, `newssrc`) VALUES
(4, '精选', '你的名字', 'img/news3.jpg', '2016-12-10 00:00:00', '新闻'),
(5, '社会', '机器人', 'img/news2.jpg', '2016-12-10 00:00:00', '新闻'),
(6, '本地', '太空', 'img/news1.jpg', '2016-12-10 00:00:00', '新闻'),
(8, '百家', '机器人', 'img/news2.jpg', '2016-12-10 00:00:00', '新闻'),
(9, '图片', '你的名字', 'img/news3.jpg', '2016-12-10 00:00:00', '新闻'),
(10, '娱乐', '太空', 'img/news1.jpg', '2016-12-10 00:00:00', '新闻'),
(11, '本地', '222', '333', '2016-12-24 00:00:00', '333'),
(12, '军事', '你的名字', 'img/news3.jpg', '2016-12-14 00:00:00', '新闻');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
