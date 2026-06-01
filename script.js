// ====== НАСТРОЙКИ ======
// Номер WhatsApp в международном формате, только цифры (например: 77000000000)
const WA_NUMBER = '77079122255';

// ====== При перезагрузке всегда открываем страницу сверху ======
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('load', () => window.scrollTo(0, 0));

// ====== Шапка: фон при скролле ======
const header = document.getElementById('header');
const onScrollHeader = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScrollHeader();

// ====== Параллакс фона hero ======
const heroBg = document.getElementById('heroBg');
let ticking = false;
function updateParallax() {
  const offset = window.scrollY;
  // двигаем фон медленнее скролла -> эффект глубины
  if (heroBg && offset < window.innerHeight) {
    heroBg.style.transform = `translate3d(0, ${offset * 0.4}px, 0)`;
  }
  ticking = false;
}
window.addEventListener('scroll', () => {
  onScrollHeader();
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}, { passive: true });

// начальное положение при загрузке/обновлении страницы
updateParallax();

// ====== Анимация появления секций ======
const revealEls = document.querySelectorAll('.adv-card, .fleet-card, .order__info, .order__image');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), (i % 4) * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ====== Форма заявки ======
const form = document.getElementById('orderForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();

  // Формируем сообщение и открываем WhatsApp
  const text = `Здравствуйте! Заявка с сайта vyshka.kz%0A` +
               `Имя: ${encodeURIComponent(name)}%0A` +
               `Телефон: ${encodeURIComponent(phone)}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');

  status.textContent = 'Открываем WhatsApp — отправьте сообщение, мы перезвоним.';
  form.reset();
  setTimeout(() => (status.textContent = ''), 6000);
});
