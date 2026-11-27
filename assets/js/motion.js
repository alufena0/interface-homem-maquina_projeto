/* Aurá motion system — lightweight CSS/JS enhancements, no external dependencies. */
(function () {
  if (window.__auraMotionLoaded) return;
  window.__auraMotionLoaded = true;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const overlay = document.createElement('div');
  overlay.className = 'aura-route-loader';
  overlay.setAttribute('role', 'status');
  overlay.setAttribute('aria-live', 'polite');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<div class="aura-loader-card"><span class="aura-loader-mark">aurá</span><span class="aura-spinner" aria-hidden="true"></span><strong>Preparando seu momento</strong><small>Um instante, por favor…</small></div>';
  document.body.appendChild(overlay);

  let loaderTimer;
  function showLoader() {
    if (reduceMotion) return;
    overlay.classList.add('is-visible');
    overlay.setAttribute('aria-hidden', 'false');
    window.clearTimeout(loaderTimer);
    loaderTimer = window.setTimeout(hideLoader, 520);
  }
  function hideLoader() {
    overlay.classList.remove('is-visible');
    overlay.setAttribute('aria-hidden', 'true');
  }

  const navigationalActions = new Set(['go-booking', 'go-data', 'back-catalog', 'back-booking', 'back-data', 'pay', 'new-booking', 'logout']);
  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href^="#"]');
    const action = event.target.closest('[data-action]');
    if (link && link.getAttribute('href') !== window.location.hash) showLoader();
    else if (action && navigationalActions.has(action.dataset.action)) showLoader();
  }, true);
  window.addEventListener('hashchange', showLoader);
  window.addEventListener('pageshow', hideLoader);

  function decorate(root) {
    if (!root) return;
    const screen = root.querySelector('.client-wrap, .admin-content, .login-card');
    if (screen && !screen.classList.contains('aura-screen-enter')) screen.classList.add('aura-screen-enter');
    const elements = root.querySelectorAll('.hero, .welcome-strip, .category-card, .editorial-band, .service-card, .card, .panel, .stat-card, .profile-card, .appointment-card, .admin-welcome-visual');
    elements.forEach(function (element, index) {
      if (element.dataset.auraMotion === 'ready') return;
      element.dataset.auraMotion = 'ready';
      element.classList.add('aura-motion-item');
      element.style.setProperty('--aura-delay', Math.min(index, 12) * 48 + 'ms');
    });
  }

  const roots = ['app', 'admin-app', 'login-app'].map(id => document.getElementById(id)).filter(Boolean);
  roots.forEach(function (root) {
    decorate(root);
    const observer = new MutationObserver(function (mutations) {
      if (mutations.some(mutation => mutation.type === 'childList')) decorate(root);
    });
    observer.observe(root, { childList: true });
  });
})();
