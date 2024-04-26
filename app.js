// Generate Dice Number
var dice = document.getElementById("dice");
var winLoss = document.getElementById("winLoss");
var diceInput = document.getElementById("diceInput");
var roundCountDisplay = document.getElementById("roundCount");
var winCountDisplay = document.getElementById("winCount");
var roundCount = 1;
var winCount = 0;

function generateDiceNumber() {
    roundCountDisplay.innerText = "Round Count: " + roundCount;
    winCountDisplay.innerText = "Win Count: " + winCount;
  if (roundCount >= 10) {
    if (winCount >= 3) {
      winLoss.innerText = "Congratulations! You won the game!";
      winLoss.style.color = "green";
      winLoss.style.backgroundColor = "aqua";
    } else {
      winLoss.innerText = "Sorry! You lost the game.";
      winLoss.style.color = "red";
      winLoss.style.backgroundColor = "black";
    }
    diceInput.disabled = true;
    return;
  }
  var userValue = diceInput.value;
  if (userValue < 7) {
    var diceNumber = Math.ceil(Math.random() * 6);
    dice.innerText = diceNumber;
    if (userValue == diceNumber) {
      winLoss.innerText = "You win";
      winLoss.style.color = "Green";
      winLoss.style.backgroundColor = "aqua";
      winCount++;
    } else {
      winLoss.innerText = "You loss, Try Again";
      winLoss.style.color = "red";
      winLoss.style.backgroundColor = "black";
    }
  } else {
    winLoss.innerText = "Enter Valid Number!";
    winLoss.style.color = "black";
    winLoss.style.backgroundColor = "grey";
  }
  roundCount++;
}