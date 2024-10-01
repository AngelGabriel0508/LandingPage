document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.bloque');

    accordionItems.forEach(function (item) {
        const header = item.querySelector('.h1');
        const content = item.querySelector('.contenido');

        header.addEventListener('click', function () {
            if (window.getComputedStyle(content).display === 'none') {
                closeAllAccordionItems();
                content.style.display = 'block';
                header.classList.add('mostrado');
            } else {
                content.style.display = 'none';
                header.classList.remove('mostrado');
            }
        });
    });

    function closeAllAccordionItems() {
        accordionItems.forEach(function (item) {
            const content = item.querySelector('.contenido');
            content.style.display = 'none';
            const header = item.querySelector('.h1');
            header.classList.remove('mostrado');
        });
    }
    // Obtiene los enlaces
    const enlaces = document.querySelectorAll('.accordeon-a');

    // Agrega eventos de clic a los enlaces
    enlaces.forEach((enlace) => {
        enlace.addEventListener('click', mostrarImagenEmergente);
    });

    // Función que muestra la imagen emergente al hacer clic en el enlace
    function mostrarImagenEmergente(event) {
        event.preventDefault();

        // Obtiene la ruta de la imagen desde el atributo personalizado
        const imagenSrc = this.getAttribute('data-imagen');

        // Muestra el contenedor de la imagen emergente
        const contenedorImagenEmergente = document.getElementById('imagen-emergente');
        contenedorImagenEmergente.style.display = 'block';

        // Muestra la imagen en el contenedor
        const imagenEmergente = document.getElementById('imagen-emergente-src');
        imagenEmergente.src = imagenSrc;
    }

    // Cierra la imagen emergente al hacer clic en el botón de cerrar
    const cerrarImagen = document.getElementById('cerrar-imagen');
    cerrarImagen.addEventListener('click', cerrarImagenEmergente);

    function cerrarImagenEmergente() {
        const contenedorImagenEmergente = document.getElementById('imagen-emergente');
        contenedorImagenEmergente.style.display = 'none';
    }
});