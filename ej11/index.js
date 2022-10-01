


//Obtener generos
async function obtenerHome(){
    var home = await (await fetch(`http://127.0.0.1:3000/home`)).json();
    console.log("Datos Home:", home);
    agregarHome(home);
}


//Agregar generos al select
function agregarHome(obj){
    let autogen  = document.getElementById('ej12index');

     autogen.innerHTML = `
                            <h2>${obj.h1}</h2>
                            <p>${obj.p1}</p>
                            <p>${obj.p2}</p>
                            <p>${obj.p3}</p>`
}

obtenerHome();