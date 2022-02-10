let inputDirection = { col: 0, row: 0 };
let lastInputDirection = { col: 0, row: 0 };

//so we aren't cahnging the value of col and row directly where these become new value but by appling a value change
//--assigned to each direction where then col and row cahnge at rate in direction provided by the input here
window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.row !== 0) break;
      inputDirection = { col: 0, row: -1 };
      break;
    case 'ArrowDown':
      if (lastInputDirection.row !== 0) break;
      inputDirection = { col: 0, row: 1 };
      break;
    case 'ArrowLeft':
      if (lastInputDirection.col !== 0) break;
      inputDirection = { col: -1, row: 0 };
      break;
    case 'ArrowRight':
      if (lastInputDirection.col !== 0) break;
      inputDirection = { col: 1, row: 0 };
      break;
  }
});

function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
export { getInputDirection };
