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
    //let expReg: RegExp = /lo_que_sea/
    var expReg = new RegExp("lo_que_sea");
    var mensajeOK = document.createElement('span');
    //Primero nos aseguramos que no es nulo (porque no puedo almacenar un nulo en un HTMLInputElement)
    if (document.getElementById("email") != null) {
        var email = document.getElementById("email");
        if (expReg.test(email.value)) {
            mensajeOK.textContent = "Email correcto";
        }
        else {
            mensajeOK.textContent = "Email incorrecto";
        }
    }
}
