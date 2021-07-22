// challange 1 age and days
function ageindays() {
    var birthyear = prompt('What year were u born in?');
    var ageindayss = (2021 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageindayss + ' days old wooho!')
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageindayss);
}

function reset(){
    document.getElementById('ageindays').remove();
}