const User = require('../models/User');

exports.getUserByUserName = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });


exports.login = async (username, password) => {

    const user = await this.getUserByUserName(username)

    const isValid = await user.validatePassword(password);

    if (!user || !isValid ) {

        throw 'Invalid user name or password';
    }

return user;

}