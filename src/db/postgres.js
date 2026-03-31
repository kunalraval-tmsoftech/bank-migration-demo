const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bankdb',
    password: 'password',
    port: 5432,
});

module.exports = pool;

