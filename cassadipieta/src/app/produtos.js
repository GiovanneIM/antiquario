const fs = require('fs')

let produtos;
fs.readFile('./produtos.json', 'utf-8', (err, data) => {
    produtos = JSON.parse(data);
})