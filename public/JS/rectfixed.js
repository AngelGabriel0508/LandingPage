function handleScroll() {
    var rect2 = document.querySelector('.rect2');
    var rect1 = document.querySelector('.rect1');
    var windowTop = window.pageYOffset;
    var windowWidth = window.innerWidth;

    if (windowWidth <= 850) {
        rect2.style.position = 'fixed';
        rect2.style.top = '0px';
    } else {
        if (windowTop > 80) {
            rect2.style.position = 'fixed';
            rect2.style.top = '0';
            rect1.style.marginBottom = '200px';
        } else {
            rect2.style.position = 'absolute';
            rect2.style.top = '80px';
            rect1.style.marginBottom = '0px';
        }
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
