const sha256 = require('sha256');

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];

  this.createNewBlock(100, '0', '0');
}

Blockchain.prototype.createNewBlock = function (nonce, previosBlockHash, hash) {
  const newBlock = {
    nonce,
    hash,
    previosBlockHash,
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
}

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {
  const newTransaction = {
    amount,
    sender,
    recipient
  };

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function (previosBlockHash, currentBlockData, nonce) {
  const dataAsString = previosBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);

  return hash;
}

Blockchain.prototype.proofOfWork = function (previosBlockHash, currentBlockData) {
  let nonce = 0;
  let hash = this.hashBlock(previosBlockHash, currentBlockData, nonce);

  while (hash.substring(0, 4) !== '0000') {
    nonce++;
    hash = this.hashBlock(previosBlockHash, currentBlockData, nonce);
  }

  return nonce;
}

module.exports = Blockchain;
