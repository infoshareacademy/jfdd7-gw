var gameBoard = document.querySelector('#game-board');
var tablicaWynikow = document.querySelector('#tablica-wynikow')
var size = 10;
var tr, td;
var wynik = 0;
var timeCountdown = 3;
var intervalId = setInterval(function() {
    if (timeCountdown === 0 || wynik === 10) {
        clearInterval(intervalId);
        return
    }
    timeCountdown -= 1;
    $('#timer').text(timeCountdown);
    gameBoard.removeEventListener('click', handleClick);
}, 1000);



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
var handleClick = function (event) {
    if (event.target.classList.contains('coin')) {
        event.target.classList.remove('coin');
        wynik += 1;
        tablicaWynikow.innerText = wynik;
    }
}

gameBoard.addEventListener('click', handleClick);

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
    $('#formularz').hide();

    $('html,body').animate({
            scrollTop: $("#game").offset().top
        }, 'slow');

});