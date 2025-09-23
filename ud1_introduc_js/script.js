// Ejercicio 1-1
function saludar() {
    var edad = window.prompt("Introduce tu edad:");
        if(edad >= 18){
            console.log("Eres mayor de edad");
        }else{
            console.log("Eres menor de edad");
        }
    }

// Ejercicio 1-2
function pintar_ruta(){
    console.log("El acceso a la ruta C:\\\\usuario\\tarda 1,23\", algo considerado \"lento\" en la actualidad.");
}

// Ejercicio 1-3
function pintar_ruta_V2(){
    var substring1 = "El acceso a la ruta C:\\\\usuario\\tarda 1,23\", algo";
    var substring2 = " considerado \"lento\" en la actualidad.";
    console.log(substring1 + substring2);
}

// Ejercicio 1-4
function muestra_potencia(){
    var num = 2*Math.pow(10,-9);
    console.log("El valor de 2*10^9 es: " + num);
} 

// Ejercicio 1-5
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

// Ejercicio 1-6
function division_cero(num1,num2){
    var numDiv= (num1/0)+num2;
    console.log("El número " + num1 + " entre 0 y sumando 23 es: " + numDiv);
}

// Ejercicio 1-7
function forzar_NaN(){
    var NaN = 2 * "hola";
    console.log(NaN);
}

// Ejercicio 1-8 
function max_valor(number){
    var maximo_valor = BigInt(number.MAX_VALUE) * BigInt(2);
    console.log("El máximo valor multiplicado por 2 es: " + maximo_valor.toString());
}

// Ejercicio 1-9 
function suma_numero_cadena() {
    let numero = 5;
    let cadena = "10";
    // a. Suma directa
    let resultado1 = numero + cadena;
    console.log("Suma directa (número + cadena):", resultado1); // Da "510" (concatenación)

    // b. Suma asegurando suma numérica
    let resultado2 = numero + Number(cadena);
    console.log("Suma numérica (número + Number(cadena)):", resultado2); // Da 15 (suma real)
    // Se ha convertido la cadena a número usando Number()
}

// Ejercicio 1-10 -  Let tiene visibilidad dentro de su anidación pero var tiene visibilidad
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

// Ejercicio 1-11
function definir_y_mostrar_array(){
    let array = ["Alberto","Juan","Sofia"];
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
    console.table(array);
}

// Ejercicio 1-12
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

// Ejercicio 1-13

// Ejercicio 1-14

// Ejercicio 1-15
function pedir_nombre(){
    let seguir = true;

    while(seguir){
        let nombre = prompt("Introduzca su nombre:");
        console.log("Hola " + nombre);
        seguir = confirm("¿Desea continuar en el programa?"); //Confirm devuelve true o false
        console.log("Has decidido continuar: " + seguir);
    }

    console.log("FIN del programa");
    
}

// Ejercicio 1-16
function pedir_datos(){
    let nombre  = number(prompt("Introduzca su nombre:"));
    let edad = prompt("Introduzca su edad:");
    let ciudad = prompt("Introduzca su ciudad:");
    let direccion = prompt("Introduzca su dirección:");
    let telefono = number(prompt("Introduzca su teléfono:"));
    if(edad**5  === telefono || ciudad.toUpperCase() === "Mairena del Alcor".toUpperCase()){
        console.log("ENHORABUENA");
    }else{
        console.log("Lo siento, no cumples los requisitos");
    }

}

function pedir_datos_formulario(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let ciudad = document.getElementById("ciudad").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    if(edad**5  == telefono || ciudad.toUpperCase() == "Mairena del Alcor".toUpperCase()){
        console.log("ENHORABUENA");
    }else{
        console.log("Lo siento, no cumples los requisitos");
    }
}

// Ejercicio 1-17
function contar_cifras(){
    let numero = Math.abs(prompt("Introduce un número: "));
    let contador = 0;
    while(numero >= 1){
        numero = Math.floor(numero/10);
        contador++;
    }
    console.log("El número de cifras es: " + contador);
}