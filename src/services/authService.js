const User = require('../models/User');
const config = require('../config')
const jwt = require('../lib/jsonwebtoken')

exports.getUserByUserName = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });


exports.login = async (username, password) => {

    const user = await this.getUserByUserName(username)

    const isValid = await user.validatePassword(password);

    if (!user || !isValid) {

        throw 'Invalid user name or password';
    }

    const payload = { username: user.username }
    const token = await jwt.sign(payload, config.SECRET, { expiresIn: '2h' })

    return token;

}