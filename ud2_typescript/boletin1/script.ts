//Ejercicio1
function ejercicio1(): void{
    //No existe date primitivo
    let fecha: Date = new Date();
    console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora posterior: " + (fecha.getHours()+1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora anterior: " + (fecha.getHours()-1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

//Ejercicio2
function ejercicio2(){
    //let expReg: RegExp = /lo_que_sea/
    let expReg: RegExp = new RegExp("lo_que_sea");
    let mensajeOK = document.createElement('span');
    //Primero nos aseguramos que no es nulo (porque no puedo almacenar un nulo en un HTMLInputElement)
    if(document.getElementById("email") != null){
        let email: HTMLInputElement  = document.getElementById("email") as HTMLInputElement;
        if(expReg.test(email.value)){
            mensajeOK.textContent = "Email correcto";
        }else{
            mensajeOK.textContent = "Email incorrecto";
        }
    }
    
    
}