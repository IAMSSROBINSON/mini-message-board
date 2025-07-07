const { Router } = require('express');
const messages = require('../data/messages.js');

const userRouter = Router();

userRouter.get('/:id', (req, res) => {
    console.log("req.params: ", req.params);
    const user = messages.find((obj) => obj.id === req.params.id);
    console.log(messages);
    if (!user) {
        res.send ({});
    } 
    res.render('modal', {user});
})

module.exports = userRouter;