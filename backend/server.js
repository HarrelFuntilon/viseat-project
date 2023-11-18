const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getUsers, addStore } = require('./userQueries');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

//ADD STORE DATA

app.post('/addstore', (req, res) => {
  const { name, address, storename, contact, minprice } = req.body;
  addStore(name, address, storename, contact, minprice, (err, result) => {
    console.log(
      `Name : ${name} ` +
        `Address : ${address} ` +
        `Store Name : ${storename} ` +
        `Contact : ${contact} ` +
        `Minimum Price : ${minprice} is logged in database `,
    );
    if (err) {
      res.status(500).send('Error adding user');
      return;
    }
    res.send('User added successfully!');
  });
});

//SHOWS USER
app.get('/user', (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.status(500).send('Error Users Fetch');
      return;
    }
    res.json(results);
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
