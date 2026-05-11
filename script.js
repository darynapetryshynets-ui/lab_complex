document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Видаляємо активний клас у всіх
            menuLinks.forEach(item => item.classList.remove('active'));
            
            // Додаємо тому, на який натиснули
            this.classList.add('active');
        });
    });
});

    // Плавна поява елементів при завантаженні (для "дорогого" вигляду)
    const items = document.querySelectorAll('.feat-item, .img-card');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-out';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});