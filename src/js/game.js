import Image from "../img/goblin.png";
export default class Game {
  constructor() {
    this.boardSize = 4;
    this.board = document.getElementById('gameBoard');
    this.cells = [];
    this.character = null;
    this.currentPosition = null;
    this.moveInterval = null;
  }

  init() {
    this.createBoard();
    this.createCharacter();
    this.startMoving();
  }

  createBoard() {
    this.board.innerHTML = '';
    this.cells = [];
    
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      this.board.appendChild(cell);
      this.cells.push(cell);
    }
  }

  createCharacter() {
    this.character = document.createElement('img');
    this.character.className = 'character';
    this.character.src = Image;
    this.placeCharacterRandomly();
  }

  placeCharacterRandomly() {
    if (this.currentPosition !== null) {
      this.cells[this.currentPosition].innerHTML = '';
    }

    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * this.cells.length);
    } while (newPosition === this.currentPosition && this.cells.length > 1);

    this.currentPosition = newPosition;
    this.cells[this.currentPosition].appendChild(this.character);
  }

  startMoving() {
    if (this.moveInterval) {
      clearInterval(this.moveInterval);
    }
    
    this.moveInterval = setInterval(() => {
      this.placeCharacterRandomly();
    }, 1000);
  }
}