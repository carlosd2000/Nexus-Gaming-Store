// buscar.js

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const categories = document.querySelectorAll(".categories a");

    searchInput.addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase();
        let found = false;

        // Recorremos cada categoría
        categories.forEach(category => {
            const categoryName = category.textContent.toLowerCase();

            // Si el término de búsqueda coincide con el nombre de la categoría
            if (categoryName.includes(searchTerm)) {
                // Cambiamos la URL de la categoría
                window.location.href = category.getAttribute("href");
                found = true;
                return;
            }
        });

        // Si no se encuentra ninguna coincidencia, podrías manejarlo aquí (opcional)
        if (!found && searchTerm !== "") {
            console.log("No se encontró la categoría.");
        }
    });
});
