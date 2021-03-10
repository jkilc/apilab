const express = require('express')
let router = express.Router
const chirpsRouter = require('./chirps')
const apiRoutes = require('./routes')

let router = express.Router();
router.use('/chirps', chirpsRouter);     

app.use('/api', apiRoutes);   
app.use(express.static(path.join(__dirname, '../client')));


module.exports(router);

