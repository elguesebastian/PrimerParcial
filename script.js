document.addEventListener('DOMContentLoaded', function () {
    // botón para cambiar noche a dia
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggle-mode';
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Icono inicial de luna
    document.body.appendChild(toggleButton);

    // elementos a los que se aplicará el modo noche
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const links = document.querySelectorAll('a');
    const fotoPersonal = document.querySelector('.fotoPersonal');
    const contenidoPersonal = document.querySelector('.contenidoPersonal');

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('night-mode');
        header.classList.toggle('night-mode');
        footer.classList.toggle('night-mode');
        fotoPersonal.classList.toggle('night-mode');
        contenidoPersonal.classList.toggle('night-mode');
        links.forEach(link => link.classList.toggle('night-mode'));

        // Cambiar icono según el modo
        if (body.classList.contains('night-mode')) {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Icono de sol
        } else {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Icono de luna
        }
    });

    // Configurar modo inicial
    body.classList.add('day-mode');
});
