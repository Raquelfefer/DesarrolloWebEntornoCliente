window.onload = function () {
    cargar_datos_cookie();
};
function cambiar_funcion() {
    var inputOpciones = document.getElementById("opciones");
    var opcion = Number(inputOpciones.value);
    switch (opcion) {
        case 1:
            nombreReves();
            break;
        case 2:
            redSocial();
            break;
        case 3:
            show_edad();
            break;
        case 4:
            almacenar_cookies();
            break;
        default:
            console.error("Elige una opción.");
    }
}
function nombreReves() {
    var inputNombre = document.getElementById("nombre");
    var nombre = (inputNombre.value).toUpperCase();
    var nombreReves = "";
    for (var i = nombre.length - 1; i >= 0; i--) {
        nombreReves += nombre[i];
    }
    var inputFechaNacimiento = document.getElementById("fecha_nacimiento");
    var fecha_nacimiento = new Date(inputFechaNacimiento.value).getFullYear();
    var combinacion = nombreReves + fecha_nacimiento.toString();
    var inputParrafo = document.getElementById("resultado");
    inputParrafo.textContent = combinacion;
}
function redSocial() {
    var inputUrl = document.getElementById("url");
    var url = inputUrl.value;
    var inputApellido = document.getElementById("apellidos");
    var apellidos = inputApellido.value;
    var arrayApellidos = apellidos.split(" ");
    var primerApellido = arrayApellidos[0];
    var inputParrafo = document.getElementById("resultado");
    var regExp = new RegExp("https://");
    if (regExp.test(url)) {
        var nuevaUrl = url + "/search?q=" + primerApellido;
        window.open(nuevaUrl, "_blank");
    }
    else {
        inputParrafo.textContent = "Debe incluir la cabecera https://";
    }
}
function show_edad() {
    var inputFechaNacimiento = document.getElementById("fecha_nacimiento");
    var fecha_nacimiento = new Date(inputFechaNacimiento.value).getFullYear();
    var anioActual = new Date().getFullYear();
    var edad = anioActual - fecha_nacimiento;
    var inputParrafo = document.getElementById("resultado");
    inputParrafo.textContent = "Tienes " + edad + " años.";
}
function almacenar_cookies() {
    document.cookie = "nombre=" + inputById("nombre").value;
    document.cookie = "apellidos=" + inputById("apellidos").value;
    document.cookie = "edad=" + inputById("edad").value;
    document.cookie = "telefono=" + inputById("telefono").value;
    document.cookie = "fechaNac=" + inputById("fecha_nacimiento").value;
    document.cookie = "url=" + inputById("url").value;
}
function inputById(id) {
    return document.getElementById(id);
}
function recuperarValorCookie(id) {
    var arrayCookie = document.cookie.split(";");
    var result = ";";
    for (var i = 0; i < arrayCookie.length; i++) {
        var clave = arrayCookie[i].split("=")[0];
        var valor = arrayCookie[i].split("=")[1];
        if (clave.trim() === id) {
            result = valor;
        }
    }
    return result;
}
function cargar_datos_cookie() {
    inputById("nombre").placeholder = recuperarValorCookie("nombre");
    inputById("apellidos").placeholder = recuperarValorCookie("apellidos");
    inputById("edad").placeholder = recuperarValorCookie("edad");
    inputById("telefono").placeholder = recuperarValorCookie("telefono");
    inputById("fecha_nacimiento").placeholder = recuperarValorCookie("fecha_nacimiento");
    inputById("url").placeholder = recuperarValorCookie("url");
}
function actualizar_web() {
    window.location.reload();
}
