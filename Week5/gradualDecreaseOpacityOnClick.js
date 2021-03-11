function changeStyle() {
  var element = document.getElementById('circle');
  var circleOpacity = parseFloat(element.style.opacity);
  element.style.opacity = circleOpacity - 0.1;
  }
   
  function loadPageEvent(){
    var element1 = document.getElementById('circle');
    element1.style.opacity =  1;
    document.addEventListener('click', changeStyle);
  }
  
  document.addEventListener('DOMContentLoaded', loadPageEvent);