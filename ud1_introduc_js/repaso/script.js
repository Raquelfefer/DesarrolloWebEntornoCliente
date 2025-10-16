function ejercicio1(){
    let edad = Number(prompt("Introduce tu edad: "));
    if(edad >= 0 && edad <18){
        console.log("Eres menor de edad");
    }else if(edad >= 18){
        console.log("Eres mayor de edad.");
    }else{
        console.error("Tu edad no es válida.");
    }
}

function ejercicio2(){
    console.log("El acceso a la ruta C:\\\\usuario\\tarda 1'23'', algo considerado \"lento\" en la actualidad.");
}

function ejercicio3(){
    let primera = "El acceso a la ruta C:\\\\usuario\\tarda 1'23'', algo";
    let segunda = " considerado \"lento\" en la actualidad.";
    console.log(primera + segunda);
}

function ejercicio4(){
    let valor = 2*Math.pow(10,-9);
    console.log(valor);
}

function ejercicio5(){
    let numero = 27;
    console.log(numero.toString(2));
    console.log(numero.toString(8));
    console.log(numero.toString(10));
    console.log(numero.toString(16));
}

function ejercicio6(){
    let numero = 58;
    let resultado = numero/0;
    console.log(resultado+23);
}

function ejercicio7(){
    let letra = Number(prompt("Introduce una palabra:"));
    console.log(letra);
}

function ejercicio8(){
    console.log(Number.MAX_VALUE); 
    console.log(Number.MAX_VALUE+1e292);
    const maxInt = BigInt(Number.MAX_SAFE_INTEGER);
    console.log(maxInt + 100n);
}

function ejercicio9(){
    let numero = 34;
    let letra = "10";
    console.log(numero + letra);
    //Muestra los dos valores sin sumar.
    console.log(numero + Number(letra));
}


{let variable1 = 10;
var variable2 = 22;}
function ejercicio10(){
    let variable3 = 33;
    var variable4 = 44;
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
    console.log(variable4);
}

function ejercicio11(){
    let array = [2,4,6,8];
    console.table(array);
    let personas = [{nombre : "Ana", edad : 45}, {nombre: "Pepe", edad : 33}];
    console.table(personas);
}

function ejercicio12(){
    let valor = 0;
    let inicio = Date.now();
    for(let i = 0; i <100; i++){
        valor += 10;
    }
    let fin = Date.now();
    let tiempo = fin - inicio;
    console.log("El valor final del bucle es: " + valor + " y ha tardado: " + tiempo + " milisegundos.");
}

function ejercicio13(){
    console.error("Error! No se ha encontrado ningún valor.");
}

function ejercicio14(){
    let opcion = (prompt("¿Desea eliminar el mensaje? Si (1), No (0)"));
    if(opcion === 1){
        console.log("Se ha eliminado el mensaje.");
    }else if(opcion === 0){
        console.log("No se ha eliminado el mensaje.");
    }else{
        console.log("Introduzca una opción correcta.");
    }
}

function ejercicio15(){
    let nombre = prompt("Introduzca su nombre: ");
    let salir = confirm("¿Quieres salir del programa?");
    if(salir){
        alert("Ha salido del programa.");
    }else{
        alert("No ha salido del programa.");
    }
    console.log("FIN DEL PROGRAMA.");

    let seguir = true;
    while(seguir){
        let nombre2 = prompt("Introduce tu nombre:");
        console.log("Hola " + nombre2);
        seguir = confirm("Desea continuar en el programa?");
        console.log("Has decidido continuar?"  + seguir);
    }
    
    console.log("FIN DEL PROGRAMA");
}

function ejercicio16(){
    let nombre = prompt("Introduce tu nombre:");
    let edad = Number(prompt("Introduce tu edad:"));
    let ciudad = prompt("Introduce tu ciudad");
    let direccion = prompt("Introduce tu direccion:");
    let telefono = Number(prompt("Introduce tu telefono"));
    if((Math.pow(edad,5) === telefono) || ciudad.toUpperCase() == "MAIRENA DEL ALCOR"){
        console.log("Enhorabuena!!")
    }
}

function ejercicio17(){
    let numero = Number(prompt("Introduce un número:"));
    let cifras = 0;
    let definitivo = numero;
    while(numero >= 1){
        numero /= 10;
        cifras++;
    }
    console.log("El número: " + definitivo + " tiene " + cifras + " cifras.");
}

