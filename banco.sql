CREATE TABLE carros (
ID SERIAL PRIMARY KEY NOT NULL,
MODELO VARCHAR(30) NOT NULL,
MARCA VARCHAR(30) NOT NULL,
PRECO NUMERIC NOT NULL);

INSERT INTO carros (modelo, marca, preco) VALUES ('Conversivel', 'PEUGEOT', 82.000)
INSERT INTO carros (modelo, marca, preco) VALUES ('Picape', 'CHEVROLET', 120.000)
INSERT INTO carros (modelo, marca, preco) VALUES ('Minivan', 'FIAT', 100.000)
INSERT INTO carros (modelo, marca, preco) VALUES ('Sedã', 'FIAT', 75.00)
INSERT INTO carros (modelo, marca, preco) VALUES ('Sedã', 'FIAT', 52.00)
INSERT INTO carros (modelo, marca, preco) VALUES ('Picape', 'FIAT', 98.00)
INSERT INTO carros (modelo, marca, preco) VALUES ('Sedã', 'HONDA', 90.00)
INSERT INTO carros (modelo, marca, preco) VALUES ('SUV', 'HONDA', 86.00)
INSERT INTO carros (modelo, marca, preco) VALUES ('Minivan', 'HONDA', 130.00)

SELECT * FROM carros
-- ALTER SEQUENCE carros_id_seq RESTART WITH 1

DELETE FROM carros WHERE id = 1

