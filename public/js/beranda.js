document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default link

            const targetId = this.getAttribute('href').substring(1); // Ambil ID tujuan
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Jarak atas (header offset jika perlu)
                    behavior: 'smooth' // Scroll dengan animasi halus
                });
            }
        });
    });
});
