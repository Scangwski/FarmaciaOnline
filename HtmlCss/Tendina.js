document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.tendina');

    dropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.dropdown-content');
        dropdown.addEventListener('click', function () {
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });
});
