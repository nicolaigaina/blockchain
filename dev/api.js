const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const PORT = 3000;
const HOST = 'localhost';
const defaultRewardAmount = 12.5;

const blockchain = new Blockchain();
const nodeAddress = uuid().split('-').join('');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
  res.send(blockchain);
});

app.post('/transaction', function (req, res) {
  const { amount, sender, recipient } = req.body;
  const blockIndex = blockchain.createNewTransaction(amount, sender, recipient);

  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get('/mine', function (req, res) {
  const lastBlock = blockchain.getLastBlock();
  const previosBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transactions: blockchain.pendingTransactions,
    index: lastBlock['index'] + 1
  }

  const nonce = blockchain.proofOfWork(previosBlockHash, currentBlockData);
  const blockHash = blockchain.hashBlock(previosBlockHash, currentBlockData, nonce);

  blockchain.createNewTransaction(defaultRewardAmount, "00", nodeAddress);

  const newBlock = blockchain.createNewBlock(nonce, previosBlockHash, blockHash);

  res.json({
    note: 'New block mined successfully',
    block: newBlock
  });
})

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
