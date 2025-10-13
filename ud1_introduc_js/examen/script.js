// Ejercicio 1

//Ejercicio 2


// Ejercicio 3
let palabras = "abcdefghijklmnopqrstuvwxyz";
let caracteres = "1234567890()/=*#?";

function password(){
    let caracteres_disponibles;
    let longitud = Number(prompt("¿Qué extensión tiene tu contraseña?"));
    let password;
    if(fuerte){
        caracteres_disponibles = palabras + caracteres;
    }else{
        caracteres_disponibles = palabras;
    }

    for(let i = 0; i < longitud; i++){
        let indice_alt = Math.floor(Math.random()*caracteres_disponibles.length);
        password += caracteres_disponibles.charAt(indice_alt);
    }

    console.log("La pass generada es: " + password);
    return password;
}

//Ejercicio 4
function resultado(num){
    if(num === 1){
        return 1;
    }else{
        return (num + resultado(num-1));
    }
}