window.onload = function () {
    const IMAGENES = [
        'img/carousel/foto1.jpg',
        'img/carousel/foto2.jpg',
        'img/carousel/foto3.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $imagen = document.querySelector('#img_carousel');
    let $botonPlay = document.querySelector('#play');
    let intervalo;
    let usarAPI=false;

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        $botonPlay.setAttribute('disabled', true);

    }

    $botonPlay.addEventListener('click', playIntervalo);
    renderizarImagen();
} 

