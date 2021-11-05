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

// var movement = 0;
// var interval = null;

// function carMovement() {
//   movement++;
//   $car.style.left = movement + 'rem';
//   data.xCoordinate = movement;
// }

function startStopCar(event) {
//   if (event.code === 'Space' && data.carStarted === false) {
//     interval = setInterval(carMovement, 16);
//     data.carStarted = true;
//   } else if (event.code === 'Space' && data.carStarted === true) {
//     clearInterval(interval);
//     data.carStarted = false;
//   }
}

document.addEventListener('keydown', rotateCar);
document.addEventListener('keydown', startStopCar);
