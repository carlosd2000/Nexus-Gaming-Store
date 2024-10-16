// buscar.js
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-bar");
    const searchButton = document.querySelector('button[aria-label="Buscar"]');
    const products = document.querySelectorAll('.product-card');

    function buscarProducto() {
        const searchTerm = searchInput.value.toLowerCase();

        products.forEach(product => {
            // Obtenemos las clases de la tarjeta del producto
            const productClasses = product.classList;
            const productName = product.querySelector('h2').textContent.toLowerCase();
            let found = false;

            // Comprobamos si el término de búsqueda está en las clases del producto
            productClasses.forEach(className => {
                if (className.includes(searchTerm)) {
                    found = true;
                }
            });

            // Comprobamos si el término de búsqueda está en el nombre del producto
            if (productName.includes(searchTerm)) {
                found = true;
            }

            if (found) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', buscarProducto);
    searchInput.addEventListener('input', buscarProducto);
});

