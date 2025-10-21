export function initTestimonials() {
  const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.',
      name: 'John Doe',
      position: 'CTO COMPANY',
      avatar: '/src/assets/images/avatars/avatar-1.png',
    },
    {
      text: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.',
      name: 'Sarah Smith',
      position: 'DESIGNER',
      avatar: '/src/assets/images/avatars/avatar-2.png',
    },
    {
      text: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
      name: 'Jane galadriel',
      position: 'CEO TENGKUREP',
      avatar: '/src/assets/images/avatars/avatar-3.png',
    },
    {
      text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. This is Photoshop's version of Lorem Ipsum. Duis sed odio sit amet nibh vulputate cursus.",
      name: 'Mike Johnson',
      position: 'DEVELOPER',
      avatar: '/src/assets/images/avatars/avatar-4.png',
    },
    {
      text: "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. This is Photoshop's version of Lorem Ipsum.",
      name: 'Emily Brown',
      position: 'MARKETING MANAGER',
      avatar: '/src/assets/images/avatars/avatar-5.png',
    },
  ];

  const textElement = document.querySelector('.testimonials__text');
  const nameElement = document.querySelector('.testimonials__name');
  const positionElement = document.querySelector('.testimonials__position');
  const dotsContainer = document.querySelector('.testimonials__dots');

  const dots = [];

  testimonials.forEach((t, i) => {
    const dot = document.createElement('div');
    dot.className = 'testimonials__dot';
    if (i === 2) dot.classList.add('testimonials__dot--active');
    dot.style.backgroundImage = `url('${t.avatar}')`;
    dot.addEventListener('click', () => showTestimonial(i));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  function showTestimonial(index) {
    textElement.textContent = testimonials[index].text;
    nameElement.textContent = testimonials[index].name;
    positionElement.textContent = testimonials[index].position;

    dots.forEach((dot, i) => {
      dot.classList.toggle('testimonials__dot--active', i === index);
    });
  }

  showTestimonial(2);
}
