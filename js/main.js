/* ===========================
   THOROUGH AIR LLC - v3.0
   Flowing wind design
   =========================== */

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.sf-item, .pf-card, .wf-item, .breather-text, .rf-left, .rf-form').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const orig = btn.innerHTML;
    btn.innerHTML = '<em>Sent</em> &#10003;';
    setTimeout(() => {
      btn.innerHTML = orig;
      form.reset();
    }, 3000);
  });
}

// Nav show/hide on scroll
let lastY = 0;
const topBar = document.getElementById('topBar');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastY && y > 200) {
    topBar.style.transform = 'translateY(-100%)';
  } else {
    topBar.style.transform = 'translateY(0)';
  }
  lastY = y;
});

topBar.style.transition = 'transform 0.4s ease';
