exports.saludar = (nombre, apellido, callback ) => {
    setTimeout(function () {
        console.log(`Hola ${nombre} ${apellido}`);
        callback();
    }, 1000)
};
