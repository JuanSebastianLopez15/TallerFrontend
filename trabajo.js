const parrafo = document.getElementById('parrafo-principal');
const primerLi = document.querySelector('#lista-elementos li');
const todosLosLi = document.querySelectorAll('#lista-elementos li');

console.log('Párrafo (getElementById):', parrafo);
console.log('Primer <li> (querySelector):', primerLi);
console.log('Todos los <li> (querySelectorAll):', todosLosLi);

const contenedor = document.getElementById('contenedor-dinamico');
const btnTexto = document.getElementById('btn-texto');
const btnEstilo = document.getElementById('btn-estilo');
const btnCrear = document.getElementById('btn-crear');
const btnEliminar = document.getElementById('btn-eliminar');
const btnApi = document.getElementById('btn-api');
const infoWindow = document.getElementById('info-window');
const resultadoApi = document.getElementById('resultado-api');

let usarHTML = false;
btnTexto.addEventListener('click', () => {
    usarHTML = !usarHTML;
    if (usarHTML) {
        parrafo.innerHTML = '<strong>Texto cambiado con innerHTML</strong>';
    } else {
        parrafo.textContent = 'Texto cambiado con textContent';
    }
});

btnEstilo.addEventListener('click', () => {
    parrafo.style.color = 'crimson';
    // classList.toggle() es mejor práctica: separa diseño (CSS) de lógica (JS)
    parrafo.classList.toggle('resaltado');
});