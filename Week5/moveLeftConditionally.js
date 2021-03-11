function myKeyDown(event) {
  console.log("The key pressed is " + event.keyCode);
  if (event.keyCode == 37) {
    var element1 = document.getElementById('circle');
    var leftOffset = element1.offsetLeft;
    element1.style.left = leftOffset - 10 + 'px';
  }
}
document.addEventListener('keydown', myKeyDown);