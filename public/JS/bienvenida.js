window.addEventListener('load', function () {
    var anuncioContainer = document.getElementById('showDate');
    var cerrarAnuncioBtn = document.getElementById('cerrarAnuncio');
    var overlay = document.getElementById('fondo01');

    cerrarAnuncioBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});

