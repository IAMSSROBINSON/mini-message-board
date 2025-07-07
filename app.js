const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/indexRouter');

console.log("App is starting...");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname, 'public'));

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}..`);
});


