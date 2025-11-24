//Mostraremos la información de los equipos en la tabla una vez cargada la página
window.onload = () =>{
    mostrarEquipos();
}

//Constantes - Nodos de los select de equipo visitante y local
const equipoLocal: HTMLSelectElement = document.getElementById("equipo_local") as HTMLSelectElement;
const equipoVisitante: HTMLSelectElement = document.getElementById("equipo_visitante") as HTMLSelectElement;


let equipos:(string | number)[][] = [
    ["Real Madrid CF", 31, 12, 10, 1, 1, 26, 10, 16, "GGGGE"],
    ["FC Barcelona", 28, 12, 9, 1, 2, 32, 15, 17, "PGPGG"],
    ["Villareal CF", 26, 12, 8, 2, 2, 24, 10, 14, "PEGGG"],
    ["Atlético Madrid", 25, 12, 7, 4, 1, 24, 11, 13, "EGGGG"],
    ["Real Betis Balompié", 20, 12, 5, 5, 2, 19, 13, 6, "GEPGE"],
    ["RCD Espanyol", 18, 12, 5, 3, 4, 15, 15, 0, "PGGPP"],
    ["Athletic Bilbao", 17, 12, 5, 2, 5, 12, 13, -1, "GEPPG"],
    ["Getafe CF", 17, 12, 5, 2, 5, 12, 14, -2, "PPGGP"],
    ["Girona FC", 10, 12, 2, 4, 6, 11, 24, -13, "GPEPG"],
    ["Real Sociedad", 13, 12, 3, 4, 5, 14, 17, -3, "PEGGE"]
];

function matchEquipo(): void{
    //Recoger el nodo div para después añadirle el elemento parrafo con el mensaje y el boton para usarlo
    let div: HTMLDivElement = document.getElementById("formulario") as HTMLDivElement;
    let boton: HTMLButtonElement = document.getElementById("boton") as HTMLButtonElement;

    //Recogemos el parrafo con el mensaje de error si ya existe
    let mensajeError: HTMLParagraphElement = document.getElementById("error") as HTMLParagraphElement;
    //Comprobamos si existe el parrafo con el mensaje de error y lo borramos
    if(mensajeError){
        mensajeError.remove();
    }

    //Comprobamos si los dos valores del select son iguales. Si lo son se crea un parrafo con id error para después poder recuperarlo, 
    //introducimos el mensaje y le damos estilo. Añadimos el parrafo con el mensaje de error al body.
    if(equipoLocal.value === equipoVisitante.value){
        let error: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
        error.id = "error";
        error.textContent = "Error: los equipos visitante y local no pueden ser el mismo.";
        error.style.color = "red";
        error.style.fontWeight = "bold";
        div.appendChild(error);

        boton.disabled = true; //Deshabilitas el boton si coinciden
    }else{
        //Habilita el botón si no coinciden
        boton.disabled = false;
    }
}

function ordenarEquipos(equipos: (string|number)[][]): (string|number)[][]{
    //Ordenamos con la funcion sort el array de equipos que tenemos
    equipos.sort((a,b) => {
        if(Number(b[1]) != Number(a[1])){ //Ordenamos por puntos
            return Number(b[1]) - Number(a[1]);
        }else{                            //Si coinciden ordenamos por diferencia de goles
            return Number(b[8]) - Number(a[8]);
        }
    });
    return equipos;
}

function mostrarEquipos(): void{
    //Recogemos el nodo tbody donde irá la información a mostrar
    let tbdoy: HTMLTableSectionElement = document.getElementById("body") as HTMLTableSectionElement;
    tbdoy.innerHTML = "";

    //Ordenamos el array equipos llamando a la función ordenar
    const equiposOrdenados = ordenarEquipos(equipos);

    //Recorremos con un foreach el array de equipos para tomar la fila y después un foreach dentro del anterior para recoger los valroes
    //de cada fila y formar las celdas. Añadiremos el contenido a cada fila y después las filas al body de la tabla.
    equiposOrdenados.forEach(equipo => {
        let fila: HTMLTableRowElement = document.createElement("tr");

        equipo.forEach((valor, index) => {
            let celda: HTMLTableCellElement;

            if (index === 0) {
                //Primera celda con escudo y nombre del equipo
                celda = celdaConEscudo(valor.toString());
            } else if (index === 9) {
                //Ultima celda con los últimos 5 resultados
                celda = celdaResultados(valor.toString());
            } else {
                // Otras celdas solo texto normal
                celda = document.createElement("td");
                celda.textContent = valor.toString();
            }
            celda.style.fontFamily = "Arial, Helvetica, sans-serif";
            fila.appendChild(celda);
        });

        tbdoy.appendChild(fila);
    });
}

