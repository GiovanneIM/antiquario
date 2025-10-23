const express = require('express');
const server = express();
const port = 4000;
const fs = require('fs').promises;
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

//PÁGINA DA API QUE BUSCA UM ITEM PELO ID
server.get('/:id', (req, res) => {
    const idProduto = parseInt(req.params.id);

    fs.readFile('./dados/produtos.json', 'utf8')
        .then(data => {
            const produtos = JSON.parse(data);
            const produtoEncontrado = produtos.find(function (produto) {
                return produto.id == idProduto;
            })

            if (!produtoEncontrado) {
                console.log(`Tarefa com o ${idProduto} não encontrada.`);
                res.status(400).send(`Tarefa com o ${idProduto} não encontrada.`);
            } else {
                console.log(JSON.stringify(produtoEncontrado, null, 2));
                res.status(201).send(JSON.stringify(produtoEncontrado, null, 2));
            }
            
        });
});

//OPTIONS PARA SERVER GET ID
server.options('/:id', (req, res) => {
    res.header('Allow', 'GET, OPTIONS');
    res.status(204).send('erro ao tentar buscar um item específico da API');
});

//FINAL
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});