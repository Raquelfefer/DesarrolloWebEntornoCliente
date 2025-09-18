// Ejercicio 1-1
function saludar() {
    var edad = window.prompt("Introduce tu edad:");
        if(edad >= 18){
            console.log("Eres mayor de edad");
        }else{
            console.log("Eres menor de edad");
        }
    }

// Ejercicio 2-1
function pintar_ruta(){
    console.log("El acceso a la ruta C:\\\\usuario\\tarda 1,23\", algo considerado \"lento\" en la actualidad.");
}

// Ejercicio 3-1
function pintar_ruta_V2(){
    var substring1 = "El acceso a la ruta C:\\\\usuario\\tarda 1,23\", algo";
    var substring2 = " considerado \"lento\" en la actualidad.";
    console.log(substring1 + substring2);
}

// Ejercicio 4-1
function muestra_potencia(){
    var num = 2*Math.pow(10,-9);
    console.log("El valor de 2*10^9 es: " + num);
} 

// Ejercicio 5-1
function distintas_bases(num){
    //Transforma num a binario
    var numDecimal = num.toString(10);
    var numOctal = num.toString(8);
    var numBinario = num.toString(2);
    var numHexa = num.toString(16);
    console.log("El número " + num + " en decimal es: " + numDecimal);
    console.log("El número " + num + " en octal es: " + numOctal);
    console.log("El número " + num + " en binario es: " + numBinario);
    console.log("El número " + num + " en hexadecimal es: " + numHexa);
}

// Ejercicio 6-1
function multiplicacion_cero(num1,num2){
    var numMult= (num1/0)+num2;
    console.log("El número " + num1 + " entre 0 y sumando 23 es: " + numMult);
}

// Ejercicio 7-1
function forzar_NaN(){
    var NaN = 2 * "hola";
    console.log(NaN);
}

// Ejercicio 8-1
function max_valor(number){
    var maximo_valor = BigInt(number.MAX_VALUE)*2;
    console.log("El máximo valor ")
}

// Ejercicio 10-1 -  Let tiene visibilidad dentro de su anidación pero var tiene visibilidad 
// dentro de la misma función(es global)
function check_ambito_variable(){
    let prueba = 5;
    console.log("La variable prueba tiene como valor " + prueba);
    {
        var prueba2 = 10;
        console.log("Dentro del bloque anidado podemos ver " + prueba + " y " + prueba2);
    }

    console.log("No se puede ver el valor del segundo " + prueba2);
}

// Ejercicio 11
function definir_y_mostrar_array(){
    let array = ["Alberto","Juan","Sofia"];
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
    console.table(array);
}

// Ejercicio 12
function contar_y_temporizar(){
    let valor = 0;
    let initTime = new Date();
    for(let i = 0; i < 100; i++){
        valor += 10;
    }
    let endTime = new Date();
    console.log("Valor: " + valor);
    console.log("El algoritmo ha tardado " + (endTime - initTime));

}