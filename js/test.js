const botones = document.querySelectorAll('.option');
const indicador = document.querySelector('.indicator');
let opcionElegida = document.querySelector('.option.active');

function moverIndicador(elemento){
    indicador.style.width = `${elemento.offsetWidth}px`;
    indicador.style.transform = `translateX(${elemento.offsetLeft}px)`;
    elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
}

const botonActivoInicial = document.querySelector('.option.active');
if (botonActivoInicial) {
    moverIndicador(botonActivoInicial);
}

botones.forEach(boton =>{
    boton.addEventListener('click', (e) =>{
        botones.forEach(b =>{b.classList.remove("active")});
        e.target.classList.add("active");
        opcionElegida = e.target.value;
        moverIndicador(e.target);
    });
});

