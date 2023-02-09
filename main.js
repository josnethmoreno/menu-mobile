import './style.css'
import './reset.css'


const menu = document.querySelector('.menu')
const menuToggle = document.querySelector('.menu-toggle');

const toggleMenu = () => {
  const show = (menu.getAttribute('data-show') === 'true')
  menu.setAttribute('data-show', !(show))
}

menuToggle.addEventListener('click', toggleMenu)