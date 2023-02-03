const config = {
    production: {
        PORT: 1234,
        DB_URI: 'mongodb://127.0.0.1:27017/cubbicle'
    },
    development: {
        PORT: 5000,
        DB_URI: 'mongodb://127.0.0.1:27017/cubbicle'
    }
};

module.exports = config[process.env.node_env || 'development']