window.onload = function () {
    setInterval(reloj, 1000);
};
//Ejercicio 1
function cambiar_titulo() {
    var texto = prompt("Introduce un título nuevo:");
    var parrafo = document.getElementById("titulo");
    parrafo.textContent = texto;
}
//Ejercicio 2
function cambiar_modo() {
    var cuerpo = document.body;
    if (cuerpo.style.backgroundColor == "white") {
        cuerpo.style.backgroundColor = "black";
        cuerpo.style.color = "white";
    }
    else {
        cuerpo.style.backgroundColor = "white";
        cuerpo.style.color = "black";
    }
}
//Ejercicio 3
function calcular_edad() {
    var formulario = document.getElementById("edad");
    var edad_formulario = Number(formulario.value);
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    lista.style.color = "green";
    lista.style.fontWeight = "bold";
    lista.setAttribute("type", "a");
    var mayorMenor = document.createElement("li");
    mayorMenor.textContent = edad_formulario >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    lista.appendChild(mayorMenor);
    var parImpar = document.createElement("li");
    parImpar.textContent = edad_formulario % 2 == 0 ? "Tu edad es par" : "Tu edad es impar";
    lista.appendChild(parImpar);
    var divisores = document.createElement("li");
    var numeros = "";
    for (var i = 1; i <= edad_formulario; i++) {
        if (edad_formulario % i == 0) {
            numeros += i + ", ";
        }
    }
    divisores.textContent = numeros;
    lista.appendChild(divisores);
    var rango_edad = document.createElement("li");
    var edad_switch = "";
    switch (true) {
        case edad_formulario >= 0 && edad_formulario < 15:
            edad_switch = "Niño";
            break;
        case edad_formulario >= 15 && edad_formulario < 30:
            edad_switch = "Joven";
            break;
        case edad_formulario >= 30 && edad_formulario < 60:
            edad_switch = "Adulto";
            break;
        case edad_formulario >= 60:
            edad_switch = "Mayor";
            break;
        default:
            console.error("Edad no válida.");
            break;
    }
    rango_edad.textContent = edad_switch;
    lista.appendChild(rango_edad);
}
//Ejercicio 4
function mini_app() {
    var parrafo = document.getElementById("saludo");
    var texto = prompt("Introduce tu nombre");
    parrafo.textContent = "Hola, " + texto;
}
function cambiar_color() {
    var parrafo = document.getElementById("saludo");
    var color_select = document.getElementById("color");
    var color = String(color_select.value);
    parrafo.style.color = color;
}
//Ejercicio 1
function informacion_nav() {
    var input = document.getElementById("opcion");
    var parrafo = document.getElementById("informacion");
    var opcion = input.value.toLowerCase();
    switch (opcion) {
        case "a":
            parrafo.textContent = "El idioma del navegador es: " + navigator.language;
            break;
        case "b":
            parrafo.textContent = "El navegador usado es: " + navigator.userAgent;
            break;
        case "c":
            parrafo.textContent = "Las cookies estan habilitadas: " + navigator.cookieEnabled;
            break;
        case "d":
            parrafo.textContent = "Ancho: " + window.innerWidth + " y altura: " + window.innerHeight;
            break;
        default:
            console.error("Introduce una opción válida.");
            break;
    }
}
//Ejercicio 2
function navegar() {
    var inputUrl = document.getElementById("url");
    var url = inputUrl.value;
    url = "https://" + url;
    var pantalla = document.getElementById("ventana");
    pantalla.src = url;
}
//Ejercicio 3
function reloj() {
    var now = new Date();
    var hora = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var reloj = document.getElementById("reloj");
    reloj.textContent = hora;
}
//Ejercicio 1
function num_elements() {
    var lista = document.getElementById("shopping-list");
    var resultado = document.getElementById("resultado_nodo");
    resultado.textContent = "Hay " + lista.childElementCount + " elementos.";
}
function show_firstLast_element() {
    var _a, _b;
    var lista = document.getElementById("shopping-list");
    var resultado = document.getElementById("resultado_nodo");
    resultado.textContent = "El primer elemento es: " + ((_a = lista.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent) + " y el último elemento es: " + ((_b = lista.lastElementChild) === null || _b === void 0 ? void 0 : _b.textContent);
}
function duplicate_element() {
    var lista = document.getElementById("shopping-list");
    var elemento = Number(window.prompt("¿Qué número quieres duplicar?"));
    if (elemento > 0 && elemento <= lista.childElementCount) {
        var elementoNuevo = document.createElement("li");
        elementoNuevo.textContent = lista.children[elemento - 1].textContent;
        lista.appendChild(elementoNuevo);
    }
    else {
        alert("Número fuera de rango");
    }
}
function update_element() {
    var lista = document.getElementById("shopping-list");
    var numero = Number(window.prompt("¿Qué número quieres modificar?"));
    if (numero > 0 && numero <= lista.childElementCount) {
        var contenido = window.prompt("¿Que pondrá en el nuevo elemento?");
        lista.children[numero - 1].textContent = contenido;
    }
    else {
        alert("Número fuera de rango");
    }
}
function show_all_elements() {
    var lista = document.getElementById("shopping-list");
    var resultado = document.getElementById("resultado_nodo");
    for (var i = 0; i <= lista.childElementCount; i++) {
        var parrafoNuevo = document.createElement("p");
        parrafoNuevo.textContent = lista.children[i].textContent;
        resultado.append(parrafoNuevo);
    }
}
function add_element() {
    var lista = document.getElementById("shopping-list");
    var nombre = String(window.prompt("¿Qué elemento quieres añadir?"));
    var elemento = document.createElement("li");
    elemento.textContent = nombre;
    lista.appendChild(elemento);
}
function delete_element() {
    var lista = document.getElementById("shopping-list");
    var numero = Number(window.prompt("¿Qué número quieres borrar?"));
    if (numero > 0 && numero <= lista.childElementCount) {
        var elemento = lista.children[numero - 1];
        lista.removeChild(elemento);
    }
    else {
        console.error("Numero fuera de rango.");
    }
}
function ordenar_elements() {
    var lista = document.getElementById("shopping-list");
    var childs = [];
    for (var i = 0; i < lista.childElementCount; i++) {
        childs.push(lista.children[i]);
    }
    childs.sort(function (a, b) { return a.textContent.toLowerCase().localeCompare(b.textContent.toLowerCase()); });
    lista.innerHTML = "";
    for (var i = 0; i < childs.length; i++) {
        lista.appendChild(childs[i]);
    }
}
//Ejercicio 2
function cuadricula_alumnos() {
    var alumnos = ["Paco", "Maria", "Fernando", "Raquel", "Martin", "Josema"];
    var cuadricula = document.getElementById("cuadricula");
    cuadricula.innerHTML = "";
    for (var i = 0; i < alumnos.length; i++) {
        var cuadro = document.createElement("div");
        cuadro.textContent = alumnos[i];
        cuadro.style.backgroundColor = color_aleatorio();
        cuadro.style.fontWeight = "bold";
        cuadro.style.display = "inline-block";
        cuadro.style.padding = "15px";
        cuadro.style.textAlign = "center";
        cuadricula.appendChild(cuadro);
    }
}
function color_aleatorio() {
    var coloresPastel = [
        "#FFB3BA", // rosa pastel
        "#FFDFBA", // durazno
        "#FFFFBA", // amarillo pastel
        "#BAFFC9", // verde menta
        "#BAE1FF", // azul bebé
        "#E0BBE4", // lila
        "#F3C6E7", // rosa suave
        "#C1FFD7", // verde pastel claro
        "#B0E0E6", // azul pastel
        "#FFD1DC", // rosa bubblegum
        "#FFE4B5", // melocotón suave
        "#D5E8D4", // verde menta claro
        "#FBE7C6", // beige pastel
        "#E3F2FD", // azul celeste
        "#FADADD", // rosa pálido
        "#FFFACD", // limón suave
        "#D8BFD8", // lavanda
        "#C3FDB8", // verde claro
        "#E6E6FA", // lavanda muy suave
        "#FFCCE5" // rosa chicle pastel
    ];
    var idxAleat = Math.floor(Math.random() * coloresPastel.length) + 1;
    return coloresPastel[idxAleat];
}
//Ejercicio 1
var user = "Raquel";
document.cookie = user;
