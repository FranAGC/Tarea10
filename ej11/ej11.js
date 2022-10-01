const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');
const app = express();
const puerto = 3000;


app.use(cors())

app.listen(puerto, function () {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
    app.get('*',function(req,res){  
        res.redirect('http://127.0.0.1:5500/ej11/index.html')
    })
});

app.get('/', (req, res) => {
    res.redirect('http://127.0.0.1:5500/ej11/productos.html')
});

app.get('/home', cors(), (req, res) => {
    res.json({
        h1: faker.internet.domainWord(), p1: faker.lorem.paragraphs(2), p2: faker.lorem.paragraphs(1), p3: faker.lorem.paragraphs(2)
    })
});
