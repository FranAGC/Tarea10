let saludar = (nombre, apellido, callback ) => {
    setTimeout(function () {
        console.log(`Hola ${nombre} ${apellido}`);
        callback();
    }, 1000)
    
};


saludar('Juan', 'Perez', function () {
    console.log('Luego de saludar se ejecuta el callback');
});



