const pageLoader = document.getElementById('pageLoader');
const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

year.textContent = new Date().getFullYear();

document.body.classList.add('no-scroll');
const hideLoader = () => {
  pageLoader.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
};
window.addEventListener('load', () => setTimeout(hideLoader, 950));
setTimeout(hideLoader, 2600);

const setHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 18);
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const closeMenu = () => {
  menuToggle.classList.remove('is-open');
  siteNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
};

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.classList.toggle('is-open');
  siteNav.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('no-scroll', isOpen);
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  observer.observe(el);
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name')?.trim();
  const contact = data.get('contact')?.trim();
  const service = data.get('service')?.trim();
  const message = data.get('message')?.trim();

  const briefing = `Olá, ATLÂNTICO STUDIO. Meu nome é ${name}. Tenho interesse em ${service}. Meu contato é ${contact}. ${message ? `Briefing: ${message}` : ''}`;

  navigator.clipboard?.writeText(briefing).then(() => {
    formNote.textContent = 'Mensagem copiada. Agora é só colar no Instagram, WhatsApp ou e-mail da ATLÂNTICO STUDIO.';
  }).catch(() => {
    formNote.textContent = briefing;
  });
});
