//MODIFICAR EL DOM
//Ejercicio 1
function cambiar_titulo(){
    let titulo: string = prompt("Introduce un nuevo título:") as string;
    let nodoTitulo: HTMLHeadingElement = document.getElementById("titulo") as HTMLHeadingElement;
    nodoTitulo.textContent = titulo;
}

//Ejercicio 2
function cambiar_modo(){
    //Por defecto el DOM tiene un atributo que representa el body (document.body)
    let body: HTMLBodyElement = document.body as HTMLBodyElement;

    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}

//Ejercicio 3
function analiza_edad(){
    //Recogemos el nodo
    let input: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    //Introducimos el valor que tiene el nodo en una variable
    //Los input recogen los valores introducidos como string por lo que se debe hacer un casting a numero
    let edad: number = Number(input.value);

    //Recogemos la lista del HTML para despues introducirle elementos
    let lista: HTMLOListElement = document.getElementById("resultado") as HTMLOListElement;
    lista.innerHTML = "";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type ="a";

    //a. Mayor/menor edad
    let mayorMenor: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    mayorMenor.textContent = edad > 18 ? "Eres mayor" : "Eres menor";

    //b. Par o impar
    let parImpar: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    parImpar.textContent = edad %2 == 0 ? "La edad es par" : "La edad es impar";

    //c. Divisores de la edad
    let divisores: string = "";
    for(let i = 1; i < edad; i++){
        if(edad%i == 0){
            divisores += i + ", ";
        }
    }
    divisores = divisores.substring(0, divisores.length - 2); //Quitar coma final en la lista de divisores

    let listaDivisores: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    listaDivisores.textContent = divisores;

    //d. Clasifica la edad
    let rangoEdad = "";
    switch(true){
        case edad >= 0 && edad < 15:
            rangoEdad = "Niño";
            break;
        case edad >= 15 && edad < 30:
            rangoEdad = "Joven";
            break;
        case edad >= 30 && edad < 60:
            rangoEdad = "Adulto";
            break;
        case edad >= 60:
            rangoEdad = "Mayor";
            break;
        default:
            console.log("Edad no válida.");
    }
    let edadTexto: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    edadTexto.textContent = rangoEdad;


    //Añadir elementos de lista al nodo de lista
    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);
}

//Ejercicio 4
function mini_app(){
    //Recoger el parrafo del html llamado saludo
    let parrafo: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    //Recoger el nombre por prompt
    let nombre: string = prompt("Introduce tu nombre") as string;
    //Añadir el contenido recogido en el parrafo
    parrafo.textContent = "Hola, " + nombre;
}

function cambiar_color(){
    //Recoger el valor de select
    let select: HTMLSelectElement = document.getElementById("colores") as HTMLSelectElement;
    let colorOption: HTMLOptionElement = select.options[select.selectedIndex] as HTMLOptionElement;
    let color = colorOption.value;

    let saludo: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    saludo.style.color = color;
}

//USAR ELEMENTOS DEL BOM
//Ejercicio 1
function menu_informacion(){
    let nodoMenu: HTMLOListElement= document.getElementById("menu_BOM") as HTMLOListElement;
    nodoMenu.innerHTML = "";
    //Idioma
    let idioma: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    idioma.textContent = "El lenguaje del navegador es: " + navigator.language;
    //Nombre del navegador
    let nombre: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    nombre.textContent = "El nombre del navegador es: " + navigator.userAgent;
    //Cookies
    let cookies: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    cookies.textContent = "Las cookies están habilitados: " + navigator.cookieEnabled;
    //Tamaño pantalla
    let size: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    size.textContent = "El alto de la pantalla es: " + screen.availHeight + " y el ancho es: " + screen.availWidth;

    nodoMenu.appendChild(idioma);
    nodoMenu.appendChild(nombre);
    nodoMenu.appendChild(cookies);
    nodoMenu.appendChild(size);
}

//Ejercicio 2
const iframe: HTMLIFrameElement = document.getElementById("navegador") as HTMLIFrameElement;

function navegar(){
    let nodoURL: HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    let url: string = nodoURL.value;
    iframe.src = url;
}

function retrocerder(){

}

function avanzar(){

}

function recargar(){
    location.reload();
}

