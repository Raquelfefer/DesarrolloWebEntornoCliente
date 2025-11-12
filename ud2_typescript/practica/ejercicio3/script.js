var lista = document.getElementById("lista");
var parrafo = document.getElementById("parrafo");
function mini_app() {
    var nodeOpcion = document.getElementById("opcion");
    switch (nodeOpcion.value) {
        case "1":
            contarNodos();
            break;
        case "2":
            firstLastNode();
            break;
        case "3":
            duplicarElemento();
            break;
        case "4":
            updateElemento();
            break;
        case "5":
            showAllElements();
            break;
        case "6":
            addNode();
            break;
        case "7":
            eliminarNodo();
            break;
        case "8":
            ordenar();
            break;
    }
}
function contarNodos() {
    parrafo.textContent = "El número de nodos es: " + lista.childElementCount;
}
function firstLastNode() {
    var _a, _b;
    parrafo.textContent = "El primer nodo es: " + ((_a = lista.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent) + " y el último nodo es: " + ((_b = lista.lastElementChild) === null || _b === void 0 ? void 0 : _b.textContent);
}
function duplicarElemento() {
    var opcion = Number(prompt("¿Qué número de la lista quieres duplicar?"));
    if (opcion > 0 && opcion <= lista.childElementCount) {
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = lista.children[opcion - 1].textContent;
        lista.appendChild(nuevoElemento);
    }
    else {
        parrafo.textContent = "Ese elemento no esta en la lista.";
    }
}
function updateElemento() {
    var opcion = Number(prompt("¿Qué número de la lista quieres modificar?"));
    if (opcion > 0 && opcion <= lista.childElementCount) {
        var contenidoNuevo = prompt("¿Qué pondrá en el elemento modificado?");
        lista.children[opcion - 1].textContent = contenidoNuevo;
    }
    else {
        parrafo.textContent = "Ese elemento no esta en la lista.";
    }
}
function showAllElements() {
    for (var i = 0; i < lista.childElementCount - 1; i++) {
        var parrafoNuevo = document.createElement("p");
        parrafoNuevo.textContent = lista.children[i].textContent;
        parrafo.appendChild(parrafoNuevo);
    }
}
function addNode() {
    var contenido = prompt("¿Qué quieres añadir a la lista?");
    var nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = contenido;
    lista.appendChild(nuevoElemento);
}
function eliminarNodo() {
    var opcion = Number(prompt("¿Qué número de la lista quieres eliminar?"));
    if (opcion > 0 && opcion <= lista.childElementCount) {
        lista.removeChild(lista.children[opcion - 1]);
    }
    else {
        parrafo.textContent = "Ese elemento no esta en la lista.";
    }
}
function ordenar() {
    var listaNueva = [];
    for (var i = 0; i < lista.childElementCount; i++) {
        listaNueva.push(lista.children[i]);
    }
    listaNueva.sort(function (a, b) { return a.textContent.toLowerCase().localeCompare(b.textContent.toLowerCase()); });
    lista.innerHTML = "";
    for (var i = 0; i < listaNueva.length; i++) {
        lista.appendChild(listaNueva[i]);
    }
}
