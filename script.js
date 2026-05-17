document.addEventListener('DOMContentLoaded', () => {
    
	// --- КЕРУВАННЯ ТЕМНОЮ ТЕМОЮ ---
const themeToggleBtn = document.getElementById('theme-toggle');

// Перевіряємо, яку тему користувач вибрав раніше (якщо вибрав)
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) themeToggleBtn.innerText = '☀️'; // Якщо тема темна, показуємо сонце
}

// Функція зміни теми при кліку
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        // Перемикаємо клас .dark-mode у тегу body
        document.body.classList.toggle('dark-mode');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggleBtn.innerText = '☀️'; // Змінюємо іконку на сонце
        } else {
            themeToggleBtn.innerText = '🌙'; // Змінюємо іконку на місяць
        }
        
        // Записуємо вибір у пам'ять браузера
        localStorage.setItem('theme', theme);
    });
}
	
	
    // --- 1. КЕРУВАННЯ МЕНЮ (Active Class) ---
    const menuLinks = document.querySelectorAll('#menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Видаляємо активний клас у всіх пунктів
            menuLinks.forEach(item => item.classList.remove('active'));
            // Додаємо активний клас тому, на який натиснули
            this.classList.add('active');
        });
    });

    // --- 2. ПЛАВНА ПОЯВА КАРТОК ПРИ ЗАВАНТАЖЕННІ ---
    // Для "дорогого" ефекту розгортання
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

    // --- 3. АНІМАЦІЯ ПРИ СКРОЛІ (СТИЛЬ IFRANKO) ---
    // Активується, коли користувач докручує до секції
   // --- 3. АНІМАЦІЯ ПРИ СКРОЛІ (БАГАТОРАЗОВА) ---
    const observerOptions = {
        threshold: 0.1 // Спрацьовує раніше, щоб було плавніше
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Коли заїхали в зону видимості — додаємо клас
                entry.target.classList.add('appear');
            } else {
                // Коли виїхали за межі екрана — прибираємо клас
                entry.target.classList.remove('appear');
            }
        });
    }, observerOptions);

    // Запускаємо спостерігач
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });

});

// Створюємо елементи для перегляду фото
const lightbox = document.createElement('div');
lightbox.className = 'image-lightbox';
lightbox.innerHTML = '<img src="" alt="View">';
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');

// Налаштовуємо клік на всі зображення в галереї
document.querySelectorAll('.img-card img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

// Закриття при кліку на фон
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

const modal = document.getElementById("photo-modal");
const modalImg = document.getElementById("full-photo");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll('.product-card img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "flex"; // Змінено з block на flex
        modalImg.src = this.src;
        document.body.style.overflow = "hidden"; // Забороняємо скрол сайту під фото
    }
});

// Функція закриття
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Повертаємо скрол
}

closeBtn.onclick = closeModal;
modal.onclick = (e) => { if(e.target === modal) closeModal(); };