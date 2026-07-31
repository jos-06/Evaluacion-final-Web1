document.addEventListener("DOMContentLoaded", () => {

  const productos = [
    { nombre: "Cepillo de de dientes de Bambú", precio: 3.50 },
    { nombre: "Bolsa de Tela Orgánica", precio: 5.00 },
    { nombre: "Botella Térmica Inox", precio: 15.00 },
    { nombre: "Jabón Artesanal", precio: 4.00 },
    { nombre: "Pajitas de Acero", precio: 6.00 }
  ];

  function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento) / 100;
    return precio - descuento;
  }

  let totalSuma = 0;
  for (let i = 0; i < productos.length; i++) {
    totalSuma += productos[i].precio;
  }

  const elTotalArreglo = document.getElementById("total-arreglo");
  const elPrecioDescuento = document.getElementById("precio-descuento");

  const productoEjemplo = productos[2];
  const porcentaje = 20;
  const precioConDescuento = calcularDescuento(productoEjemplo.precio, porcentaje);

  if (elTotalArreglo) {
    elTotalArreglo.textContent = `Suma total del catálogo de productos: $${totalSuma.toFixed(2)}`;
  }

  if (elPrecioDescuento) {
    elPrecioDescuento.textContent = `Promoción especial en "${productoEjemplo.nombre}": $${precioConDescuento.toFixed(2)} (con ${porcentaje}% de descuento applied sobre $${productoEjemplo.precio.toFixed(2)}).`;
  }

  const btnPromocion = document.getElementById("btn-promocion");
  const mensajePromocion = document.getElementById("mensaje-promocion");

  if (btnPromocion && mensajePromocion) {
    btnPromocion.addEventListener("click", () => {
      mensajePromocion.textContent = "¡Bienvenido a EcoMarket! Usa el código ECO10 para obtener un 10% adicional en tu primera compra.";
    });
  }

  const formContacto = document.getElementById("form-contacto");
  const mensajeValidacion = document.getElementById("mensaje-validacion");

  if (formContacto) {
    formContacto.addEventListener("submit", (e) => {
      e.preventDefault(); 

      const nombreVal = document.getElementById("nombre").value.trim();
      const correoVal = document.getElementById("correo").value.trim();

      
      mensajeValidacion.className = "estado-form";
      mensajeValidacion.textContent = "";

    
      if (nombreVal === "" || correoVal === "") {
        mensajeValidacion.textContent = "Error: Por favor, llena todos los campos obligatorios (Nombre y Correo).";
        mensajeValidacion.classList.add("error");
        return;
      }

      if (!correoVal.includes("@")) {
        mensajeValidacion.textContent = "Error: El correo electrónico ingresado debe contener el carácter '@'.";
        mensajeValidacion.classList.add("error");
        return;
      }

      mensajeValidacion.textContent = "¡Gracias por contactarnos! Tu mensaje ha sido enviado exitosamente.";
      mensajeValidacion.classList.add("exito");

      formContacto.reset();
    });
  }

});