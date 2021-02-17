function createAlert(){
    var inputTextElement = document.getElementById('myTextInput');
    alert(inputTextElement.value);
}

function loadPageFunction(){
    var buttonElement = document.getElementById('myButtonInput');
    buttonElement.addEventListener('click', createAlert);
}

document.addEventListener('DOMContentLoaded', loadPageFunction);
