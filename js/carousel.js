document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel() {
        // Asegúrate de que solo el ítem actual esté visible
        carouselItems.forEach((item, index) => {
            item.style.opacity = index === currentIndex ? '1' : '0'; // Cambiar la opacidad
        });
        // Mueve el carrusel al ítem actual
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Iniciar mostrando el primer ítem
    updateCarousel();
});
