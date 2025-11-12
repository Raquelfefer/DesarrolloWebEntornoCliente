var equipos = [
    ["Real Madrid CF", "31", "12", "10", "1", "1", "28", "10"],
    ["FC Barcelona", "28", "12", "9", "1", "2", "32", "13"],
    ["Villareal CF", "26", "12", "8", "2", "2", "24", "14"],
    ["Atlético Madrid", "25", "12", "7", "4", "1", "26", "11"],
    ["Real Betis Balompié", "22", "12", "6", "4", "2", "20", "15"],
    ["RCD Espanyol", "19", "12", "5", "4", "3", "18", "16"],
    ["Athletic Bilbao", "18", "12", "5", "3", "4", "15", "14"],
    ["Getafe CF", "15", "12", "4", "3", "5", "13", "17"],
    ["Girona FC", "14", "12", "3", "5", "4", "14", "18"],
    ["Real Sociedad", "13", "12", "3", "4", "5", "17", "20"]
];
function matchEquipo() {
    //Recuperar nodos de select 
    var NodeEquipoLocal = document.getElementById("equipo_local");
    var NodeEquipoVisitante = document.getElementById("equipo_visitante");
    //Recoger el nodo body para después añadirle el elemento parrafo con el mensaje
    var body = document.body;
    //Recogemos el parrafo con el mensaje de error si ya existe
    var mensajeError = document.getElementById("error");
    //Comprobamos si existe el parrafo con el mensaje de error y lo borramos
    if (mensajeError) {
        mensajeError.remove();
    }
    //Comprobamos si los dos valores del select son iguales. Si lo son se crea un parrafo con id error para después poder recuperarlo, 
    //introducimos el mensaje y le damos estilo. Añadimos el parrafo con el mensaje de error al body.
    if (NodeEquipoLocal.value === NodeEquipoVisitante.value) {
        var error = document.createElement("p");
        error.id = "error";
        error.textContent = "Error: los equipos visitante y local no pueden ser el mismo.";
        error.style.color = "red";
        body.appendChild(error);
    }
}
function mostrarEquipos() {
    var tbdoy = document.getElementById("body");
    tbdoy.innerHTML = "";
    equipos.forEach(function (equipo) {
        var fila = document.createElement("tr");
        equipo.forEach(function (valor) {
            var celda = document.createElement("td");
            celda.textContent = valor;
            fila.appendChild(celda);
        });
        tbdoy.appendChild(fila);
    });
}
