function cuenta_cifras(){
    let num = Math.abs(Number(prompt("Introduce un número: ")));
    let caracter = 0;
    while (num > 0){
        caracter++;
        num = Math.floor(num/10);
    }
    console.log("La cantidad de cifras es: " + caracter);
}

function pinta_triangulo(){
    let n = Number(prompt("Introduce un número de lados: "));
    let triangulo = "";
    for (let i = 0; i < n; i++){
        triangulo += "\n";

        //Pintamos espacios
        for(let j = 0; j < n - i; j++){
            triangulo += " ";
        }
        //Pintamos asteriscos
        for(let k = 0; k < (2*i-1); k++){
            triangulo += "*";
        }

    }
    console.log(triangulo);
}


function menu(){
    var coleccion = [];
    let opcion; 
    do{
        opcion= Number(prompt("Introduce una opción: \nA.Introducir nuevo número\nB.Calcular máximo \nC.Calcular mínimo\nD.Calcular media\nD.Salir"));

        switch(opcion){
            case "A":
                add_num();
                break;
            case "B":
                break;
            case "C":
                break;
            case "D":
                break;
            case "E":
                break;
            default:
                console.error("Introduce una opción válida.");
        }

    }while(opcion.toUpperCase() != "E");
}

function add_num(){
    numero = Number(prompt("Introduce un número: "));
    for(let i = 0; i < coleccion.length; i++){
        coleccion.push(numero);
    }
}
