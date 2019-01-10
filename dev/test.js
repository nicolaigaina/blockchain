const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previosBlockHash = 'random-string';
const currentBlockData = [
  {
    amount: 10,
    sender: 'test-address0',
    recipient: 'test-address1'
  },
  {
    amount: 30,
    sender: 'test-address11',
    recipient: 'test-address12'
  },
  {
    amount: 200,
    sender: 'test-address13',
    recipient: 'test-address14'
  }
];

// bitcoin.createNewBlock(21, 'TEST-PREVIOS-HASH', 'TEST-DUMMY-HASH0');

// bitcoin.createNewTransaction(100, 'TEST-ADDRESS0', 'TEST-ADDRESS1');

// bitcoin.createNewBlock(22, 'TEST-DUMMY-HASH0', 'TEST-DUMMY-HASH1');

// bitcoin.createNewTransaction(50, 'TEST-ADDRESS0', 'TEST-ADDRESS1');
// bitcoin.createNewTransaction(300, 'TEST-ADDRESS0', 'TEST-ADDRESS1');
// bitcoin.createNewTransaction(2000, 'TEST-ADDRESS0', 'TEST-ADDRESS1');

// bitcoin.createNewBlock(23, 'TEST-DUMMY-HASH1', 'TEST-DUMMY-HASH2');

console.log(bitcoin.hashBlock(previosBlockHash, currentBlockData, 22082));

// console.log(bitcoin);
