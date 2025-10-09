let colores = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#D7BAFF", "#FFBAF2", "#BFFCC6", "#FFC9DE", "#D1F0FF"];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function() {
    for(let i = 0; i < ejercicios.length; i++) {
        let colorAleatorio = Math.random() * colores.length;
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
}

// Ejercicio 0

function calcula_fibonacci(){
    let num = Number(prompt("Introduce un número:"));
    console.log("El valor fib(" + num + ") es: " + fibonacci(num));
}

function fibonacci(num) {
    //Comprobamos los casos base
    if(num === 0) {
        return 0;
    }
    else if(num === 1) {
        return 1;
    }else{
        //Aquí esta la llamada recursiva
        return fibonacci(num-1) + fibonacci(num-2);
    }
}

// Ejercicio 1

function calcula_factorial(isRec){
    let num = Number(prompt("Introduce un número:"));
    let resultado;
    if(isRec){
        resultado = factorial_recursiva(num);
    }else{
        resultado = factorial_tradicional(num);
    }
    console.log("El valor fact(" + num + ") es: " + resultado);
}

function factorial_recursiva(num){
    if(num === 1){
        return 1;
    }else{
        return num * factorial_recursiva(num - 1);
    }
}

function factorial_tradicional(num){
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}

// Ejercicio 2

function transformar_dias_horas(){
    let num_dias = Number(prompt("Introduce un número de días: "));
    const horas = num_dias * 24;
    const minutos = horas * 60;
    const segundos = minutos * 60;

    console.log(num_dias + " días son " + (horas) + " horas.");
    console.log(num_dias + " días son " + (minutos) + " minutos.");
    console.log(num_dias + " días son " + (segundos) + " segundos.");
}

// Ejercicio 3
function resolver_ecuacion_segundo_grado(){
    let a = Number(prompt("Introduce el valor de a:"));
    let b = Number(prompt("Introduce el valor de b:"));
    let c = Number(prompt("Introduce el valor de c:"));

    let delta = Math.pow(b,2) - 4*a*c;

    if(delta < 0){
        console.log("No hay solución a la ecuación.");
    }else if(delta = 0){
        let result = ((-b)/(2*a)).toFixed(2);
        console.log("La solución de " + a + "x² + " + b + "x + " + c + " = 0 es (" + result  + ").");
        return;
    }else{
        let result1 = ((-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)).toFixed(2);
        let result2 = ((-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/(2*a)).toFixed(2);
    console.log("La solución de " + a + "x² + " + b + "x + " + c + " = 0 es (" + result1  + ", " + result2 + ").");
    }
    
}

// Ejercicio 4
function calcular_letra_dni(){
    let dni = Number(prompt("Introduce el número de tu DNI (sin letra):"));
    if(dni.length !== 8 || isNaN(dni)){
        console.log("El número introducido no es válido.");
        return;
    }
    const letras_dni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let letra = letras_dni[dni%23];
    console.log("La letra del DNI " + dni + " es: " + letra);
}

// Ejercicio 5
function menu(){
    let opcion = 0;
    while(opcion !== 4){
        opcion = Number(prompt("Elige una opción: \n1.Calcular el área de un triángulo \n2. Calcular el área de un rectángulo \n3. calcular el área de un círculo \n4. Salir"));
        switch(opcion){
            case 1:
                let base_triangulo = Number(prompt("Introduce la base del triángulo: "));
                let altura_triangulo = Number(prompt("Introduce la altura del triángulo: "));
                let area_triangulo = (base_triangulo * altura_triangulo)/ 2;
                console.log("El área del triángulo es: " + area_triangulo);
                break;
            case 2:
                let base_rectangulo = Number(prompt("Introduce la base del rectángulo: "));
                let altura_rectangulo= Number(prompt("Introduce la altura del rectángulo: "));
                let area_rectangulo = base_rectangulo * altura_rectangulo;
                console.log("El área del rectángulo es: " + area_rectangulo);
                break;
            case 3:
                let radio_circulo = Number(prompt("Intoduce el radio del círculo: "));
                let area_circulo = Math.PI * Math.pow(radio_circulo, 2);
                console.log("El área del círculo es: " + area_circulo.toFixed(2));
                break;
            case 4:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida.");
                break;
        }
    }
}

// Ejercicio6
function bucle_for(){
    console.log("Números impares del 1 al 100 que no son múltiplos de 3 ni de 7:");
    for(let i = 1; i <= 100; i++){
        if(i % 2 !== 0 && i % 3!== 0 && i % 7 !==0){
            console.log(i);
        }
    }
}

function bucle_while(){
    let numero = 1;
    console.log("Números impares del 1 al 100 que no son múltiplos de 3 ni de 7:");
    while (numero <= 100){
        if(numero % 2 !== 0 && numero % 3!== 0 && numero % 7 !==0){
            console.log(numero);
        }
        numero++;
    }
}

function bucle_do_while(){
    let numero = 1;
    console.log("Números impares del 1 al 100 que no son múltiplos de 3 ni de 7:");
    do {
        if(numero % 2 !== 0 && numero % 3!== 0 && numero % 7 !==0){
            console.log(numero);
        }
        numero++;
    } while (numero <= 100);
}




