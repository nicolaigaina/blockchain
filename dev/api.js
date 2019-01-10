const express = require('express');
const app = express();
const PORT = 3000;
const HOST = 'localhost';

app.get('/blockchain', function (req, res) {
  res.send('Hello World');
});

app.post('/transaction', function (req, res) {
  res.send('Hello World');
});

app.get('/mine', function (req, res) {
  res.send('Hello World');
})

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
