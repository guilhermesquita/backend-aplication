-- Active: 1678390796160@@127.0.0.1@3306
CREATE TABLE pets (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price INT NOT NULL,
    size TEXT NOT NULL
);  

INSERT INTO pets (id, name, price, size)
VALUES('p001', 'Thor', 23, 'Pequeno Porte');

SELECT * FROM pets;

CREATE TABLE clients (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    age INT NOT NULL
);

SELECT * FROM clients;

INSERT INTO clients(id, name, email, password, age)
VALUES('c001', 'Lucas', 'lucas@email.com', 'senha123', 22);

DELETE FROM pets 
WHERE id = 'p007'; 


DELETE FROM pets 
WHERE id = 'p008'; 