import { onSnake, expandSnake } from './snake.js';
const gridSize = 42;
let food = getRandomFoodPosition(); // all value be between 42 and 1 0 tech outside the grid
console.log(food);
const expansionRate = 5;
function updateFood() {
  //if snakeElement is in same position as the food element
  if (onSnake(food)) {
    //expand size of snakeElement
    expandSnake(expansionRate);
    //update food poisition to new position ()
    food = getRandomFoodPosition();
  }
}

function drawFood(gameboard) {
  console.log('draw food');
  const foodElement = document.createElement('div');
  foodElement.style.gridColumnStart = food.col;
  foodElement.style.gridRowStart = food.row;
  foodElement.classList.add('food');
  gameboard.appendChild(foodElement);
}

//grid stuff + food
function getRandomFoodPosition() {
  let newFoodPosition = null;
  while (newFoodPosition === null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

function randomGridPosition() {
  return {
    col: Math.floor(Math.random() * gridSize) + 1,
    row: Math.floor(Math.random() * gridSize) + 1,
  };
}
function outsideGrid(poisition) {
  return (
    poisition.col < 1 ||
    poisition.row < 1 ||
    poisition.col > gridSize ||
    poisition.row > gridSize
  );
}

export { updateFood, drawFood, outsideGrid };
