"use strict"

import express from 'express';
import fs from "fs";

const port = 3000;
const app = express();
const card_list = [];


app.use(express.json())
app.use(express.static("public"));


app.get("/", (req, res) => {
    const file = fs.readFileSync("public/html/hello.html", "utf8");
    res.status(200).send(file);
});


app.get("/hello", (req, res) => {
    const salute = "Hello from server";
    console.log(req.query)
    res.status(200).send(salute);
});


app.get("/hello/:name", (req, res) => {
    console.log(req.params);
    const salute = `hello ${req.params.name}`;
    res.status(200).send(salute);
});


app.get("/cards", (req, res) => {
    console.log(req.params);
    if (cards.length == 0) {
        res.status(200).send("No cards left");
    } else {
        res.status(200).json(card_list);
    }
});


app.post("/cards", (req, res) => {
    console.log(req.body);
    card_list.push(req.body);
    res.status(200).send("Card added succesfully");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
