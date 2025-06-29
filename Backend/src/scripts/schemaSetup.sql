DROP DATABASE IF EXISTS library;
CREATE DATABASE IF NOT EXISTS `library` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `library`;

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NOT NULL,
  `author` VARCHAR(100) NOT NULL,
  `rating` DECIMAL(2,1) NOT NULL,
  `price` DECIMAL(5,2) NOT NULL,
  `publishDate` DATETIME NOT NULL,
  `imageUrl` VARCHAR(300),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `books` (`title`, `author`, `rating`, `price`, `publishDate`, `imageUrl`) VALUES
('The Purpose Driven Life', 'Rick Warren', 4.7, 14.99, '2002-10-01 00:00:00', 'https://prodimage.images-bn.com/pimages/9780310264835_p0_v4_s1200x630.jpg'),
('Mere Christianity', 'C.S. Lewis', 4.8, 12.50, '1952-04-01 00:00:00', 'https://prodimage.images-bn.com/pimages/9780060652920_p0_v4_s1200x630.jpg'),
('The Bible', 'Various Authors', 4.9, 18.00, '0001-01-01 00:00:00', 'https://prodimage.images-bn.com/pimages/9780310436045_p0_v4_s1200x630.jpg'),
('The Chronicles of Narnia', 'C.S. Lewis', 4.8, 29.99, '1956-09-01 00:00:00', 'https://prodimage.images-bn.com/pimages/9780066238500_p0_v4_s1200x630.jpg'),
('The Pilgrim\'s Progress', 'John Bunyan', 4.5, 11.75, '1678-01-01 00:00:00', 'https://prodimage.images-bn.com/pimages/9780141439556_p0_v4_s1200x630.jpg'),
('The Confessions of St. Augustine', 'St. Augustine', 4.7, 10.99, '0397-01-01 00:00:00', 'https://prodimage.images-bn.com/pimages/9780140441147_p0_v4_s1200x630.jpg'),
('Crazy Love', 'Francis Chan', 4.6, 13.45, '2008-05-01 00:00:00', 'https://upload.wikimedia.org/wikipedia/en/2/22/Crazylove_bookcover.jpg'),
('Knowing God', 'J.I. Packer', 4.7, 16.00, '1973-11-01 00:00:00', 'https://m.media-amazon.com/images/I/61P3-A4ZMDL._AC_UF1000,1000_QL80_.jpg'),
('The Case for Christ', 'Lee Strobel', 4.6, 15.25, '1998-03-01 00:00:00', 'https://m.media-amazon.com/images/I/81EAU8IKS3L._AC_UF1000,1000_QL80_.jpg'),
('The Screwtape Letters', 'C.S. Lewis', 4.5, 9.99, '1942-02-01 00:00:00', 'https://m.media-amazon.com/images/I/81nbeoJAebL._UF1000,1000_QL80_DpWeblab_.jpg'),
('Radical', 'David Platt', 4.4, 12.00, '2010-05-01 00:00:00', 'https://m.media-amazon.com/images/I/61-B1S+iGKL.jpg'),
('Forgotten God', 'Francis Chan', 4.5, 11.99, '2009-09-01 00:00:00', 'https://g.christianbook.com/dg/slideshow/f400/403221_1_ftc.jpg'),
('Desiring God', 'John Piper', 4.6, 13.95, '1986-07-01 00:00:00', 'https://m.media-amazon.com/images/I/51gVOyXfFYL._AC_UF1000,1000_QL80_.jpg'),
('Not a Fan', 'Kyle Idleman', 4.5, 14.00, '2011-06-01 00:00:00', 'https://m.media-amazon.com/images/I/61D5sHVMAnL.jpg');