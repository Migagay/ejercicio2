 // Recuperar los productos del almacenamiento local
 let productos = JSON.parse(localStorage.getItem("productos")) || { nombres: [], valores: [], masIVA: [] };

 // Obtener el elemento de la tabla donde se agregarán los productos
 let tablaProductos = document.getElementById("tablaProductos");

 // Iterar sobre los productos y agregar una fila a la tabla para cada uno
 productos.nombres.forEach((nombre, index) => {
    let fila = document.createElement("tr");
    let valorProducto = productos.valores[index];
    let ivaProducto = valorProducto * 0.19; // Calcular el IVA
    let totalMasIVA = valorProducto + ivaProducto; // Calcular el total más IVA

    // Asegurarse de que el valor del IVA tenga exactamente 2 decimales
    ivaProducto = ivaProducto.toFixed(2);

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${valorProducto}</td>
        <td>${ivaProducto}</td>
        <td>${totalMasIVA}</td>`;
    tablaProductos.appendChild(fila);
 });