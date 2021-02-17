function updatePage(){
    var inputTextElement = document.getElementById('myTextInput');
    document.getElementById('result').firstChild.nodeValue = inputTextElement.value;
}

function loadPageFunction(){
    var buttonElement = document.getElementById('myButtonInput');
    buttonElement.addEventListener('click', updatePage);
}

document.addEventListener('DOMContentLoaded', loadPageFunction);
