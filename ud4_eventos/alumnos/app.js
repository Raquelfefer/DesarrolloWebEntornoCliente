// Listados de datos iniciales
let alumnos = [['Juan', 'Pérez', 20], ['María', 'García', 22], ['Carlos', 'López', 19]];
let seleccionados = [];

// Referencias del DOM
const btnNuevo = document.getElementById('btn-nuevo');
const contenedorForm = document.getElementById('contenedor-formulario');
const formAlumno = document.getElementById('form-alumno');
const listaAlumnosUI = document.getElementById('lista-alumnos');
const listaSeleccionadosUI = document.getElementById('lista-seleccionados');

// --- LÓGICA DE FORMULARIO ---

btnNuevo.addEventListener('click', () => {
    contenedorForm.classList.remove('oculto');
});

formAlumno.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;

    const nuevoAlumno = [nombre, apellidos, parseInt(edad)];
    alumnos.push(nuevoAlumno);

    actualizarListas();
    formAlumno.reset();
    contenedorForm.classList.add('oculto');
});

// --- LÓGICA DE DRAG & DROP ---

// Función genérica para renderizar cualquiera de las dos listas
function renderizarLista(array, elementoUI, origen) {
    elementoUI.innerHTML = '';
    array.forEach((alumno, index) => {
        const li = document.createElement('li');
        li.textContent = `${alumno[0]} ${alumno[1]} (${alumno[2]})`;
        li.setAttribute('draggable', 'true'); // Hacerlo arrastrable
        
        // Guardamos la info de qué estamos arrastrando
        li.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('index', index);
            e.dataTransfer.setData('origen', origen);
        });

        elementoUI.appendChild(li);
    });
}

// Configurar los contenedores para aceptar el "drop"
[listaAlumnosUI, listaSeleccionadosUI].forEach(lista => {
    lista.addEventListener('dragover', (e) => {
        e.preventDefault(); // Necesario para permitir soltar
        lista.classList.add('drag-over');
    });

    lista.addEventListener('dragleave', () => {
        lista.classList.remove('drag-over');
    });

    lista.addEventListener('drop', (e) => {
        e.preventDefault();
        lista.classList.remove('drag-over');
        
        const index = e.dataTransfer.getData('index');
        const origen = e.dataTransfer.getData('origen');
        const destino = lista.id === 'lista-alumnos' ? 'alumnos' : 'seleccionados';

        // Si el origen y el destino son diferentes, movemos el dato
        if (origen !== destino) {
            moverAlumno(parseInt(index), origen, destino);
        }
    });
});

function moverAlumno(index, origen, destino) {
    let alumnoExtraido;
    
    if (origen === 'alumnos') {
        alumnoExtraido = alumnos.splice(index, 1)[0];
        seleccionados.push(alumnoExtraido);
    } else {
        alumnoExtraido = seleccionados.splice(index, 1)[0];
        alumnos.push(alumnoExtraido);
    }
    
    actualizarListas();
}

// Función para refrescar ambas vistas
function actualizarListas() {
    renderizarLista(alumnos, listaAlumnosUI, 'alumnos');
    renderizarLista(seleccionados, listaSeleccionadosUI, 'seleccionados');
}

// Botón enviar
document.getElementById('btn-enviar-global').addEventListener('click', () => {
    console.log("Alumnos:", alumnos);
    console.log("Seleccionados:", seleccionados);
    alert("Datos enviados. Revisa la consola.");
});

// IMPORTANTE: Llamamos a la función al cargar para que se vean los datos iniciales
actualizarListas();