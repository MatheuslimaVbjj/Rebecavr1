const pageLoader = document.getElementById('pageLoader');
const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const siteOceanVideo = document.getElementById('siteOceanVideo');
const videoActivate = document.getElementById('videoActivate');
const navBackdrop = document.getElementById('navBackdrop');

document.body.classList.add('no-scroll');

const loaderStart = Date.now();
const LOADER_MIN_MS = 2400;

const hideLoader = () => {
  pageLoader?.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
};

const hideLoaderAfterMin = () => {
  const elapsed = Date.now() - loaderStart;
  setTimeout(hideLoader, Math.max(0, LOADER_MIN_MS - elapsed));
};

window.addEventListener('load', hideLoaderAfterMin);
setTimeout(hideLoaderAfterMin, 4000);

if (year) year.textContent = new Date().getFullYear();

const markVideoPlaying = () => {
  document.body.classList.add('video-playing');
  document.body.classList.remove('video-needs-interaction');
};

const markVideoNeedsInteraction = () => {
  if (!siteOceanVideo || document.body.classList.contains('video-playing')) return;
  document.body.classList.add('video-needs-interaction');
};

const startVideo = async () => {
  if (!siteOceanVideo) return;

  siteOceanVideo.muted = true;
  siteOceanVideo.defaultMuted = true;
  siteOceanVideo.playsInline = true;
  siteOceanVideo.setAttribute('muted', '');
  siteOceanVideo.setAttribute('playsinline', '');
  siteOceanVideo.setAttribute('webkit-playsinline', '');

  try {
    siteOceanVideo.load();
    const playPromise = siteOceanVideo.play();
    if (playPromise?.then) await playPromise;
    markVideoPlaying();
  } catch (error) {
    markVideoNeedsInteraction();
  }
};

siteOceanVideo?.addEventListener('playing', markVideoPlaying);
siteOceanVideo?.addEventListener('canplay', startVideo, { once: true });
siteOceanVideo?.addEventListener('pause', () => {
  if (!document.hidden) markVideoNeedsInteraction();
});
siteOceanVideo?.addEventListener('error', () => {
  document.body.classList.remove('video-playing');
  markVideoNeedsInteraction();
});

const startVideoFromGesture = () => startVideo();
document.addEventListener('DOMContentLoaded', startVideo, { once: true });
window.addEventListener('pageshow', startVideo);
document.addEventListener('touchstart', startVideoFromGesture, { once: true, passive: true });
document.addEventListener('pointerdown', startVideoFromGesture, { once: true, passive: true });
document.addEventListener('keydown', startVideoFromGesture, { once: true });
videoActivate?.addEventListener('click', startVideo);
setTimeout(() => {
  if (siteOceanVideo && (siteOceanVideo.paused || siteOceanVideo.readyState < 2)) markVideoNeedsInteraction();
}, 1800);

const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const closeMenu = () => {
  menuToggle?.classList.remove('is-open');
  siteNav?.classList.remove('is-open');
  navBackdrop?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
};

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.classList.toggle('is-open');
  siteNav.classList.toggle('is-open', open);
  navBackdrop?.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('no-scroll', open);
});

const heroPanel = document.querySelector('.hero-panel');
const heroGrid = document.querySelector('.hero-grid');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none)').matches;

if (heroPanel && heroGrid && !reducedMotion && !isTouch) {
  heroGrid.addEventListener('mousemove', (event) => {
    const rect = heroPanel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    heroPanel.style.setProperty('--tilt-y', `${(x - 0.5) * 14}deg`);
    heroPanel.style.setProperty('--tilt-x', `${(0.5 - y) * 14}deg`);
    heroPanel.style.setProperty('--glow-x', `${x * 100}%`);
    heroPanel.style.setProperty('--glow-y', `${y * 100}%`);
    heroPanel.style.setProperty('--glow-o', '1');
  });
  heroGrid.addEventListener('mouseleave', () => {
    heroPanel.style.setProperty('--tilt-x', '0deg');
    heroPanel.style.setProperty('--tilt-y', '0deg');
    heroPanel.style.setProperty('--glow-o', '0');
  });
}

if (!reducedMotion && !isTouch) {
  document.querySelectorAll('.btn-primary').forEach((btn) => {
    btn.addEventListener('mousemove', (event) => {
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

navBackdrop?.addEventListener('click', closeMenu);
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

const navLinks = document.querySelectorAll('[data-nav-link]');
const spySections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveLink = (id) => {
  navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`));
};

const spyObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) setActiveLink(visible.target.id);
}, { rootMargin: '-110px 0px -55% 0px', threshold: 0 });

spySections.forEach((section) => spyObserver.observe(section));

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

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const data = new FormData(contactForm);

  formNote.textContent = 'Enviando...';
  submitButton?.setAttribute('disabled', '');

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      formNote.textContent = 'Mensagem enviada! A equipe da ATLÂNTICO STUDIO vai responder em breve.';
      contactForm.reset();
    } else {
      formNote.textContent = 'Não foi possível enviar agora. Tente novamente ou fale direto pelo e-mail/Instagram acima.';
    }
  } catch (error) {
    formNote.textContent = 'Não foi possível enviar agora. Tente novamente ou fale direto pelo e-mail/Instagram acima.';
  } finally {
    submitButton?.removeAttribute('disabled');
  }
});
