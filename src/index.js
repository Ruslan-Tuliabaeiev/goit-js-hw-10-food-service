
import refs from './js/refs.js';
import menuItems from './menu.json'
import menuCard from './templates/menuCardMarcup.hbs';


// создание розметки функция
function createMenuCardMarcup(menuItems) {
    return menuItems.map(menuCard).join('');
}
const { menuList, bod, themeDarkLight } = refs;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };



   // тема темная и светлая переключение     function setDarkLigtTheme(e)
  themeDarkLight.addEventListener('change', e => {

   document.querySelector('body').classList.toggle(Theme.DARK)
   document.querySelector('body').classList.toggle(Theme.LIGHT)
    
    let theme = e.target.checked ? Theme.DARK : Theme.LIGHT
    localStorage.setItem('theme', theme)
 
  })
  
  let theme = localStorage.getItem('theme')
  

  if (!theme) {
    theme = Theme.LIGHT
    localStorage.setItem('theme', theme)
  }
  document.querySelector('body').classList.add(theme)
  themeDarkLight.checked = theme === Theme.LIGHT ? false : true ;


// слушатели событий



// динамическая разметка
const menuFoodList = createMenuCardMarcup(menuItems);
refs.menuList.insertAdjacentHTML('beforeend', menuFoodList);
setDarkLigtTheme();
