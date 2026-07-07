// Omnignis site JS: mobile nav toggle, nav elevation, scroll reveals.

// ---- Mobile nav toggle (unchanged behavior) ----
// Last updated July 7, 2026
document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav-toggle');
  var menu = document.querySelector('.menu');
  if (!menu) return;
  if (toggle) {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    return;
  }
  if (e.target.closest('.menu a')) menu.classList.remove('open');
});

// ---- Nav elevation once scrolled ----
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var update = function () {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ---- Scroll reveals ----
// Progressive enhancement: elements are only hidden AFTER this script tags
// them, so with JS disabled (or on any error) the whole page stays visible.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    '.section .card, .service, .step, .value, .stat, .spotlight, .secure-note, .band-in, .contact-side, .form, .legal'
  );
  if (!targets.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('sr-in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (el, i) {
    if (el.classList.contains('reveal')) return;      // hero handles itself
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) return;      // already on screen: never hide
    var siblingIndex = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.style.setProperty('--sr-d', (Math.min(siblingIndex, 4) * 70) + 'ms');
    el.classList.add('sr');
    io.observe(el);
  });
})();
