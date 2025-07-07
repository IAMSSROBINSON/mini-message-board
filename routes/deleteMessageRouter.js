const { Router } = require('express');
const messages = require('../data/messages.js');

const deleteMessageRouter = Router();

deleteMessageRouter.delete('/:id', (req, res) => {
   const id = req.params.id;
   const index = messages.findIndex(obj => obj.id === id);
   if (index !== -1) {
    const deleted = messages.splice(index, 1);
    res.json({success: true});
   } 
   else {
    res.status(404)
    res.json({success: false, message: 'Message not found!'});
   }
})

module.exports = deleteMessageRouter;