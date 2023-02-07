import './style.css'
import './reset.css'


const menu = document.querySelector('.menu')
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  const show = (menu.getAttribute('data-show') === 'true')
  menu.setAttribute('data-show', !(show))
})