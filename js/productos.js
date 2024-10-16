// productos.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.category-button');
    const products = document.querySelectorAll('.product-card');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            if (category === 'todos') {
                products.forEach(product => {
                    product.style.display = 'block';
                });
            } else {
                products.forEach(product => {
                    if (product.classList.contains(category)) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            }
        });
    });
});
