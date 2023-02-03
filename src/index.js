const express = require('express');
const routes = require('./routs')
const config = require('./config');
const setUpViewEngine= require('./config/viewEngine')

const app = express();

setUpViewEngine(app);


app.use(express.static('src/public'))

app.use(express.urlencoded({extended: false}));
app.use(routes)

app.listen(config.PORT, ()=> console.log(`Server is running on port ${config.PORT}...`))