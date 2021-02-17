function updatePage(){
    var inputTextElement = document.getElementById('myTextInput');
    document.getElementById('result').firstChild.nodeValue = inputTextElement.value;
}

function loadPageFunction(){
    var inputTextElement = document.getElementById('myTextInput');
    inputTextElement.addEventListener('keyup', updatePage);
}

document.addEventListener('DOMContentLoaded', loadPageFunction);
