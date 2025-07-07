const { Router } = require('express');
const path = require('path');
const messages = require('../data/messages');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    // res.send("Hello from indexRouter");
    res.render('home', {messages});
})

module.exports = indexRouter;