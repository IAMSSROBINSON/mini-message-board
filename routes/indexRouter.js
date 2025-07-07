const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
     res.send("Hello World From Render!");
});


module.exports = indexRouter;