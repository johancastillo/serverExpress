/*
==========================
== Imports or Requires. ==
==========================
*/
const express = require('express');
const morgan = require('morgan');
const colors = require('colors');

/*
=============
== Server. ==
=============
*/
const server = express();


/*
==============
== Settings ==
==============
*/
server.set('appName', 'Mi primer servidor con Express.');

server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');
/*
=================
== Middlewares ==
=================
*/
server.use(morgan('dev'));

/* 
==========
== URLs ==
========== 
*/

//Response for url: '/'
server.get('/', (req,res) => res.render('index.ejs'))

//Response for url '/about'.
server.get('/about', (req,res) => res.send('<h1>Aquí va el about</h1>'))

//Response for url '/login'.
server.get('/login', (req,res) => res.send('<h1>Aquí va el login</h1>'))

//Err 404 'Not Found'.
server.get('*', (req, res) => res.send('<h1>404 "Not found"</h1>'))

/*
========================
== Port and CallBack. ==
========================
*/
server.listen(3000, () => {
    console.log("Server on 'localhost:3000'.".blue);
    console.log('Nombre de la App: ', server.get('appName'));
});