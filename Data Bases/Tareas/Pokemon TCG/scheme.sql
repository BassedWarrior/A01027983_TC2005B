DROP DATABASE IF EXISTS pokemon;
CREATE DATABASE pokemon;
USE pokemon;

CREATE TABLE player_account (
    username VARCHAR(17) NOT NULL,
    password VARCHAR(50) NOT NULL,
    country ENUM("United States", "Canada", "Mexico") NOT NULL,
    birthdate DATE NOT NULL,
    e_mail VARCHAR(50) NOT NULL,
    screen_name VARCHAR(15) NOT NULL,
    coins SMALLINT UNSIGNED NOT NULL,
    crystals SMALLINT UNSIGNED NOT NULL,
    credits SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (username)
) ENGINE=InnoDB, CHARSET=UTF8;

CREATE TABLE deck (
    deck_id INT NOT NULL,
    username VARCHAR(17) NOT NULL,
    name VARCHAR(25) NOT NULL,
    PRIMARY KEY (deck_id),
    FOREIGN KEY (username) REFERENCES player_account(username)
) ENGINE=InnoDB, CHARSET=UTF8;

CREATE TABLE energy_type (
    name ENUM("water", "psychic", "metal", "lightning", "grass", "fire", "fighting", "fairy", "darkness") NOT NULL,
    PRIMARY KEY (name)
) ENGINE=InnoDB, CHARSET=UTF8;

CREATE TABLE pokemon_card (
    name VARCHAR(25) NOT NULL,
    pokemon_type ENUM("water", "psychic", "metal", "lightning", "grass", "fire", "fighting", "fairy", "darkness") NOT NULL,
    weakness ENUM("water", "psychic", "metal", "lightning", "grass", "fire", "fighting", "fairy", "darkness") NOT NULL,
    evolution_phase ENUM("basic", "phase_1", "phase_2") NOT NULL,
    ps TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (name),
    FOREIGN KEY (pokemon_type) REFERENCES energy_type(name),
    FOREIGN KEY (weakness) REFERENCES energy_type(name)
) ENGINE=InnoDB, CHARSET=UTF8;

CREATE TABLE attack (
    name VARCHAR(25) NOT NULL,
    pokemon_name VARCHAR(25) NOT NULL,
    text TINYTEXT NOT NULL,
    damage TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (name),
    FOREIGN KEY (pokemon_name) REFERENCES pokemon_card(name)
) ENGINE=InnoDB, CHARSET=UTF8;

CREATE TABLE `trainer_card` (
    name VARCHAR(25) NOT NULL,
    category ENUM("object", "stadium", "supporter") NOT NULL,
    text TINYTEXT NOT NULL,
    PRIMARY KEY (name)
) ENGINE=InnoDB, CHARSET=UTF8;
