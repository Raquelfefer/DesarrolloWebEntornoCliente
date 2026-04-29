let buttons = document.getElementsByTagName("button");

//For clásico
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", ()=> console.log("Hola"))
}

//For extendido
for(let button of buttons){
    button.addEventListener("click", ()=> console.log("Hola"))
}

//ForEach - el getElementsByTagName devuelve un HTMLCollection, 
// no un array, por lo que no tiene el método forEach. 
// Para usar forEach, primero debemos convertirlo a un array 
// usando el operador de propagación (...).  
[...buttons].forEach(element =>
    element.addEventListener("click", ()=> console.log("Hola")));



[...buttons].forEach(element =>
    element.addEventListener("click", ()=> saluda()));

function saluda(){
    console.log("Hola");
}

//Tambien se puede usar una función anónima, pero no se puede controlar su ejecución desde fuera, es decir, no se puede eliminar el evento.
//Podemos declarar una variable con la función y luego pasarla como referencia al addEventListener, de esta forma si queremos eliminar el evento, podemos usar la misma referencia.

let saluda = function(){
    console.log("Hola");
};

[...buttons].forEach(element =>
    element.addEventListener("click", ()=> saluda));

[...parrafos].forEach((p) => p.addEventListener("click", () => window.location.href = p.getAttribute("name")));

enlace.addEventListener("click", () => (e)=>{
    e.preventDefault();
    console.log("Aquí debe parar");
});

let form = document.getElementById("formulario");
let mensajeError = document.getElementsByClassName("errorMsg")[0];

form.addEventListener("submit", (e) => {
    if(!validar()){
        e.preventDefault();
        mensajeError.style.display = "Revisa formulario";

        setTimeout(() => {mensajeError.textContent = "";}, 2000);
    }
});

function validar(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;

    return nombre.value && apellidos.value && edad.value>0;
}
