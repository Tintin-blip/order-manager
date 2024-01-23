-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: crudsql
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (39,2,'2024-01-13 09:02:48'),(41,2,'2024-01-13 09:09:56'),(43,5,'2024-01-13 10:02:36'),(62,36,'2024-01-16 07:55:57'),(83,36,'2024-01-16 09:11:17'),(86,36,'2024-01-16 09:17:07'),(105,36,'2024-01-16 09:19:11'),(106,36,'2024-01-16 09:19:11'),(107,36,'2024-01-16 09:19:11'),(108,36,'2024-01-16 09:19:11');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders_details`
--

LOCK TABLES `orders_details` WRITE;
/*!40000 ALTER TABLE `orders_details` DISABLE KEYS */;
INSERT INTO `orders_details` VALUES (17,41,6,250,1),(19,43,5,300,1),(58,83,5,300,4),(61,86,6,250,2),(80,105,4,120,2),(81,106,4,120,2),(82,107,4,120,2),(83,108,4,120,2);
/*!40000 ALTER TABLE `orders_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (4,'TV',120,4),(5,'laptop',300,5),(6,'pc',250,6),(7,'GPU',160,4);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `provider`
--

LOCK TABLES `provider` WRITE;
/*!40000 ALTER TABLE `provider` DISABLE KEYS */;
INSERT INTO `provider` VALUES (4,'empresas monagas'),(5,'empresas puerto'),(6,'empresas barcelona');
/*!40000 ALTER TABLE `provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'orlando','ojrb11113','$2a$10$4FXrmA7A57a7.gXOK5UUkuanNcSi7pX2T3.Dq2/Rz4SMTYs7u8gsu','ramirez@gmail.com'),(5,'walter','maricon123','$2a$10$pHa/Ohc.qjGgeJOMAD0Ohe0PmvPa7ct6Z0gAIBVVszW4rP6sxrn8u','walter@gmail.com'),(6,'Jorge','Jorge','$2a$10$PHjcnnxf9fpnOZxrLRfez.C6PIdpoMKtV/Dt6038KFmTdmv/pRTn6','jorgepertoldi@gmail.com'),(7,'Jorge','Jgeeeee','$2a$10$hdyR.mIUCn.JqPvlqRiuIOs.54gHco053pYrWpIJ6f4np2CPigD7i','jorgepertoldi@gmail.com'),(8,'jorgeqe','Jorge23','$2a$10$CvOGxjpjmUpT06rOLpa14ehUqXpnPbpMtDnHtJyYWsdMxKWqMSErC','pertoldi18@gmail.com'),(9,'dasd2323','123456','$2a$10$oIIgFhn6Fd6v05xlbRFyXuuLN3WVX9x.luciITc1.RpWLdZeTx2Vm','pertoldi18@gmail.com'),(10,'Jorgeprueba1','123456r','$2a$10$r/KG1OzYXWHqs5itWGvpMO/WTzgtzTSquhXQqUni0nmGiBREob98S','pertoldi19@gmail.com'),(11,'Jorgeprueba2','Zicoido','$2a$10$j5o9DAzj/U3y5m1TkxzJPO1cGdBrSN7r8m0eOyOSArFLUbS6hvqg2','pertoldi20@gmail.com'),(12,'Prueba23','jorgepertoldi23','$2a$10$N2/TRR8NZtIPjdND6ZL6auVwJOfMrytXNg.ZCrLcf8z5dAmJM0Llm','pertoldi16@gmail.com'),(13,'Prueba23','JorgeYF23','$2a$10$3mZV80.cclpigYOBP/zFc.cnKJc5inyPeGwL.XRAd0FUvjTxBCS2C','jorgeluisperoldi@hotmail.com'),(14,'ing213','jorgepertoldi2331','$2a$10$4ALNbG.YFW.sqScZBqjbye7Y0215jYvDmBO18bhqO2H4sSEWgtLdW','pertoldi11@gmail.com'),(15,'ing21332','jorgepertoldi231','$2a$10$AZX3xL7kfscRIgBvoJork.2aos0RBRuLm03ocXAhHWuTIIGCZxkUS','pertoldi1@gmail.com'),(16,'dasd312','jorgepertoldi1','$2a$10$bXt8rwDxZB8gBDjyCb8mYu9w1pwMVnrlHlE85rJB9yh5MLA1KXGlu','pertoldi12@gmail.com'),(17,'ing12','Jorge23123','$2a$10$RjCCbTAnEvVQwvBBhuhoU.VQ6d6eLWnZyzrZ7xtzt7ESv15TxymCe','pertoldi15@gmail.com'),(18,'Jorge','Jorge1','$2a$10$q4hSOtx2IMxqDShZW0xjfOV0PkalqS/h0zEvyzPpVAX12EQy4OuMm','pertoldi18@gmail.com'),(19,'Jorge','Jorge11','$2a$10$0aZJaWIpRlMbSm1qIfUhte2P/aHYGChHqnX2jwuKJj6jy1yKfOu6C','pertoldi18@gmail.com'),(20,'Jorge','Jorge112','$2a$10$rR8e35I6VccYHQwDpJ5eduvIvAUhVsRTqVr5Z58TsSzAj6W.vkkUm','pertoldi18@gmail.com'),(21,'Jorge','Jorge22','$2a$10$VGrRVM7oNmTv.2gimbwKXuKUJU611QFarQ2rWZcB.Tk2TMUaKFk7G','pertoldi18@gmail.com'),(22,'Jorgerrt','23333','$2a$10$ALKwPNJwRnOSKrGklliFOOQCeSYmPwwfY29glaMC95kkP3H9GK8xO','pertoldi18@gmail.com'),(23,'ing2788','jorgepertoldi','$2a$10$gHvtHJnD0NoyuCvMq6DCVOVc75S8sadeHlsLasPAfLRQNx0uXP7p2','Frankoya100@gmail.com'),(24,'ing2788','jorepertoldi','$2a$10$NUQCJONwqjcmj2qUeLH.pecUh9HCJMyMgz1lTNNS4Gupak4yDo8ge','nuevocorreo@gmail.com'),(25,'ing2788','joreperoldi','$2a$10$/RbbsWm.zbnZpsixqtG4m.oHlCb77dYg283z1.PzAmBr0yFIzFgr6','nuevocorreo@gmail.com'),(26,'ing2788','joreperdi','$2a$10$QtnrhITUgPXmrSV/CjrT6OA4JIyhq4AmK53jQqaLlcvIN/WFc6hgq','nuevocorreo@gmail.com'),(27,'ing2788','joreprdi','$2a$10$rJriEWXsnG23US9Q1Jykze/ti4nM792QaE67WMe4/1LXZV78X5/tC','nuevocorreo@gmail.com'),(28,'ing2788','jorepdi','$2a$10$BsgNz5Sm9q5BEcDavULCVeV5uEu0Smh6XIM0uo6LjdhMqO40EVxI.','nuevocorreo@gmail.com'),(29,'ing2788','joredi','$2a$10$EURCQFFenXk4qio1owenXu79wQ6LYWnSQuOD8FYBgn53Mt0HZSCmK','nuevocorreo@gmail.com'),(30,'ing2788','jored','$2a$10$x8L//iJyo4XxDkBhKa8d..7OVlujmLQlG0b52kl5iVl17m7CSkkNG','nuevocorreo@gmail.com'),(31,'ing33123','jorgepertoldip','$2a$10$A0GdSRdJU6UnjgndyuwZXOPkmr9OoIxgj23Tfl/cqaQdh.9BZyOJ2','pertoldi00@gmail.com'),(32,'MARCO','MARCO','$2a$10$jDEsszssxKcfHSO1PA1YoOuBWvjBzH5WJVQ.Tx4GnmHsoxH4I6.B6','marco@gmail.com'),(33,'antonio','MMarco','$2a$10$UfdNH3LcGOxEwzDSH3WCsOvjSRV4rbUj4FR7U7QyD.64y1H7yd8Wi','eeeeee@gmail.com'),(34,'antonio','MMMarco','$2a$10$X6AJfTVvA9/7OnjGul3nl.1efaC.vnYQpfvFl/1cf9GBViDaRGfti','Koeqew@gmail.com'),(35,'antonio','MMMareco','$2a$10$ypbr7/DDt4hreUJQ6fciG.AvmlpocNfFb/NldftxlxLPstQy09NB2','Koeqw@gmail.com'),(36,'antonio','Marcoantonio','$2a$10$LK0Pni3qyu9HiKS.6UEbsONYjGtt/mDYmImNidi/2rZkPcmG9VBfG','marcoantoniosolis@gmail.com'),(37,'3213321','12112212112','$2a$10$mI5emdMAOdCaDrbwe0ify.HREwfAPVpU.pEOhOv1VRjoWCqCsqnB6','2313@gmail.com'),(38,'3213321','Jorafas23','$2a$10$O.PnwuwMdk3uwaUeRAt69uln7kqbYdfoQ9Gg3c1kySMzTBy7oVAKe','karola@gmail.com'),(39,'Marco','Marcoantonito','$2a$10$q3Vne1PdWJWQYby05y/wKe33Awtjl51gqQfU5kozcc7ji.NPf45G.','pertold48@gmail.com'),(40,'KARLA','karlota','$2a$10$m75ccha6RWn06t8nHy36BeYO/3JnQm47Y1XEOWNBdpbC0up/S7d0K','karla21@gmail.com'),(41,'KARLITA','karlota2','$2a$10$/2xwXsytsqPQ5MF7UtQ1o.LI.lxqIPNk387p6Kzzt2Z2INglnpbYm','KARLOTA21@GMAIL.COM'),(42,'KARLITA','kasee3','$2a$10$XsFcF3vCeGHSkcvk/aUyduYvYRVj3Pl46ShVxkLWXRq9mFDhDsDY2','KALOT@GMAIL.COM'),(43,'Jorge11111','karszle3','$2a$10$I96Bh0aU4Fg1Voa/.//11eu7nrm9XURq8WLpy81XMAwUMVjta.sWi','karlsze@gmail.com');
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

-- Dump completed on 2024-01-16  9:43:09
