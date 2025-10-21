export function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();

      const target = document.querySelector(href);
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    });
  });
}
