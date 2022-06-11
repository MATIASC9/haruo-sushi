// VARIABLES
const iconoMenu = document.querySelector('#iconoMenu');
const menuOpciones = document.querySelector('#menuOpciones');
const slideImagenes = document.querySelector('#slideImagenes');

iconoMenu.addEventListener('click', () => {
  menuOpciones.classList.toggle('--mostrar');
}
);
// Funcion para cambiar imagenes con un timeOut
/*const cambiarImagenes = (i) => {
  let url;
  setTimeout(() => {
    url = `../resources/img/sushi-${i}.webp`;
    slideImagenes.style.background = "no-repeat center/cover url(" + url + ")";
  }, 2000 * i);
};
for (let i = 1; i < 4; i++) {
  cambiarImagenes(i);
} */