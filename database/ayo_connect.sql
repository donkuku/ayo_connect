/*
 Navicat Premium Data Transfer

 Source Server         : 192.168.1.253
 Source Server Type    : MySQL
 Source Server Version : 50735
 Source Host           : 192.168.1.253:3306
 Source Schema         : ayo_connect

 Target Server Type    : MySQL
 Target Server Version : 50735
 File Encoding         : 65001

 Date: 25/03/2022 10:38:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for std_admission
-- ----------------------------
DROP TABLE IF EXISTS `std_admission`;
CREATE TABLE `std_admission`  (
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `datetime_admit` datetime(0) NOT NULL,
  `hospcode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`cid`, `datetime_admit`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  INDEX `date_serv`(`datetime_admit`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_cid_check
-- ----------------------------
DROP TABLE IF EXISTS `std_cid_check`;
CREATE TABLE `std_cid_check`  (
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`cid`) USING BTREE,
  INDEX `idx_cid`(`cid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_ipd_diag
-- ----------------------------
DROP TABLE IF EXISTS `std_ipd_diag`;
CREATE TABLE `std_ipd_diag`  (
  `hoscode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_serv` date NOT NULL,
  `vsttime` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `diagcode` varchar(9) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `diagtype` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `doctor` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`hoscode`, `cid`, `date_serv`, `vsttime`, `diagcode`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  INDEX `hoscode`(`hoscode`) USING BTREE,
  INDEX `date_serv`(`date_serv`) USING BTREE,
  INDEX `vsttime`(`vsttime`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_ipd_drug
-- ----------------------------
DROP TABLE IF EXISTS `std_ipd_drug`;
CREATE TABLE `std_ipd_drug`  (
  `hoscode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_serv` date NOT NULL,
  `vsttime` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `disstd` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `doctor` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `dname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `amount` int(10) DEFAULT NULL,
  `unit` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `drug_use` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`hoscode`, `cid`, `date_serv`, `vsttime`, `disstd`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  INDEX `hoscode`(`hoscode`) USING BTREE,
  INDEX `date_serv`(`date_serv`) USING BTREE,
  INDEX `vsttime`(`vsttime`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_ipd_lab
-- ----------------------------
DROP TABLE IF EXISTS `std_ipd_lab`;
CREATE TABLE `std_ipd_lab`  (
  `hoscode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_serv` date NOT NULL,
  `vsttime` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `labtest` varchar(9) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `labname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `labresult` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`hoscode`, `cid`, `date_serv`, `vsttime`, `labtest`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  INDEX `hoscode`(`hoscode`) USING BTREE,
  INDEX `date_serv`(`date_serv`) USING BTREE,
  INDEX `vsttime`(`vsttime`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_opd_diag
-- ----------------------------
DROP TABLE IF EXISTS `std_opd_diag`;
CREATE TABLE `std_opd_diag`  (
  `hoscode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_serv` date NOT NULL,
  `vsttime` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `diagcode` varchar(9) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `diagtype` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `doctor` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`hoscode`, `cid`, `date_serv`, `vsttime`, `diagcode`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  INDEX `hoscode`(`hoscode`) USING BTREE,
  INDEX `date_serv`(`date_serv`) USING BTREE,
  INDEX `vsttime`(`vsttime`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_opd_drug
-- ----------------------------
DROP TABLE IF EXISTS `std_opd_drug`;
CREATE TABLE `std_opd_drug`  (
  `hoscode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_serv` date NOT NULL,
  `vsttime` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `disstd` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `doctor` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `dname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `amount` int(10) DEFAULT NULL,
  `unit` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `drug_use` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`hoscode`, `cid`, `date_serv`, `vsttime`, `disstd`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  INDEX `hoscode`(`hoscode`) USING BTREE,
  INDEX `date_serv`(`date_serv`) USING BTREE,
  INDEX `vsttime`(`vsttime`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_opd_lab
-- ----------------------------
DROP TABLE IF EXISTS `std_opd_lab`;
CREATE TABLE `std_opd_lab`  (
  `hoscode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_serv` date NOT NULL,
  `vsttime` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `labtest` varchar(9) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `labname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `labresult` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`hoscode`, `cid`, `date_serv`, `vsttime`, `labtest`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  INDEX `hoscode`(`hoscode`) USING BTREE,
  INDEX `date_serv`(`date_serv`) USING BTREE,
  INDEX `vsttime`(`vsttime`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_person
-- ----------------------------
DROP TABLE IF EXISTS `std_person`;
CREATE TABLE `std_person`  (
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `prefix` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `first_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mid_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `last_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `sex` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `age_y` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `register_id` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `addr` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `moo` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trok` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `soi` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `road` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tmb_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `amp_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `prov_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `vhid` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `amp_code` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `note` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`cid`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  INDEX `vhid`(`vhid`) USING BTREE,
  INDEX `birth`(`birth`) USING BTREE,
  INDEX `status`(`status`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_refer
-- ----------------------------
DROP TABLE IF EXISTS `std_refer`;
CREATE TABLE `std_refer`  (
  `hoscode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_refer` datetime(0) NOT NULL,
  `refer_out_hos` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`hoscode`, `cid`, `date_refer`) USING BTREE,
  INDEX `hoscode`(`hoscode`, `cid`) USING BTREE,
  INDEX `refer_out_hos`(`refer_out_hos`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for std_service
-- ----------------------------
DROP TABLE IF EXISTS `std_service`;
CREATE TABLE `std_service`  (
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date_serv` date NOT NULL,
  `time_serv` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `hospcode` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`cid`, `date_serv`, `time_serv`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  INDEX `date_serv`(`date_serv`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Procedure structure for std_cid_check
-- ----------------------------
DROP PROCEDURE IF EXISTS `std_cid_check`;
delimiter ;;
CREATE DEFINER=`lblhos`@`%` PROCEDURE `std_cid_check`(in theDB VARCHAR(128))
BEGIN
	#Check cid and update flag
-- 	UPDATE std_cid_check scc
-- 	INNER JOIN theDB.patient p on p.cid=scc.cid
-- 	SET scc.flag=1;
	
	SET @s=CONCAT('UPDATE std_cid_check scc
	INNER JOIN ', theDB, '.patient p on p.cid=scc.cid SET scc.flag=1;');
	PREPARE stmt FROM @s;
	EXECUTE stmt;



END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for std_insert_table_all
-- ----------------------------
DROP PROCEDURE IF EXISTS `std_insert_table_all`;
delimiter ;;
CREATE DEFINER=`lblhos`@`%` PROCEDURE `std_insert_table_all`(in theDB VARCHAR(128),in theCID VARCHAR(13))
BEGIN
	#Insert patient
 
 SET @s = CONCAT( 'INSERT IGNORE INTO std_person
  SELECT 
  p.cid cid,
  p.pname prefix,
  p.fname first_name,
  p.midname mid_name,
  p.lname last_name,
  p.birthday birth,
  s.name sex,
  TIMESTAMPDIFF(year,p.birthday,CURDATE()) age_y,
  "" status,
  "" status_name,
  "" register_id,
  p.addrpart addr,
  p.moopart moo,
  "" trok,
  p.addr_soi soi,
  p.road road ,
  t3.name tmb_name,
  t2.name amp_name,
  t1.name prov_name,
  concat(p.chwpart,p.amppart,p.tmbpart,LPAD(p.moopart,2,"00")) vhid,
  p.amppart amp_code,
  "" note,0
  
  
  FROM ', theDB, '.patient p  
  LEFT JOIN ', theDB, '.sex s on p.sex=s.`code`
  LEFT OUTER JOIN ', theDB, '.thaiaddress t1 ON t1.chwpart = p.chwpart AND t1.amppart = "00" AND t1.tmbpart = "00"
  LEFT OUTER JOIN ', theDB, '.thaiaddress t2 ON t2.chwpart = p.chwpart AND t2.amppart = p.amppart AND t2.tmbpart = "00"
  LEFT OUTER JOIN ', theDB, '.thaiaddress t3 ON t3.chwpart = p.chwpart AND t3.amppart = p.amppart AND t3.tmbpart = p.tmbpart
  
 WHERE p.cid="', theCID, '";' );
 PREPARE stmt 
 FROM
  @s;
 EXECUTE stmt;#insert diag
 
 SET @s = CONCAT(
  'INSERT IGNORE INTO std_opd_diag 
  SELECT
  diag.hoscode,
  diag.cid,
  diag.date_serv,
  replace(diag.vsttime,":",""),
  diag.diagcode,
  diag.diagtype,
  diag.doctor,0
  
  
  FROM
  (
  SELECT
  o.vn,
  p.cid 
  FROM
  ',
  theDB,
  '.ovst o
  INNER JOIN ',
  theDB,
  '.patient p ON p.hn = o.hn 
  WHERE
  cid = "',
  theCID,
  '" 
  GROUP BY
  o.vn 
  ORDER BY
  o.vn DESC 
  LIMIT 5 
  ) AS pvn
  INNER JOIN (
  SELECT
  ( SELECT hospitalcode FROM ',
  theDB,
  '.opdconfig ) AS hoscode,
  p.cid cid,
  v.vn,
  v.vstdate date_serv,
  o.vsttime,
  od.icd10 diagcode,
  od.diagtype diagtype,
  od.doctor 
  
  FROM
  ',
  theDB,
  '.vn_stat v
  INNER JOIN ',
  theDB,
  '.ovst o ON o.vn = v.vn
  INNER JOIN ',
  theDB,
  '.ovstdiag od ON v.vn = od.vn
  INNER JOIN ',
  theDB,
  '.patient p ON v.hn = p.hn 
  WHERE
  p.cid = "',
  theCID,
  '" 
  ) AS diag ON diag.cid = pvn.cid 
  AND diag.vn = pvn.vn; ' 
 );
 PREPARE stmt 
 FROM
  @s;
 EXECUTE stmt;#insert drug
 
 SET @s = CONCAT(
  'INSERT IGNORE INTO std_opd_drug 
  SELECT
  drug.hoscode,
  drug.cid,
  drug.date_serv,
  replace(drug.vsttime,":",""),
  drug.disstd,
  drug.doctor,
  drug.dname,
  drug.amount,
  drug.unit,
  drug.drug_use ,0 
  FROM
  (
  SELECT
  o.vn,
  p.cid 
  FROM
  ',
  theDB,
  '.ovst o
  INNER JOIN ',
  theDB,
  '.patient p ON p.hn = o.hn 
  WHERE
  cid = "',
  theCID,
  '"  
  GROUP BY
  o.vn 
  ORDER BY
  o.vn DESC 
  LIMIT 5 
  ) AS pvn
  INNER JOIN (
  SELECT
  ( SELECT hospitalcode FROM ',
  theDB,
  '.opdconfig ) AS hoscode,
  p.cid,
  o.vstdate date_serv,
  o.vsttime,
  d.did disstd,
  o.staff doctor,
  sd.NAME dname,
  opi.qty amount,
  d.units unit,
  concat(
  ifnull( opid.usage_line1, "" ),
  " ",
  ifnull( opid.usage_line2, "" ),
  " ",
  ifnull( opid.usage_line3, "" ),
  " ",
  ifnull( opid.usage_line4, "" )) drug_use,v.vn
  FROM ',
  theDB,
  '.vn_stat v
  INNER JOIN ',
  theDB,
  '.ovst o ON o.vn = v.vn
  INNER JOIN ',
  theDB,
  '.opitemrece opi ON opi.vn = v.vn
  INNER JOIN ',
  theDB,
  '.patient p ON v.hn = p.hn
  INNER JOIN ',
  theDB,
  '.s_drugitems sd ON sd.icode = opi.icode
  LEFT JOIN ',
  theDB,
  '.drugitems d ON d.icode = sd.icode
  LEFT JOIN ',
  theDB,
  '.opi_dispense opid ON opid.hos_guid = opi.hos_guid 
  WHERE
  p.cid = "',
  theCID,
  '" 
  ) AS drug ON drug.cid = pvn.cid  AND drug.vn = pvn.vn ; ' 
 );
 PREPARE stmt 
 FROM
  @s;
 EXECUTE stmt;
 
 #Insert lab
 
 SET @s = CONCAT(
  'INSERT IGNORE INTO std_opd_lab
  SELECT
  lab.hoscode,
  lab.cid,
  lab.date_serv,
  replace(lab.vsttime,":",""),
  lab.labtest,
  lab.labname,
  lab.labresult,0
  FROM
  (
  SELECT
  o.vn,
  p.cid 
  FROM
  ',
  theDB,
  '.ovst o
  INNER JOIN ',
  theDB,
  '.patient p ON p.hn = o.hn 
  WHERE
  cid = "',
  theCID,
  '"
  GROUP BY
  o.vn 
  ORDER BY
  o.vn DESC 
  LIMIT 5 
  ) AS pvn
  INNER JOIN (
  SELECT
  ( SELECT hospitalcode FROM ',
  theDB,
  '.opdconfig ) AS hoscode,
  p.cid cid,
  o.vstdate date_serv,
  o.vsttime vsttime,
  li.provis_labcode labtest,
  li.lab_items_name labname,
  lo.lab_order_result labresult,
  lh.vn 
  FROM
  ',
  theDB,
  '.lab_head lh
  INNER JOIN ',
  theDB,
  '.lab_order lo ON lh.lab_order_number = lo.lab_order_number
  INNER JOIN ',
  theDB,
  '.lab_items li ON li.lab_items_code = lo.lab_items_code
  INNER JOIN ',
  theDB,
  '.ovst o ON o.vn = lh.vn
  INNER JOIN ',
  theDB,
  '.patient p ON p.hn = lh.hn 
  WHERE
  p.cid = "',
  theCID,
  '"
  ) AS lab ON lab.cid = pvn.cid AND lab.vn = pvn.vn; ' 
 );
 PREPARE stmt 
 FROM
  @s;
 EXECUTE stmt;
 
 #insert service
 
 SET @s = CONCAT(
  'INSERT IGNORE INTO std_service
  SELECT
  service.cid,service.date_serv,replace(service.time_serv,":",""),service.hoscode,0
  FROM
  (
  SELECT
  o.vn,
  p.cid 
  FROM
  ',
  theDB,
  '.ovst o
  INNER JOIN ',
  theDB,
  '.patient p ON p.hn = o.hn 
  WHERE
  cid = "',
  theCID,
  '" 
  GROUP BY
  o.vn 
  ORDER BY
  o.vn DESC 
  LIMIT 5 
  ) AS pvn
  INNER JOIN (
  SELECT p.cid,o.vstdate date_serv,o.vsttime time_serv,(SELECT hospitalcode FROM ',
  theDB,
  '.opdconfig) AS hoscode, o.vn
  
  from ',
  theDB,
  '.ovst o
  
  
  INNER JOIN ',
  theDB,
  '.patient p on p.hn=o.hn
  
  WHERE p.cid="',
  theCID,
  '" 
  ) AS service ON service.cid = pvn.cid AND service.vn = pvn.vn; ' 
 );
 PREPARE stmt 
 FROM
  @s;
 EXECUTE stmt;#insert std_admission
 
 SET @s = CONCAT(
  'INSERT IGNORE INTO std_admission
  SELECT pan.cid AS cid
  ,adm.datetime_admit
  ,adm.hoscode,0
  FROM
  (
  SELECT
  o.an,
  p.cid 
  FROM
  ',
  theDB,
  '.ipt o
  INNER JOIN ',
  theDB,
  '.patient p ON p.hn = o.hn 
  WHERE
  p.cid  ="',
  theCID,
  '" 
  GROUP BY
  o.an 
  ORDER BY
  o.an DESC 
  LIMIT 5
  ) AS pan
  INNER JOIN (
  SELECT
  (SELECT hospitalcode FROM ',
  theDB,
  '.opdconfig) AS hoscode
  ,p.cid AS cid
  ,CONCAT(i.regdate," ",i.regtime) AS datetime_admit
  ,i.an
  FROM ',
  theDB,
  '.ipt i
  INNER JOIN ',
  theDB,
  '.patient p ON i.hn = p.hn
  WHERE p.cid ="',
  theCID,
  '"
  ) AS adm ON adm.cid = pan.cid  AND adm.an = pan.an; ' 
 );
 PREPARE stmt 
 FROM
  @s;
 EXECUTE stmt;#insert std_ipd_diag
 
 SET @s = CONCAT(
  'INSERT IGNORE INTO std_ipd_diag
  
  SELECT adm.hoscode
  ,pan.cid AS cid
  ,adm.date_serv AS date_serv
  ,replace(adm.vsttime,":","")
  ,adm.diagcode AS diagcode
  ,adm.diagtype AS diagtype
  ,adm.doctor AS doctor,0
  FROM
  (
  SELECT
  o.an,
  p.cid 
  FROM
  ',
  theDB,
  '.ipt o
  INNER JOIN ',
  theDB,
  '.patient p ON p.hn = o.hn 
  WHERE
  p.cid = "',
  theCID,
  '"
  GROUP BY
  o.an 
  ORDER BY
  o.an DESC 
  LIMIT 5
  ) AS pan
  INNER JOIN (
  SELECT (SELECT hospitalcode FROM ',
  theDB,
  '.opdconfig) AS hoscode
  ,p.cid AS cid
  ,i.regdate AS date_serv
  ,i.regtime AS vsttime
  ,d.icd10 AS diagcode
  ,d.diagtype AS diagtype
  ,d.doctor AS doctor
  ,i.an
  FROM ',
  theDB,
  '.ipt i
  INNER JOIN ',
  theDB,
  '.iptdiag d ON i.an = d.an
  INNER JOIN ',
  theDB,
  '.patient p ON i.hn = p.hn
  WHERE p.cid = "',
  theCID,
  '"
  ) AS adm ON adm.cid = pan.cid  AND adm.an = pan.an; ' 
 );
 PREPARE stmt 
 FROM
  @s;
 EXECUTE stmt;
 #insert std_ipd_drug
 
 SET @s = CONCAT(
  'INSERT IGNORE INTO std_ipd_drug
  
  SELECT adm.hoscode
  ,pan.cid AS cid
  ,adm.date_serv AS date_serv
  ,replace(adm.vsttime,":","")
  ,adm.disstd AS disstd
  ,adm.doctor AS doctor
  ,adm.dname AS dname
  ,adm.amount AS amount
  ,adm.unit AS unit
  ,adm.drug_use,0
  FROM
  (
  SELECT
  o.an,
  p.cid 
  FROM
  ',
  theDB,
  '.ipt o
  INNER JOIN ',
  theDB,
  '.patient p ON p.hn = o.hn 
  WHERE
  p.cid = "',
  theCID,
  '" 
  GROUP BY
  o.an 
  ORDER BY
  o.an DESC 
  LIMIT 5
  ) AS pan
  INNER JOIN (
  SELECT (SELECT hospitalcode FROM ',
  theDB,
  '.opdconfig) AS hoscode
  ,p.cid AS cid
  ,i.regdate AS date_serv
  ,i.regtime AS vsttime
  ,d.did AS disstd
  ,o.doctor AS doctor
  ,d.`name` AS dname
  ,o.qty AS amount
  ,d.units AS unit
  ,concat(ifnull(opid.usage_line1,"")," ",ifnull(opid.usage_line2,"")," ",ifnull(opid.usage_line3,"")," ",ifnull(opid.usage_line4,"")) drug_use
  ,i.an
  FROM ',
  theDB,
  '.ipt i
  INNER JOIN ',
  theDB,
  '.opitemrece o ON i.an = o.an
  INNER JOIN ',
  theDB,
  '.drugitems d ON o.icode = d.icode
  INNER JOIN ',
  theDB,
  '.opi_dispense opid ON o.hos_guid = opid.hos_guid
  INNER JOIN ',
  theDB,
  '.patient p ON i.hn = p.hn
  WHERE p.cid = "',
  theCID,
  '"
  ) AS adm ON adm.cid = pan.cid  AND adm.an = pan.an; ' 
 );
 PREPARE stmt 
 FROM
  @s;
 EXECUTE stmt;#insert std_ipd_lab
 
 SET @s = CONCAT(
  'INSERT IGNORE INTO std_ipd_lab
  
  
  SELECT adm.hoscode
  ,pan.cid AS cid
  ,adm.date_serv AS date_serv
  ,replace(adm.vsttime,":","")
  ,adm.labtest AS labtest
  ,adm.labname AS labname
  ,adm.labresult AS labresult,0
  FROM
  (
  SELECT
  o.an,
  p.cid 
  FROM
  ',
  theDB,
  '.ipt o
  INNER JOIN ',
  theDB,
  '.patient p ON p.hn = o.hn 
  WHERE
  p.cid = "',
  theCID,
  '"
  GROUP BY
  o.an 
  ORDER BY
  o.an DESC 
  LIMIT 5
  ) AS pan
  INNER JOIN (
  SELECT (SELECT hospitalcode FROM ',
  theDB,
  '.opdconfig) AS hoscode
  ,p.cid AS cid
  ,i.regdate AS date_serv
  ,i.regtime AS vsttime
  ,li.provis_labcode AS labtest
  ,li.lab_items_name AS labname
  ,lo.lab_order_result AS labresult
  ,i.an
  FROM ',
  theDB,
  '.ipt i
  INNER JOIN ',
  theDB,
  '.lab_head lh ON i.an = lh.vn
  INNER JOIN ',
  theDB,
  '.lab_order lo ON lh.lab_order_number = lo.lab_order_number
  INNER JOIN ',
  theDB,
  '.lab_items li ON lo.lab_items_code = li.lab_items_code
  INNER JOIN ',
  theDB,
  '.patient p ON i.hn = p.hn
  WHERE p.cid = "',
  theCID,
  '"
  ) AS adm ON adm.cid = pan.cid  AND adm.an = pan.an;' 
 );
 PREPARE stmt 
 FROM
  @s;
 EXECUTE stmt;



SET @s=CONCAT('INSERT IGNORE INTO std_refer
	SELECT
	rf.hoscode,
	pan.cid AS cid,
	rf.date_refer,
	rf.refer_out_hos,0
FROM
	(
		SELECT
			o.vn,
			p.cid
		FROM
			',theDB,'.ovst o
		INNER JOIN ',theDB,'.patient p ON p.hn = o.hn
		WHERE
			p.cid = "',theCID,'"
		GROUP BY
			o.vn
		ORDER BY
			o.vn DESC
		LIMIT 5
	) AS pan
INNER JOIN (
	SELECT
		(
			SELECT
				hospitalcode
			FROM
				',theDB,'.opdconfig
		) AS hoscode,
		p.cid AS cid,
		CONCAT(
			r.refer_date,
			" ",
			r.refer_time
		) AS date_refer,
		r.refer_hospcode AS refer_out_hos,
		r.vn
	FROM
		',theDB,'.referout r
	INNER JOIN ',theDB,'.patient p ON r.hn = p.hn
	WHERE
		p.cid = "',theCID,'" 
) AS rf ON rf.cid = pan.cid
AND rf.vn = pan.vn;');
	PREPARE stmt FROM @s;
	EXECUTE stmt;
	
	



END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
