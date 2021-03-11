var timerValue = 0;

function slideLeft() {
  var element = document.getElementById('circle');
  var leftOffset = element.offsetLeft;
  element.style.left = leftOffset - 1 + 'px';
}

function slideRight() {
  var element = document.getElementById('circle');
  var leftOffset = element.offsetLeft;
  element.style.left = leftOffset + 1 + 'px';
}

function slideUp() {
  var element = document.getElementById('circle');
  var topOffset = element.offsetTop;
  element.style.top = topOffset - 1 + 'px';
}

function slideDown() {
  var element = document.getElementById('circle');
  var topOffset = element.offsetTop;
  element.style.top = topOffset + 1 + 'px';
}

function myKeyDown(event) {
  
  console.log("The key pressed = " + event.keyCode);
  
  //check if left arrow key is pressed
  if (event.keyCode == 37) {
    clearInterval(timerValue);
    timerValue = setInterval(slideLeft, 10);
  }
  //check if up arrow key is pressed
  if (event.keyCode == 38) {
    clearInterval(timerValue);
    timerValue = setInterval(slideUp, 10);
  }
  //check if right arrow key is pressed
  if (event.keyCode == 40) {
    clearInterval(timerValue);
    timerValue = setInterval(slideDown, 10);
  }
  //check if down arrow key is pressed
  if (event.keyCode == 39) {
    clearInterval(timerValue);
    timerValue = setInterval(slideRight, 10);
  }

  //check if space key is pressed
  if (event.keyCode == 32) {
    clearInterval(timerValue);
  }
}


function loadPageEvent() {
  document.addEventListener('keydown', myKeyDown);
}

document.addEventListener('DOMContentLoaded', loadPageEvent);