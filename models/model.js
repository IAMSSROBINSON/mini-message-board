const messages = require('../data/messages');

const model = {

    deleteMessage (id) {
        if (id) {
            const index = messages.findIndex((obj, index) => {
                 return obj.id === id
            });
            if (index !== -1) {
                const deleted = messages.splice(index, 1);
                console.log("deleted: ", deleted);
                console.log("messages: ", messages);
            } 
        }
    }
}

module.exports = model;