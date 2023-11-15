// Ejercicio #1
// Eldon Caldwell Salazar 117250334
// Datos usados: nombre, cantidad, precio, total
// Objeto inventario para mostrar


let inventario = {}; // Objeto para almacenar el inventario de productos vendidos

function calcularTotal(nombre, cantidad, precio) {
    let total = cantidad * precio;
    let resultado = `Producto: ${nombre}, Precio: ₡${precio.toFixed(2)}, Cantidad: ${cantidad}, Total: ₡${total.toFixed(2)}`;
    console.log(resultado);

    // Mostrar resultado en la página
    document.getElementById('mensaje1').innerHTML += `<p>${resultado}</p>`;

    // Actualizar el inventario
    if (inventario.hasOwnProperty(nombre)) {
        inventario[nombre] += cantidad;
    } else {
        inventario[nombre] = cantidad;
    }
}
// Mostrar el inventario en la página
function mostrarInventario() {
    let inventarioHTML = "Inventario:<br>";
    for (let producto in inventario) {
        inventarioHTML += `${producto}: ${inventario[producto]}<br>`;
    }
    document.getElementById('mensaje1').innerHTML += `<p>${inventarioHTML}</p>`;
}
// Calcular total 
calcularTotal("Camisa", 3, 25000.00);
calcularTotal("Pantalón", 2, 30000.00);
calcularTotal("Zapatos", 1, 50000.00);

// Mostrar el inventario
mostrarInventario();
