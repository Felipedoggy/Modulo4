// db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || '163.176.55.67',
  user: process.env.DB_USER || 'remoto',
  password: process.env.DB_PASSWORD || '12345senha',
  database: process.env.DB_NAME || 'despesasdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
