//Mostraremos la información de los equipos en la tabla una vez cargada la página
window.onload = function () {
    mostrarEquipos();
};
//Constantes - Nodos de los select de equipo visitante y local
var equipoLocal = document.getElementById("equipo_local");
var equipoVisitante = document.getElementById("equipo_visitante");
var equipos = [
    ["Real Madrid CF", 31, 12, 10, 1, 1, 26, 10, 16],
    ["FC Barcelona", 28, 12, 9, 1, 2, 32, 15, 17],
    ["Villareal CF", 26, 12, 8, 2, 2, 24, 10, 14],
    ["Atlético Madrid", 25, 12, 7, 4, 1, 24, 11, 13],
    ["Real Betis Balompié", 20, 12, 5, 5, 2, 19, 13, 6],
    ["RCD Espanyol", 18, 12, 5, 3, 4, 15, 15, 0],
    ["Athletic Bilbao", 17, 12, 5, 2, 5, 12, 13, -1],
    ["Getafe CF", 17, 12, 5, 2, 5, 12, 14, -2],
    ["Girona FC", 10, 12, 2, 4, 6, 11, 24, -13],
    ["Real Sociedad", 13, 12, 3, 4, 5, 14, 17, -3]
];
function matchEquipo() {
    //Recoger el nodo body para después añadirle el elemento parrafo con el mensaje
    var body = document.body;
    //Recoger el boton
    var boton = document.getElementById("boton");
    //Recogemos el parrafo con el mensaje de error si ya existe
    var mensajeError = document.getElementById("error");
    //Comprobamos si existe el parrafo con el mensaje de error y lo borramos
    if (mensajeError) {
        mensajeError.remove();
    }
    //Comprobamos si los dos valores del select son iguales. Si lo son se crea un parrafo con id error para después poder recuperarlo, 
    //introducimos el mensaje y le damos estilo. Añadimos el parrafo con el mensaje de error al body.
    if (equipoLocal.value === equipoVisitante.value) {
        var error = document.createElement("p");
        error.id = "error";
        error.textContent = "Error: los equipos visitante y local no pueden ser el mismo.";
        error.style.color = "red";
        body.appendChild(error);
        boton.disabled = true; //Bloquea el botón
    }
    else {
        boton.disabled = false; //Habilita el botón
    }
}
function mostrarEquipos() {
    //Recogemos el nodo tbody donde irá la información a mostrar
    var tbdoy = document.getElementById("body");
    tbdoy.innerHTML = "";
    //Recorremos con un foreach el array de equipos para tomar la fila y después un foreach dentro del anterior para recoger los valroes
    //de cada fila y formar las celdas. Añadiremos el contenido a cada fila y después las filas al body de la tabla.
    equipos.forEach(function (equipo) {
        var fila = document.createElement("tr");
        equipo.forEach(function (valor) {
            var celda = document.createElement("td");
            celda.textContent = valor.toString();
            fila.appendChild(celda);
        });
        tbdoy.appendChild(fila);
    });
}
function update() {
    //Recoger los valores del formulario de los goles de visitante y local
    var golesLocal = document.getElementById("gol_local");
    var golesVisitante = document.getElementById("gol_visitante");
    //Modificaciones en equipo local
    for (var i = 0; i < equipos.length; i++) {
        if (equipos[i][0] === equipoLocal.value) {
            equipos[i][2] = Number(equipos[i][2]) + 1; //+1 Partidos jugados
            equipos[i][6] = Number(equipos[i][6]) + Number(golesLocal.value); //+ goles a favor (local)
            equipos[i][7] = Number(equipos[i][7]) + Number(golesVisitante.value); //+ goles en contra (visitante)
            equipos[i][8] = Number(equipos[i][6]) - Number(equipos[i][7]); //Actualizar diferencia de goles
            if (Number(golesLocal.value) > Number(golesVisitante.value)) { //Si gana el equipo local
                equipos[i][3] = Number(equipos[i][3]) + 1; //+1 partidos ganados
                equipos[i][1] = Number(equipos[i][1]) + 3; //+3 en puntuación total
            }
            else if (Number(golesLocal.value) === Number(golesVisitante.value)) { //Si hay empate
                equipos[i][4] = Number(equipos[i][4]) + 1; //+1 en empate
                equipos[i][1] = Number(equipos[i][1]) + 1; //+1 en puntuación total
            }
            else {
                equipos[i][5] = Number(equipos[i][5]) + 1; //Si pierde el equipo local +1 en perdido
            }
        }
    }
    //Modificaciones en equipo visitante
    for (var i = 0; i < equipos.length; i++) {
        if (equipos[i][0] === equipoVisitante.value) {
            equipos[i][2] = Number(equipos[i][2]) + 1; //+1 Partidos jugados
            equipos[i][6] = Number(equipos[i][6]) + Number(golesVisitante.value); //+ goles a favor (vistante)
            equipos[i][7] = Number(equipos[i][7]) + Number(golesLocal.value); //+ goles en contra (local)
            equipos[i][8] = Number(equipos[i][6]) - Number(equipos[i][7]); //Actualizar diferencia de goles
            if (Number(golesVisitante.value) > Number(golesLocal.value)) { //Si gana el equipo visitante
                equipos[i][3] = Number(equipos[i][3]) + 1; //+1 partidos ganados
                equipos[i][1] = Number(equipos[i][1]) + 3; //+3 en puntuación total
            }
            else if (Number(golesVisitante.value) === Number(golesLocal.value)) { //Si hay empate
                equipos[i][4] = Number(equipos[i][4]) + 1; //+1 en empate
                equipos[i][1] = Number(equipos[i][1]) + 1; //+1 en puntuación total
            }
            else {
                equipos[i][5] = Number(equipos[i][5]) + 1; //Si pierde el equipo visitante +1 en perdido
            }
        }
    }
    mostrarEquipos(); //Volver a mostrar la tabla con los valores actualizados
}
