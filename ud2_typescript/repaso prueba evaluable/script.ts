window.onload = () =>{
    setInterval(reloj, 1000);

}

//Ejercicio 1
function cambiar_titulo(){
    let texto: string = prompt("Introduce un título nuevo:") as string;
    let parrafo: HTMLHeadingElement = document.getElementById("titulo") as HTMLHeadingElement;
    parrafo.textContent = texto;
}

//Ejercicio 2
function cambiar_modo(){
    let cuerpo: HTMLBodyElement = document.body as HTMLBodyElement;
    if(cuerpo.style.backgroundColor == "white"){
        cuerpo.style.backgroundColor = "black";
        cuerpo.style.color = "white";
    }else{
        cuerpo.style.backgroundColor = "white";
        cuerpo.style.color = "black";
    }
}

//Ejercicio 3
function calcular_edad(){
    let formulario: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let edad_formulario: number = Number(formulario.value);

    let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
    lista.innerHTML = "";
    lista.style.color = "green";
    lista.style.fontWeight= "bold";
    lista.setAttribute("type", "a");

   let mayorMenor: HTMLLIElement = document.createElement("li") as HTMLLIElement;
   mayorMenor.textContent = edad_formulario >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
   lista.appendChild(mayorMenor);

   let parImpar: HTMLLIElement = document.createElement("li") as HTMLLIElement;
   parImpar.textContent = edad_formulario%2 == 0 ? "Tu edad es par" : "Tu edad es impar";
   lista.appendChild(parImpar);

   let divisores: HTMLLIElement = document.createElement("li") as HTMLLIElement;
   let numeros: string = "";
   for(let i = 1; i <= edad_formulario; i++){
        if(edad_formulario%i == 0){
            numeros += i + ", ";
        }
   }
   divisores.textContent = numeros;
   lista.appendChild(divisores);

   let rango_edad: HTMLLIElement = document.createElement("li") as HTMLLIElement;
   let edad_switch: string = "";
   switch(true){
        case edad_formulario >= 0 && edad_formulario < 15:
           edad_switch = "Niño";
           break;
        case edad_formulario >= 15 && edad_formulario < 30:
            edad_switch = "Joven";
            break;
        case edad_formulario >= 30 && edad_formulario < 60:
            edad_switch = "Adulto";
            break;
        case edad_formulario >= 60:
            edad_switch = "Mayor";
            break;
        default:
            console.error("Edad no válida.");
            break;
   }
   rango_edad.textContent = edad_switch;
   lista.appendChild(rango_edad);
}

//Ejercicio 4
function mini_app(){
    let parrafo: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    let texto: string = prompt("Introduce tu nombre") as string;
    parrafo.textContent = "Hola, " + texto;
}

function cambiar_color(){
    let parrafo: HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    let color_select: HTMLSelectElement = document.getElementById("color") as HTMLSelectElement;
    let color: string = String(color_select.value);
    parrafo.style.color = color;
}

//Ejercicio 1
function informacion_nav(){
    let input: HTMLInputElement = document.getElementById("opcion") as HTMLInputElement;
    let parrafo: HTMLParagraphElement = document.getElementById("informacion") as HTMLParagraphElement;
    let opcion: string = input.value.toLowerCase();

    switch(opcion){
        case "a":
            parrafo.textContent = "El idioma del navegador es: " + navigator.language;
            break;
        case "b":
            parrafo.textContent = "El navegador usado es: " + navigator.userAgent;
            break;
        case "c":
            parrafo.textContent = "Las cookies estan habilitadas: " + navigator.cookieEnabled;
            break;
        case "d":
            parrafo.textContent = "Ancho: " + window.innerWidth + " y altura: " + window.innerHeight;
            break;
        default:
            console.error("Introduce una opción válida.");
            break;
    }
}

//Ejercicio 2
function navegar(){
    let inputUrl: HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    let url: string = inputUrl.value;

    url = "https://" + url;

    let pantalla: HTMLIFrameElement = document.getElementById("ventana") as HTMLIFrameElement;
    pantalla.src = url;
}

//Ejercicio 3
function reloj(){
    let now = new Date();
    let hora = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    let reloj: HTMLParagraphElement = document.getElementById("reloj") as HTMLParagraphElement;
    reloj.textContent = hora;
}

//Ejercicio 1
function num_elements(){
    let lista: HTMLOListElement = document.getElementById("shopping-list") as HTMLOListElement;
    let resultado: HTMLParagraphElement = document.getElementById("resultado_nodo") as HTMLParagraphElement;
    resultado.textContent = "Hay " + lista.childElementCount + " elementos.";
}

