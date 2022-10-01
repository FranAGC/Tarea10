const express = require('express');
const app = express();
const puerto = 3001;


app.get('/', (req, res) => {
    res.send('Bienvenidos a Node.js Server Side');
})


app.listen(puerto, function () {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  });



  