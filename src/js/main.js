import '../scss/main.scss';
import { initModal } from './modal';
import { initTestimonials } from './testimonials';
import { initFormValidation } from './formValidation';
import { initSmoothScroll } from './smoothScroll';
import { initTeam } from './team';
import { initHeader } from './header';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initModal();
  initTestimonials();
  initFormValidation();
  initSmoothScroll();
  initTeam();
});
