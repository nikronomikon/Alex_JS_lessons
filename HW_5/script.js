let convertClickFunc = () => {
    let text = document.getElementById('input_text');
    text.classList.add('magic_effect');
    setTimeout(() => text.classList.remove('magic_effect'), 2000);
    let converteredEl = document.getElementsByClassName('converted_text')[0];
    let converteredText = text.value;
    if (document.getElementsByClassName('new_element')[0] === undefined) 
    {
        let div = document.createElement('div');
        div.className = "new_element";
        div.innerHTML = converteredText;
        converteredEl.append(div);
    }
    else 
    { 
        let existDiv = document.getElementsByClassName('new_element')[0];
        existDiv.innerHTML = converteredText;
    }
    
}
let clearLeft = () => {
    let existingText = document.getElementById('input_text');
    existingText.value = '';
}
let clearRight = () => {
    let existingText = document.getElementsByClassName('new_element')[0];
    existingText.remove();
}
/* 
let setColorBlack = () => {
    let textColorEl = document.getElementsByClassName('converted_text')[0];
    textColorEl.setAttribute('color', 'black');
}
let setColorBlue = () => {
    let textColorEl = document.getElementsByClassName('converted_text')[0];
    textColorEl.setAttribute('color', 'blue');
}
let setColorCoral = () => {
    let textColorEl = document.getElementsByClassName('converted_text')[0];
    textColorEl.setAttribute('color', 'coral');
}
*/


// </br>Новый <i>текст</i> он <b>важный</b> самый!