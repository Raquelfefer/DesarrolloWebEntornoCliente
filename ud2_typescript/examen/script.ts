window.onload = (): void =>{
    cookie_bienvenida();
    cambiarTitulo();
} 

function cookie_bienvenida(){
    if($getCookieByName()){
        cambiarTitulo();
    }else{
        let valorCookie: string = prompt("¿Cual es tu nombre de usuario?") as string;
        document.cookie = "nombre=" + valorCookie;
        document.cookie = "sesion=1";
    }
}

function cambiarTitulo(){
    let nombre: string = $getCookieByKey("nombre");
    let parrafo: HTMLParagraphElement = document.getElementById("titulo") as HTMLParagraphElement;
    let sesion: string = $getCookieByKey("sesion");
    parrafo.textContent = "Bievenido al dashboard de " + nombre + " - " + sesion;
    
}

function $getCookieByKey(key: string): string{
    let arrayCookie = document.cookie.split(";");
    let result = "";
    for(let i = 0; i < arrayCookie.length; i++){
        let clave = arrayCookie[i].split("=")[0];
        let valor = arrayCookie[i].split("=")[1];
        if(clave.trim() == key){
            result = valor;
        }
    }
    return result;
}

function $getCookieByName(): boolean{
    let arrayCookie = document.cookie.split(";");
    let result: boolean = false;
    for(let i = 0; i < arrayCookie.length; i++){
        let clave = arrayCookie[i].split("=")[0];
        if(clave.trim() === "nombre"){
            result = true;
        }
    }
    return result;
}

function crearTarjeta(){
    let id: HTMLInputElement = document.getElementById("id") as HTMLInputElement;
    let descripcion: HTMLInputElement = document.getElementById("descripcion") as HTMLInputElement;
    let select: HTMLSelectElement = document.getElementById("opcion") as HTMLSelectElement;
    let divForm: HTMLDivElement = document.getElementById("div") as HTMLDivElement;
    let divTarjeta: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    const fecha = new Date();
    let direccion: string = "https://www.issues.com/";
    switch(true){
        case select.value === "incidencia":
            let parrafoIdIncidencia: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            parrafoIdIncidencia.textContent = id.value;
            let parrafoDescripcionIncidencia: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            parrafoDescripcionIncidencia.textContent = descripcion.value;
            let parrafoFechaIncidencia: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            parrafoFechaIncidencia.textContent = fecha.getDate() + "-"+ (fecha.getMonth() +1) + "-" +fecha.getFullYear();
            divTarjeta.appendChild(parrafoIdIncidencia);
            divTarjeta.appendChild(parrafoFechaIncidencia);
            divTarjeta.appendChild(parrafoDescripcionIncidencia);
            divTarjeta.style.backgroundColor = "red";
            divForm.appendChild(divTarjeta);
            break;
        case select.value === "evento":
            let parrafoIdEvento: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            parrafoIdEvento.textContent = id.value;
            let parrafoDescripcionEvento: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            parrafoDescripcionEvento.textContent = descripcion.value;
            let parrafoFechaEvento: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            parrafoFechaEvento.textContent = fecha.getDate() + "-"+ (fecha.getMonth() +1) + "-" +fecha.getFullYear();
            divTarjeta.appendChild(parrafoIdEvento);
            divTarjeta.appendChild(parrafoFechaEvento);
            divTarjeta.appendChild(parrafoDescripcionEvento);
            divTarjeta.style.backgroundColor = "green";
            divForm.appendChild(divTarjeta);
            break;
        case select.value === "tarea":
            let parrafoIdTarea: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            parrafoIdTarea.textContent = id.value;
            let parrafoDescripcionTarea: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            parrafoDescripcionTarea.textContent = descripcion.value;
            let parrafoFechaTarea: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
            parrafoFechaTarea.textContent = fecha.getDate() + "-"+ (fecha.getMonth() +1) + "-" +fecha.getFullYear();
            divTarjeta.appendChild(parrafoIdTarea);
            divTarjeta.appendChild(parrafoFechaTarea);
            divTarjeta.appendChild(parrafoDescripcionTarea);
            divTarjeta.style.backgroundColor = "blue";
            divForm.appendChild(divTarjeta);
            break;
    }
}

function limpiar_tarjetas(){
    let div: HTMLDivElement = document.getElementById("div") as HTMLDivElement;
    div.replaceChildren("");
}
