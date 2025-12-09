const {Pool} = require('pg');
require('dotenv').config();

const databaseUrl = process.env.DB;

module.exports = new Pool({
    connectionString: databaseUrl
})