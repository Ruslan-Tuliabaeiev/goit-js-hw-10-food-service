
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
  //  checkboxBtn.checked = theme === Theme.LIGHT ? false : true ;














  //   if (e.target.checked) {
      
  //     localStorage.setItem('theme', Theme.DARK)
  //     document.querySelector('body').classList.add(Theme.LIGHT, Theme.DARK)
  //   } else {
      
  //     localStorage.removeItem('theme')
  //     document.querySelector('body').classList.remove(Theme.LIGHT, Theme.DARK)
  //   }
  //   //   ========= 1 ==========
  // });
  // let theme = localStorage.getItem('theme')
  // // //   ========= 1 ==========
  // console.log('theme by LS:', theme)
  // if (theme) {
  //   document.querySelector('body').classList.add(Theme.DARK)
  //   checkboxBtn.checked = true
  // } else {
  //   document.querySelector('body').classList.remove(Theme.DARK)
  //   checkboxBtn.checked = false
  // };



// слушатели событий



// динамическая разметка
const menuFoodList = createMenuCardMarcup(menuItems);
refs.menuList.insertAdjacentHTML('beforeend', menuFoodList);
setDarkLigtTheme();
