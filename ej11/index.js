


//Obtener home
async function obtenerHome(){
    var home = await (await fetch(`http://127.0.0.1:3000/home`)).json();
    console.log("Datos Home:", home);
    agregarHome(home);
}

//Agregar datos al home
function agregarHome(obj){
    let autogen  = document.getElementById('ej12index');

     autogen.innerHTML = `
                            <h2>${obj.h1}</h2>
                            <p>${obj.p1}</p>
                            <p>${obj.p2}</p>
                            <p>${obj.p3}</p>`
}


//Obtener Productos
async function obtenerProductos(){
    var home = await (await fetch(`http://127.0.0.1:3000/listaprods`)).json();
    console.log("Lista productos:", home);
    agregarProductos(home);
}

//Agregar productos
function agregarProductos(obj){
    let tabla  = document.getElementById('lproductos');
     
    for (var i = 0; i < 10; i++) {

        tabla.innerHTML += `
                    <tr><td>${obj[i].nombre}</td>
                    <td>${obj[i].precio}</td>
                    <td>${obj[i].lugar}</td></tr>`;
    }
}