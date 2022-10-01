
const prodRouter = require('./productos.router');
const userRouter = require('./usuarios.router');


function routerAPI(app) {
    app.use('/productos', prodRouter);
    app.use('/usuarios', userRouter);
}

module.exports = routerAPI;