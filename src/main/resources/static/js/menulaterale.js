document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.querySelector('.menuButton');
    var menuContent = document.getElementById('menuContent');
    var closeButton = document.getElementById('closeButton');

    menuButton.addEventListener('click', function() {
        menuContent.classList.toggle('menuContentVisible');
    });

    closeButton.addEventListener('click', function() {
        menuContent.classList.remove('menuContentVisible');
    });
});
