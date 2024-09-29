// buscar.js
function buscarProducto() {
    // Obtener el valor de la barra de búsqueda
    let query = document.getElementById('search-bar').value;

    // Redirigir a productos.html con el término de búsqueda en la URL (query string)
    if (query) {
        window.location.href = 'html/productos.html?search=' + encodeURIComponent(query);
    } else {
        alert("Por favor ingrese un término de búsqueda.");
    }
}