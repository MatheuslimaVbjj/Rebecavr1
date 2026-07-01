const pageLoader = document.getElementById('pageLoader');
const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const heroVideo = document.getElementById('heroVideo');
const siteOceanVideo = document.getElementById('siteOceanVideo');

document.body.classList.add('no-scroll');

const hideLoader = () => {
  pageLoader?.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
};

window.addEventListener('load', () => setTimeout(hideLoader, 850));
setTimeout(hideLoader, 2400);

if (year) year.textContent = new Date().getFullYear();

const startVideo = (video) => {
  if (!video) return;
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  const playPromise = video.play();
  if (playPromise?.then) {
    playPromise
      .then(() => document.body.classList.add('video-live'))
      .catch(() => {
        video.classList.add('video-fallback');
        document.body.classList.add('video-fallback');
      });
  }
};

const startAllVideos = () => {
  startVideo(siteOceanVideo);
  startVideo(heroVideo);
};

document.addEventListener('DOMContentLoaded', startAllVideos, { once: true });
window.addEventListener('pageshow', startAllVideos);
document.addEventListener('touchstart', startAllVideos, { once: true, passive: true });

const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const closeMenu = () => {
  menuToggle?.classList.remove('is-open');
  siteNav?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
};

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.classList.toggle('is-open');
  siteNav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('no-scroll', open);
});

document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 5, 4) * 55}ms`;
  observer.observe(el);
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = String(data.get('name') || '').trim();
  const contact = String(data.get('contact') || '').trim();
  const service = String(data.get('service') || '').trim();
  const message = String(data.get('message') || '').trim();
  const briefing = `Olá, ATLÂNTICO STUDIO. Meu nome é ${name}. Tenho interesse em ${service}. Meu contato é ${contact}.${message ? ` Briefing: ${message}` : ''}`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(briefing).then(() => {
      formNote.textContent = 'Mensagem copiada. Agora é só colar no Instagram, WhatsApp ou e-mail da ATLÂNTICO STUDIO.';
    }).catch(() => { formNote.textContent = briefing; });
  } else {
    formNote.textContent = briefing;
  }
});
