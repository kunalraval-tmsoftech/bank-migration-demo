const pg = require('../db/postgres');

async function reconcile() {
    try {
        const result = await pg.query(`SELECT COUNT(*) FROM bank_master`);

        console.log("Postgres Count:", result.rows[0].count);

        // Demo purpose
        console.log("✅ Reconciliation Completed");

    } catch (err) {
        console.error("❌ Error:", err);
    }
}

reconcile();
