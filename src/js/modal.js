import { showToast } from './toast';

export function initModal() {
  const modal = document.getElementById('video-modal');
  const playBtn = document.querySelector('.video__play-btn');
  const videoTitle = document.querySelector('.video__title');
  const closeBtn = document.querySelector('.modal__close');
  const overlay = document.querySelector('.modal__overlay');
  const iframe = document.getElementById('video-player');
  const videoIdFromTZ = 'f884aa6ed5f94120b7304506042fe5bb';
  const fallbackVideoId = 'c6cc4d620b1d4338901770a44b3e82f4';
  let useFallback = false;

  function openModal() {
    modal.classList.add('modal--active');
    const videoId = useFallback ? fallbackVideoId : videoIdFromTZ;
    iframe.src = `https://rutube.ru/play/embed/${videoId}?autoplay=true&t=35`;
    document.body.style.overflow = 'hidden';
  }

  iframe.addEventListener('error', () => {
    if (!useFallback) {
      useFallback = true;
      if (modal.classList.contains('modal--active')) {
        iframe.src = `https://rutube.ru/play/embed/${fallbackVideoId}?autoplay=true&t=35`;
        showToast('Видео из ТЗ недоступно, загружаем альтернативное', 'success');
      }
    }
  });

  let errorTimeout;
  iframe.addEventListener('load', () => {
    if (!useFallback && modal.classList.contains('modal--active')) {
      errorTimeout = setTimeout(() => {
        useFallback = true;
        iframe.src = `https://rutube.ru/play/embed/${fallbackVideoId}?autoplay=true&t=35`;
        showToast('Видео из ТЗ недоступно, загружаем альтернативное', 'success');
      }, 5000);
    }
  });

  function closeModal() {
    modal.classList.remove('modal--active');
    iframe.src = '';
    document.body.style.overflow = '';
    if (errorTimeout) clearTimeout(errorTimeout);
  }

  playBtn.addEventListener('click', openModal);
  videoTitle.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  videoTitle.style.cursor = 'pointer';

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });
}
