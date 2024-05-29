let productos = JSON.parse(localStorage.getItem("productos")) || { nombres: [], valores: []};

// Verificar si productos es null o undefined, o si no tiene la estructura esperada
if (!productos || !productos.nombres || !productos.valores || !productos.masIVA) {
    productos = { nombres: [], valores: [], masIVA: [] };
}

function vender(formulario) {
    const { nombre, valor } = formulario;

    // Guardar el nombre y el valor del producto en el almacenamiento local
    productos.nombres.push(nombre.value);
    productos.valores.push(parseFloat(valor.value)); // Convertir el valor a número

    localStorage.setItem("productos", JSON.stringify(productos));

    // Limpiar el formulario
    formulario.reset();
}

function resetearRepositorio() {
    // Eliminar los datos del almacenamiento local
    localStorage.removeItem("productos");

    // Restablecer la variable productos a su estado inicial
    productos = { nombres: [], valores: [], masIVA: [] };

    console.log("Repositorio reseteado");
}