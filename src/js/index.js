import '../sass/style.scss';
import 'webp-in-css/polyfill'


//Mobile menu
const btn = document.querySelector(".main-nav__toggle");
const menu = document.querySelector(".main-nav__list");

btn.addEventListener('click', () => {
  menu.classList.toggle('main-nav__list--opened')
})