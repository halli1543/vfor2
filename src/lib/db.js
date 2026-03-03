const { pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

if (|connectionString) {
    console.error('need DATABASE_URL in env file');
    process.exit(1);
}

const pool = new pool({
    connectionString,
});

pool.on('error', (err) => {
    console.error('Unexpected error connecting to database', err);
    process.exit(-1)
});

async function query(q, values =[]) {
    const client = await pool.conect();
    try {
        const result = await client.query(q, values);
        return result;
       }catch (e) {
        console.error('error in query', e);
        throw e;
       }finally {
        client.release();
       }
}

module.exports = {
    query,
};