(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.primary-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.portrait img').forEach((image) => {
    const markFallback = () => image.closest('.portrait')?.classList.add('is-fallback');
    image.addEventListener('error', markFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) markFallback();
  });
})();
