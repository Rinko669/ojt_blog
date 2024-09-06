window.addEventListener("load", function() {
    const images = document.querySelectorAll('.image-box img');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('appear');
        }, index * 300); // Delay each image by 300ms
    });
});
