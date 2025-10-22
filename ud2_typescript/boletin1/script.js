//Ejercicio1
function ejercicio1() {
    //No existe date primitivo
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours() + 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora anterior: " + (fecha.getHours() - 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}
//Ejercicio2
function ejercicio2() {
    var regExp = new RegExp("[^\s@]+@+[^\s@]+\.+[^\s@]+$");
    if (regExp.test($inputValue("email"))) {
        $writeNode("ok", "El email introducido es válido.");
    }
    else {
        $writeNode("error", "El email introducido no cumple la validación.");
    }
}
//Ejercicio3
function ejercicio3() {
    var ventanaNueva = window.open("https:www.google.es", "nuevaVentana");
}
//Ejercicio4-5
function ejercicio4() {
    var regexp = new RegExp("^https:\/\/");
    var url = $inputValue("url");
    if (regexp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", "Introduzca una URL válida.");
        setTimeout(function () { return $writeNode("error2", ""); }, 5000);
    }
}
//Ejercicio6
//Helpers (comunes para todo el boletín)
function $inputValue(id) {
    var input = document.getElementById(id);
    var result = "";
    if (input) {
        result = input.value;
    }
    return result;
}
function $writeNode(id, msg) {
    var node = document.getElementById(id);
    if (node) {
        node.textContent = msg;
    }
}
