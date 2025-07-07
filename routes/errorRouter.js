const { Router } = require('express');
const path = require('path');

const errorRouter = Router();

errorRouter.use( '/', (req, res) => {
    res.send("An error occurred on this route!");
})

module.exports = errorRouter;