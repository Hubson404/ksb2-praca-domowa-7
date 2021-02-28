DROP TABLE IF EXISTS CARS;
DROP TABLE IF EXISTS NEWS;

CREATE TABLE CARS
(
    car_id          INT AUTO_INCREMENT PRIMARY KEY,
    brand           VARCHAR(250) NOT NULL,
    model           VARCHAR(250) NOT NULL,
    color           VARCHAR(250) NOT NULL,
    production_year INT          NOT NULL
);

CREATE TABLE NEWS
(
    news_id      INT AUTO_INCREMENT PRIMARY KEY,
    id           VARCHAR(250)  NOT NULL,
    title        VARCHAR(250)  NOT NULL,
    url          VARCHAR(250)  NOT NULL,
    image_url    VARCHAR(250)  NOT NULL,
    news_site    VARCHAR(250)  NOT NULL,
    summary      NVARCHAR(max) NOT NULL,
    published_at VARCHAR(250)  NOT NULL,
    updated_at   VARCHAR(250)  NOT NULL
);

INSERT INTO CARS (brand, model, color, production_year)
VALUES ('Audi', 'A6', 'BLUE', 2010),
       ('BMW', 'M3', 'BLACK', 2015),
       ('FIAT', '126P', 'GREEN', 1990);
