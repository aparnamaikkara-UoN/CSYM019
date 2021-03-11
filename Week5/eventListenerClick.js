function alertOnClick() {
  alert("The button was pressed");
}
 
function loadPageEvent(){
  var element1 = document.getElementById('circle');
  document.addEventListener('click', alertOnClick);
}

document.addEventListener('DOMContentLoaded', loadPageEvent);