const carousel = document.querySelector('.d-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cardWidth = document.querySelector('.d-card').offsetWidth + 40;
let currentPosition = 0;

// Función para mover el carrusel hacia la izquierda
const slideLeft = () => {
    if (currentPosition > 0) {
        currentPosition -= cardWidth;
        carousel.style.transform = `translateX(-${currentPosition}px)`;
    } else {
        // Reiniciar al llegar al principio
        currentPosition = cardWidth * (carousel.childElementCount - 4);
        carousel.style.transform = `translateX(-${currentPosition}px)`;
    }
};

// Función para mover el carrusel hacia la derecha
const slideRight = () => {
    const maxPosition = cardWidth * (carousel.childElementCount - 4);
    if (currentPosition < maxPosition) {
        currentPosition += cardWidth;
        carousel.style.transform = `translateX(-${currentPosition}px)`;
    } else {
        // Reiniciar al llegar al final
        currentPosition = 0;
        carousel.style.transform = `translateX(0)`;
    }
};

// Event listeners para los botones previo y siguiente
prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);

