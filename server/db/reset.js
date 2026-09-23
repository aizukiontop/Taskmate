'use strict';

// Drops and recreates the tasks table, then seeds sample data.
// Run with: npm run db:reset
// WARNING: this deletes all existing task data.

require('dotenv').config({ path: require('path').join(__dirname, '../.env') });

const fs   = require('fs');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

async function reset() {
  try {
    await pool.query('DROP TABLE IF EXISTS tasks');
    console.log('Dropped tasks table.');

    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await pool.query(schema);
    console.log('Created tasks table.');

    const seed = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');
    await pool.query(seed);
    console.log('Inserted sample tasks.');

    console.log('Database reset complete.');
  } catch (err) {
    console.error('Reset failed:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

reset();
