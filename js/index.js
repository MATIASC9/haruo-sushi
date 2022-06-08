// VARIABLES
const iconoMenu = document.querySelector('#iconoMenu');
const menuOpciones = document.querySelector('#menuOpciones');

iconoMenu.addEventListener('click', () => {
    menuOpciones.classList.toggle('--mostrar');
}
);