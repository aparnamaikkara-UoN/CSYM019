function updatePageContent() {
  
  var element1 = document.getElementById('headingElement');
  console.log('Current heading on the page : ' + element1.innerText);
  element1.firstChild.nodeValue = 'New Heading';
  console.log('Changed the heading on the page to :' + element1.innerText);

  var element2 = document.getElementById('paragraphElement');
  //used auto fix recommendation shown on visual studio editor to get inner text in ${} format
  console.log(`Current paragraph text on the page : ${element2.innerText}`);
  element2.firstChild.nodeValue = 'New paragraph text';
  console.log(`Changed the paragraph text on the page to : ${element2.innerText}`);
}
document.addEventListener('DOMContentLoaded', updatePageContent);