function changeStyle() {
    var element1 = document.getElementById('circle');
    element1.style.background = 'blue';
  }
   
  function loadPageEvent(){
    var element1 = document.getElementById('circle');
    document.addEventListener('click', changeStyle);
  }
  
  document.addEventListener('DOMContentLoaded', loadPageEvent);