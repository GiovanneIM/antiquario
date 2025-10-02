const express = require('express');
const server = express();
const port = 4000;
const logger = require('./middlewares/logger');

server.use(express.json());
server.use(logger);

//PÁGINA INICIAL
server.get('/', (req, res) => {
    res.status(200).send('Página inicial funcionado!!!')
});

server.options('/', (req, res) => {
    res.header('Allow', 'GET, OPTIONS');
    res.status(204).send('ERRO ao tentar abrir a página inicial');
});

//FINAL
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});