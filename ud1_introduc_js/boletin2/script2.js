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
    
