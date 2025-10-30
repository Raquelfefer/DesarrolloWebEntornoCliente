//MODIFICAR EL DOM
//Ejercicio 1
function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo título:");
    var nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
//Ejercicio 2
function cambiar_modo() {
    //Por defecto el DOM tiene un atributo que representa el body (document.body)
    var body = document.body;
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}
//Ejercicio 3
function analiza_edad() {
    //Recogemos el nodo
    var input = document.getElementById("edad");
    //Introducimos el valor que tiene el nodo en una variable
    //Los input recogen los valores introducidos como string por lo que se debe hacer un casting a numero
    var edad = Number(input.value);
    //Recogemos la lista del HTML para despues introducirle elementos
    var lista = document.getElementById("resultado");
    lista.innerHTML = "";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";
    //a. Mayor/menor edad
    var mayorMenor = document.createElement("li");
    mayorMenor.textContent = edad > 18 ? "Eres mayor" : "Eres menor";
    //b. Par o impar
    var parImpar = document.createElement("li");
    parImpar.textContent = edad % 2 == 0 ? "La edad es par" : "La edad es impar";
    //c. Divisores de la edad
    var divisores = "";
    for (var i = 1; i < edad; i++) {
        if (edad % i == 0) {
            divisores += i + ", ";
        }
    }
    divisores = divisores.substring(0, divisores.length - 2); //Quitar coma final en la lista de divisores
    var listaDivisores = document.createElement("li");
    listaDivisores.textContent = divisores;
    //d. Clasifica la edad
    var rangoEdad = "";
    switch (true) {
        case edad >= 0 && edad < 15:
            rangoEdad = "Niño";
            break;
        case edad >= 15 && edad < 30:
            rangoEdad = "Joven";
            break;
        case edad >= 30 && edad < 60:
            rangoEdad = "Adulto";
            break;
        case edad >= 60:
            rangoEdad = "Mayor";
            break;
        default:
            console.log("Edad no válida.");
    }
    var edadTexto = document.createElement("li");
    edadTexto.textContent = rangoEdad;
    //Añadir elementos de lista al nodo de lista
    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);
}
//Ejercicio 4
function mini_app() {
    //Recoger el parrafo del html llamado saludo
    var parrafo = document.getElementById("saludo");
    //Recoger el nombre por prompt
    var nombre = prompt("Introduce tu nombre");
    //Añadir el contenido recogido en el parrafo
    parrafo.textContent = "Hola, " + nombre;
}
function cambiar_color() {
    //Recoger el valor de select
    var select = document.getElementById("colores");
    var colorOption = select.options[select.selectedIndex];
    var color = colorOption.value;
    var saludo = document.getElementById("saludo");
    saludo.style.color = color;
}
//USAR ELEMENTOS DEL BOM
//Ejercicio 1
function menu_informacion() {
    var nodoMenu = document.getElementById("menu_BOM");
    nodoMenu.innerHTML = "";
    //Idioma
    var idioma = document.createElement("li");
    idioma.textContent = "El lenguaje del navegador es: " + navigator.language;
    //Nombre del navegador
    var nombre = document.createElement("li");
    nombre.textContent = "El nombre del navegador es: " + navigator.userAgent;
    //Cookies
    var cookies = document.createElement("li");
    cookies.textContent = "Las cookies están habilitados: " + navigator.cookieEnabled;
    //Tamaño pantalla
    var size = document.createElement("li");
    size.textContent = "El alto de la pantalla es: " + screen.availHeight + " y el ancho es: " + screen.availWidth;
    nodoMenu.appendChild(idioma);
    nodoMenu.appendChild(nombre);
    nodoMenu.appendChild(cookies);
    nodoMenu.appendChild(size);
}
//Ejercicio 2
var iframe = document.getElementById("navegador");
function navegar() {
    var nodoURL = document.getElementById("url");
    var url = nodoURL.value;
    iframe.src = url;
}
function retrocerder() {
}
function avanzar() {
}
function recargar() {
    location.reload();
}
