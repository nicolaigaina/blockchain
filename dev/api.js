const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain')
const PORT = 3000;
const HOST = 'localhost';

const blockchain = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
  res.send(blockchain);
});

app.post('/transaction', function (req, res) {
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin.`);
});

app.get('/mine', function (req, res) {
  res.send('Hello World');
})

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
