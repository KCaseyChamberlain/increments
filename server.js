const fs = require('fs');
const express = require('express');
const path = require("path");
var notes = require('./db/db.json');
var dataBase = path.join(__dirname, "./db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());






app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});