function show_firstLast_element(){
    let lista: HTMLOListElement = document.getElementById("shopping-list") as HTMLOListElement;
    let resultado: HTMLParagraphElement = document.getElementById("resultado_nodo") as HTMLParagraphElement;
    resultado.textContent = "El primer elemento es: " + lista.firstElementChild?.textContent + " y el último elemento es: " + lista.lastElementChild?.textContent;
}

function duplicate_element(){
    let lista: HTMLOListElement = document.getElementById("shopping-list") as HTMLOListElement;
    let elemento: number = Number(window.prompt("¿Qué número quieres duplicar?"));
    if(elemento > 0 && elemento <= lista.childElementCount){
        let elementoNuevo: HTMLLIElement = document.createElement("li");
        elementoNuevo.textContent = lista.children[elemento-1].textContent;
        lista.appendChild(elementoNuevo);
    } else {
        alert("Número fuera de rango");
    }
}

function update_element(){
    let lista: HTMLOListElement = document.getElementById("shopping-list") as HTMLOListElement;
    let numero: number = Number(window.prompt("¿Qué número quieres modificar?"));
    if(numero > 0 && numero <= lista.childElementCount){
        let contenido: string = window.prompt("¿Que pondrá en el nuevo elemento?") as string;
        lista.children[numero-1].textContent = contenido;
    }else{
        alert("Número fuera de rango");
    }
}

function show_all_elements(){
    let lista: HTMLOListElement = document.getElementById("shopping-list") as HTMLOListElement;
    let resultado: HTMLParagraphElement = document.getElementById("resultado_nodo") as HTMLParagraphElement;
    for(let i = 0; i <= lista.childElementCount; i++){
        let parrafoNuevo: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        parrafoNuevo.textContent = lista.children[i].textContent;
        resultado.append(parrafoNuevo);
    }
}

function add_element(){
    let lista: HTMLOListElement = document.getElementById("shopping-list") as HTMLOListElement;
    let nombre: string = String(window.prompt("¿Qué elemento quieres añadir?"));
    let elemento: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    elemento.textContent = nombre;
    lista.appendChild(elemento);
}

function delete_element(){
    let lista: HTMLOListElement = document.getElementById("shopping-list") as HTMLOListElement;
    let numero: number = Number(window.prompt("¿Qué número quieres borrar?"));
    if(numero > 0 && numero <= lista.childElementCount){
        let elemento: HTMLLIElement= lista.children[numero-1] as HTMLLIElement;
        lista.removeChild(elemento);
    }else{
        console.error("Numero fuera de rango.");
    }
}

function ordenar_elements(){
    let lista: HTMLOListElement = document.getElementById("shopping-list") as HTMLOListElement;
    const childs: HTMLLIElement[] = [];

    for(let i = 0; i < lista.childElementCount; i++){
        childs.push(lista.children[i] as HTMLLIElement);
    }

    childs.sort((a, b) => a.textContent.toLowerCase().localeCompare(b.textContent.toLowerCase()));

    lista.innerHTML = "";

    for(let i = 0; i < childs.length; i++){
        lista.appendChild(childs[i]);
    }
}

//Ejercicio 2
function cuadricula_alumnos(){
    let alumnos: string[] = ["Paco", "Maria", "Fernando", "Raquel", "Martin", "Josema"];
    let cuadricula: HTMLDivElement = document.getElementById("cuadricula") as HTMLDivElement;
    cuadricula.innerHTML = "";

    for(let i = 0; i < alumnos.length; i++){
        let cuadro: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        cuadro.textContent = alumnos[i];
        cuadro.style.backgroundColor = color_aleatorio();
        cuadro.style.fontWeight = "bold";
        cuadro.style.display = "inline-block";
        cuadro.style.padding = "15px";
        cuadro.style.textAlign = "center";
        cuadricula.appendChild(cuadro);
    }
}

function color_aleatorio(){
        const coloresPastel = [
        "#FFB3BA", // rosa pastel
        "#FFDFBA", // durazno
        "#FFFFBA", // amarillo pastel
        "#BAFFC9", // verde menta
        "#BAE1FF", // azul bebé
        "#E0BBE4", // lila
        "#F3C6E7", // rosa suave
        "#C1FFD7", // verde pastel claro
        "#B0E0E6", // azul pastel
        "#FFD1DC", // rosa bubblegum
        "#FFE4B5", // melocotón suave
        "#D5E8D4", // verde menta claro
        "#FBE7C6", // beige pastel
        "#E3F2FD", // azul celeste
        "#FADADD", // rosa pálido
        "#FFFACD", // limón suave
        "#D8BFD8", // lavanda
        "#C3FDB8", // verde claro
        "#E6E6FA", // lavanda muy suave
        "#FFCCE5"  // rosa chicle pastel
        ];

        const idxAleat = Math.floor(Math.random() * coloresPastel.length) + 1;
        return coloresPastel[idxAleat];
}

//Ejercicio 1
let user: string = "Raquel";
document.cookie = user;