function celdaConEscudo(nombreEquipo: string): HTMLTableCellElement{
    let celda: HTMLTableCellElement = document.createElement("td");

    //Crearemos una imagen según el nombre del equipo, le asignamos estilos
    let img = document.createElement("img");
    img.src = `images/${nombreEquipo.replace(/\s+/g, "_")}.png`; //La expresion cambia los espacios por barras bajas 
    img.alt = nombreEquipo + " escudo";
    img.style.width = "24px";  
    img.style.height = "24px";
    img.style.marginRight = "8px";
    img.style.verticalAlign = "middle";

    // Añadir imagen y texto a la celda
    celda.appendChild(img);
    celda.appendChild(document.createTextNode(nombreEquipo));

    return celda;
}

function celdaResultados(resultados: string): HTMLTableCellElement{
    let celda: HTMLTableCellElement = document.createElement("td");

    //Recorremos con un foreach el string creando un array usando los no espacios entre caracteres
    resultados.split("").forEach(letra =>{
        let icono = document.createElement("img"); //Creamos una imagen

        //Asignamos un icono u otro según la letra
        switch(letra){
            case "G":
                icono.src = 'images/G.png';
                icono.style.width = "20px";
                icono.style.height = "20px";
                break;
            case "P":
                icono.src = 'images/P.png';
                icono.style.width = "20px";
                icono.style.height = "20px";
                break;
            case "E":
                icono.src = 'images/E.png';
                icono.style.width = "20px";
                icono.style.height = "20px";
                break;
        }
        celda.appendChild(icono); //Añadimos a la celda
    });
    return celda;
}

function update(){
    //Recoger los valores del formulario de los goles de visitante y local
    let golesLocal: number = Number((document.getElementById("gol_local")as HTMLInputElement).value);
    let golesVisitante: number = Number((document.getElementById("gol_visitante")as HTMLInputElement).value);

    //Modificaciones en equipo local
    actualizarEquipo(equipoLocal.value, golesLocal, golesVisitante);

    //Modificaciones en equipo visitante
    actualizarEquipo(equipoVisitante.value, golesVisitante, golesLocal);

    //Volver a mostrar la tabla con los valores actualizados
    mostrarEquipos(); 
}

function actualizarEquipo(nombreEquipo: string, golesAFavor: number, golesEnContra: number): void{
    for(let i = 0; i < equipos.length; i++){
        if(equipos[i][0] === nombreEquipo){
            equipos[i][2] = Number(equipos[i][2]) + 1; //+1 Partidos jugados
            equipos[i][6] = Number(equipos[i][6]) + golesAFavor;//+ goles a favor
            equipos[i][7] = Number(equipos[i][7]) + golesEnContra;//+ goles en contra 
            equipos[i][8] = Number(equipos[i][6]) - Number(equipos[i][7]);//Actualizar diferencia de goles

            let resultado = "";
            if(golesAFavor > golesEnContra) { //Gana el equipo
            equipos[i][3] = Number(equipos[i][3]) + 1; //+1 partidos ganados
            equipos[i][1] = Number(equipos[i][1]) + 3; //+3 en puntuación total
            resultado = "G";                          
            } else if(golesAFavor === golesEnContra) {//Si hay empate
            equipos[i][4] = Number(equipos[i][4]) + 1; //+1 en empate
            equipos[i][1] = Number(equipos[i][1]) + 1; //+1 en puntuación total
            resultado = "E";
            } else {
            equipos[i][5] = Number(equipos[i][5]) + 1; //Si pierde el equipo local +1 en perdido
            resultado = "P";
            }

            //Actualizamos el resultado de los ultimos 5 partidos segun el resultado en el if
            let ultimos5: string = equipos[i][9] as string; //Cogemos el valor que tenemos guardado
            ultimos5 = ultimos5.substring(1) + resultado; //Borramos el primer valor y añadimos el ultimo obtenido
            equipos[i][9] = ultimos5; //Actualizamos el valor de los ultimos 5 resultados

            break;
        }
        
    }
}