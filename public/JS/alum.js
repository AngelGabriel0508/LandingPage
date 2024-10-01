function App() { }

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function (event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? (leftPosition = track.style.left = 0) : (leftPosition = parseFloat(track.style.left.slice(0, -2)));

    btn.classList.contains("slick-prev") ? prevAction(leftPosition, slickWidth, track) : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track);
};

let prevAction = (leftPosition, slickWidth, track) => {
    if (leftPosition < 0) {
        track.style.left = `${leftPosition + slickWidth}px`;
    }
};

let nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
    if (leftPosition > listWidth - trackWidth) {
        track.style.left = `${leftPosition - slickWidth}px`;
    }
};

// Esperar a que todas las imágenes se carguen
window.addEventListener('load', () => {
    initCarousel();
});

// Agregar la modificación para la transición en el primer clic en "next"
App.prototype.processingButton = function (event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? (leftPosition = track.style.left = 0) : (leftPosition = parseFloat(track.style.left.slice(0, -2)));

    btn.classList.contains("slick-prev") ? prevAction(leftPosition, slickWidth, track) : setTimeout(() => {
        nextAction(leftPosition, trackWidth, listWidth, slickWidth, track);
    }, 0);
};
