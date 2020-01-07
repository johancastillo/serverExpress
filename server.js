//Imports or Requires.
const express = require('express');
const colors = require('colors');

//Server.
const server = express();

//Response for url: '/'
server.get('/', (req,res) => res.send('<h1>Esta es la raíz del Servidor</h1>'))

//Response fron url '/about'.
server.get('/about', (req,res) => res.send('<h1>Aquí va el about</h1>'))

//Response fron url '/login'.
server.get('/login', (req,res) => res.send('<h1>Aquí va el login</h1>'))

//Response 404
server.get('*', (req, res) => res.send('<h1>404 Not found</h1>'))

//Port and CallBack.
server.listen(3000, () => console.log("Server on 'localhost:3000'.".blue))