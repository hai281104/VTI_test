-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th5 08, 2026 lúc 02:43 PM
-- Phiên bản máy phục vụ: 5.7.31
-- Phiên bản PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `voucher_management`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `phone`, `created_at`) VALUES
(1, 'Nguyễn Văn An', 'an.nguyen@email.com', '0901234567', '2026-01-10 08:30:00'),
(2, 'Trần Thị Bình', 'binh.tran@email.com', '0912345678', '2026-01-12 09:15:00'),
(3, 'Lê Hoàng Cường', 'cuong.le@email.com', '0923456789', '2026-01-15 10:20:00'),
(4, 'Phạm Dung', 'dung.pham@email.com', NULL, '2026-01-20 14:00:00'),
(5, 'Hoàng Văn Em', 'em.hoang@email.com', '0945678901', '2026-02-01 16:45:00'),
(6, 'Đặng Thu Phương', 'phuong.dang@email.com', '0956789012', '2026-02-05 11:10:00'),
(7, 'Vũ Đức Trí', 'tri.vu@email.com', '0967890123', '2026-02-14 19:30:00'),
(8, 'Bùi Thị Tám', 'tam.bui@email.com', '0978901234', '2026-02-28 07:45:00'),
(9, 'Đỗ Khắc Ngọc', 'ngoc.do@email.com', NULL, '2026-03-05 13:20:00'),
(10, 'Hồ Quang Hiếu', 'hieu.ho@email.com', '0990123456', '2026-03-10 15:55:00'),
(11, 'Ngô Phương Lan', 'lan.ngo@email.com', '0801234567', '2026-03-15 08:00:00'),
(12, 'Lý Tiểu Long', 'long.ly@email.com', '0812345678', '2026-03-20 12:12:00'),
(13, 'Đoàn Dự', 'du.doan@email.com', '0823456789', '2026-03-25 09:30:00'),
(14, 'Trịnh Công Sơn', 'son.trinh@email.com', '0834567890', '2026-04-01 17:10:00'),
(15, 'Mai Phương Thúy', 'thuy.mai@email.com', NULL, '2026-04-05 20:20:00'),
(16, 'Tạ Quang Bửu', 'buu.ta@email.com', '0856789012', '2026-04-10 10:05:00'),
(17, 'Lâm Tâm Như', 'nhu.lam@email.com', '0867890123', '2026-04-15 14:40:00'),
(18, 'Tôn Ngộ Không', 'khong.ton@email.com', '0878901234', '2026-04-20 16:15:00'),
(19, 'Chuẩn Đề', 'de.chuan@email.com', '0889012345', '2026-05-01 08:50:00'),
(20, 'Thích Ca', 'ca.thich@email.com', '0890123456', '2026-05-05 11:30:00'),
(21, 'Phan Văn Tài', 'tai.phan@email.com', '0321234567', '2026-05-10 09:00:00'),
(22, 'Nguyễn Mai Anh', 'maianh.nguyen@email.com', '0332345678', '2026-05-11 10:15:00'),
(23, 'Hoàng Thị Thu', 'thu.hoang@email.com', '0343456789', '2026-05-12 14:30:00'),
(24, 'Đinh Công Mạnh', 'manh.dinh@email.com', NULL, '2026-05-15 08:20:00'),
(25, 'Lê Thị Lan Anh', 'lananh.le@email.com', '0365678901', '2026-05-18 16:00:00'),
(26, 'Vương Tuấn Khải', 'khai.vuong@email.com', '0376789012', '2026-05-20 11:45:00'),
(27, 'Dương Cẩm Lynh', 'lynh.duong@email.com', '0387890123', '2026-05-22 09:30:00'),
(28, 'Trần Đăng Khoa', 'khoa.tran@email.com', '0398901234', '2026-05-25 15:10:00'),
(29, 'Nguyễn Bích Ngọc', 'ngoc.nguyen@email.com', '0709012345', '2026-05-28 13:25:00'),
(30, 'Bùi Xuân Huấn', 'huan.bui@email.com', '0760123456', '2026-06-01 10:00:00'),
(31, 'Phạm Quang Minh', 'minh.pham@email.com', '0771234567', '2026-06-02 08:45:00'),
(32, 'Lý Thu Thảo', 'thao.ly@email.com', '0782345678', '2026-06-05 14:15:00'),
(33, 'Đỗ Hữu Trọng', 'trong.do@email.com', NULL, '2026-06-10 09:50:00'),
(34, 'Vũ Bích Hữu', 'huu.vu@email.com', '0794567890', '2026-06-12 11:20:00'),
(35, 'Hồ Tấn Tài', 'tai.ho@email.com', '0565678901', '2026-06-15 16:30:00'),
(36, 'Cao Thái Sơn', 'son.cao@email.com', '0586789012', '2026-06-18 08:10:00'),
(37, 'Đặng Lê Nguyên Vũ', 'vu.dang@email.com', '0597890123', '2026-06-20 10:05:00'),
(38, 'Trương Ngọc Ánh', 'anh.truong@email.com', '0818901234', '2026-06-22 15:40:00'),
(39, 'Lưu Diệc Phi', 'phi.luu@email.com', NULL, '2026-06-25 09:15:00'),
(40, 'Trần Quán Hy', 'hy.tran@email.com', '0830123456', '2026-06-30 14:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vouchers`
--

DROP TABLE IF EXISTS `vouchers`;
CREATE TABLE IF NOT EXISTS `vouchers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) NOT NULL,
  `discount_percent` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `expired_date` date NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'ACTIVE',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `vouchers`
--

INSERT INTO `vouchers` (`id`, `code`, `discount_percent`, `quantity`, `expired_date`, `status`, `created_at`) VALUES
(2, 'TET2026', 20, 500, '2026-02-28', 'INACTIVE', '2026-01-10 00:00:00'),
(3, 'SPRING15', 15, 200, '2026-04-30', 'INACTIVE', '2026-03-01 00:00:00'),
(4, 'SUMMER25', 25, 300, '2026-08-31', 'ACTIVE', '2026-05-01 00:00:00'),
(5, 'AUTUMN10', 10, 400, '2026-10-31', 'ACTIVE', '2026-05-01 00:00:00'),
(6, 'WINTER20', 20, 300, '2026-12-31', 'ACTIVE', '2026-05-01 00:00:00'),
(7, 'VIP50', 50, 50, '2026-12-31', 'ACTIVE', '2026-01-01 00:00:00'),
(8, 'FLASH1', 30, 10, '2026-05-10', 'ACTIVE', '2026-05-08 00:00:00'),
(9, 'FLASH2', 40, 10, '2026-05-15', 'ACTIVE', '2026-05-08 00:00:00'),
(10, 'BIRTHDAY99', 99, 5, '2026-12-31', 'ACTIVE', '2026-01-01 00:00:00'),
(11, 'NEWUSER20', 20, 1000, '2026-12-31', 'ACTIVE', '2026-01-01 00:00:00'),
(12, 'WOMENDAY', 30, 200, '2026-03-10', 'INACTIVE', '2026-03-01 00:00:00'),
(13, 'MENSAY', 15, 200, '2026-11-20', 'ACTIVE', '2026-05-01 00:00:00'),
(14, 'HALFWAY', 50, 100, '2026-06-30', 'ACTIVE', '2026-05-01 00:00:00'),
(15, 'LUCKY88', 88, 8, '2026-08-08', 'ACTIVE', '2026-05-01 00:00:00'),
(16, 'FREESHIP100', 10, 5000, '2027-01-01', 'ACTIVE', '2026-05-01 00:00:00'),
(17, 'BLACKFRIDAY', 70, 100, '2026-11-30', 'ACTIVE', '2026-05-01 00:00:00'),
(18, 'CYBERMONDAY', 60, 100, '2026-12-05', 'ACTIVE', '2026-05-01 00:00:00'),
(19, 'XMAS2026', 25, 500, '2026-12-26', 'ACTIVE', '2026-05-01 00:00:00'),
(20, 'SORRYDELAY', 15, 50, '2026-05-30', 'ACTIVE', '2026-05-08 00:00:00'),
(21, 'PAYDAY26', 15, 1000, '2026-07-05', 'ACTIVE', '2026-06-01 00:00:00'),
(22, 'MIDNIGHT50', 50, 50, '2026-06-15', 'INACTIVE', '2026-06-10 00:00:00'),
(23, 'WEEKEND20', 20, 500, '2026-08-31', 'ACTIVE', '2026-06-01 00:00:00'),
(24, 'MOMO10', 10, 2000, '2026-12-31', 'ACTIVE', '2026-06-01 00:00:00'),
(25, 'ZALOPAY15', 15, 1500, '2026-12-31', 'ACTIVE', '2026-06-01 00:00:00'),
(26, 'SHOPEEPAY', 20, 800, '2026-09-30', 'ACTIVE', '2026-06-01 00:00:00'),
(27, 'VNPAYQR', 25, 300, '2026-10-31', 'ACTIVE', '2026-06-01 00:00:00'),
(28, 'APPLEPAY5', 5, 5000, '2027-01-01', 'ACTIVE', '2026-06-01 00:00:00'),
(29, 'STUDENT30', 30, 200, '2026-09-05', 'ACTIVE', '2026-08-01 00:00:00'),
(30, 'TEACHER20', 20, 150, '2026-11-20', 'ACTIVE', '2026-11-01 00:00:00'),
(31, 'LOVE1402', 14, 500, '2026-02-14', 'INACTIVE', '2026-02-01 00:00:00'),
(32, 'HALLOWEEN', 31, 100, '2026-10-31', 'ACTIVE', '2026-10-01 00:00:00'),
(33, 'GIOSTAR', 20, 300, '2026-04-18', 'INACTIVE', '2026-04-01 00:00:00'),
(34, 'NATIONAL', 29, 200, '2026-09-02', 'ACTIVE', '2026-08-25 00:00:00'),
(35, 'MEGA1111', 50, 1000, '2026-11-11', 'ACTIVE', '2026-11-01 00:00:00'),
(36, 'MEGA1212', 50, 1000, '2026-12-12', 'ACTIVE', '2026-12-01 00:00:00'),
(37, 'NOEL26', 25, 800, '2026-12-25', 'ACTIVE', '2026-12-01 00:00:00'),
(38, 'NEWYEAR27', 27, 2027, '2027-01-05', 'ACTIVE', '2026-12-15 00:00:00'),
(39, 'REFUND10', 10, 50, '2026-07-30', 'ACTIVE', '2026-06-05 00:00:00'),
(40, 'APPONLY', 15, 3000, '2026-12-31', 'ACTIVE', '2026-06-01 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `voucher_usages`
--

DROP TABLE IF EXISTS `voucher_usages`;
CREATE TABLE IF NOT EXISTS `voucher_usages` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `voucher_id` bigint(20) NOT NULL,
  `used_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `voucher_id` (`voucher_id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `voucher_usages`
--

INSERT INTO `voucher_usages` (`id`, `user_id`, `voucher_id`, `used_at`) VALUES
(1, 1, 1, '2026-01-11 10:00:00'),
(2, 2, 1, '2026-01-13 14:20:00'),
(3, 3, 2, '2026-01-20 09:15:00'),
(4, 4, 2, '2026-01-25 16:45:00'),
(5, 5, 3, '2026-03-05 11:30:00'),
(6, 1, 11, '2026-03-10 08:00:00'),
(7, 6, 11, '2026-02-10 20:10:00'),
(8, 7, 12, '2026-03-08 19:00:00'),
(9, 8, 12, '2026-03-08 21:30:00'),
(10, 9, 1, '2026-03-15 15:45:00'),
(11, 10, 7, '2026-03-20 12:00:00'),
(12, 11, 4, '2026-05-02 09:00:00'),
(13, 12, 4, '2026-05-03 10:15:00'),
(14, 13, 8, '2026-05-08 08:30:00'),
(15, 14, 8, '2026-05-08 09:00:00'),
(16, 15, 20, '2026-05-08 14:00:00'),
(17, 16, 16, '2026-04-12 11:11:00'),
(18, 17, 16, '2026-04-18 13:22:00'),
(19, 18, 7, '2026-04-25 18:45:00'),
(20, 19, 1, '2026-05-05 20:00:00'),
(21, 21, 21, '2026-06-02 08:15:00'),
(22, 22, 23, '2026-06-03 09:30:00'),
(23, 23, 24, '2026-06-04 10:45:00'),
(24, 24, 25, '2026-06-05 11:00:00'),
(25, 25, 26, '2026-06-06 14:20:00'),
(26, 26, 40, '2026-06-10 15:10:00'),
(27, 27, 22, '2026-06-11 23:55:00'),
(28, 28, 28, '2026-06-15 08:00:00'),
(29, 29, 21, '2026-06-18 19:30:00'),
(30, 30, 40, '2026-06-20 20:45:00'),
(31, 31, 30, '2026-06-22 13:10:00'),
(32, 32, 29, '2026-06-25 09:00:00'),
(33, 33, 24, '2026-06-28 16:40:00'),
(34, 34, 34, '2026-07-01 10:25:00'),
(35, 35, 39, '2026-07-05 14:50:00'),
(36, 36, 1, '2026-07-10 08:30:00'),
(37, 37, 4, '2026-07-12 11:15:00'),
(38, 15, 21, '2026-07-15 09:45:00'),
(39, 18, 23, '2026-07-20 16:00:00'),
(40, 40, 40, '2026-07-25 21:10:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
