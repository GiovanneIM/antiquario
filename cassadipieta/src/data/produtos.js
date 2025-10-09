import * as fs from 'node:fs';

const data = fs.readFileSync('./produtos.json', 'utf-8');
export default produtos = JSON.parse(data);