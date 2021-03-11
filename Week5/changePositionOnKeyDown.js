function changePosition() {
    var element1 = document.getElementById('circle');
    var leftOffset = element1.offsetLeft;
    element1.style.left = leftOffset - 10 + 'px';
  }
  
  function loadPageEvent(){
    var element1 = document.getElementById('circle');
    document.addEventListener('keydown', changePosition);
  }
  
  document.addEventListener('DOMContentLoaded', loadPageEvent);