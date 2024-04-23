// API server to manipulate card information, stored in an array on this server.

"use strict";

import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

let card_list = [];


app.get("/cards", (req, res) => {
    console.log(req.params);
    if (card_list.length == 0) {
        res.status(200).send("No cards available");
    } else {
        res.status(200).json(card_list);
    }
});


app.post("/cards", (req, res) => {
    console.log(req.body);
    card_list.push(req.body);
    res.status(200).send("Card added succesfully");
});


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


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
