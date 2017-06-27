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
    var emptyCells = gameBoard.querySelectorAll('td:not(.coin)');
    console.log(emptyCells)
    var target = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    target.classList.add('coin')
}


gameBoard.addEventListener('click', function (event) {
    if (event.target.classList.contains('coin')) {
            event.target.classList.remove('coin');
            wynik += 1;
        tablicaWynikow.innerText = wynik;



    }
});

//
// $(document).ready(function() {
//     var $scoreBoard = $('#tablica-wynikow');
//
//     $('#game-board td.coin').click(function() {
//         $(this).removeClass('coin');
//         $scoreBoard.text(wynik += 1);
//     })
// });

$('#orderForm').submit(function(event){
    event.preventDefault();
    $('#game').show();

});