//Imports or Requires.
const express = require('express');
const colors = require('colors');

//Server.
const server = express();

//Response for url: '/'
server.get('/', (req,res) => res.send('<h1>Esta es la raíz del Servidor</h1>'));

//Port and CallBack.
server.listen(3000, () => console.log("Server on 'localhost:3000'.".blue));