//Ejercicio 1

function bisiesto(){
    let year = Number(prompt("Introduce un año:"));
    if((year%4 === 0) && ((year%100 !== 0) || (year%400 === 0))){
        console.log("El año " + year + " es bisiesto.");
    }else{
        console.log("El año " + year + " no es bisiesto.");
    }
}

//Ejercicio 2

function nota(){
    let nota = Math.floor(Number(prompt("Introduce una nota: ")));
    switch(true){
        case nota >= 0 && nota < 5:
            console.log("SUSPENSO");
            break;
        case nota >= 5 && nota < 6:
            console.log("SUFICIENTE");
            break;
        case nota >= 6 && nota < 7:
            console.log("BIEN");
            break;
        case nota >= 7 && nota < 9:
            console.log("NOTABLE");
            break;
        case nota >= 9 && nota <= 10:
            console.log("SOBRESALIENTE");
            break;   
        default:
            console.log("Introduce una nota válida.");
    }
}

//Ejercicio 3
let palabras = "abcdefghijklmnopqrstuvwxyz";
let caracteres = "1234567890()/=*#?";

function password(tipo){
    let password = "";
    let caracteres_disponibles;
    let longitud = Number(prompt("Introduce la longitud de tu contraseña: "));
    if(tipo){
        caracteres_disponibles = palabras;
    }else{
        caracteres_disponibles = palabras + caracteres;
    }

    for(let i = 0; i < longitud; i++){
        let indice = Math.floor(Math.random()*caracteres_disponibles.length);
        password += caracteres_disponibles.charAt(indice);
    }

    console.log("Tu contraseña es: " + password);
}

//Ejercicio 4
function recursiva(numero){
    if(numero === 1){
        return 1;
    }else{
        return numero + recursiva(numero-1);
    }
}
    