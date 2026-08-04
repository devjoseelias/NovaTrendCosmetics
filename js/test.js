const botones = document.querySelectorAll('.option');
const indicador = document.querySelector('.indicator');
let opcionElegida = document.querySelector('.option.active');
const barraOpciones = document.querySelector('.options-bar');
const contenedor = document.querySelector('.products-container');
let productos = [];
let botonActivo;


function moverIndicador(elemento) {
    indicador.style.width = `${elemento.offsetWidth}px`;
    indicador.style.transform = `translateX(${elemento.offsetLeft}px)`;

    const centroBoton = elemento.offsetLeft + (elemento.offsetWidth / 2);
    const centroBarra = barraOpciones.offsetWidth / 2;
    const pocisionScroll = centroBoton - centroBarra

    barraOpciones.scrollTo({
        left: pocisionScroll,
        behavior: 'smooth'
    });
}

const botonActivoInicial = document.querySelector('.option.active');
if (botonActivoInicial) {
    moverIndicador(botonActivoInicial);
}

function llenarCartas(p) {
    contenedor.innerHTML = '';
    p.forEach((producto, indice) => {
        contenedor.innerHTML += `
            <div class="product" style="animation-delay:${indice * 0.3}s;">
                <div class="product-img-container">
                    <img src="${producto.imagen}" alt="${producto.descripcion}"/>
                </div>
                <div class="p-text">
                    <h3 class="p-name">${producto.nombre}</h3>
                    <p class="short-description">${producto.descripcion}</p>
                    <div class="show-details">
                        <a href="${producto.link}" class="details-link">Ver detalles</a>
                    </div>
                </div>
            </div>`;
    });
}

async function cargarProductos() {
    try {
        const respuesta = await fetch("JSON/productos.JSON");
        productos = await respuesta.json();
        console.log("Productos cargados con éxito!");
        llenarCartas(productos.filter(p => p.categoria.includes("Acné")));
    } catch (error) {
        console.log("Error al cargar los productos!");
    }
}

function cambiarProductos() {
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            botones.forEach(b => { b.classList.remove("active") });
            e.target.classList.add("active");
            opcionElegida = e.target.value;
            moverIndicador(e.target);

            const productosFiltrados = productos.filter(producto =>{
                return producto.categoria.includes(opcionElegida);
            });

            llenarCartas(productosFiltrados);
        });
    });
}

cargarProductos();
cambiarProductos();