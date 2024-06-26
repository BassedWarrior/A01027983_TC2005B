-- Inserting dummy data into player_account table without repeating countries
INSERT INTO player_account (username, password, country, birthdate, e_mail, screen_name, coins, crystals, credits)
VALUES
    ('user1', 'password1', 'United States', '1990-01-01', 'user1@example.com', 'user1_screen', 100, 50, 200),
    ('user2', 'password2', 'Canada', '1995-02-02', 'user2@example.com', 'user2_screen', 150, 60, 220),
    ('user3', 'password3', 'Mexico', '2000-03-03', 'user3@example.com', 'user3_screen', 200, 70, 240),
    ('user4', 'password4', 'United Kingdom', '1985-04-04', 'user4@example.com', 'user4_screen', 250, 80, 260),
    ('user5', 'password5', 'Australia', '1980-05-05', 'user5@example.com', 'user5_screen', 300, 90, 280),
    ('user6', 'password6', 'Germany', '1975-06-06', 'user6@example.com', 'user6_screen', 350, 100, 300),
    ('user7', 'password7', 'France', '1970-07-07', 'user7@example.com', 'user7_screen', 400, 110, 320),
    ('user8', 'password8', 'Japan', '1965-08-08', 'user8@example.com', 'user8_screen', 450, 120, 340),
    ('user9', 'password9', 'Brazil', '1960-09-09', 'user9@example.com', 'user9_screen', 500, 130, 360),
    ('user10', 'password10', 'United States', '1955-10-10', 'user10@example.com', 'user10_screen', 550, 140, 380);

-- Inserting dummy data into deck table
INSERT INTO deck (deck_id, username, name)
VALUES
    (1, 'user1', 'Deck 1'),
    (2, 'user2', 'Deck 2'),
    (3, 'user3', 'Deck 3'),
    (4, 'user4', 'Deck 4'),
    (5, 'user5', 'Deck 5'),
    (6, 'user6', 'Deck 6'),
    (7, 'user7', 'Deck 7'),
    (8, 'user8', 'Deck 8'),
    (9, 'user9', 'Deck 9'),
    (10, 'user10', 'Deck 10');

-- Inserting dummy data into type table
INSERT INTO energy_type (name)
VALUES
    ('water'),
    ('psychic'),
    ('metal'),
    ('lightning'),
    ('grass'),
    ('fire'),
    ('fighting'),
    ('fairy'),
    ('darkness'),
    ('dragon');

-- Inserting dummy data into pokemon_card table
INSERT INTO pokemon_card (name, pokemon_type, weakness, evolution_phase, ps)
VALUES
    ('Pikachu', 'lightning', 'fighting', 'basic', 60),
    ('Charizard', 'fire', 'water', 'phase_2', 120),
    ('Bulbasaur', 'grass', 'fire', 'basic', 40),
    ('Squirtle', 'water', 'lightning', 'basic', 50),
    ('Jigglypuff', 'fairy', 'psychic', 'basic', 30),
    ('Machamp', 'fighting', 'psychic', 'phase_2', 100),
    ('Gengar', 'darkness', 'fairy', 'phase_2', 110),
    ('Venusaur', 'grass', 'fire', 'phase_2', 130),
    ('Alakazam', 'psychic', 'darkness', 'phase_2', 90),
    ('Dragonite', 'fire', 'fire', 'phase_2', 140);

-- Inserting dummy data into attack table
INSERT INTO attack (name, pokemon_name, text, damage)
VALUES
    ('Thunderbolt', 'Pikachu', 'Electric attack', 80),
    ('Fire Blast', 'Charizard', 'Fire attack', 100),
    ('Vine Whip', 'Bulbasaur', 'Grass attack', 60),
    ('Water Gun', 'Squirtle', 'Water attack', 70),
    ('Rollout', 'Jigglypuff', 'Normal attack', 50),
    ('Karate Chop', 'Machamp', 'Fighting attack', 90),
    ('Shadow Punch', 'Gengar', 'Ghost attack', 80),
    ('Solar Beam', 'Venusaur', 'Grass attack', 110),
    ('Psybeam', 'Alakazam', 'Psychic attack', 70),
    ('Dragon Rage', 'Dragonite', 'Dragon attack', 120);

-- Inserting additional dummy data into trainer_card table
INSERT INTO trainer_card (name, category, text)
VALUES
    ('Great Ball', 'object', 'Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.'),
    ('Rare Candy', 'object', 'Choose 1 of your Basic Pokémon in play. If you have a Stage 1 or Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it.'),
    ('Max Potion', 'object', 'Heal all damage from 1 of your Pokémon that has at least 1 [W] Energy attached to it. Then, discard all Energy attached to that Pokémon.'),
    ('Lillie', 'supporter', 'Draw cards until you have 6 cards in your hand.'),
    ('Quick Ball', 'object', 'You can play this card only if you discard another card from your hand. Search your deck for a Basic Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.'),
    ('Cynthia', 'supporter', 'Shuffle your hand into your deck. Then, draw 6 cards.'),
    ('Switch', 'object', 'Switch your Active Pokémon with 1 of your Benched Pokémon.'),
    ('Evolution Incense', 'object', 'Search your deck for an Evolution Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.'),
    ('Poké Ball', 'object', 'Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.'),
    ('Pokémon Communication', 'object', 'Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.');