function ejercicio18(){
    let edad = Number(prompt("Introduce tu edad:"));
    switch(true){
        case (edad >= 0) && (edad <= 16): 
            console.log("Eres niño.");
            break;
        case (edad >= 17) && (edad <= 25):
            console.log("Eres joven.");
            break;
        case (edad >= 26) && (edad <= 60):
            console.log("Eres adulto.");
            break;
        case edad > 60:
            console.log("Eres senior.");
            break;
        default:
            console.log("Introduce una edad válida.");
            break;
    }
}

function ejercicio19(){
    let numero = Number(Math.floor(Math.random() * 10 + 1));
    let opcion;
    let intento = 0;
    do{
        opcion = Number(prompt("Adivina el número entre el 1-10:"));
        intento++;
    }while(numero !== opcion);

    console.log("Enhorabuena! El número era el: " + numero + " y has usado " + intento + " intentos.");

}

function ejercicio20(){
    let numero = 7;
    for (let i = 8; i <=100; i++){
        if(i%numero === 0){
            console.log(i);
        }
    }
}

function ejercicio21(){
    let numero = Number(prompt("Introduce un número: "));
    let numero_seleccionado = numero;
    for(let i = 1; i < numero_seleccionado; i++){
        numero *= i;
    }
    console.log("El factorial de " + numero_seleccionado + " es: " + numero);
}

function ejercicio22(){
    let dias = Number(prompt("Introduce una cantidad de días:"));
    let horas = dias * 24;
    let minutos = horas * 60;
    let segundos = minutos * 60;

    console.log(dias + " dias son " + horas + " horas.");
    console.log(dias + " dias son " + minutos + " minutos.");
    console.log(dias + " dias son " + segundos + " segundos.");
}

