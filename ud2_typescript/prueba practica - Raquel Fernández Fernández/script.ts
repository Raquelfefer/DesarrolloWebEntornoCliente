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

function almacenar_cookies(){
    let inputNombre: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let cookieNombre: string = inputNombre.value;
    document.cookie = "nombre=" + cookieNombre;

    let inputApellidos: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let cookieApellidos: string = inputApellidos.value;
    document.cookie = "apellidos=" + cookieApellidos;

    let inputEdad: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let cookieEdad: string = inputEdad.value;
    document.cookie = "edad=" + cookieEdad;

    let inputTelefono: HTMLInputElement = document.getElementById("telefono") as HTMLInputElement;
    let cookieTelefono: string = inputTelefono.value;
    document.cookie = "telefono=" + cookieTelefono;

    let inputFechaNacimiento: HTMLInputElement = document.getElementById("fecha_nacimiento") as HTMLInputElement;
    let cookieFecha_nacimiento: string = inputFechaNacimiento.value;
    document.cookie = "fecha_nac=" + cookieFecha_nacimiento;

    let inputUrl: HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    let cookieUrl: string = inputUrl.value;
    document.cookie = "url=" + cookieUrl;
}