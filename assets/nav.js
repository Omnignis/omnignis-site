// Mobile nav toggle for the Omnignis site.
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
