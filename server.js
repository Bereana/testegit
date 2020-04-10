const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.status(200).send({messsage: 'Olá mundo - tudo funcionando'});
});

app.listen(3001, () => {
    console.log('api rodando na porta 3001');
});

// Alterado arquivo server;
// alterado no servidor que sera comitado no client;
