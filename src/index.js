const express = require('express');
const cookieParser = require('cookie-parser')
const routes = require('./routs');
const config = require('./config');
const setUpViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/dbInit');



const app = express();

setUpViewEngine(app);


app.use(express.static('src/public'))
app.use(cookieParser)
app.use(express.urlencoded({ extended: false }));
app.use(routes)

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    .catch((err) => console.log(err.message))