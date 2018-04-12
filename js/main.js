document.onload = startGame();

var score;
var move;



function startGame() {

    if(Math.random() < 0.5) {
        player = "X";
    } else {
        player = "O";
    }
    winner = null;
    document.getElementById("info").textContent = "player " + player + " will start the game!";

}

function playerTurn(b) {
    if (winner !== null) {
        document.getElementById("info").textContent = "Player " + player + " already won";
    }
    else if (b.innerText == "") {
        b.innerText = player;
        switchTurn();
    } else {
        document.getElementById("info").textContent = "This has already been clicked";
    }
    
}


function switchTurn() {
    if (getWinner(player)) {
        document.getElementById("info").textContent = "Player " + player + " is the winner";
        winner = player;
    } 
    else if (player == "X") {
        player = "O";
        document.getElementById("info").textContent = "It's player " + player + "'s turn to play";
    } else {
        player = "X";
        document.getElementById("info").textContent = "It's player " + player + "'s turn to play";
    }
}

function getBox(num) {
    return document.getElementById("box" + num).innerText;
        
}

function checkRow(a, b, c, turn) {
    var result = false;
    if (getBox(a) == turn && getBox(b) == turn && getBox(c) == turn) {
        result = true;
    }
    return result;

}

function getWinner(turn) {
    var result = false;
    if (checkRow(1, 2, 3, turn) || checkRow(4, 5, 6, turn) || checkRow(7, 8, 9, turn) ||
        checkRow(1, 4, 7, turn) || checkRow(2, 5, 8, turn) || checkRow(3, 6, 9, turn) || 
        checkRow(1, 5, 9, turn) || checkRow(3, 5, 7, turn) ) {
        result = true;
    }
    return result;

}


function clear(num) {
    document.getElementById("box" + num).innerText = "";
    }

function restart() {
    for (var i = 1; i <= 9; i++) {
        clear(i);
        startGame();
    }
}

document.getElementById("replay").addEventListener("click", restart);
          

 

