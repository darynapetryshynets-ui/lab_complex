document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#menu a');

    // Перемикання активного пункту меню
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
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