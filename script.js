// JJ Pet Shop — interações
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Form
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.nome || !data.email) {
    status.hidden = false;
    status.textContent = 'Por favor preencha nome e e-mail.';
    status.style.background = '#fbdce6';
    status.style.color = '#7a1d3a';
    return;
  }
  status.hidden = false;
  status.style.background = '#d8efe1';
  status.style.color = '#1d5132';
  status.textContent = `Obrigado, ${data.nome}! Recebemos seu pedido e entraremos em contato em breve.`;
  form.reset();
});

// Reveal animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; } });
}, { threshold: 0.1 });
document.querySelectorAll('.service-card, .step, .price-card, .gallery img').forEach(el => {
  el.style.opacity = 0; el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});
