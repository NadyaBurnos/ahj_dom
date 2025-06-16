import './css/style.css';
import Game from './js/game';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.init();
});