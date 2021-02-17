function updatePageContentOnClick() {
  
  var element1 = document.getElementById('headingElement');
  console.log(`Current heading on the page : ${element1.innerText}`);
  element1.firstChild.nodeValue = 'New Heading';
  console.log(`Changed the heading on the page to :${element1.innerText}`);

  var element2 = document.getElementById('paragraphElement');
  console.log(`Current paragraph text on the page : ${element2.innerText}`);
  element2.firstChild.nodeValue = 'New paragraph text';
  console.log(`Changed the paragraph text on the page to : ${element2.innerText}`);
}
document.addEventListener('click', updatePageContentOnClick);