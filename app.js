const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const userRouter = require('./routes/userRouter');
const deleteMessageRouter = require('./routes/deleteMessageRouter');
const errorRouter = require('./routes/errorRouter');


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/template');

let counter = 0;

app.use((req, res, next) => {
    console.log("Counter order:", ++counter);
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);

    next();
})

app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.use('/user', userRouter);
app.use('/message', deleteMessageRouter);
app.use('/', errorRouter);


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}..`);
})