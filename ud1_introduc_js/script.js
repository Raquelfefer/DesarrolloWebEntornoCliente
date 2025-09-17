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
    var numDecimal = num.toString(2);
    console.log("El número " + num + " en binario es: " + numDecimal);
}