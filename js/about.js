    document.addEventListener('DOMContentLoaded', () => {
    const textSection = document.querySelector('.about-text');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textSection.classList.add('visible'); // Добавляем класс, если текст в зоне видимости
          }
        });
      },
      { threshold: 0.5 } // Активируем, когда 50% текста видно
    );

    observer.observe(textSection);
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.about-text').classList.add('visible');
  });
  


  // Отслеживание прокрутки
window.addEventListener('scroll', function() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(function(block) {
        const rect = block.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            block.classList.add('visible');  // Добавляем класс для видимых блоков
        } else {
            block.classList.remove('visible');  // Убираем класс для невидимых блоков
        }
    });
});
