var saludo = require('./saludador');


saludo.saludar('Juan', 'Perez', function () {
    console.log('Luego de saludar se ejecuta el callback');
});