const btnCambiar = document.getElementById('btn_cambiar'); 
const btnModificar = document.getElementById('btn_modificar');
const btnEliminar = document.getElementById('btn_eliminar');
const btnConsumir = document.getElementById('btn_consumir');

// getElementById -> dejamos constancia en consola de lo seleccionado
console.log('Botones seleccionados con getElementById:', btnCambiar, btnModificar, btnEliminar, btnConsumir);

// Seleccion de un solo elemento(el primero que encuentre)
const primeraLi = document.querySelector('li');
console.log('Primer li:', primeraLi);

// Selección de todos los elementos que coincidan
const todasLasLi = document.querySelectorAll('li');
console.log('Todas las li:', todasLasLi);

// Recorremos cada li seleccionada y le agregamos un evento
todasLasLi.forEach((li) => {
    li.addEventListener('click', () => {
        console.log(`Has seleccionado: ${li.textContent}`);
    });
});

const oprtText = document.getElementById('oportunidades');
const oprtBuenas= document.getElementById('oprt-buenas');
let textoCambiado = false;
btnCambiar.addEventListener('click', () => { //aca le digo que siempre que se le haga click al boton cambie el texto
    if (!textoCambiado) {
        //teexto plano, no interpreta html
        oprtText.textContent = 'Hola mundo, menú del día';
        //el strong muestra en negrilla, con el inner interpreta el codigo html, el textContent solo interpreta texto plano
        oprtBuenas.innerHTML = 'Hola mundo, <strong>platos recomendados</strong>';
        textoCambiado = true;
    } else {
        //volvemos al estado original
        oprtText.textContent = 'Nuestro Menú';
        oprtBuenas.innerHTML = 'Especialidades de la Casa';
        textoCambiado = false;
    }
});

const parrafo = document.querySelector('article p'); // seleccionamos el parrafo del article (<article> !!!(<p>...</p>)!!! </article>)
btnModificar.addEventListener('click', () => {
    parrafo.style.fontStyle = 'italic'; // pone el parrafo en cursiva
    // toggle() alterna el resaltado del título
    oprtBuenas.classList.toggle('destacado');
    // add() y remove() resaltan el parrafo al compás del toggle
    if (oprtBuenas.classList.contains('destacado')) {
        parrafo.classList.add('destacado');
    } else {
        parrafo.classList.remove('destacado');
    }
    // usar classList en vez de style directo es mejor practica, porque separa el diseño (CSS) de la lógica (JS)
});

const agregarBtn = document.getElementById('btn_agregar');
const contDinamico = document.getElementById('cont-dinamico');
agregarBtn.addEventListener('click', () => {
    const nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = 'Nuevo plato agregado al menú dinámicamente.';
    contDinamico.appendChild(nuevoElemento);
});

btnEliminar.addEventListener('click', () => {
    if (contDinamico.lastElementChild) {
        contDinamico.lastElementChild.remove();
    }
});

const listaTrabajos = document.querySelector('section ul'); 
// 'section ul' = "buscá un <ul> que esté dentro de un <section>"

//parentNode -> el padre (lo muestra en la consola)
console.log('Padre de la lista:', listaTrabajos.parentNode);

console.log('Hijos de la lista:', listaTrabajos.children);
console.log('Primer hijo:', listaTrabajos.firstElementChild);
//ultimo hijo (lo muestra en la consola)
console.log('Último hijo:', listaTrabajos.lastElementChild);

// WIINDOW

const ancho = document.getElementById('ancho');
const scroll = document.getElementById('scroll');
const url = document.getElementById('url');

// Mostramos el ancho de la ventana
ancho.textContent = `Ancho de la ventana: ${window.innerWidth}px`;

// Mostramos la URL actual
url.textContent = `URL actual: ${window.location.href}`;

// scrollY cambia mientras el usuario baja la página, así que lo actualizamos, pero la pagina es corta, entonces no se ve el cambio
window.addEventListener('scroll', () => {
    scroll.textContent = `Scroll actual: ${window.scrollY}px`;
});

//api

const resultadoApi = document.getElementById('resultado-api');

btnConsumir.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php') //siempre una comida diferente por el random
        .then((response) => response.json()) // convertimos la respuesta a JSON
        .then((data) => {
            const comida = data.meals[0]; // la API devuelve un array, tomamos el primer (y único) elemento

            // Mostramos los datos en el DOM usando innerHTML
            resultadoApi.innerHTML = `
                <h4>${comida.strMeal}</h4>
                <p>Categoría: ${comida.strCategory}</p>
                <p>Origen: ${comida.strArea}</p>
                <img src="${comida.strMealThumb}" alt="${comida.strMeal}" width="200">
            `;
        })
        .catch((error) => {
            // Si algo falla (sin internet, API caida, etc), avisamos al usuario
            console.error('Error al consumir la API:', error);
            resultadoApi.textContent = 'Ocurrió un error al obtener los datos de la comida.';
        });
});