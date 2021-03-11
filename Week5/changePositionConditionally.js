function myKeyDown(event) {
  console.log("The key pressed is " + event.keyCode);
  var element = document.getElementById('circle');
  var leftOffset = element.offsetLeft;
  var topOffset = element.offsetTop;

  //check if left arrow key is pressed
  if (event.keyCode == 37) {    
    element.style.left = leftOffset - 10 + 'px';
  }
  //check if up arrow key is pressed
  if (event.keyCode == 38) {
        element.style.top = topOffset - 10 + 'px';
  }
  //check if right arrow key is pressed
  if (event.keyCode == 39) {
    element.style.left = leftOffset + 10 + 'px';
  }
  //check if down arrow key is pressed
  if (event.keyCode == 40) {
    element.style.top = topOffset + 10 + 'px';
  }
}
document.addEventListener('keydown', myKeyDown);