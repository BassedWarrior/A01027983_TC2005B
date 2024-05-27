"use strict";

import express from "express";
import fs from "fs";

const PORT = 3000;
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    const file = fs.readFileSync("public/html/simple_web_page.html", "utf8");
    res.status(200).send(file);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});
