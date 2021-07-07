const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav__menu');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
}

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}
