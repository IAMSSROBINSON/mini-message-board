const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/indexRouter');

console.log("App is starting...");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((req, res) => {
    res.status(404);
    res.json({success: false, message: "Resource not found."});
});

app.use((error, req, res, next) => {
    res.status(500);
    res.json({success: false, message: "Something went wrong."});
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}..`);
});


