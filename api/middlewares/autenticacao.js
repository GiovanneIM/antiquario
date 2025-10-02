const express = require('express');

const autenticar = (req, res, next) => {
    const token = req.headers['Authorization'];
    if (token === 'SEGREDO') {
        next();
    } else {
        res.status(401).send('Ação não autorizada');
    }
};

module.exports = autenticar;