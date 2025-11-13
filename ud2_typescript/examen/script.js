window.onload = function () {
    cookie_bienvenida();
    cambiarTitulo();
};
function cookie_bienvenida() {
    if ($getCookieByName()) {
        cambiarTitulo();
    }
    else {
        var valorCookie = prompt("¿Cual es tu nombre de usuario?");
        document.cookie = "nombre=" + valorCookie;
        document.cookie = "sesion=1";
    }
}
function cambiarTitulo() {
    var nombre = $getCookieByKey("nombre");
    var parrafo = document.getElementById("titulo");
    var sesion = $getCookieByKey("sesion");
    parrafo.textContent = "Bievenido al dashboard de " + nombre + " - " + sesion;
}
function $getCookieByKey(key) {
    var arrayCookie = document.cookie.split(";");
    var result = "";
    for (var i = 0; i < arrayCookie.length; i++) {
        var clave = arrayCookie[i].split("=")[0];
        var valor = arrayCookie[i].split("=")[1];
        if (clave.trim() == key) {
            result = valor;
        }
    }
    return result;
}
function $getCookieByName() {
    var arrayCookie = document.cookie.split(";");
    var result = false;
    for (var i = 0; i < arrayCookie.length; i++) {
        var clave = arrayCookie[i].split("=")[0];
        if (clave.trim() === "nombre") {
            result = true;
        }
    }
    return result;
}
function crearTarjeta() {
    var id = document.getElementById("id");
    var descripcion = document.getElementById("descripcion");
    var select = document.getElementById("opcion");
    var divForm = document.getElementById("div");
    var divTarjeta = document.createElement("div");
    var fecha = new Date();
    var direccion = "https://www.issues.com/";
    switch (true) {
        case select.value === "incidencia":
            var parrafoIdIncidencia = document.createElement("p");
            parrafoIdIncidencia.textContent = id.value;
            var parrafoDescripcionIncidencia = document.createElement("p");
            parrafoDescripcionIncidencia.textContent = descripcion.value;
            var parrafoFechaIncidencia = document.createElement("p");
            parrafoFechaIncidencia.textContent = fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();
            divTarjeta.appendChild(parrafoIdIncidencia);
            divTarjeta.appendChild(parrafoFechaIncidencia);
            divTarjeta.appendChild(parrafoDescripcionIncidencia);
            divTarjeta.style.backgroundColor = "red";
            divForm.appendChild(divTarjeta);
            break;
        case select.value === "evento":
            var parrafoIdEvento = document.createElement("p");
            parrafoIdEvento.textContent = id.value;
            var parrafoDescripcionEvento = document.createElement("p");
            parrafoDescripcionEvento.textContent = descripcion.value;
            var parrafoFechaEvento = document.createElement("p");
            parrafoFechaEvento.textContent = fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();
            divTarjeta.appendChild(parrafoIdEvento);
            divTarjeta.appendChild(parrafoFechaEvento);
            divTarjeta.appendChild(parrafoDescripcionEvento);
            divTarjeta.style.backgroundColor = "green";
            divForm.appendChild(divTarjeta);
            break;
        case select.value === "tarea":
            var parrafoIdTarea = document.createElement("p");
            parrafoIdTarea.textContent = id.value;
            var parrafoDescripcionTarea = document.createElement("p");
            parrafoDescripcionTarea.textContent = descripcion.value;
            var parrafoFechaTarea = document.createElement("p");
            parrafoFechaTarea.textContent = fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();
            divTarjeta.appendChild(parrafoIdTarea);
            divTarjeta.appendChild(parrafoFechaTarea);
            divTarjeta.appendChild(parrafoDescripcionTarea);
            divTarjeta.style.backgroundColor = "blue";
            divForm.appendChild(divTarjeta);
            break;
    }
}
function limpiar_tarjetas() {
    var div = document.getElementById("div");
    div.replaceChildren("");
}
