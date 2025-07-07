const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();
console.log("App is starting...");

app.get('/', (req, res) => {
    res.send("Hello World From Render!");
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}..`);
});


