var gameBoard = document.querySelector('#game-board');
var tablicaWynikow = document.querySelector('#tablica-wynikow')
var size = 10;
var tr, td;
var intervalId;
var handleClick;


$('#play').click(function () {
    //czyszczenie planszy po poprzedniej grze
    clearInterval(intervalId);
    gameBoard.removeEventListener('click', handleClick);
    var wynik = 0;
    tablicaWynikow.innerText = wynik;
    var timeCountdown = 10;
    $('#timer').text(timeCountdown);
    creatBoard();
    //ustawienie interwalu dla zegara
    intervalId = setInterval(function () {
        if (timeCountdown === 0 || wynik === 10) {
            //zakonczenie gry czas/wynik
            clearInterval(intervalId);
            gameBoard.removeEventListener('click', handleClick);
            return

        }
        timeCountdown -= 1;
        $('#timer').text(timeCountdown);


    }, 1000);
    //zdefiniowanie funkcji obslugujacej klikniecie
    handleClick = function (event) {
        if (event.target.classList.contains('coin')) {
            event.target.classList.remove('coin');
            wynik += 1;
            tablicaWynikow.innerText = wynik;
        }
    };
    //zarejestrowanie funkcji na klikniecie
    gameBoard.addEventListener('click', handleClick);
});

//funkcja budujace plansze i losujaca pola z monetami
function creatBoard() {
    $(gameBoard).empty();
    for (var i = 0; i < size; i += 1) {
        tr = document.createElement('tr');
        for (var j = 0; j < size; j += 1) {
            td = document.createElement('td');
            td.setAttribute('data-x', j);
            td.setAttribute('data-y', i);
            tr.appendChild(td)
        }
        gameBoard.appendChild(tr)
    }

    for (var i = 0; i < 10; i += 1) {
        var emptyCells = gameBoard.querySelectorAll('td:not(.coin)');
        var target = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        target.classList.add('coin')
    }
    var pacMan = $('[data-x="0"][data-y="0"]', gameBoard);
    pacMan.addClass('pacman');
    pacMan.onkeydown()
}


//
// $(document).ready(function() {
//     var $scoreBoard = $('#tablica-wynikow');
//
//     $('#game-board td.coin').click(function() {
//         $(this).removeClass('coin');
//         $scoreBoard.text(wynik += 1);
//     })
// });

$('#orderForm').submit(function (event) {
    event.preventDefault();
    $('#game').show();
    $('#formularz').hide();

    $('html,body').animate({
        scrollTop: $("#game").offset().top
    }, 'slow');

});
