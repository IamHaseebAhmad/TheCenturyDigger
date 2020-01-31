
//var player = [0, 1];
var playerScore = [0, 1];
var currentScore = 0;
var activePlayer = 0;

document.querySelector('.dice-img').style.display = 'none';

document.getElementById('player-score-0').textContent = '0';
document.getElementById('player-current-score-0').textContent = '0';
document.getElementById('player-score-1').textContent = '0';
document.getElementById('player-current-score-1').textContent = '0';

// Hide the Player 2 Red Dot
document.querySelector('.dot_1').style.display = 'none';

// When Roll Dice Button Click
document.querySelector('.menu-roll-btn').addEventListener('click', function() {
    
    var num = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice-img');
    diceDOM.style.display = 'block';
    diceDOM.src = 'Dice-icons/dice-' + num + '.jpg';

    if (num !== 1){
        currentScore += num;
        document.querySelector('#player-current-score-' + activePlayer).textContent = currentScore;
    }
    else{
        currentScore = 0;
        document.querySelector('#player-current-score-' + activePlayer).textContent = currentScore;

        if (activePlayer === 0){
            activePlayer = 1;
            document.querySelector('.dot_1').style.display = 'inline-block';
            document.querySelector('.dot_0').style.display = 'none';
        }else{
            activePlayer = 0;
            document.querySelector('.dot_1').style.display = 'none';
            document.querySelector('.dot_0').style.display = 'inline-block';
        }
    }
});

document.querySelector('.menu-hold-btn').addEventListener('click', function() {

    if (activePlayer === 0){
        playerScore[activePlayer] += currentScore;
        document.getElementById('player-score-0').textContent = playerScore[activePlayer];
        checkWinner(activePlayer);
    }else{

        playerScore[activePlayer] += currentScore;
        document.getElementById('player-score-1').textContent = playerScore[activePlayer];
        checkWinner(activePlayer);
    }

    if (checkWinner(activePlayer) === 'NotWon'){
        currentScore = 0;
        document.querySelector('#player-current-score-' + activePlayer).textContent = currentScore;

        if (activePlayer === 0){
            activePlayer = 1;
            document.querySelector('.dot_1').style.display = 'inline-block';
            document.querySelector('.dot_0').style.display = 'none';
        }else{
            activePlayer = 0;
            document.querySelector('.dot_1').style.display = 'none';
            document.querySelector('.dot_0').style.display = 'inline-block';
        }
    }
    
    if (checkWinner(activePlayer) === 'Won'){
        document.querySelector('.dice-img').style.display = 'none';
        document.querySelector('.menu').style.display = 'none';
    }
    document.querySelector('.dice-img').src = 'Dice-icons/dice-1' + '.jpg';
});

function checkWinner(activePlayer){
    if (playerScore[activePlayer] >= 100){
        document.querySelector('#player-name-' + activePlayer).textContent = 'WINNER';
        currentScore = 0;
        document.querySelector('#player-current-score-' + activePlayer).textContent = currentScore;
        return 'Won';
    }
    else{
        return 'NotWon'
    }
}



