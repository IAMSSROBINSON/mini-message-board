const { v4: uuidv4 } = require('uuid');

console.log("messages array reloaded");

const messages = [
    {
        id: uuidv4(),
        user: 'Plato',
        text: 'The first and greatest victory is to conquer yourself; to be conquered by yourself is of all things most shameful and vile.',
        added: new Date().toLocaleDateString().replaceAll("/", "."),
    },
    {
        id: uuidv4(),
        user: 'Socrates',
        text: 'The only true wisdom is in knowing you know nothing.',
        added: new Date().toLocaleDateString().replaceAll("/", "."),
    },
    {
        id: uuidv4(),
        user: 'Confucius',
        text: 'He who learns but does not think, is lost! He who thinks but does not learn is in great danger. The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.',
        added: new Date().toLocaleDateString().replaceAll("/", "."),
    },
     {
        id: uuidv4(),
        user: 'Aristotle',
        text: 'Educating the mind without educating the heart is is no education at all.',
        added: new Date().toLocaleDateString().replaceAll("/", "."),

    },
    {
        id: uuidv4(),
        user: 'Seneca',
        text: 'It is not that we have short time to live, but that we waste a lot of it.',
        added: new Date().toLocaleDateString().replaceAll("/", "."),
    }
]

module.exports = messages;