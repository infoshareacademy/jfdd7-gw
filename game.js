var gameBoard = document.querySelector('#game-board');
var tablicaWynikow = document.querySelector('#tablica-wynikow')
var size = 10;
var tr, td;
var wynik = 0;




for (var i = 0; i < size; i += 1) {
    tr = document.createElement('tr');
    for (var j = 0; j < size; j += 1) {
        td = document.createElement('td');
        tr.appendChild(td)
    }
    gameBoard.appendChild(tr)
}

for (var i = 0; i < 10; i += 1) {
    var target = gameBoard.querySelectorAll('td')[Math.floor(Math.random() * size * size)];
    target.classList.add('coin')
}


gameBoard.addEventListener('click', function (event) {
    if (event.target.classList.contains('coin')) {
            event.target.classList.remove('coin');
            wynik += 1;
             var score = [];
            score.push(wynik);
             var textWynik = document.createTextNode(score[score.length - 1]);
             tablicaWynikow.appendChild(textWynik);
                 if (tablicaWynikow.childElementCount > 2){
                     tablicaWynikow.removeChild(tablicaWynikow.childNodes[0]);
        }


    }
})

