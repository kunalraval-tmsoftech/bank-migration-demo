const { getOracleConnection } = require('../db/oracle');
const pg = require('../db/postgres');
const { mapToBankMaster } = require('./mapping');

async function migrate() {
    try {
        const oracleConn = await getOracleConnection();

        const result = await oracleConn.execute(`SELECT * FROM INFO`);

        for (let row of result.rows) {

            const mapped = mapToBankMaster(row);

            await pg.query(
                `INSERT INTO bank_master(
                    bank_code,
                    bank_name,
                    bank_short_name_sms,
                    bankpara,
                    sms_sender_bank,
                    gst_no
                )
                VALUES ($1,$2,$3,$4,$5,$6)
                ON CONFLICT (bank_code) DO NOTHING`,
                [
                    mapped.bank_code,
                    mapped.bank_name,
                    mapped.bank_short_name_sms,
                    mapped.bankpara,
                    mapped.sms_sender_bank,
                    mapped.gst_no
                ]
            );
        }

        console.log("✅ Migration Completed");

    } catch (err) {
        console.error("❌ Error:", err);
    }
}

migrate();

