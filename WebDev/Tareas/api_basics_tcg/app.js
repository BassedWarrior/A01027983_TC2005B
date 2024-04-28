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


function add_new_card(card) {
    let expected_keys = Object.keys(card_json);
    let gotten_keys = Object.keys(card);

    // DEBUG ONLY
    console.log("DEBUG ONLY");
    console.log(expected_keys, expected_keys.length);
    console.log(gotten_keys, gotten_keys.length);

    if (expected_keys.length != gotten_keys.length) {
        return "Card could not be added. Incorrect number of attributes.";
    };

    let new_card = {};
    for (let key of expected_keys) {
        let key_index = gotten_keys.findIndex((gotten_key) => {
            return gotten_key == key;
        });
        console.log(`DEBUG ONLY: ${key} is at index ${key_index}`);
        if (key_index == -1) {
            return `Card could not be added. Missing attribute: ${key}.`;
        } else if (key_index != gotten_keys.findLastIndex((gotten_key) => {
                return gotten_key == key;
            })
        ) {
            return "Card could not be added. Duplicate attributes provided.";
        } else if (["id", "name"].includes(key) && card_list.find((crd) => {
                return crd[key] == card[key];
            })
        ) {
            return `Card could not be added. Card with ${key} = ${card[key]} already stored.`;
        }
        new_card[key] = card[key];
    }

    card_list.push(new_card);
    return "Card added succesfully";
};


// Add card to stored cards collection.
app.post("/cards", (req, res) => {
    console.log(req.body);

    if (!Array.isArray(req.body)) {
        res.status(200).send(add_new_card(req.body));
    } else {
        let res_msg = "";
        let added_cards = 0;
        for (let card of req.body) {
            let added_msg = add_new_card(card);
            res_msg += added_msg + "\n";
            if (added_msg == "Card added succesfully") {
                added_cards++;
            }
        }
        res_msg += `Cards added succesfully: ${added_cards}/${req.body.length}`;
        res.status(200).send(res_msg);
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
    if (card_index == -1) {
        res.status(200).send("Card not found.");
        return;
    }

    card_list.splice(card_index, 1);
    res.status(200).send("Card deleted successfully");
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
