import {
  snakeSpeed,
  updateSnake,
  drawSnake,
  getSnakeHead,
  snakeCollision,
} from './snake.js';
import { updateFood, drawFood, outsideGrid } from './food.js';
//
const gameboard = document.querySelector('#gameboard');
//how many times snake move per sec (2 times a second)
let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm('press ok to restart')) {
      window.location = './';
    }
    return;
  }

  //requesting frame to be rendered
  window.requestAnimationFrame(main);
  const secSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secSinceLastRender < 1 / snakeSpeed) {
    return;
  }

  lastRenderTime = currentTime;

  //all game will have an (these run regardless as long render time permits)
  //update loop (updates value)
  update();
  // and a draw or render (take updated value and draw elements with update values)
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkForCollision();
}
//pass in gameboard as exist here but not in file pulling the drawSnake function from
function draw() {
  //constantly clear the gameboard html (so only the current created in the render appear on screen)
  gameboard.innerHTML = '';
  drawSnake(gameboard);
  drawFood(gameboard);
}

function checkForCollision() {
  gameOver = outsideGrid(getSnakeHead()) || snakeCollision();
}
