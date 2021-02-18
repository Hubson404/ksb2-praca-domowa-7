DROP TABLE IF EXISTS cars;

CREATE TABLE cars
(
    car_id          INT AUTO_INCREMENT PRIMARY KEY,
    brand           VARCHAR(250) NOT NULL,
    model           VARCHAR(250) NOT NULL,
    color           VARCHAR(250) NOT NULL,
    production_year INT          NOT NULL
);

INSERT INTO cars (brand, model, color, production_year)
VALUES ('Audi', 'A6', 'BLUE', 2010),
       ('BMW', 'M3', 'BLACK', 2015),
       ('FIAT', '126P', 'GREEN', 1990);
