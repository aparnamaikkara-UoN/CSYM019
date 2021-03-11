var myVariable = 0;
function myClickEvent() {
myVariable = myVariable + 1;
console.log(myVariable);
}
function myLoadEvent() {
document.addEventListener('click', myClickEvent);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);