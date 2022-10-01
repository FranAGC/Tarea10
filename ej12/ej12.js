const express = require('express');
const app = express();
const puerto = 3000;



app.get('/api/products', (req, res) => {
    res.json({
        descripcion: 'Productos',
        items: [
          { nombre: 'taza de Star Wars' , precio: 300},
          { nombre: 'FIFA 22 PS4' , precio: 1000},
          { nombre: 'Playera IronMan' , precio: 100},
          { nombre: 'Zacapa Centenario' , precio: 200},
          { nombre: 'Caja de estampas del mundual' , precio: 120},
          { nombre: 'Kit Gamer+' , precio: 220}
        ]
      })
});



app.listen(puerto, function () {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
