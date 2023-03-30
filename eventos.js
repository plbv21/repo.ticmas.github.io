$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollingSpeed: 1000, // Cambiar el tiempo de desplazamiento a 1 segundo
        touchSensitivity: 10, // Desactivar el control táctil para dispositivos móviles
        anchors: ['perfil', 'vision', 'habilidades', 'experiencia', 'educacion', 'contacto'] // Agregar anclas para las secciones
    });
});

window.addEventListener('scroll', () => {
    const final = document.documentElement.scrollHeight - window.innerHeight;
    const bajado = window.scrollY;
    if (Math.ceil(bajado) === final) {
        alert('¡Wow! ¿Ya leíste toda la página? Tal vez te gustaría seguir leyendo ya que hay algunos eastereggs');
    }
});

const boton = document.querySelector('#boton1');
boton.onclick = function() {
    let name = prompt('¿Cuál es tu nombre?');
    alert('¡Hola ' + name + '!, gracias por visitar esta página');
};

const colorboton = document.getElementById('bye');

colorboton.addEventListener('click', function() {
    document.body.style.backgroundColor = ColorAleatorio();
    document.body.style.color = ColorAleatorio();
});

function ColorAleatorio() {
    const caracteres = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += caracteres[Math.floor(Math.random() * 16)];
    }
    return color;
}
