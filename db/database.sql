CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

DROP TABLE IF EXISTS clients;

CREATE TABLE IF NOT EXISTS clients (
  client_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO clients (first_name, last_name, phone_number, email, address)
VALUES ('Juan Carlos', 'Sulbaran Gonzalez', '555-555-5555', 'sulbaranjc@gmail.com', 'Zayas 4. 1-3 Madrid - España'),
('Juan Alberto', 'Sulbaran Oropeza', '555-555-5555', 'sulbaranja@gmail.com', 'Segurola 3240. 4-b Buenos Aires - Argentina'),
('Carlos Jose', 'Sulbaran Oropeza', '555-555-5555', 'sulbarancj@gmail.com', 'Ciudad 2000 Nro. 17 Maracaibo - Venezuela');



