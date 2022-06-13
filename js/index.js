// VARIABLES
const iconoMenu = document.querySelector('#iconoMenu');
const menuOpciones = document.querySelector('#menuOpciones');
const slideImagenes = document.querySelector('#slideImagenes');
const listaPlatos = document.querySelector('#listaPlatos');
let sugerenciaPlato;

iconoMenu.addEventListener('click', () => {
  menuOpciones.classList.toggle('--mostrar');
}
);

// Crear un constructor para cada plato
class Plato {
  constructor(nombre, ingredientes, precio, recomendado, nuevo) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.recomendado = recomendado;
    this.nuevo = nuevo;
  }
}

// Crear un array de platos
const menu = [
  new Plato('Maki salmon roll', 'Salmon, queso philadelphia y palta', '$700', true, false),
  new Plato('Salmon roll', 'Salmon cocido, queso philadelphia, cubierto con batatas crocantes y salsa teriyaki', '$800', false, true),
  new Plato('Ebi passion roll', 'Langostinos, palta, palmito, queso philadelphia envuelto en tamago con salsa de naranja', '$900', true, false),
  new Plato('Ebi citrus roll', 'Langostinos, palta, envuelto en arroz y tamago con mayonesa roja de limon', '$1000', false, true),
  new Plato('Uramaki de atun', 'Rollo inverso, arroz por fuera y alga por dentro, relleno de atun, palta y queso philadelphia', '$800', false, false)
];

// Crear una función que muestre los platos
const mostrarPlatos = () => {
  listaPlatos.innerHTML = '';
  let sugerencia = '';
  // Recorrer el array de platos
  for (Plato of menu) {
    if (Plato.recomendado === true) {
      sugerencia = 'Recomendado';
    } else if (Plato.nuevo === true) {
      sugerencia = 'Nuevo';
    } else {
      sugerencia = '';
    }
    listaPlatos.innerHTML += `
    <div class="menu__platos__plato">
    <div class="menu__platos__plato__detalles">
    <h5 class="menu__platos__plato__detalles__titulo">${Plato.nombre}</h5>
    <p class="menu__platos__plato__detalles__ingredientes">${Plato.ingredientes}</p>
    </div>
        <div class="menu__platos__plato__aside">
        <span class="menu__platos__plato__aside__precio">${Plato.precio}</span>
          <span class="menu__platos__plato__aside__sugerencia">${sugerencia}</span>
          </div>
      </div>
      `;
    sugerenciaPlato = document.querySelectorAll('.menu__platos__plato__aside__sugerencia');
    sugerenciaPlato.forEach(elemento => {
      if (elemento.innerHTML === '') {
        elemento.classList.add('--ocultar');
      }
    }
    );

    console.log(sugerenciaPlato);
  };
}
mostrarPlatos();






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