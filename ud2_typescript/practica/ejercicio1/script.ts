function app(){
    let inputNombre: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let nombre: string = inputNombre.value;

    let inputEdad: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let edad: number = Number(inputEdad.value);

    let div: HTMLDivElement = document.getElementById("div") as HTMLDivElement;
    div.innerHTML = "";
    let body: HTMLBodyElement = document.body as HTMLBodyElement;
   
    if((nombre.trim().length === 0) || (edad <= 0)){
        div.textContent = "Error: Debes introducir un nombre y una edad mayor a 0.";
        div.style.color = "red";
        div.style.fontWeight = "bold";
    }else{
        div.textContent = "Hola " + nombre + " tienes " + edad + " años.";
        div.style.color = "black";
        div.style.fontWeight = "normal";
    }
}