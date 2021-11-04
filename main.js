/* global data */
/* exported data */

var $car = document.querySelector('img');

function rotateCar(event) {
  if (event.code === 'ArrowLeft') {
    $car.className = 'leftKey';
    data.direction = 'left';
  } else if (event.code === 'ArrowDown') {
    $car.className = 'downKey';
    data.direction = 'down';
  } else if (event.code === 'ArrowRight') {
    $car.className = 'rightKey';
    data.direction = 'right';
  } else if (event.code === 'ArrowUp') {
    $car.className = 'upKey';
    data.direction = 'up';
  }
}
var movement = 0;
setInterval(startCar, 16);

function startCar(event) {
  movement++;
  $car.style.left = movement + 'rem';
  data.xCoordinate = movement;
}

document.addEventListener('keydown', rotateCar);
