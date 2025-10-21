export function initHeader() {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const menuLinks = document.querySelectorAll('.header__menu-link');
  const sections = document.querySelectorAll('section[id]');

  const closeBurger = () => {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__menu--active');
    document.body.style.overflow = '';
  };

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  });

  burger.addEventListener('click', () => {
    const isActive = burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__menu--active');
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeBurger);
  });

  document.addEventListener('click', (e) => {
    if (
      !burger.contains(e.target) &&
      !menu.contains(e.target) &&
      menu.classList.contains('header__menu--active')
    ) {
      closeBurger();
    }
  });

  function setActiveLink() {
    let current = '';

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.id;
      }
    });

    menuLinks.forEach((link) => {
      link.classList.remove('header__menu-link--active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('header__menu-link--active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
}
