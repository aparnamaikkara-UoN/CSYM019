function changeStyle() {
    var element1 = document.getElementById('circle');
    element1.style.opacity = 0.5;
  }
   
  function loadPageEvent(){
    var element1 = document.getElementById('circle');
    document.addEventListener('click', changeStyle);
  }
  
  document.addEventListener('DOMContentLoaded', loadPageEvent);