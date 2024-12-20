//variable global para almacenar los productos agregados
let carrito = [];

const agregarAlCarrito = (nombre, precio) => {
  //Agregar producto como object al carrito
  carrito.push({ nombre, precio });

  //Actualizar contador visual
  actualizarContador();
  //Alert de confirmacion
  alert(`¡Agregaste :${nombre} a tu carrito!`);
};

const actualizarContador = () => {
  //Cambia contenido del HTML con id contador-carrito
  document.getElementById("contador-carrito").textContent = carrito.length;
};

//Guarda el contenido del carrito en el almacenamiento local antes de cerrar la pag

window.addEventListener("beforeunload", () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
});
