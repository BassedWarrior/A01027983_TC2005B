// API server to manipulate card information, stored in an array on this server.

"use strict";

import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

let card_list = [];
let card_json = {
    id: undefined,
    name: undefined,
    cost: undefined,
}


// Return all stored cards. Send message if empty.
app.get("/cards", (req, res) => {
    console.log(req.params);
    if (card_list.length == 0) {
        res.status(200).send("No cards available");
    } else {
        res.status(200).json(card_list);
    }
});


// Add card to stored cards collection.
app.post("/cards", (req, res) => {
    console.log(req.body);

    if (!Array.isArray(req.body)) {
        let expected_keys = Object.keys(card_json);
        let gotten_keys = Object.keys(req.body);

        // DEBUG ONLY
        console.log("DEBUG ONLY");
        console.log(expected_keys, expected_keys.length);
        console.log(gotten_keys, gotten_keys.length);

        if (expected_keys.length != gotten_keys.length) {
            res.status(200)
                .send("Card could not be added. Incorrect number of attributes.");
            return;
        };

        let new_card = {};
        for (let key of expected_keys) {
            let key_index = gotten_keys.findIndex((gotten_key) => {
                return gotten_key == key;
            });
            console.log(`DEBUG ONLY: ${key} is at index ${key_index}`);
            if (key_index == -1) {
                res.status(200)
                    .send(`Card could not be added. Missing attribute: ${key}.`);
                return;
            } else if (key_index != gotten_keys.findLastIndex((gotten_key) => {
                    return gotten_key == key;
                })
            ) {
                res.status(200)
                    .send("Card could not be added. Duplicate attributes provided.");
                return;
            }
            new_card[key] = req.body[key];
        }

        card_list.push(new_card);
        res.status(200).send("Card added succesfully");
    } else {
        let added_cards = 0;
        outer: for (let card of req.body) {
            let expected_keys = Object.keys(card_json);
            let gotten_keys = Object.keys(card);

            // DEBUG ONLY
            console.log("DEBUG ONLY");
            console.log(expected_keys, expected_keys.length);
            console.log(gotten_keys, gotten_keys.length);

            if (expected_keys.length != gotten_keys.length) {
                console.log("Card could not be added. Incorrect number of attributes.");
                continue;
            };

            let new_card = {};
            for (let key of expected_keys) {
                let key_index = gotten_keys.findIndex((gotten_key) => {
                    return gotten_key == key;
                });
                console.log(`DEBUG ONLY: ${key} is at index ${key_index}`);
                if (key_index == -1) {
                    console.log(`Card could not be added. Missing attribute: ${key}.`);
                    continue outer;
                } else if (key_index != gotten_keys.findLastIndex((gotten_key) => {
                        return gotten_key == key;
                    })
                ) {
                    console.log("Card could not be added. Duplicate attributes provided.");
                    continue outer;
                }
                new_card[key] = card[key];
            }

            added_cards++;
            card_list.push(new_card);
        }
        res.status(200).send(`Cards added succesfully: ${added_cards}/${req.body.length}`);
    }
});


// Return a specific card based on card id.
app.get("/cards/:id", (req, res) => {
    console.log(req.params);
    let found_card = undefined;
    for (let card of card_list) {
        if (card.id == req.params.id) {
            found_card = card;
            break;
        }
    }
    if (found_card === undefined) {
        res.status(200).send("Card not found")
    } else {
        res.status(200).json(found_card)
    }
});


// Delete a card based on card id.
app.delete("/cards/:id", (req, res) => {
    console.log(req.body);
    let card_index = card_list.findIndex((card) => card.id == req.params.id);
    if (card_index != -1) {
        card_list.splice(card_index, 1);
        res.status(200).send("Card deleted successfully");
    } else {
        res.status(200).send("Card not found.");
    }
});


// Update a card based on card id.
app.put("/cards/:id", (req, res) => {
    console.log(req.body);
    res.status(200).send("Card updated succesfully");
});


// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
