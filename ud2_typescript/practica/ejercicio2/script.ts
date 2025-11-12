function app(){
    let inputNombre: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let inputPeso: HTMLInputElement = document.getElementById("peso") as HTMLInputElement;
    let inputAltura: HTMLInputElement = document.getElementById("altura") as HTMLInputElement;
    let nombre: string = inputNombre.value;
    let peso: number = Number(inputPeso.value);
    let altura: number = Number(inputAltura.value);

    let nodeDiv: HTMLDivElement = document.getElementById("div") as HTMLDivElement;
    nodeDiv.innerHTML = "";

    if(nombre.trim().length === 0 || peso <= 0 || altura <= 0){
        nodeDiv.textContent = "Error: Debes introducir un nombre válido y un peso y altura mayores de 0.";
        nodeDiv.style.fontWeight = "bold";
    }else{
        let imc: number = peso / Math.pow(altura,2);
        let valorIMC: string = "";
        switch(true){
            case imc < 18.5:
                valorIMC = "Bajo peso";
                break;
            case imc >= 18.5 && imc <= 24.9:
                valorIMC = "Peso normal";
                break;
            case imc >= 25 && imc <= 29.99:
                valorIMC = "Sobrepeso";
                break;
            case imc >= 30:
                valorIMC = "Obesidad";
                break;
        }
        nodeDiv.textContent = "Hola "  + nombre + " , tu IMC es " + imc.toFixed(2) + " por lo que estas en el rango: " + valorIMC;
        nodeDiv.style.fontWeight = "normal";

    }
}