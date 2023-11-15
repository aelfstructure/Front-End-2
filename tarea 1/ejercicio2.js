// Ejercicio #2
// Eldon Caldwell Salazar 117250334
// Datos usados: precio, descuento, nuevoPrecio
// Funcion para aplicar descuento y mostrar el inventario
// Objeto inventario con descuentos aplicados
function aplicarDescuento(precio) {
    let descuento = 0;

    if (precio >= 10000 && precio <= 20000) {
        descuento = 0.05;
    } else if (precio > 20000 && precio <= 30000) {
        descuento = 0.10;
    } else if (precio > 30000) {
        descuento = 0.15;
    }

    let nuevoPrecio = precio - (precio * descuento);
    let resultado = `Precio original: ₡${precio.toFixed(2)}, Nuevo precio con descuento: ₡${nuevoPrecio.toFixed(2)}`;
    console.log(resultado);

    // Mostrar resultado en la página
    document.getElementById('mensaje2').innerHTML += `<p>${resultado}</p>`;

    // Actualizar el inventario de descuentos
    if (inventarioDescuentos.hasOwnProperty(descuento)) {
        inventarioDescuentos[descuento]++;
    } else {
        inventarioDescuentos[descuento] = 1;
    }
}

// Mostrar el inventario de descuentos en la página
function mostrarInventarioDescuentos() {
    let inventarioDescuentosHTML = "Inventario de Descuentos:<br>";
    for (let descuento in inventarioDescuentos) {
        inventarioDescuentosHTML += `Descuento ${descuento * 100}% aplicado ${inventarioDescuentos[descuento]} veces<br>`;
    }
    document.getElementById('mensaje2').innerHTML += `<p>${inventarioDescuentosHTML}</p>`;
}

// Objeto para almacenar el inventario de descuentos aplicados
let inventarioDescuentos = {};

// Ejemplo de uso
aplicarDescuento(15000);
aplicarDescuento(25000);
aplicarDescuento(35000);

// Mostrar el inventario de descuentos
mostrarInventarioDescuentos();
