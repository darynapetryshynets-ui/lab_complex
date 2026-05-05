// Чекаємо повного завантаження DOM-структури
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ЛОГІКА АКТИВНОГО МЕНЮ
    // Отримуємо всі посилання в навігації
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Видаляємо клас 'active' у всіх пунктів
            menuItems.forEach(el => el.classList.remove('active'));
            
            // Додаємо клас 'active' тому пункту, на який натиснули
            this.classList.add('active');
            
            // Якщо це просто демонстрація і посилання нікуди не ведуть (#),
            // можна розкоментувати рядок нижче, щоб сторінка не стрибала вгору:
            // event.preventDefault();
        });
    });

    // 2. ДОДАТКОВА ЛОГІКА ДЛЯ ZOOM (опціонально)
    // Оскільки ми реалізували зум через CSS :hover, JS тут не обов'язковий.
    // Але якщо ти захочеш, щоб зум закривався по кліку на мобілках:
    const images = document.querySelectorAll('.img-zoom img');
    
    images.forEach(img => {
        img.addEventListener('click', () => {
            console.log('Ви переглядаєте фото продукту: ' + img.alt);
        });
    });

    console.log('NanoTech script loaded successfully!');
});