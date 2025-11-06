// CONFIGURAÇÃO DO SERVIDOR

const express = require('express');
const server = express();
const port = 4000;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// MÓDULOS

const fs = require('fs').promises;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// MIDDLEWARES

// Logger - Imprime as requisições no console
const logger = require('./middlewares/logger');
server.use(logger);

// Express.json - Permite receber e ler os JSON's no Header das requisições
server.use(express.json());

// Cors - Permite acessar a API a partir de outra porta
const cors = require("cors");
server.use(cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"], // endereço do front-end
}));

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

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
    const idProduto = Number(parseInt(req.params.id));

    fs.readFile('./dados/produtos.json', 'utf8')
        .then(data => {
            const produtos = JSON.parse(data);
            const produtoEncontrado = produtos.find( (p) => p.id === idProduto )

            if (!produtoEncontrado) {
                res.status(400).json({
                    sucesso: false,
                    erro: `Produto com o ${idProduto} não encontrada.`
                });
            } else {
                res.status(200).json({ 
                    sucesso: true,
                    produto: produtoEncontrado 
                });
            }
        });
});

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// OPTIONS

server.options('/produtos', (req, res) => {
    res.header('Allow', 'GET, OPTIONS');
});

server.options('/produtos/:id', (req, res) => {
    res.header('Allow', 'GET, OPTIONS');
});

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//Iniciando a API
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});