const oracledb = require('oracledb');

async function getOracleConnection() {
    return await oracledb.getConnection({
        user: "your_user",
        password: "your_password",
        connectString: "localhost/XEPDB1"
    });
}

module.exports = { getOracleConnection };

