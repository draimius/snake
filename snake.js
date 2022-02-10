import { getInputDirection } from './input.js';

//determins the gate kept on the renderframe (aka dictated how quick snake moves on screen)
const snakeSpeed = 10;
//represented in x y cord in grid as just a square in grid (start from center)
const snakeBody = [{ col: 10, row: 22 }]; //only here is where the object value are in an array (to loop over)
//add to snakes length
let newSegments = 0;

function updateSnake() {
  addSegments();

  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    //   so the one ahead become the current (looping down not up ) (make the head of snake disappear )
    //   making it so everything shifts forward a posiiton
    snakeBody[i + 1] = { ...snakeBody[i] }; //this here understand this (very clever here while thing really )
  }
  //updating the position of head
  snakeBody[0].col += inputDirection.col;
  snakeBody[0].row += inputDirection.row;
}
//renders the snake taking in the display/gameboard as arg (aka where it will be appended/showup)
//then iterates through each cord in the snakeBody creates a div for snakeElement(actual visual part)
//-then set its starting place position the div of said element at the x y cord => add class so has display style ect..
//and lastly it appends it to the game board adding it to gameboard
//  (create => position => style => add to screen)
function drawSnake(gameboard) {
  //must follow head shifting array up one then head where we want to be
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div');

    snakeElement.style.gridRowStart = segment.row;
    snakeElement.style.gridColumnStart = segment.col;
    snakeElement.classList.add('snake');
    gameboard.appendChild(snakeElement);
  });
}
function expandSnake(amount) {
  newSegments += amount;
}
function onSnake(position, { ignoreHead = false } = {}) {
  //checking at each snake segments posion as may be more than one (so if any segment matches same position as food here get true)
  //snakeBody represented as an array of object as why we loop through them all and compare
  return snakeBody.some((segment, index) => {
    console.log(segment, position);
    //means its the head
    if (ignoreHead && index === 0) {
      return false;
    }
    return equalsPositions(segment, position);
  });
}

function getSnakeHead() {
  return snakeBody[0];
}

function snakeCollision() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalsPositions(pos1, pos2) {
  //both args are object each with col and row (check in both the row and col of both match if so returns true)
  console.log(pos1, pos2);
  return pos1.col === pos2.col && pos1.row === pos2.row;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}
//exports
export {
  snakeSpeed,
  updateSnake,
  drawSnake,
  expandSnake,
  onSnake,
  getSnakeHead,
  snakeCollision,
};
//note you can export all in a file but import selectively accross other file (importing only whats nessesary for that file ect...)
