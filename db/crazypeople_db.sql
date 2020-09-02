CREATE DATABASE  IF NOT EXISTS `crazypeople_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `crazypeople_db`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: crazypeople_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderNumber` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Inline Skates','Categoria Inline Skates','temp-iskate-cat-200x200.jpg',NULL,NULL,NULL),(2,'Quad Skates','Categoria Quad Skates','temp-qskate-cat-200x200.jpg',NULL,NULL,NULL),(3,'Accesorios','Categoria Accesorios Skates','temp-acc-cat-200x200.jpg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(500) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'qSkates/derby/PS_Chaya_Ruby/PS_810569_Chaya_indoor_quad_Ruby_black_2017_view0_xxl.jpg',NULL,NULL,NULL),(2,'qSkates/derby/PS_Chaya_Ruby/PS_810569_Chaya_indoor_quad_Ruby_black_2017_view1_xxl.jpg',NULL,NULL,NULL),(3,'qSkates/derby/PS_Chaya_Ruby/PS_810569_Chaya_indoor_quad_Ruby_black_2017_view2_xxl.jpg',NULL,NULL,NULL),(4,'qSkates/derby/PS_Chaya_Jump/PS_810592_Chaya_JUMP_black_quad_Grindplate_2017_view0_xxl.jpg',NULL,NULL,NULL),(5,'qSkates/derby/PS_Chaya_Jump/PS_810592_Chaya_JUMP_black_quad_Grindplate_2017_view1_xxl.jpg',NULL,NULL,NULL),(6,'qSkates/derby/PS_Chaya_Jump/PS_810592_Chaya_JUMP_black_quad_Grindplate_2017_view2_xxl.jpg',NULL,NULL,NULL),(7,'accesories/iAcc/iFrame_900797-243_FSK_AlphaMG243_frame_xxl.jpg',NULL,NULL,NULL),(8,'accesories/iAcc/iFrame_904412_X_frame_3x100_2015_view1_xxl.jpg',NULL,NULL,NULL),(9,'accesories/iAcc/iFrame_904538_PS_Racing_Rapid_frame_11_0_3x100mm_4x90mm_165mm_2018_view1_xxl.jpg',NULL,NULL,NULL),(10,'accesories/iAcc/iFrame_908170_FSK_Frame_Pleasure_Tool_SC_110_246mm_3x110_red_2016_view1_xxl.jpg',NULL,NULL,NULL),(11,'accesories/iAcc/iWheel_110012_PRIME_wheels_Tribune_76mm_74A_yellow_2017_view1_xxl.jpg',NULL,NULL,NULL),(12,'accesories/iAcc/iWheel_205198_Matter_CODE_white_wheel_100mm_F0_2014_view1_xxl.jpg',NULL,NULL,NULL),(13,'accesories/iAcc/iWheel_205216_Matter_Juice_FSK_76mm_yellow_view1_xxl.jpg',NULL,NULL,NULL),(14,'accesories/iAcc/iWheel_205219_Matter_wheel_Zafiro_2014_xxl.jpg',NULL,NULL,NULL),(15,'accesories/iAcc/iWheel_205223_PS_FSK_Matter_Crazy_Glue_wheel_72mm_2014_view1_xxl.jpg',NULL,NULL,NULL),(16,'accesories/iAcc/iWheel_908317_PS_Off-Road_accessories_CST_Air_tire_150mm_2019_view1_xxl.jpg',NULL,NULL,NULL),(17,'accesories/qAcc/qFrame_810517_Chaya_Ophira_DCM_2_20degree_2015_view0_xxl.jpg',NULL,NULL,NULL),(18,'accesories/qAcc/qFrame_810517_Chaya_Ophira_DCM_2_20degree_2015_view1_xxl.jpg',NULL,NULL,NULL),(19,'accesories/qAcc/qFrame_810537_Chaya_Zena_Plate_view1_xxl.jpg',NULL,NULL,NULL),(20,'accesories/qAcc/qFrame_810537_Chaya_Zena_Plate_view2_xxl.jpg',NULL,NULL,NULL),(21,'accesories/qAcc/qStop_810505_cherry_CHAYA_long_flat_bomb_stopper_2016_view1_xxl.jpg',NULL,NULL,NULL),(22,'accesories/qAcc/qStop_810506_kiwi_long_flat_bomb_stopper_2016_view1_xxl.jpg',NULL,NULL,NULL),(23,'iSkates/racing/PS_Speed_XX/PS_904403_PS_Speed_XX_man_2015_view0_xxl.jpg',NULL,NULL,NULL),(24,'iSkates/racing/PS_Speed_XX/PS_904403_PS_Speed_XX_man_2015_view1_xxl.jpg',NULL,NULL,NULL),(25,'iSkates/racing/PS_Speed_XX/PS_904403_PS_Speed_XX_man_2015_view2_xxl.jpg',NULL,NULL,NULL),(26,'iSkates/racing/PS_Speed_XX/PS_904403_PS_Speed_XX_man_2015_view3_xxl.jpg',NULL,NULL,NULL),(27,'accesories/qAcc/qWheel_630509_Octo_Propel_Alloy_wheel_2018_view1_xxl.jpg',NULL,NULL,NULL),(28,'accesories/qAcc/qWheel_205501_Juice_Cosmo_xxl.jpg',NULL,NULL,NULL),(29,'accesories/varios/bracelet_200616_Swell_bracelet_2019_view1_xxl.jpg',NULL,NULL,NULL),(30,'iSkates/hockey/PS_Anax/PS_120005_Reign_hockey_Anax_2017_view0_xxl.jpg',NULL,NULL,NULL),(31,'iSkates/hockey/PS_Anax/PS_120005_Reign_hockey_Anax_2017_view1_xxl.jpg',NULL,NULL,NULL),(32,'iSkates/hockey/PS_Anax/PS_120005_Reign_hockey_Anax_2017_view2_xxl.jpg',NULL,NULL,NULL),(33,'iSkates/hockey/PS_Anax/PS_120005_Reign_hockey_Anax_2017_view3_xxl.jpg',NULL,NULL,NULL),(34,'iSkates/fitness/PS_Swell_125/PS_510012_PS_Swell_125_aqua_2017_view0_xxl.jpg',NULL,NULL,NULL),(35,'iSkates/fitness/PS_Swell_125/PS_510012_PS_Swell_125_aqua_2017_view1_xxl.jpg',NULL,NULL,NULL),(36,'iSkates/fitness/PS_Swell_125/PS_510012_PS_Swell_125_aqua_2017_view2_xxl.jpg',NULL,NULL,NULL),(37,'iSkates/fitness/PS_Swell_125/PS_510012_PS_Swell_125_aqua_2017_view3_xxl.jpg',NULL,NULL,NULL),(38,'iSkates/hockey/PS_Atlas/PS_120014_Reign_hockey_Atlas_2019_view0_xxl.jpg',NULL,NULL,NULL),(39,'iSkates/hockey/PS_Atlas/PS_120014_Reign_hockey_Atlas_2019_view1_xxl.jpg',NULL,NULL,NULL),(40,'iSkates/hockey/PS_Atlas/PS_120014_Reign_hockey_Atlas_2019_view2_xxl.jpg',NULL,NULL,NULL),(41,'iSkates/hockey/PS_Atlas/PS_120014_Reign_hockey_Atlas_2019_view3_xxl.jpg',NULL,NULL,NULL),(42,'iSkates/freeskate/PS_HC_Evo_Pro/PS_908277_PS_Urban_HC_EVO_Pro_2019_view0_xxl.jpg',NULL,NULL,NULL),(43,'iSkates/freeskate/PS_HC_Evo_Pro/PS_908277_PS_Urban_HC_EVO_Pro_2019_view1_xxl.jpg',NULL,NULL,NULL),(44,'iSkates/freeskate/PS_HC_Evo_Pro/PS_908277_PS_Urban_HC_EVO_Pro_2019_view2_xxl.jpg',NULL,NULL,NULL),(45,'iSkates/freeskate/PS_HC_Evo_Pro/PS_908277_PS_Urban_HC_EVO_Pro_2019_view3_xxl.jpg',NULL,NULL,NULL),(46,'iSkates/freeskate/PS_Imperial_Evo/PS_908130_PS_Urban_Imperial_EVO_chrome_2016_view0_xxl.jpg',NULL,NULL,NULL),(47,'iSkates/freeskate/PS_Imperial_Evo/PS_908130_PS_Urban_Imperial_EVO_chrome_2016_view1_xxl.jpg',NULL,NULL,NULL),(48,'iSkates/freeskate/PS_Imperial_Evo/PS_908130_PS_Urban_Imperial_EVO_chrome_2016_view2_xxl.jpg',NULL,NULL,NULL),(49,'iSkates/freeskate/PS_Imperial_Evo/PS_908130_PS_Urban_Imperial_EVO_chrome_2016_view3_xxl.jpg',NULL,NULL,NULL),(50,'iSkates/freeskate/PS_Imperial_Mega/PS_908129_FSK_Imperial_Megacruiser_125_pink_2017_view0_xxl.jpg',NULL,NULL,NULL),(51,'iSkates/freeskate/PS_Imperial_Mega/PS_908129_FSK_Imperial_Megacruiser_125_pink_2017_view1_xxl.jpg',NULL,NULL,NULL),(52,'iSkates/freeskate/PS_Imperial_Mega/PS_908129_FSK_Imperial_Megacruiser_125_pink_2017_view2_xxl.jpg',NULL,NULL,NULL),(53,'iSkates/freeskate/PS_Imperial_Mega/PS_908129_FSK_Imperial_Megacruiser_125_pink_2017_view3_xxl.jpg',NULL,NULL,NULL),(54,'iSkates/freeskate/PS_Metro/PS_908073_PS_FSK_Metropolis_2015_view0_xxl.jpg',NULL,NULL,NULL),(55,'iSkates/freeskate/PS_Metro/PS_908073_PS_FSK_Metropolis_2015_view1_xxl.jpg',NULL,NULL,NULL),(56,'iSkates/freeskate/PS_Metro/PS_908073_PS_FSK_Metropolis_2015_view2_xxl.jpg',NULL,NULL,NULL),(57,'iSkates/freeskate/PS_Metro/PS_908073_PS_FSK_Metropolis_2015_view3_xxl.jpg',NULL,NULL,NULL),(58,'iSkates/offroad/PS_Next_SUV/PS_908234_PS_Next_SUV_Edge_2018_view0_xxl.jpg',NULL,NULL,NULL),(59,'iSkates/offroad/PS_Next_SUV/PS_908234_PS_Next_SUV_Edge_2018_view1_xxl.jpg',NULL,NULL,NULL),(60,'iSkates/offroad/PS_Next_SUV/PS_908234_PS_Next_SUV_Edge_2018_view2_xxl.jpg',NULL,NULL,NULL),(61,'iSkates/offroad/PS_Next_SUV/PS_908234_PS_Next_SUV_Edge_2018_view3_xxl.jpg',NULL,NULL,NULL),(62,'iSkates/offroad/PS_Nordic_XC/PS_908144_PS_Nordic_XC_Trail_II_2015_view0_xxl.jpg',NULL,NULL,NULL),(63,'iSkates/offroad/PS_Nordic_XC/PS_908144_PS_Nordic_XC_Trail_II_2015_view1_xxl.jpg',NULL,NULL,NULL),(64,'iSkates/offroad/PS_Nordic_XC/PS_908144_PS_Nordic_XC_Trail_II_2015_view2_xxl.jpg',NULL,NULL,NULL),(65,'iSkates/offroad/PS_Nordic_XC/PS_908144_PS_Nordic_XC_Trail_II_2015_view3_xxl.jpg',NULL,NULL,NULL),(66,'iSkates/fitness/PS_One_Wave/PS_940607_PS_One_Wave_Skate_Adult_men_2017_view0_xxl.jpg',NULL,NULL,NULL),(67,'iSkates/fitness/PS_One_Wave/PS_940607_PS_One_Wave_Skate_Adult_men_2017_view1_xxl.jpg',NULL,NULL,NULL),(68,'iSkates/fitness/PS_One_Wave/PS_940607_PS_One_Wave_Skate_Adult_men_2017_view2_xxl.jpg',NULL,NULL,NULL),(69,'iSkates/fitness/PS_One_Wave/PS_940607_PS_One_Wave_Skate_Adult_men_2017_view3_xxl.jpg',NULL,NULL,NULL),(70,'iSkates/hockey/PS_Perseus/PS_120012_Reign_hockey_Perseus_2017_view0_xxl.jpg',NULL,NULL,NULL),(71,'iSkates/hockey/PS_Perseus/PS_120012_Reign_hockey_Perseus_2017_view1_xxl.jpg',NULL,NULL,NULL),(72,'iSkates/hockey/PS_Perseus/PS_120012_Reign_hockey_Perseus_2017_view2_xxl.jpg',NULL,NULL,NULL),(73,'iSkates/hockey/PS_Perseus/PS_120012_Reign_hockey_Perseus_2017_view3_xxl.jpg',NULL,NULL,NULL),(74,'iSkates/fitness/PS_Phuzion-Universe/PS_940641_Phuzion_Universe_white_4wheeler_2019_view0_xxl.jpg',NULL,NULL,NULL),(75,'iSkates/fitness/PS_Phuzion-Universe/PS_940641_Phuzion_Universe_white_4wheeler_2019_view1_xxl.jpg',NULL,NULL,NULL),(76,'iSkates/fitness/PS_Phuzion-Universe/PS_940641_Phuzion_Universe_white_4wheeler_2019_view2_xxl.jpg',NULL,NULL,NULL),(77,'iSkates/fitness/PS_Phuzion-Universe/PS_940641_Phuzion_Universe_white_4wheeler_2019_view3_xxl.jpg',NULL,NULL,NULL),(78,'iSkates/fitness/PS_Swell_110/PS_510002_Powerslide_Swell_110_black_2016_view0_xxl.jpg',NULL,NULL,NULL),(79,'iSkates/fitness/PS_Swell_110/PS_510002_Powerslide_Swell_110_black_2016_view1_xxl.jpg',NULL,NULL,NULL),(80,'iSkates/fitness/PS_Swell_110/PS_510002_Powerslide_Swell_110_black_2016_view2_xxl.jpg',NULL,NULL,NULL),(81,'iSkates/fitness/PS_Swell_110/PS_510002_Powerslide_Swell_110_black_2016_view3_xxl.jpg',NULL,NULL,NULL),(82,'iSkates/fitness/PS_Swell_125/PS_510005_Powerslide_Swell_125_peach_2016_view0_xxl.jpg',NULL,NULL,NULL),(83,'iSkates/fitness/PS_Swell_125/PS_510005_Powerslide_Swell_125_peach_2016_view1_xxl.jpg',NULL,NULL,NULL),(84,'iSkates/fitness/PS_Swell_125/PS_510005_Powerslide_Swell_125_peach_2016_view2_xxl.jpg',NULL,NULL,NULL),(85,'iSkates/fitness/PS_Swell_125/PS_510005_Powerslide_Swell_125_peach_2016_view3_xxl.jpg',NULL,NULL,NULL),(86,'iSkates/freeskate/PS_Urban_Kids/PS_940637_PS_Urban_kids_Jet_black_2019_view0_xxl.jpg',NULL,NULL,NULL),(87,'iSkates/freeskate/PS_Urban_Kids/PS_940637_PS_Urban_kids_Jet_black_2019_view1_xxl.jpg',NULL,NULL,NULL),(88,'iSkates/freeskate/PS_Urban_Kids/PS_940637_PS_Urban_kids_Jet_black_2019_view2_xxl.jpg',NULL,NULL,NULL),(89,'iSkates/freeskate/PS_Urban_Kids/PS_940637_PS_Urban_kids_Jet_black_2019_view3_xxl.jpg',NULL,NULL,NULL),(90,'iSkates/racing/PS_Vi_Pro/PS_500099_Vi_Pro_Carbon_II_2015_view0_xxl.jpg',NULL,NULL,NULL),(91,'iSkates/racing/PS_Vi_Pro/PS_500099_Vi_Pro_Carbon_II_2015_view1_xxl.jpg',NULL,NULL,NULL),(92,'iSkates/racing/PS_Vi_Pro/PS_500099_Vi_Pro_Carbon_II_2015_view2_xxl.jpg',NULL,NULL,NULL),(93,'iSkates/racing/PS_Vi_Pro/PS_500099_Vi_Pro_Carbon_II_2015_view3_xxl.jpg',NULL,NULL,NULL),(94,'iSkates/hockey/PS_Zeus/PS_120003_Reign_hockey_Zeus_Trinity_2017_view0_xxl.jpg',NULL,NULL,NULL),(95,'iSkates/hockey/PS_Zeus/PS_120003_Reign_hockey_Zeus_Trinity_2017_view1_xxl.jpg',NULL,NULL,NULL),(96,'iSkates/hockey/PS_Zeus/PS_120003_Reign_hockey_Zeus_Trinity_2017_view2_xxl.jpg',NULL,NULL,NULL),(97,'iSkates/hockey/PS_Zeus/PS_120003_Reign_hockey_Zeus_Trinity_2017_view3_xxl.jpg',NULL,NULL,NULL),(98,'qSkates/derby/PS_Chaya_Jump/PS_810593_Chaya_JUMP_red_quad_Grindplate_2017_view0_xxl.jpg',NULL,NULL,NULL),(99,'qSkates/derby/PS_Chaya_Jump/PS_810593_Chaya_JUMP_red_quad_Grindplate_2017_view1_xxl.jpg',NULL,NULL,NULL),(100,'qSkates/derby/PS_Chaya_Jump/PS_810593_Chaya_JUMP_red_quad_Grindplate_2017_view2_xxl.jpg',NULL,NULL,NULL),(101,'qSkates/lifestyle/PS_Chaya_Melrose_Elite/PS_810578_Chaya_Melrose_Elite_Peaches_Cream_view0_xxl.jpg',NULL,NULL,NULL),(102,'qSkates/lifestyle/PS_Chaya_Melrose_Elite/PS_810578_Chaya_Melrose_Elite_Peaches_Cream_view1_xxl.jpg',NULL,NULL,NULL),(103,'qSkates/lifestyle/PS_Chaya_Melrose_Elite/PS_810578_Chaya_Melrose_Elite_Peaches_Cream_view2_xxl.jpg',NULL,NULL,NULL),(104,'qSkates/derby/PS_Chaya_Onyx/PS_810520_Chaya_Onyx_skate_2017_view0_xxl.jpg',NULL,NULL,NULL),(105,'qSkates/derby/PS_Chaya_Onyx/PS_810520_Chaya_Onyx_skate_2017_view1_xxl.jpg',NULL,NULL,NULL),(106,'qSkates/derby/PS_Chaya_Onyx/PS_810520_Chaya_Onyx_skate_2017_view2_xxl.jpg',NULL,NULL,NULL),(107,'qSkates/derby/PS_Chaya_Ruby/PS_810558_Chaya_Rollerskate_Ruby_white_2017_view0_xxl.jpg',NULL,NULL,NULL),(108,'qSkates/derby/PS_Chaya_Ruby/PS_810558_Chaya_Rollerskate_Ruby_white_2017_view1_xxl.jpg',NULL,NULL,NULL),(109,'qSkates/derby/PS_Chaya_Ruby/PS_810558_Chaya_Rollerskate_Ruby_white_2017_view2_xxl.jpg',NULL,NULL,NULL),(110,'qSkates/lifestyle/PS_Glide_Chrome/PS_810594_Chaya_Vintage_Gilde_Chrome_2019_view0_xxl.jpg',NULL,NULL,NULL),(111,'qSkates/lifestyle/PS_Glide_Chrome/PS_810594_Chaya_Vintage_Gilde_Chrome_2019_view1_xxl.jpg',NULL,NULL,NULL),(112,'qSkates/lifestyle/PS_Glide_Chrome/PS_810594_Chaya_Vintage_Gilde_Chrome_2019_view2_xxl.jpg',NULL,NULL,NULL),(113,'qSkates/lifestyle/PS_Glide_Denim/PS_810595_Glide_Denim_2018_view0_xxl.jpg',NULL,NULL,NULL),(114,'qSkates/lifestyle/PS_Glide_Denim/PS_810595_Glide_Denim_2018_view1_xxl.jpg',NULL,NULL,NULL),(115,'qSkates/lifestyle/PS_Glide_Denim/PS_810595_Glide_Denim_2018_view2_xxl.jpg',NULL,NULL,NULL),(116,'qSkates/lifestyle/PS_Glide_Kids/PS_810598_Glide_Unicorn_Kids_2018_view0_xxl.jpg',NULL,NULL,NULL),(117,'qSkates/lifestyle/PS_Glide_Kids/PS_810598_Glide_Unicorn_Kids_2018_view1_xxl.jpg',NULL,NULL,NULL),(118,'qSkates/lifestyle/PS_Glide_Kids/PS_810598_Glide_Unicorn_Kids_2018_view2_xxl.jpg',NULL,NULL,NULL),(119,'qSkates/derby/PS_Jade/PS_810585_Chaya_Jade_Rollerskate_2018_view0_xxl.jpg',NULL,NULL,NULL),(120,'qSkates/derby/PS_Jade/PS_810585_Chaya_Jade_Rollerskate_2018_view1_xxl.jpg',NULL,NULL,NULL),(121,'qSkates/derby/PS_Jade/PS_810585_Chaya_Jade_Rollerskate_2018_view2_xxl.jpg',NULL,NULL,NULL),(122,'qSkates/lifestyle/PS_Neat/PS_810587_chaya_vintage_neat_2018_view0_xxl.jpg',NULL,NULL,NULL),(123,'qSkates/lifestyle/PS_Neat/PS_810587_chaya_vintage_neat_2018_view1_xxl.jpg',NULL,NULL,NULL),(124,'qSkates/lifestyle/PS_Neat/PS_810587_chaya_vintage_neat_2018_view2_xxl.jpg',NULL,NULL,NULL),(125,'qSkates/classic/PS_Playlife_Classic/PS_880244_Playlife_Classic_White_kids_2020_view0_xxl.jpg',NULL,NULL,NULL),(126,'qSkates/classic/PS_Playlife_Classic/PS_880244_Playlife_Classic_White_kids_2020_view1_xxl.jpg',NULL,NULL,NULL),(127,'qSkates/classic/PS_Playlife_Classic/PS_880244_Playlife_Classic_White_kids_2020_view2_xxl.jpg',NULL,NULL,NULL),(128,'qSkates/lifestyle/PS_Quad_Minnie/PS_910500_Minnie_Quad_xxl.jpg',NULL,NULL,NULL),(129,'iSkates/fitness/PS_Swell_125/PS_510006_PS_Swell_dark_lava_125_2017_view0_xxl.jpg',NULL,NULL,NULL),(130,'iSkates/fitness/PS_Swell_125/PS_510006_PS_Swell_dark_lava_125_2017_view1_xxl.jpg',NULL,NULL,NULL),(131,'iSkates/fitness/PS_Swell_125/PS_510006_PS_Swell_dark_lava_125_2017_view2_xxl.jpg',NULL,NULL,NULL),(132,'iSkates/fitness/PS_Swell_125/PS_510006_PS_Swell_dark_lava_125_2017_view3_xxl.jpg',NULL,NULL,NULL),(133,'qSkates/lifestyle/PS_Quad_Rich/PS_940502_PS_Quad_RICH_2014_view0_xxl.jpg',NULL,NULL,NULL),(134,'qSkates/lifestyle/PS_Quad_Rich/PS_940502_PS_Quad_RICH_2014_view1_xxl.jpg',NULL,NULL,NULL),(135,'qSkates/lifestyle/PS_Quad_Rich/PS_940502_PS_Quad_RICH_2014_view2_xxl.jpg',NULL,NULL,NULL),(136,'qSkates/lifestyle/PS_Chaya_Melrose_Elite/PS_810579_Chaya_Melrose_Elite_Grape_Soda_view0_xxl.jpg',NULL,NULL,NULL),(137,'qSkates/lifestyle/PS_Chaya_Melrose_Elite/PS_810579_Chaya_Melrose_Elite_Grape_Soda_view1_xxl.jpg',NULL,NULL,NULL),(138,'qSkates/lifestyle/PS_Chaya_Melrose_Elite/PS_810579_Chaya_Melrose_Elite_Grape_Soda_view2_xxl.jpg',NULL,NULL,NULL),(139,'iSkates/fitness/PS_One_Wave/PS_940608_PS_One_Wave_Skate_Adult_women_2017_view0_xxl.jpg',NULL,NULL,NULL),(140,'iSkates/fitness/PS_One_Wave/PS_940608_PS_One_Wave_Skate_Adult_women_2017_view1_xxl.jpg',NULL,NULL,NULL),(141,'iSkates/fitness/PS_One_Wave/PS_940608_PS_One_Wave_Skate_Adult_women_2017_view2_xxl.jpg',NULL,NULL,NULL),(142,'iSkates/fitness/PS_One_Wave/PS_940608_PS_One_Wave_Skate_Adult_women_2017_view3_xxl.jpg',NULL,NULL,NULL),(143,'iSkates/fitness/PS_Phuzion-Universe/PS_940640_Phuzion_Universe_red_4wheeler_2019_view0_xxl.jpg',NULL,NULL,NULL),(144,'iSkates/fitness/PS_Phuzion-Universe/PS_940640_Phuzion_Universe_red_4wheeler_2019_view1_xxl.jpg',NULL,NULL,NULL),(145,'iSkates/fitness/PS_Phuzion-Universe/PS_940640_Phuzion_Universe_red_4wheeler_2019_view2_xxl.jpg',NULL,NULL,NULL),(146,'iSkates/fitness/PS_Phuzion-Universe/PS_940640_Phuzion_Universe_red_4wheeler_2019_view3_xxl.jpg',NULL,NULL,NULL),(147,'iSkates/fitness/PS_Swell_110/PS_510003_Powerslide_Swell_110_mint_2016_view0_xxl.jpg',NULL,NULL,NULL),(148,'iSkates/fitness/PS_Swell_110/PS_510003_Powerslide_Swell_110_mint_2016_view1_xxl.jpg',NULL,NULL,NULL),(149,'iSkates/fitness/PS_Swell_110/PS_510003_Powerslide_Swell_110_mint_2016_view2_xxl.jpg',NULL,NULL,NULL),(150,'iSkates/fitness/PS_Swell_110/PS_510003_Powerslide_Swell_110_mint_2016_view3_xxl.jpg',NULL,NULL,NULL),(151,'iSkates/fitness/PS_Swell_110/PS_510021_Powerslide_Swell_Bright_Crimson_110_2018_view0_xxl.jpg',NULL,NULL,NULL),(152,'iSkates/fitness/PS_Swell_110/PS_510021_Powerslide_Swell_Bright_Crimson_110_2018_view1_xxl.jpg',NULL,NULL,NULL),(153,'iSkates/fitness/PS_Swell_110/PS_510021_Powerslide_Swell_Bright_Crimson_110_2018_view2_xxl.jpg',NULL,NULL,NULL),(154,'iSkates/fitness/PS_Swell_110/PS_510021_Powerslide_Swell_Bright_Crimson_110_2018_view3_xxl.jpg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `salePrice` int(11) NOT NULL,
  `discount` int(11) NOT NULL DEFAULT 0,
  `quantity` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `cartId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `imageId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId_idx` (`productId`),
  KEY `imageId_idx` (`imageId`),
  CONSTRAINT `imageId` FOREIGN KEY (`imageId`) REFERENCES `images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `productId` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (1,1,1,NULL,NULL,NULL),(2,1,2,NULL,NULL,NULL),(3,1,3,NULL,NULL,NULL),(4,2,4,NULL,NULL,NULL),(5,2,5,NULL,NULL,NULL),(6,2,6,NULL,NULL,NULL),(7,3,7,NULL,NULL,NULL),(8,4,8,NULL,NULL,NULL),(9,5,9,NULL,NULL,NULL),(10,6,10,NULL,NULL,NULL),(11,7,11,NULL,NULL,NULL),(12,8,12,NULL,NULL,NULL),(13,9,13,NULL,NULL,NULL),(14,10,14,NULL,NULL,NULL),(15,11,15,NULL,NULL,NULL),(16,12,16,NULL,NULL,NULL),(17,13,17,NULL,NULL,NULL),(18,13,18,NULL,NULL,NULL),(19,14,19,NULL,NULL,NULL),(20,14,20,NULL,NULL,NULL),(21,15,21,NULL,NULL,NULL),(22,16,22,NULL,NULL,NULL),(23,17,23,NULL,NULL,NULL),(24,17,24,NULL,NULL,NULL),(25,17,25,NULL,NULL,NULL),(26,17,26,NULL,NULL,NULL),(27,18,27,NULL,NULL,NULL),(28,19,28,NULL,NULL,NULL),(29,20,29,NULL,NULL,NULL),(30,21,30,NULL,NULL,NULL),(31,21,31,NULL,NULL,NULL),(32,21,32,NULL,NULL,NULL),(33,21,33,NULL,NULL,NULL),(34,22,34,NULL,NULL,NULL),(35,22,35,NULL,NULL,NULL),(36,22,36,NULL,NULL,NULL),(37,22,37,NULL,NULL,NULL),(38,23,38,NULL,NULL,NULL),(39,23,39,NULL,NULL,NULL),(40,23,40,NULL,NULL,NULL),(41,23,41,NULL,NULL,NULL),(42,24,42,NULL,NULL,NULL),(43,24,43,NULL,NULL,NULL),(44,24,44,NULL,NULL,NULL),(45,24,45,NULL,NULL,NULL),(46,25,46,NULL,NULL,NULL),(47,25,47,NULL,NULL,NULL),(48,25,48,NULL,NULL,NULL),(49,25,49,NULL,NULL,NULL),(50,26,50,NULL,NULL,NULL),(51,26,51,NULL,NULL,NULL),(52,26,52,NULL,NULL,NULL),(53,26,53,NULL,NULL,NULL),(54,27,54,NULL,NULL,NULL),(55,27,55,NULL,NULL,NULL),(56,27,56,NULL,NULL,NULL),(57,27,57,NULL,NULL,NULL),(58,28,58,NULL,NULL,NULL),(59,28,59,NULL,NULL,NULL),(60,28,60,NULL,NULL,NULL),(61,28,61,NULL,NULL,NULL),(62,29,62,NULL,NULL,NULL),(63,29,63,NULL,NULL,NULL),(64,29,64,NULL,NULL,NULL),(65,29,65,NULL,NULL,NULL),(66,30,66,NULL,NULL,NULL),(67,30,67,NULL,NULL,NULL),(68,30,68,NULL,NULL,NULL),(69,30,69,NULL,NULL,NULL),(70,31,70,NULL,NULL,NULL),(71,31,71,NULL,NULL,NULL),(72,31,72,NULL,NULL,NULL),(73,31,73,NULL,NULL,NULL),(74,32,74,NULL,NULL,NULL),(75,32,75,NULL,NULL,NULL),(76,32,76,NULL,NULL,NULL),(77,32,77,NULL,NULL,NULL),(78,33,78,NULL,NULL,NULL),(79,33,79,NULL,NULL,NULL),(80,33,80,NULL,NULL,NULL),(81,33,81,NULL,NULL,NULL),(82,34,82,NULL,NULL,NULL),(83,34,83,NULL,NULL,NULL),(84,34,84,NULL,NULL,NULL),(85,34,85,NULL,NULL,NULL),(86,35,86,NULL,NULL,NULL),(87,35,87,NULL,NULL,NULL),(88,35,88,NULL,NULL,NULL),(89,35,89,NULL,NULL,NULL),(90,36,90,NULL,NULL,NULL),(91,36,91,NULL,NULL,NULL),(92,36,92,NULL,NULL,NULL),(93,36,93,NULL,NULL,NULL),(94,37,94,NULL,NULL,NULL),(95,37,95,NULL,NULL,NULL),(96,37,96,NULL,NULL,NULL),(97,37,97,NULL,NULL,NULL),(98,38,98,NULL,NULL,NULL),(99,38,99,NULL,NULL,NULL),(100,38,100,NULL,NULL,NULL),(101,39,101,NULL,NULL,NULL),(102,39,102,NULL,NULL,NULL),(103,39,103,NULL,NULL,NULL),(104,40,104,NULL,NULL,NULL),(105,40,105,NULL,NULL,NULL),(106,40,106,NULL,NULL,NULL),(107,41,107,NULL,NULL,NULL),(108,41,108,NULL,NULL,NULL),(109,41,109,NULL,NULL,NULL),(110,42,110,NULL,NULL,NULL),(111,42,111,NULL,NULL,NULL),(112,42,112,NULL,NULL,NULL),(113,43,113,NULL,NULL,NULL),(114,43,114,NULL,NULL,NULL),(115,43,115,NULL,NULL,NULL),(116,44,116,NULL,NULL,NULL),(117,44,117,NULL,NULL,NULL),(118,44,118,NULL,NULL,NULL),(119,45,119,NULL,NULL,NULL),(120,45,120,NULL,NULL,NULL),(121,45,121,NULL,NULL,NULL),(122,46,122,NULL,NULL,NULL),(123,46,123,NULL,NULL,NULL),(124,46,124,NULL,NULL,NULL),(125,47,125,NULL,NULL,NULL),(126,47,126,NULL,NULL,NULL),(127,47,127,NULL,NULL,NULL),(128,48,128,NULL,NULL,NULL),(129,49,129,NULL,NULL,NULL),(130,49,130,NULL,NULL,NULL),(131,49,131,NULL,NULL,NULL),(132,49,132,NULL,NULL,NULL),(133,50,133,NULL,NULL,NULL),(134,50,134,NULL,NULL,NULL),(135,50,135,NULL,NULL,NULL),(136,51,136,NULL,NULL,NULL),(137,51,137,NULL,NULL,NULL),(138,51,138,NULL,NULL,NULL),(139,52,139,NULL,NULL,NULL),(140,52,140,NULL,NULL,NULL),(141,52,141,NULL,NULL,NULL),(142,52,142,NULL,NULL,NULL),(143,53,143,NULL,NULL,NULL),(144,53,144,NULL,NULL,NULL),(145,53,145,NULL,NULL,NULL),(146,53,146,NULL,NULL,NULL),(147,54,147,NULL,NULL,NULL),(148,54,148,NULL,NULL,NULL),(149,54,149,NULL,NULL,NULL),(150,54,150,NULL,NULL,NULL),(151,55,151,NULL,NULL,NULL),(152,55,152,NULL,NULL,NULL),(153,55,153,NULL,NULL,NULL),(154,55,154,NULL,NULL,NULL);
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_size_stock`
--

DROP TABLE IF EXISTS `product_size_stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_size_stock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sizeId_idx` (`sizeId`),
  KEY `productId_idx` (`productId`),
  CONSTRAINT `sizeId` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_size_stock`
--

LOCK TABLES `product_size_stock` WRITE;
/*!40000 ALTER TABLE `product_size_stock` DISABLE KEYS */;
INSERT INTO `product_size_stock` VALUES (1,1,43,15,NULL,'2020-08-13 20:35:12',NULL),(2,1,37,15,NULL,'2020-08-13 20:35:12',NULL),(3,17,38,12,NULL,NULL,NULL),(4,17,42,11,NULL,NULL,NULL),(5,17,47,5,NULL,NULL,NULL);
/*!40000 ALTER TABLE `product_size_stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(45) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `show` int(11) NOT NULL DEFAULT 0,
  `subcategoryId` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subcategoryId_idx` (`subcategoryId`),
  CONSTRAINT `subcategoryId` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Ruby','Chaya',9000,10,1,10,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,'2020-08-30 20:37:38',NULL),(2,'Jump negro','Chaya',10000,10,1,10,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(3,'FSK Alpha MG 243','Powerslide',3000,15,1,3,'This is a high-performance frame. Constructed using aluminum and combined with the special mounting system it provides an amazing performance that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(4,'3x110','Powerslide',3000,10,1,3,'This is a high-performance frame. Constructed using aluminum and combined with the special mounting system it provides an amazing performance that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(5,'Racing Rapid','Powerslide',3200,10,1,3,'This is a high-performance frame. Constructed using aluminum and combined with the special mounting system it provides an amazing performance that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(6,'Pleasure Tool','Powerslide',3100,12,1,3,'This is a high-performance frame. Constructed using aluminum and combined with the special mounting system it provides an amazing performance that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(7,'Tribune','Prime',1100,10,1,3,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(8,'Code','Matter',1200,10,1,3,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(9,'Juice','Matter',1100,10,1,3,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(10,'Zafiro','Matter',1100,10,1,3,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(11,'Crazy Glue','Matter',1100,10,1,3,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(12,'CST Air 150mm','Powerslide',1500,10,1,3,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(13,'Ophira','Chaya',3000,10,1,2,'This is a high-performance frame. Constructed using aluminum and combined with the special mounting system it provides an amazing performance that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(14,'Zena','Chaya',3000,10,1,2,'This is a high-performance frame. Constructed using aluminum and combined with the special mounting system it provides an amazing performance that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(15,'Bomb Stopper rojo','Chaya',500,10,1,2,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(16,'Bomb Stopper turquesa','Chaya',500,10,1,2,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(17,'Speed XX','Powerslide',20000,15,1,8,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(18,'Octo Propel Alloy','Matter',500,10,1,2,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(19,'Juice Cosmo','Matter',500,10,1,2,'This is a high-performance accessory for your skates. Constructed using premium quality materials. It provides an amazing stable platform that improves your skating experience.',NULL,NULL,NULL),(20,'Swell Bracelet','Powerslide',100,10,1,1,'Swell Bracelet from Powerslide.',NULL,NULL,NULL),(21,'Anax','Reign',10000,5,1,6,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(22,'Swell 125 celeste','Powerslide',11000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(23,'Atlas','Reign',11000,10,1,6,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(24,'Hardcore Evo','Powerslide',15000,10,1,5,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(25,'Imperial Evo','Powerslide',12000,10,1,5,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(26,'Imperial Megacruiser','Powerslide',10000,10,1,5,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(27,'Metropolis','Powerslide',9000,10,1,5,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(28,'Next SUV','Powerslide',13000,10,1,7,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(29,'Nordic XC Trail','Powerslide',14000,10,1,7,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(30,'One Wave negro/verde','Powerslide',8000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(31,'Perseus','Reign',10000,10,1,6,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(32,'Phuzion Universe blanco','Powerslide',6000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(33,'Swell 110 negro/gris','Powerslide',11000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(34,'Swell 125 rosa','Powerslide',11000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(35,'Urban Kids','Powerslide',7000,10,1,5,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(36,'ViPro Carbon','Powerslide',20000,10,1,8,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(37,'Zeus','Reign',10000,10,1,6,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(38,'Jump rojo','Chaya',10000,15,1,10,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(39,'Melrose Elite durazno','Chaya',10000,10,1,11,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(40,'Onyx','Chaya',9000,10,1,10,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(41,'Ruby','Chaya',9000,10,1,10,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(42,'Vintage Glide Cromo','Chaya',10000,10,1,11,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(43,'Glide Denim','Chaya',9000,10,1,11,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(44,'Unicorn Glide Kids','Chaya',7000,10,1,11,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(45,'Jade','Chaya',10000,10,1,10,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(46,'Vintage Neat','Chaya',9000,10,1,11,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(47,'Classic','Playlife',12000,10,1,9,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(48,'Quad Minnie','Powerslide',7000,10,1,11,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(49,'Swell 125 negro/rojo','Powerslide',11000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(50,'Quad Rich','Powerslide',8000,10,1,11,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(51,'Melrose Elite violeta','Chaya',10000,10,1,11,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(52,'One Wave negro/magenta','Chaya',8000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(53,'Phuzion Universe rojo','Powerslide',6000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(54,'Swell 110 negro/turquesa','Powerslide',11000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL),(55,'Swell 110 rosa','Powerslide',11000,10,1,4,'This is a high-performance skate. Constructed using glass-fiber reinforced outer shell and cuff and combined with the special mounting system it provides an amazing stable platform that improves power transfer, reduces vibrations and creates a super low center of gravity for more and better balance.',NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'client','CLIENT puede acceder a vistas públicas, agregar productos al carrito y realizar compras.',NULL,NULL,NULL),(2,'admin','ADMIN puede acceder a las vistas de administrador y editar el CRUD de productos, subcategorías y cat',NULL,NULL,NULL),(3,'superadmin','SUPERADMIN puede acceder a todas las vistas y editar todo. Agrega los permisos de ADMIN.',NULL,NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eusize` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (32,32,NULL,NULL,NULL),(33,33,NULL,NULL,NULL),(34,34,NULL,NULL,NULL),(35,35,NULL,NULL,NULL),(36,36,NULL,NULL,NULL),(37,37,NULL,NULL,NULL),(38,38,NULL,NULL,NULL),(39,39,NULL,NULL,NULL),(40,40,NULL,NULL,NULL),(41,41,NULL,NULL,NULL),(42,42,NULL,NULL,NULL),(43,43,NULL,NULL,NULL),(44,44,NULL,NULL,NULL),(45,45,NULL,NULL,NULL),(46,46,NULL,NULL,NULL),(47,47,NULL,NULL,NULL),(48,48,NULL,NULL,NULL),(49,49,NULL,NULL,NULL),(50,50,NULL,NULL,NULL);
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `categoryId_idx` (`categoryId`),
  CONSTRAINT `categoryId` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Acc-Varios',3,'Accesorios varios',NULL,NULL,NULL),(2,'Acc-Quad',3,'Accesorios para Quad Skates',NULL,NULL,NULL),(3,'Acc-Inline',3,'Accesorios para Inline Skates',NULL,NULL,NULL),(4,'Fitness',1,'Inline Skates - Fitness',NULL,NULL,NULL),(5,'Freeskate',1,'Inline Skates - Freeskate',NULL,NULL,NULL),(6,'Hockey',1,'Inline Skates - Hockey',NULL,NULL,NULL),(7,'Offroad',1,'Inline Skates - Offroad',NULL,NULL,NULL),(8,'Racing',1,'Inline Skates - Racing',NULL,NULL,NULL),(9,'Classic',2,'Quad Skates - Classic',NULL,NULL,NULL),(10,'Derby',2,'Quad Skates - Derby',NULL,NULL,NULL),(11,'Lifestyle',2,'Quad Skates - Lifestyle',NULL,NULL,NULL);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `roleId` int(11) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mariano','Martínez','mariano@admin.com','$2a$10$vm6d4JVjQTwmsDKzgE3T7OjkGErzBEbekSpASsUwYQiAQMOBdO9Ni',3,'usuariovacio1.png','1123452345','2020-08-02 01:40:23','2020-08-02 01:40:23',NULL),(2,'Paola','Garay','paola@admin.com','$2a$10$vm6d4JVjQTwmsDKzgE3T7OjkGErzBEbekSpASsUwYQiAQMOBdO9Ni',3,'usuariovacio1.png','1123452345',NULL,NULL,NULL),(3,'Pablo','Damico','pablo@admin.com','$2a$10$vm6d4JVjQTwmsDKzgE3T7OjkGErzBEbekSpASsUwYQiAQMOBdO9Ni',3,'usuariovacio1.png','1123452345',NULL,NULL,NULL),(4,'Pruebas','Cliente','pruebas@cliente.com','$2a$10$iivXbNoa2XPBBnapn9ddh.Zkr9W/IV4rJWhNtXjAGroZKAu.V3eLO',1,'usuariovacio1.png','1154325432','2020-08-08 17:21:25','2020-08-08 17:21:59',NULL),(5,'Profesores','Admin','profesoresadmin@dh.com','$2a$10$.wgsNjJ03lXfLTjPUDp2IuRduKOMbo4xE9UAecU4P80x2bHnVfkFC',3,'usuariovacio1.png',NULL,'2020-08-16 01:55:30','2020-08-16 01:55:30',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-02 12:15:07
