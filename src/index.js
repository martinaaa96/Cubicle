const express = require('express');
const cookieParser = require('cookie-parser')
const routes = require('./routs');
const config = require('./config');
const setUpViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/dbInit');
const authMiddleware = require('./middlewares/authMiddleware')
const errorHandler = require('../src/middlewares/errorHandlerMiddleware')

const app = express();

setUpViewEngine(app);


app.use(express.static('src/public'))
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(authMiddleware.authentication);

app.use(routes)

app.use(errorHandler)

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    .catch((err) => console.log(err.message))