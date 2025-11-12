function app() {
    var inputNombre = document.getElementById("nombre");
    var nombre = inputNombre.value;
    var inputEdad = document.getElementById("edad");
    var edad = Number(inputEdad.value);
    var div = document.getElementById("div");
    div.innerHTML = "";
    var body = document.body;
    if ((nombre.trim().length === 0) || (edad <= 0)) {
        div.textContent = "Error: Debes introducir un nombre y una edad mayor a 0.";
        div.style.color = "red";
        div.style.fontWeight = "bold";
    }
    else {
        div.textContent = "Hola " + nombre + " tienes " + edad + " años.";
        div.style.color = "black";
        div.style.fontWeight = "normal";
    }
}
