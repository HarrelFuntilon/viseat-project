const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'store_information',
});

connection.connect((err) => {
  if (err) {
    console.log(`Error Connection : ${err}`);
    return;
  }
  console.log('Connection Complete');
});

module.exports = connection;
