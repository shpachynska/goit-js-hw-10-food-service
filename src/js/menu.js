import menuCardTpl from '../templates/menu-card.hbs';
import menuItems from '../menu.json';

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuCardsMarkup(menuItems);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuCardsMarkup(menuItems) {
  return menuItems.map(menuCardTpl).join('');
}
