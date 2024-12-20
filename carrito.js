//Recuperar el carro del localStorage

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Mostrar los productos del carrito

const mostrarCarrito = () => {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = "<p>Tu carrito esta vacio</p>";
    return;
  }
  carrito.forEach((item, indice) => {
    const producto = document.createElement("article");
    producto.classList.add("producto");
    producto.innerHTML = `
    <h2>${item.nombre}</h2>
    <p class="precio">$${item.precio}</p>
    <button onClick="eliminarDelCarrito(${indice})">Eliminar</button>
    `;

    lista.appendChild(producto);
  });
};

//Eliminar producto del carrito
const eliminarDelCarrito = (indice) => {
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify("carrito"));
  mostrarCarrito();
};

//Simular la compra

const realizarCompra = () => {
  alert("Compra realizada con exito");
  localStorage.removeItem("carrito");
  window.location.href = "index.html";
};

//Inicializar carrito al mostrar la pagina
mostrarCarrito();
