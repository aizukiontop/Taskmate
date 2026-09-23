'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
});

async function testConnection() {
  try {
    await pool.query('SELECT 1');
    console.log('Database connected.');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    console.error('Check DATABASE_URL in your .env file.');
    process.exit(1);
  }
}

module.exports = { pool, testConnection };
