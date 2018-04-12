//starts page when the game loads
document.onload = startGame();


var move;


//when the game starts, aasigns first player
function startGame() {

    if(Math.random() < 0.5) {
        player = "X";
    } else {
        player = "O";
    }
    winner = null;
    document.getElementById("info").textContent = "player " + player + " will start the game!";

}

//creates tuen for a player if the game is not over or the box has not been clicked
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

//this allows for the next move
function switchTurn() {
    if (getWinner(player)) {
        document.getElementById("info").textContent = "Player " + player + " is the winner";
        winner = player;
    }
   /* else if (checkTie()) {
        document.getElementById("info").textContent = "It's a tie...Play again!";
            
    } */
    
    else if (player == "X") {
        player = "O";
        document.getElementById("info").textContent = "It's player " + player + "'s turn to play";
    }  else {
        player = "X";
        document.getElementById("info").textContent = "It's player " + player + "'s turn to play";
    } 
}

// gets the value of individual boxes
function getBox(num) {
    return document.getElementById("box" + num).innerText;
        
}

// checks to see if values in a row are the same
function checkRow(a, b, c, turn) {
    var result = false;
    if (getBox(a) == turn && getBox(b) == turn && getBox(c) == turn) {
        result = true;
    }
    return result;

}

// gets winner by checking if row values are equal in  number of possible ways
function getWinner(turn) {
    var result = false;
    if (checkRow(1, 2, 3, turn) || checkRow(4, 5, 6, turn) || checkRow(7, 8, 9, turn) ||
        checkRow(1, 4, 7, turn) || checkRow(2, 5, 8, turn) || checkRow(3, 6, 9, turn) || 
        checkRow(1, 5, 9, turn) || checkRow(3, 5, 7, turn) ) {
        result = true;
    }
    return result;

}

// checks to see if the game is over
function gameOver() {
    for(var i = 0; i < 10; i++) {
        if(getBox(i) == "") {
            return false;
        }
        return true;
    }
}

//checks to see if the game is a draw

// clears each box 
function clear(num) {
    document.getElementById("box" + num).innerText = "";
    }
// resets the game by clearing all boxes
function restart() {
    for (var i = 1; i <= 9; i++) {
        clear(i);
        startGame();
    }
}

// restarts the game the button is clicked
document.getElementById("replay").addEventListener("click", restart);
          

 

