import { btnProductoAnterior as btnPrev } from "./elementos.js";
import { btnProductoSiguiente as btnNext } from "./elementos.js";
import { cargarElementos } from "./api.js";
import {  actualizarBotonesCambio, actualizarProductoEnPantalla } from  './ui.js';

const productos = await cargarElementos();

let indiceActual = 0;
let productoActual = productos[indiceActual];

btnPrev.addEventListener('click', () =>{
    if(indiceActual > 0){
        indiceActual--;
        productoActual = productos[indiceActual];
        actualizarBotonesCambio(indiceActual, productos.length);
        actualizarProductoEnPantalla(productoActual);
    }
});
btnNext.addEventListener('click', () =>{
    if(indiceActual < productos.length - 1){
        indiceActual++;
        productoActual = productos[indiceActual];
        actualizarBotonesCambio(indiceActual, productos.length);
        actualizarProductoEnPantalla(productoActual);
    }
});

/*
            <article class="producto">
                <h2 class="nombre-producto">Crema aclaradora de noche</h2>
            <div class="contenedor-info">
                <div class="contenedor-imagen">
                    <img src="../assets/Images/products/crema_aclaradora_de_noche.webp" alt="" />
                </div>
                <div class="contenedor-texto">
                    <h3 class="descripcion">Descripción: </h3>
                    <p class="descripcion-producto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium voluptas unde vitae corrupti, ipsum tenetur facilis maxime obcaecati laudantium alias quam, asperiores quidem ad quo tempora officiis assumenda numquam.</p>
                    <p class="precio-producto">$9999.99MXN</p>
                    <button class="carrito">
                        <i class="fa-solid fa-cart-shopping"></i> Agregar al carrito
                    </button>
                    <button class="comprar">
                        <i class="fa-solid fa-bag-shopping"></i> Comprar ahora
                    </button>
                </div>
            </div>
            </article>
*/
