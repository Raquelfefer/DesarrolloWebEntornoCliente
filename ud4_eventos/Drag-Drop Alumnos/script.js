let alumnos = Array.from(document.getElementsByClassName("alumno"));
let elementoArrastrando = null;

//Empiezo a arrastrar
alumnos.forEach(alumno => {
    alumno.addEventListener("dragstart", (e)=> {
        elementoArrastrando = e.target;
    });
});

//Estoy arrastrando
let columnas = Array.from(document.getElementsByClassName("column"));

columnas.forEach(columna => {
    columna.addEventListener("dragover", (e)=>{
        e.preventDefault();
    });
})

//Suelto 
columnas.forEach(columna => {
    columna.addEventListener("drop", (e)=>{
        let lista = columna.querySelector("ul");
        lista.appendChild(elementoArrastrando);
    });
});

//Al finalizar
alumnos.forEach(alumno => {
    alumno.addEventListener("dragend", (e)=> {
        elementoArrastrando = null;
    });
});

//Si pongo el style display none en el html no necesito poner esta función
/* window.onload = () => {
    document.getElementById("form").style.display = "none";
} */

document.getElementById("nuevo").addEventListener("click", (e)=>{
    document.getElementById("form").style.display = "block";
});

document.getElementById("añadir").addEventListener("click", (e)=>{
    e.preventDefault();
    
    let li = document.createElement("li");
    li.textContent = document.getElementById("nombre").value + " " 
        + document.getElementById("apellidos").value + " " 
        + document.getElementById("edad").value + " ";

    li.draggable = true;
    li.classList.add("alumno");
    li.style.backgroundColor = generarColorAleatorio();

    li.addEventListener("dragstart", (e)=> {
        elementoArrastrando = e.target;
    });

    li.addEventListener("dragend", (e)=> {
        elementoArrastrando = null;
    });

    document.getElementById("listaAll").appendChild(li);

    document.getElementById("form").reset();

    document.getElementById("form").style.display = "none";
});

function generarColorAleatorio(){
    let colores = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray"];
    let num = Math.floor(Math.random() * colores.length);
    return colores[num];
}

document.getElementById('enviar').addEventListener('click', () => {
    let listaAll = document.getElementById('listaAll');
    let listaSeleccionados = document.getElementById('listaSelected');

    let alumnosAll = Array.from(listaAll.children).map(li => li.textContent.trim());
    let alumnosSeleccionados = Array.from(listaSeleccionados.children).map(li => li.textContent.trim());

    let mensajeAlert = "Enviado con éxito.\n";
    mensajeAlert += "Alumnos en la lista 'Alumnos':\n" + alumnosAll.join("\n") + "\n\n";
    mensajeAlert += "Alumnos en la lista 'Seleccionados':\n" + alumnosSeleccionados.join("\n");

    alert(mensajeAlert);
});

