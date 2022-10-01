const express = require('express');
const routerAPI = require('./rutas');
const app = express();
const puerto = 3000;


app.get('/', (req, res) => {
    res.send("Bienvenidos!");
});

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
})

routerAPI(app);