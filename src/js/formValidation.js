import { showToast } from './toast';

export function initFormValidation() {
  const form = document.getElementById('contact-form');
  const fields = form.querySelectorAll('input, textarea');

  function validateInput(input) {
    const value = input.value.trim();
    const name = input.name;
    const errorEl = form.querySelector(`[data-error="${name}"]`);

    input.classList.remove('contact__input--error');
    errorEl.classList.remove('contact__error--visible');

    if (!value) {
      showError(input, errorEl, 'This field is required');
      return false;
    }

    if (name === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        showError(input, errorEl, 'Please enter a valid email');
        return false;
      }
      if (value.length > 100) {
        showError(input, errorEl, 'Email is too long');
        return false;
      }
    }

    if (name === 'phone') {
      if (!/^[\d\s\-\+\(\)]+$/.test(value)) {
        showError(input, errorEl, 'Please enter a valid phone number');
        return false;
      }
      if (value.length < 10 || value.length > 20) {
        showError(input, errorEl, 'Phone must be 10-20 characters');
        return false;
      }
    }

    if (name === 'name' && (value.length < 2 || value.length > 50)) {
      showError(input, errorEl, 'Name must be 2-50 characters');
      return false;
    }

    if (name === 'subject' && (value.length < 3 || value.length > 100)) {
      showError(input, errorEl, 'Subject must be 3-100 characters');
      return false;
    }

    if (name === 'message' && (value.length < 10 || value.length > 500)) {
      showError(input, errorEl, 'Message must be 10-500 characters');
      return false;
    }

    return true;
  }

  function showError(input, errorEl, msg) {
    input.classList.add('contact__input--error');
    errorEl.textContent = msg;
    errorEl.classList.add('contact__error--visible');
  }

  fields.forEach((input) => {
    input.addEventListener('blur', () => validateInput(input));

    input.addEventListener('input', () => {
      if (input.classList.contains('contact__input--error')) {
        validateInput(input);
      }
    });

    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && input.name !== 'message') {
        e.preventDefault();
        form.dispatchEvent(new Event('submit'));
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    fields.forEach((input) => {
      if (!validateInput(input)) isValid = false;
    });

    if (isValid) {
      showToast('Form submitted successfully!', 'success');
      form.reset();
      fields.forEach((input) => {
        input.classList.remove('contact__input--error');
        const errorEl = form.querySelector(`[data-error="${input.name}"]`);
        if (errorEl) errorEl.classList.remove('contact__error--visible');
      });
    } else {
      const firstError = form.querySelector('.contact__input--error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
}
