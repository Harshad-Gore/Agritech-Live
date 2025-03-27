// config/db.js
const mysql = require('mysql2'); // Add this import at the top

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'aggrilive'
});

module.exports = connection;
  
  connection.connect((err) => {
    if (err) throw err;
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'aggrilive'}`, (err) => {
      if (err) throw err;
      connection.changeUser({ database: process.env.DB_NAME || 'aggrilive' });
    });
  });