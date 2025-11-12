function app() {
    var inputNombre = document.getElementById("nombre");
    var inputPeso = document.getElementById("peso");
    var inputAltura = document.getElementById("altura");
    var nombre = inputNombre.value;
    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);
    var nodeDiv = document.getElementById("div");
    nodeDiv.innerHTML = "";
    if (nombre.trim().length === 0 || peso <= 0 || altura <= 0) {
        nodeDiv.textContent = "Error: Debes introducir un nombre válido y un peso y altura mayores de 0.";
        nodeDiv.style.fontWeight = "bold";
    }
    else {
        var imc = peso / Math.pow(altura, 2);
        var valorIMC = "";
        switch (true) {
            case imc < 18.5:
                valorIMC = "Bajo peso";
                break;
            case imc >= 18.5 && imc <= 24.9:
                valorIMC = "Peso normal";
                break;
            case imc >= 25 && imc <= 29.99:
                valorIMC = "Sobrepeso";
                break;
            case imc >= 30:
                valorIMC = "Obesidad";
                break;
        }
        nodeDiv.textContent = "Hola " + nombre + " , tu IMC es " + imc.toFixed(2) + " por lo que estas en el rango: " + valorIMC;
        nodeDiv.style.fontWeight = "normal";
    }
}
