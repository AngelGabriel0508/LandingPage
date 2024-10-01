window.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('toggle');
    var menuItems = document.querySelector('.menu-items');

    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            menuItems.classList.add('open');
        } else {
            menuItems.classList.remove('open');
        }
    });
});