function ejercicio23(){
    let a = Number(prompt("Introduce el valor de a:"));
    let b = Number(prompt("Introduce el valor de b:"));
    let c = Number(prompt("Introduce el valor de c:"));

    let resultado1 = ((-b + (Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a)).toFixed(2);
    let resultado2 = ((-b - (Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a)).toFixed(2);

    console.log("El resultado puede ser: "+ resultado1 + " o " + resultado2);
}

function ejercicio24(){
    const letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let dni = Number(prompt("Introduce tu número de DNI, sin letra:"));
    let indice = (dni%23);
    let letra = letrasDNI[indice];
    console.log("La letra del DNI: "+  dni + " es " + letra);
}

function ejercicio25(){
    let opcion;
    do{
        opcion = prompt("Elige una opción: \na. Calcular el área de un tríangulo\nb.Calcular el área de un rectángulo\nc.Calcular el área de un círculo\nd.Salir");
        switch(true){
            case opcion.toUpperCase() === "A":
                let base = Number(prompt("Introduce la base del triángulo:"));
                let altura = Number(prompt("Introduce la altura del triángulo:"));
                let area_triangulo = (base*altura)/2;
                console.log("El área del triángulo es: " + area_triangulo);
                break;
            case opcion.toUpperCase() === "B":
                let largo = Number(prompt("Introduce el largo:"));
                let ancho = Number(prompt("Introduce el ancho:"));
                let area_rectangulo = largo*ancho;
                console.log("El área del rectángulo es: " + area_rectangulo);
                break;
            case opcion.toUpperCase() === "C":
                let radio = Number(prompt("Introduce el radio:"));
                let area_circulo =  Math.PI * Math.pow(radio,2);
                console.log("El área del circulo es: "+ area_circulo);
                break;
            case opcion.toUpperCase() === "D":
                console.log("Ha salido del programa.");
                break;
            default:
                console.log("Introduce una opción válida.");
        }
    }while(opcion.toUpperCase() !== "D");
}

function ejercicio26(){
    for(let i = 1; i <= 100; i++){
        if((i%3 === 0)&&(i%7 === 0)){
            console.log(i);
        }
    }
    let limite = 1;
    while(limite <=100){
         if((limite%3 === 0)&&(limite%7 === 0)){
            console.log(limite);
        }
        limite++;
    }
    let limite2 = 1;
    do{
        if((limite2%3 === 0)&&(limite2%7 === 0)){
            console.log(limite2);
        }
        limite2++; 
    }while(limite2 <=100);
}

function ejercicio27(){
    let numero = Number(prompt("Introduce un número: "));
    let numero_definitivo = Math.abs(numero);
    let cifra = 0;

    if(numero_definitivo === 0){
        cifra = 1;
    }else{
       while(numero_definitivo > 0){
        numero_definitivo = Math.floor(numero_definitivo/10);
        cifra++;
        } 
    }
    
    console.log("El número " + numero + " tiene " + cifra + " cifras.");
}

function ejercicio28(){
    let n = Number(prompt("Introduce el lado del triángulo:"));
    let triangulo = "";
    for(let i = 0; i <= n; i++){
        triangulo += "\n";
        for(let j = 0; j < n - i; j++){
            triangulo += " ";
        }
        for(let k = 0; k < (2*i-1); k++){
            triangulo += "*";
        }
    }
    console.log(triangulo);
}

    var valores = [];
    var max = -Infinity;
    var min = Infinity;

function ejercicio29(){
    let opcion;
    do{
        opcion = prompt("Introduce una opción:\na. Introducir nuevo número\nb. Calcular máximo\nc. Calcular mínimo\nd. Calcular media\ne. Salir");
        switch(opcion.toUpperCase()){
            case "A":
                introduce_num();
                break;
            case "B":
                console.log("El número máximo es: " + max);
                break;
            case "C":
                console.log("El número mínimo es: " + min);
                break;
            case "D":
                calcular_media();
                break;
            case "E":
                console.log("Ha salido del programa.");
                break;
            default:
                console.log("Introduce una opción válida.");
                break;
        }
    }while(opcion.toUpperCase() !== "E");
}

function introduce_num(){
    var num = Number(prompt("Introduce un número:"));
    if(isNaN(num)){
        console.error("Error! debes introducir un numero");
    }else{
        valores.push(num);
         if(num < min){
        min = num;
        }       
        if(num > max){
        max = num;
        }
    }
}

function calcular_media(){
    let total = 0;
    for(let i = 0; i < valores.length; i++){
        total += valores[i];
    }
    let media = total/valores.length;
    console.log("La media es: " + media);
}

function ejercicio30(){
    let nota = Math.floor((Math.random()*10)+1);
    switch(true){
        case nota >= 0 && nota <=4:
            console.log("SUSPENSO");
            break;
        case nota == 5 :
            console.log("SUFICIENTE");
            break;
        case nota == 6:
            console.log("BIEN");
            break;
        case nota >= 7 && nota <=8:
            console.log("NOTABLE");
            break;
        case nota >= 9 && nota <=10:
            console.log("SOBRESALIENTE");
            break;
    }
}

let numero_binario = "110011";

function ejercicio31(numero_binario){
    let decimal = parseInt(numero_binario,2);
    console.log(decimal);
}

function adivina_numero(){
    let numero_aleatorio = Math.floor(Math.random()*11);
    let numero_jugador;
    let intentos = 0;

    do{
        numero_jugador = Number(prompt("Intenta adivinar el número (0-10)"));
        intentos++;
    }while(numero_aleatorio !== numero_jugador && intentos < 20);

    if(intentos >= 20){
        console.log("Has llegado a 20 intentos. Has perdido!!");
    }else{
        console.log("Has ganado!! El número era el: " + numero_aleatorio + " y lo has conseguido en " + intentos + " intentos.");
    }
}

function cuenta_atras(n){
    for(let i = n; i >= 0; i--){
        if(i > 0){
            console.log(i);
        }else{
            console.log("DESPEGUE");
        }
    }
}

function descuento(edad,premium,compra_ult_mes,gasto_total){
    let codigo = "PRIMAVERA15";
    if(edad >= 18 && (premium || (compra_ult_mes >= 5 && gasto_total >= 200))){
        console.log("Enhorabuena!! Cumple con los requisitos. Su código de descuento es: " + codigo);
    }else{
        console.log("Lo sentimos. No cumples los requisitos para acceder al descuento.");
    }
}

function informacion(){
    let frase = prompt("Introduce una frase:");
    let num_caracteres = frase.length;
    let palabras = 1;
    let letra_A = 0;
    let acronimo = "";
    
    for(let i = 0; i < frase.length; i++){
        let caracter = frase[i];
        if(caracter === " "){
            palabras++;
        }else if(caracter.toUpperCase() === "A"){
            letra_A++;
        }
    }


    console.log("La frase es: " + frase + "\nEl número de caracteres es: " + num_caracteres + "\nEl número de palabras es: " + palabras + "\nEl número de letras A es: " + letra_A);
}

