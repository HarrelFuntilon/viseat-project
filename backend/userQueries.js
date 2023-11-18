const connection = require('./connection');
const table = 'store_info';
function getUsers(callback) {
  connection.query(`SELECT * FROM ${table}`, (err, results) => {
    if (err) {
      console.error('Error Query Execution  : ' + err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

function addStore(name, address, storename, contact, minprice, callback) {
  const sql = `INSERT INTO ${table} (name, address, storename, contact, minimumprice) VALUES (?,?,?,?,?)`;
  connection.query(
    sql,
    [name, address, storename, contact, minprice],
    (err, result) => {
      if (err) {
        console.error('Error executing', err);
        callback(err, null);
        return;
      }
      callback(null, result);
    },
  );
}

module.exports = {
  getUsers,
  addStore,
};
