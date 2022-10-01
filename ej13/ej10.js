const express = require('express');
const app = express();
const prodRouter = require('./productos.router');
const userRouter = require('./usuarios.router');
const puerto = 3000;


app.get('/', (req, res) => {
    res.send("Bienvenidos!");
});


function routerAPI(app) {
    app.use('/productos', prodRouter);
    app.use('/usuarios', userRouter);
}

module.exports = routerAPI;