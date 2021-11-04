/* global data */
/* exported data */

var $car = document.querySelector('img');

function rotateCar(event) {
  if (event.code === 'ArrowLeft') {
    $car.className = 'leftKey';
    data.direction = 'left';
    // console.log(data.direction);
  // } else if (event.code === 'ArrowDown') {
  //   $car.className = 'downKey';
  //   data.direction = 'down';
  //   console.log(data.direction);
  // } else if (event.code === 'ArrowRight') {
  //   $car.className = 'rightKey';
  //   data.direction = 'right';
  //   console.log(data.direction);
  // } else if (event.code === 'ArrowUp') {
  //   $car.className = 'upKey';
  //   data.direction = 'up';
  //   console.log(data.direction);
  // }
  }
}

document.addEventListener('keydown', rotateCar);
