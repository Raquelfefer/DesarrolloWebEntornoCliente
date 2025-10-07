//Constantes
const CARAS = 6;
const LIMIT = 3;

//Variables globales 
let name = null;
let edad = null;
let puntuacion_total = 0;
let max = 0;
let min = Infinity;
let num_total_tiradas = 0;
let f_inicio = null;
let f_fin = null;

window.onload = function(){

    let opt;

    do{
        opt = ("Bienvenidos al juego de los dados. Elija una opción: "
        + "\n A. Iniciar Juego"
        + "\n B. Lanzar dados"
        + "\n C. Mostrar estadísticas"
        + "\n D. Salir");

    console.log("La opción elegida ha sido: " + opt);

        switch(opt.toUpperCase()){
            case "A":
                iniciar_juego();
                break;
            case "B":
                if(validar_juego()){
                    lanzar_dados();
                }else{
                    console.error("Debes inicializar el juego.");
                }
                break;
            case "C":
                if(validar_juego()){
                    mostrar_estadisticas();
                }else{
                    console.error("Debes inicializar el juego.");
                }
                break;
            case"D":
                salir();
                break;
            defautl:
                console.error("La opción marcada no es válida.");
        }
    }while(opt.toUpperCase != "D");
}

function iniciar_juego(){
    nombre = prompt("Introduce tu nombre: ");
    edad = Number(prompt("Introduce tu edad: "));
    f_inicio = new Date();

    console.log("Bienvenido " + nombre + " al juego!");
}

function validar_juego(){
    return nombre !== null;
}

function lanzar_dados(){

    let turno = 0;
    let num_tiradas = 0;

    do{
        var dado1 = Math.floor(Math.random() * CARAS) + 1;
        var dado2 = Math.floor(Math.random() * CARAS) + 1;
        
        console.log("Has obtenido : " + dado1 + " y " + dado2);
        
        turno += (dado1 + dado2);
        num_tiradas++;
        puntuacion_total += (dado1 + dado2);

        num_total_tiradas++;

    }while(dado1 === dado2 && num_tiradas <= LIMIT);

    if(num_tiradas >= LIMIT){
        console.log("Mala suerte, has sacado más de " + LIMIT + " iguales. Tu puntuación se resetea.");
        puntuacion_total = 0;
    }
       
    console.log("Has obtenido " +  turno + " puntos en esta tirada.");

    if(turno > max){
        max = turno;
    }
    if(turno < min){
        min = turno;
    }
}

function mostrar_estadisticas(){
    console.log("El valor máximo obtenido es " + max);
    console.log("El valor mínimo obtenido es " + min);
    console.log("Un total de " + num_total_tiradas + " tiradas.");
    console.log("La puntuación maedia por tirada es " + (puntuacion_total / num_total_tiradas).toFixed(2));
}

function salir(){
    f_fin = new Date();

    console.log("Fin del juego. Has estado jugando " + (f_fin - f_inicio)/1000 + " segundos.");
}