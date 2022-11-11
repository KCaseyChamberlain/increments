const fs = require('fs');
const express = require('express');
const path = require("path");
var incrementDB = require('./db/db.json');
var dataBase = path.join(__dirname, "./db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// API route
app.get('/api', (req, res) => {
    fs.readFile(dataBase, "utf-8", function (err, incrementDB) {
        if (err) throw err
        else {
            incrementDB = JSON.parse(incrementDB)
            return res.json(incrementDB)
        }
    })
});

// increment route
app.put('/+', (req, res) => {
    jsonReader(dataBase, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            incrementDB.count += 1;
            fs.writeFile(dataBase, JSON.stringify(data), err => {
                if (err) {
                    console.log(err);
                };
            })
        }
    });
});

// decrement route
app.put('/-', (req, res) => {
    jsonReader(dataBase, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            incrementDB.count -= 1;
            fs.writeFile(dataBase, JSON.stringify(data), err => {
                if (err) {
                    console.log(err);
                };
            })
        }
    });
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

console.log(incrementDB.count)
