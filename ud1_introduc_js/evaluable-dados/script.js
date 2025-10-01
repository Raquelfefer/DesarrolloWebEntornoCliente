var nombre = "";
var edad = 0;
const caras = 6;
var num_tiradas = 0;
var num_tiradas_rep = 1;
var maximo = 0;
var minimo = 6;
var date_start = Date.now();

function menu(){
    let opcion = 0;
    while(opcion !== 4){
        opcion = Number(prompt("Elige una opción: \n1.Iniciar Juego \n2. Lanzar dados \n3. Mostrar estadísticas de juego \n4. Salir"));
        switch(opcion){
            case 1:
                iniciar_juego();
                break;
            case 2:
                lanzar_dados();
                break;
            case 3:
                estadisticas_juego();
                break;
            case 4:
                salir();
                break;
            default:
                console.error("Opción no válida.");
                break;
        }
    }
}

function iniciar_juego(){
    nombre = prompt("Introduce tu nombre: ");
    edad = Number(prompt("Introduce tu edad: "));
    console.log("¡Juego iniciado! Bienvenido " + nombre + ", tienes " + edad + " años.");
}

function lanzar_dados(){
    let resultado = 0;

    if(nombre === "" || edad === 0){
        console.log("Por favor, inicia el juego primero.");
        return;
    }

    let dado1 = Math.floor(Math.random() * caras) + 1;
    let dado2 = Math.floor(Math.random() * caras) + 1;
    num_tiradas++;
    resultado += (dado1 + dado2);
    console.log("El jugador " + nombre + " ha obtenido " + resultado + " puntos en esta tirada.");
    console.log("Dado 1: " + dado1 + "\nDado 2: " + dado2);
    
    if (dado1 === dado2){
        num_tiradas_rep++;
        if(num_tiradas_rep <= 3){
            lanzar_dados();
        }
    }
    
    
    if (resultado > maximo){
        maximo = resultado;
    }else if(resultado < minimo){
        minimo = resultado;
    }

    
        
}

function estadisticas_juego(){
    if(nombre === "" || edad === 0){
        console.log("Por favor, inicia el juego primero.");
        return;
    }
    console.log("El número de tiradas ha sido: " + (num_tiradas + num_tiradas_rep));
    console.log("La media de puntos ");
    console.log("El valor máximo es: " + maximo);
    console.log("El valor mínimo obtenido es: " + minimo);

}

function salir(){
    let date_finish = Date.now();
    let tiempo = ((date_finish - date_start)/ (10000 * 6)).toFixed(2);
    console.log("Fin del juego. Has estado jungado " + tiempo + " minutos.");
    nombre = "";
    edad = 0;
    num_tiradas = 0;
    num_tiradas_rep = 0;
    maximo = 0;
    minimo = 6;
}