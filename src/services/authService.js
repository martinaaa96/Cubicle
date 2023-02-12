const User = require('../models/User');

exports.getUserByUserName = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });


