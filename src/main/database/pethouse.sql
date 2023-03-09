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