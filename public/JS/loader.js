/*cuando cargue la pagina muestre un loader */
let carga = document.querySelector('.loader');
function loader(){
    carga.classList.add('fade-out');
}
function fadeout() {
    setInterval(loader, 100);
}
window.onload = fadeout();
