const express = require('express');
const app = express();
const path = require('path');
const bodyparse = require('body-parser');

//configuração do pug
    app.set("view engine", "pug");
    app.set("views", path.join(__dirname, "views"));
//public
    app.use(express.static(path.join(__dirname,"public")));
//configuração do body parser
    app.use(bodyparse.urlencoded({extended:false}));
    app.use(bodyparse.json());
//configuração das rotas
    const rotas  = require('./routes/home');
    const cadastro  = require('./routes/cadastro');
    app.use('/',rotas);
    app.use('/cadastro',cadastro);
//servidor
    var port = 5000;
    app.listen(port,()=>{
        console.log("Servidor online");
    });
