window.onload = () =>{
    cargar_datos_cookie();
}

function cambiar_funcion(){
    let inputOpciones: HTMLInputElement = document.getElementById("opciones") as HTMLInputElement;
    let opcion: number = Number(inputOpciones.value);
    switch(opcion){
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

function nombreReves(){
    let inputNombre: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let nombre: string = (inputNombre.value).toUpperCase();
    let nombreReves: string = "";
    for(let i = nombre.length-1; i >= 0; i--){
        nombreReves += nombre[i];
    }

    let inputFechaNacimiento: HTMLInputElement = document.getElementById("fecha_nacimiento") as HTMLInputElement;
    let fecha_nacimiento = new Date(inputFechaNacimiento.value).getFullYear();

    let combinacion: string = nombreReves + fecha_nacimiento.toString();

    let inputParrafo: HTMLParagraphElement = document.getElementById("resultado") as HTMLParagraphElement;
    
    inputParrafo.textContent = combinacion;
}

function redSocial(){
    let inputUrl: HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    let url: string = inputUrl.value;

    let inputApellido: HTMLInputElement = document.getElementById("apellidos") as HTMLInputElement;
    let apellidos: string = inputApellido.value;
    let arrayApellidos: string[] = apellidos.split(" ");
    let primerApellido: string = arrayApellidos[0];

    let inputParrafo: HTMLParagraphElement = document.getElementById("resultado") as HTMLParagraphElement;
    const regExp = new RegExp("https://");

    if(regExp.test(url)){
        let nuevaUrl: string = url + "/search?q=" + primerApellido;
        window.open(nuevaUrl,"_blank");
    }else{
        inputParrafo.textContent = "Debe incluir la cabecera https://";
    }
}

function show_edad(){
    let inputFechaNacimiento: HTMLInputElement = document.getElementById("fecha_nacimiento") as HTMLInputElement;
    let fecha_nacimiento: number = new Date(inputFechaNacimiento.value).getFullYear();
    let anioActual: number = new Date().getFullYear();

    let edad: number = anioActual - fecha_nacimiento;
    
    let inputParrafo: HTMLParagraphElement = document.getElementById("resultado") as HTMLParagraphElement;
    
    inputParrafo.textContent = "Tienes " + edad + " años.";
}

function almacenar_cookies(): void{
    document.cookie = "nombre=" + inputById("nombre").value;
    document.cookie = "apellidos=" + inputById("apellidos").value;
    document.cookie = "edad=" + inputById("edad").value;
    document.cookie = "telefono=" + inputById("telefono").value;
    document.cookie = "fechaNac=" + inputById("fecha_nacimiento").value;
    document.cookie = "url=" + inputById("url").value;
}

function inputById(id: string): HTMLInputElement{
    return document.getElementById(id) as HTMLInputElement;
}

function recuperarValorCookie(id: string): string{
    let arrayCookie: string[] = document.cookie.split(";");
    let result: string = ";"
    for(let i = 0; i < arrayCookie.length; i++){
        let clave =arrayCookie[i].split("=")[0];
        let valor = arrayCookie[i].split("=")[1];
        if(clave.trim() === id){
            result = valor;
        }
    }
    return result;
}

function cargar_datos_cookie(): void{
    inputById("nombre").placeholder = recuperarValorCookie("nombre");
    inputById("apellidos").placeholder = recuperarValorCookie("apellidos");
    inputById("edad").placeholder = recuperarValorCookie("edad");
    inputById("telefono").placeholder = recuperarValorCookie("telefono");
    inputById("fecha_nacimiento").placeholder = recuperarValorCookie("fecha_nacimiento");
    inputById("url").placeholder = recuperarValorCookie("url");
}

function actualizar_web(){
    window.location.reload();
}