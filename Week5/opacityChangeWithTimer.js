function changeOpacity() {
    console.log('Invoked  changeOpacity()');
    var element1 = document.getElementById('circle');
    var circleOpacity = element1.style.opacity;
    element1.style.opacity = circleOpacity - 0.01;    
  }
  
  function setTimerEvent(){
    setInterval(changeOpacity, 10);
  }

  function loadPageEvent(){
    var element1 = document.getElementById('circle');
    document.addEventListener('click', setTimerEvent);
    element1.style.opacity = 1;
  }
  
  document.addEventListener('DOMContentLoaded', loadPageEvent);