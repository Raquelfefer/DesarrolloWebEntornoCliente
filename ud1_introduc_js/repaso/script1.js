
var nombre = null;
var edad = null;
let dado1;
let dado2;
let resultado_tirada = 0;
let num_tiradas = 0;
let tiradas_dobles = 0;
let puntuacion_total = 0;
let tirada_max = -Infinity;
let tirada_min = Infinity;
let inicio;
let fin;

const tiradas_max = 3;
const caras = 6;


window.onload = function(){
    let opcion;
    inicio = Date.now();
    do{
        opcion = prompt("Introduce una opción:\na. Iniciar juego\nb. Lanzar dados\nc. Mostrar estadísticas de juego\nd. Salir");
        switch(opcion.toUpperCase()){
            case "A":
                iniciar_juego();
                break;
            case "B":
                lanzar_dados();
                break;
            case "C":
                mostrar_estadisticas();
                break;
            case "D":
                salir();
                break;
            default:
                console.log("Introduce una opción válida.");
        }
    }while(opcion.toUpperCase() !== "D");

}

function iniciar_juego(){
    nombre = prompt("Introduce tu nombre:");
    edad = prompt("Introduce tu edad:");
}

function lanzar_dados(){
    if(nombre === null){
        console.error("El juego no se ha iniciado. Inicia el juego para continuar.");
    }else{
        dado1 = Math.floor((Math.random()*caras)+1);
        dado2 = Math.floor((Math.random()*caras)+1);
        resultado_tirada = dado1 + dado2;
        num_tiradas++;
        puntuacion_total += resultado_tirada;

        if(resultado_tirada > tirada_max){
            tirada_max = resultado_tirada;
        }
        if(resultado_tirada < tirada_min){
            tirada_min = resultado_tirada;
        }
        console.log("Dado 1: " + dado1 + " Dado 2: " + dado2);
        console.log("El jugador " + nombre + " ha obtenido " + resultado_tirada + " en esta tirada.");
        
        if(dado1 === dado2 && tiradas_dobles < tiradas_max){
            tiradas_dobles++;
            lanzar_dados();
        }
        if(tiradas_dobles >= 3){
            puntuacion_total = 0;
            console.log("Has perdido tu turno.");
        }
    }
}

function mostrar_estadisticas(){
    if(nombre === null){
        console.error("El juego no se ha iniciado. Inicia el juego para continuar.");
    }else{
    console.log("El número de tiradas han sido: " + num_tiradas);
    console.log("La media de puntos por tirada ha sido: " + (puntuacion_total/num_tiradas));
    console.log("El valor máximo obtenido por tirada ha sido: " + tirada_max);
    console.log("El valor mínimo obtenido por tirada ha sido: " + tirada_min);
    }
}

function salir(){
    fin = Date.now();
    let tiempo_total = ((fin - inicio)/1000/60).toFixed(2);
    console.log("Fin del juego. Has estado jugando " + tiempo_total + " minutos jugando.");
}