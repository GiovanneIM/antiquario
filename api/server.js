const express = require('express');
const server = express();
const port = 4000;
const fs = require('fs').promises;
const logger = require('./middlewares/logger');

server.use(express.json());
server.use(logger);


server.options('/', (req, res) => {
    res.header('Allow', 'GET, OPTIONS');
    res.status(204).send('ERRO ao tentar abrir a página inicial');
});

const cors = require("cors");
server.use(cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"], // endereço do front-end
    credentials: true // Para receber cookies
}));

// ROTAS

// Rota para obter todos os produtos
server.get('/produtos', (req, res) => {
    fs.readFile('./dados/produtos.json', 'utf8')
        .then(data => {
            const produtos = JSON.parse(data);

            if (!produtos) {
                res.status(400).json({
                    sucesso: false,
                    erro: `Tarefa com o ${idProduto} não encontrada.`
                });
            } else {
                res.status(201).json({ 
                    sucesso: true,
                    produtos: produtos 
                });
            }

        });
});

// Rota para obter um produto pelo ID
server.get('/produtos/:id', (req, res) => {
    const idProduto = parseInt(req.params.id);

    fs.readFile('./dados/produtos.json', 'utf8')
        .then(data => {
            const produtos = JSON.parse(data);
            const produtoEncontrado = produtos.find(function (produto) {
                return produto.id == idProduto;
            })

            if (!produtoEncontrado) {
                console.log(`Tarefa com o ${idProduto} não encontrada.`);
                res.status(400).json({
                    sucesso: false,
                    erro: `Tarefa com o ${idProduto} não encontrada.`
                });
            } else {
                res.status(201).json({ 
                    sucesso: true,
                    produto: produtoEncontrado 
                });
            }

        });
});


// OPTIONS
server.options('/produtos', (req, res) => {
    res.header('Allow', 'GET, OPTIONS');
});

server.options('/produtos/:id', (req, res) => {
    res.header('Allow', 'GET, OPTIONS');
});



//Iniciando a API
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});