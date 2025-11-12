const lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
const parrafo: HTMLParagraphElement = document.getElementById("parrafo") as HTMLParagraphElement;

function mini_app(){
    let nodeOpcion: HTMLSelectElement = document.getElementById("opcion") as HTMLSelectElement;
    
    switch(nodeOpcion.value){
        case "1":
            contarNodos();
            break;
        case "2":
            firstLastNode();
            break;
        case "3":
            duplicarElemento();
            break;
        case "4":
            updateElemento();
            break;
        case "5":
            showAllElements();
            break;
        case "6":
            addNode();
            break;
        case "7":
            eliminarNodo();
            break;
        case "8":
            ordenar();
            break;
    }
}

function contarNodos(){
    parrafo.textContent = "El número de nodos es: " + lista.childElementCount;
}

function firstLastNode(){
    parrafo.textContent = "El primer nodo es: " + lista.firstElementChild?.textContent + " y el último nodo es: " + lista.lastElementChild?.textContent;
}

function duplicarElemento(){
    let opcion: number = Number(prompt("¿Qué número de la lista quieres duplicar?"));
    if(opcion > 0 && opcion <= lista.childElementCount){
        let nuevoElemento: HTMLLIElement = document.createElement("li") as HTMLLIElement;
        nuevoElemento.textContent = lista.children[opcion-1].textContent;
        lista.appendChild(nuevoElemento);
    }else{
        parrafo.textContent = "Ese elemento no esta en la lista.";
    }
}

function updateElemento(){
    let opcion: number = Number(prompt("¿Qué número de la lista quieres modificar?"));
    if(opcion > 0 && opcion <= lista.childElementCount){
        let contenidoNuevo: string = prompt("¿Qué pondrá en el elemento modificado?") as string;
        lista.children[opcion-1].textContent = contenidoNuevo;
    }else{
        parrafo.textContent = "Ese elemento no esta en la lista.";
    }
}

function showAllElements(){
    for(let i = 0; i < lista.childElementCount-1; i++){
        let parrafoNuevo: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        parrafoNuevo.textContent = lista.children[i].textContent;
        parrafo.appendChild(parrafoNuevo);
    }
}

function addNode(){
    let contenido: string = prompt("¿Qué quieres añadir a la lista?") as string;
    let nuevoElemento: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    nuevoElemento.textContent = contenido;
    lista.appendChild(nuevoElemento);
}

function eliminarNodo(){
    let opcion: number = Number(prompt("¿Qué número de la lista quieres eliminar?"));
    if(opcion > 0 && opcion <= lista.childElementCount){
        lista.removeChild(lista.children[opcion-1]);
    }else{
        parrafo.textContent = "Ese elemento no esta en la lista.";
    }
}

function ordenar(){
    let listaNueva: HTMLLIElement[] = [];
    for(let i = 0; i < lista.childElementCount; i++){
        listaNueva.push(lista.children[i] as HTMLLIElement);
    }
    listaNueva.sort((a,b) => a.textContent.toLowerCase().localeCompare(b.textContent.toLowerCase()));

    lista.innerHTML = "";
    for(let i = 0; i < listaNueva.length; i++){
        lista.appendChild(listaNueva[i]);
    }
}