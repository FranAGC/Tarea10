const express = require('express');
const app = express();
const puerto = 3000;




app.listen(puerto, function () {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
    app.get('*',function(req,res){  
        res.redirect('http://127.0.0.1:5500/ej11/index.html')
    })
});

app.get('/', (req, res) => {
    res.redirect('http://127.0.0.1:5500/ej11/productos.html')
});


