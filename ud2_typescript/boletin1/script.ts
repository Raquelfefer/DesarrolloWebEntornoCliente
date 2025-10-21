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
    const regExp = new RegExp("[^\s@]+@+[^\s@]+\.+[^\s@]+$");
    if(regExp.test($inputValue("email"))){
        $writeNode("ok","El email introducido es válido.");
    }else{
        $writeNode("error", "El email introducido no cumple la validación.");
    }
}

//Ejercicio3
function ejercicio3(){
    const form = document.getElementById("resultado") as HTMLInputElement;
    const porcentaje = parseFloat(form.value);
    if(isNaN(porcentaje) || porcentaje <= 0){
        console.log("Porcentaje no válido.");
        return;
    }
    
}












    
//Helpers (comunes para todo el boletín)
function $inputValue(id: string) : string{
    const input = document.getElementById(id)! as HTMLInputElement;
    var result = "";

    if(input){
        result = input.value;
    }
    return result;
}

function $writeNode(id: string, msg: string): void{
    const node = document.getElementById(id) as HTMLElement;

    if(node){
        node.textContent = msg;
    }
}
    
