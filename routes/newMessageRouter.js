const { Router } = require('express');
const path = require('path');
const messages = require('../data/messages');
const { v4: uuidv4 } = require('uuid');

const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
    // res.send("Hello from newMessageRouter");
    res.render('newMessageForm', {});
})

newMessageRouter.post('/', (req, res) => {
    console.log('req.body:', req.body);
    const obj = {
        id: uuidv4(),
        user: req.body.user,
        text: req.body.text,
        added: new Date().toLocaleDateString(),
    }
    console.log('obj: ', obj);
    messages.push(obj);
    res.redirect('/');
})



module.exports = newMessageRouter;