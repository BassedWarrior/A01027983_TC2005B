# ER Modeling of Pokemon TCG

## ER Model

![ER-Model Image](./Pokemon-TCG-ER.drawio.svg)

This is a possible database (DB) Entity Relation (ER) modelling of the Pokemon 
Trading Card Game (TCG).

## Entities

The following entities were considered:

- [Player Account](#Player-Account)
- [Deck](#Deck)
- [Pokemon Card](#Pokemon-Card)
- [Attack](#Attack)
- [Type](#Type)
- [Trainer Card](#Trainer-Card)

### Player Account

The player account is the main table that the DB should be concerned with. 
It is responsible for giving players access to the game and keeps record of 
all things that concern the player and differentiate them from other players.

It has the following attributes:

- username VARCHAR(17): used for login and identification.
- password VARCHAR(50): used for login authentication.
- country ENUM: country of residence.
- birthdate DATE: used for age verification.
- e\_mail VARCHAR(50): used as contact information.
- screen-name VARCHAR(15): displayed in-game for other players to see.
- coins SMALLINT UNSIGNED: type of currency used in-game.
- crystals SMALLINT UNSIGNED: type of currency used in-game.
- credits SMALLINT UNSIGNED: type of currency used in-game.

### Deck

A deck is the fundamental entity that a player needs to begin a match. It is 
important to keep track of the different decks a player has created as this is 
what the game needs to start a match, and can be customized by the player 
before every match according to their strategy.

It has the following attributes:

- deck\_id  TINYINT UNSIGNED: used for identification.
- username VARCHAR(17): player to which the deck belongs.
- name VARCHAR(25): displayed name for easier identification.

### Pokemon Card

A single pokemon card which can be added to a deck. At least one is required 
in order to build a deck since one of the game's win-conditions is the 
removal of all active pokemon from the opponent's active spot and bench.

It has the following attributes:

- name VARCHAR(25): the name of the pokemon. Serves as unique identifier.
- type ENUM: the pokemon type, which is important for many game mechanics.
- weakness ENUM: increases damage received from certain pokemon types.
- evolution\_phase ENUM: determines playability and is important for game 
    mechanics.
- ps TINYINT UNSIGNED: pokemon's resistance to attacks before being knocked 
    out.

### Attack

An attack is part of a pokemon card's composition and determines the game 
mechanics for a given pokemon to attack, but has its own attributes that must 
be considered:

- name VARCHAR(25): name of the attack. Serves as unique identifier.
- pokemon\_name VARCHAR(25): name of the pokemon who has that attack.
- text TINITEXT: text description of what the attack does. To be displayed in 
    the card.
- damage TINYINT: the amount of damage the attack will inflict on oposing 
    pokemon.

### Type

This is a recurring element that is shared accross various entities and could 
at some point be linked to the energy cards, which constitute the second card 
class a deck can be built with, it was decided to assume it as an entity on 
its own, even if its only attribute is:

- name ENUM: the name of the type.

### Trainer Card

The complementary card class along with pokemon and energy cards which allows 
for player actions beyond pure combat. These are a crucial part of 
deckbuilding since they can shape a deck's strategy and the player's ability 
to excecute it.

It has the following attributes:

- name VARCHAR(25): name of the card. Serves as unique identifier.
- category ENUM: determines which game mechanics it affects.
- text TINYTEXT: describe the effect the card has. To be displayed in the card.

## Relations

The following relations were modeled:

- [Player-Deck](#Player-Deck)
- [Player-Card](#Player-Card)
- [Deck-Card](#Deck-Card)
- [Pokemon-Attack](#Pokemon-Attack)
- [Pokemon-Type](#Pokemon-Type)
- [Attack-Type](#Attack-Type)

### Player Deck

The relationship between a [Player](#Player-Account) and a [Deck](#Deck) was 
modeled as 1 to n, where a player doesn't necessarily have to have more than 1 
deck, but a deck must belong to a player. With this relation, no intermediary 
table is required and a foreign key in the deck table referencing the player 
table is enough.

It could be argued that, since there exist only a finite number of decks that 
could be created by the players with the cards in the game, and one could 
model the player-deck relation to be n to n by storing all possible decks and 
then relating each player with each deck, it was decided that it is best to 
have overlapp and duplicated information where two identical decks are stored 
twice if they belong to two different players for easier arrangement of the 
database and without the need to compute and store all different deck 
possibilities as most would never be built by players.

### Player Card

The relationship between [Player](#Player-Account) and a 
[Pokemon Card](#Pokemon-Card) or a [Trainer Card](#Trainer-Card) is n to n 
because, unlike decks, all players could have access to all cards. And hence 
intermediary tables are crated which relate each player with the cards they 
own and have access to to build their decks. 

*Two distinct intermediary tables are required because a foreign key can only 
reference a single table. Hence since pokemon and trainer cards are different 
entities, they effectively have independent relations with the player entity. 
But were put together in this section for brevity*.

### Deck Card

The relationship between a [Deck](#Deck) and the 
[Pokemon Cards](#Pokemon-Card) and [Trainer Cards](#Trainer-Card) that make it 
up is n to n, given by intermediary tables which link a player's deck to 
the intermediary tables that link a player with the available cards in-game. 
This ensures that the decks a player owns are built referencing only cards 
that the player owns, without forbidding the player from using the same card 
as part of different decks. This is allowed because a player can only use a 
single deck in any given match.

*As with the [Player Card](#Player-Card) relation, two distinct intermediary 
tables are required due to pokemon and trainer cards being distinct 
entities with distinct intermediary tables relating them to players*.

Additionally, it must be mentioned that there is a relation between a 
[Deck](#Deck) and a [Type](#Type) in the form of an energy card, which is 
n to n as multiple decks can have multiple energy cards of the same type. 
Which was not deemed important enough to warrant being modeled as an entity. 
It could be if card graphics were considered, but at this stage, they are 
ignored.

### Pokemon Attack

The relationship between a [Pokemon Card](#Pokemon-Card) and an 
[Attack](#Attack) is 1 to n, which is achieved by referencing the pokemon an 
attack belongs to given that a single pokemon can have multiple attacks, but 
one attack can't belong to multiple pokemon.

### Pokemon Type

The relationship between a [Pokemon Card](#Pokemon-Card) and a [Type](#Type) 
is 1 to n, because multiple pokemon can be of the same type. Similarly, 
the relationship between a pokemon's weakness can be shared with other 
pokemon, so foreign keys are employed to reference type from the pokemon table.

### Attack Type

The relationship between an [Attack](#Attack) and a [Type](#Type) is n to n, 
since a single attack can require multiple energy types, and the same energy 
types can be required by multiple different attacks.
