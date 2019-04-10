var guessNumber = document.querySelector("#input");
var guessedNumber = 0;
var input = document.querySelector("#input");
var selectedNumber = randomNumber();
var guessButton = document.querySelector("button");
var body = document.querySelector("body");
var conditionStatement = document.querySelector("#conditionStatement");
var lifeLeft = 10;
var comment = "Your last guess was ";
var lowOrHigh = document.querySelector("#lowOrHigh");

function randomNumber() {
  var randNum = Math.floor(Math.random() * 156);
  return randNum;
}

guessNumber.addEventListener("change", function() {
  guessedNumber = Number(document.querySelector("#input").value);
});

guessButton.addEventListener("click", function() {
  if (guessedNumber === selectedNumber) {
    body.style.background = "#C6F6D5";
    guessNumber.disabled = true;
    guessButton.disabled = true;
    conditionStatement.textContent =
      "Correct! You got it in " + (10 - lifeLeft) + " turns.";
    lowOrHigh.textContent = "Congratulations, You Won!";
  } else {
    body.style.background = "#fed7d7";
    conditionStatement.textContent = livesLeft();
    guessNumber.value = "";
    if (guessedNumber > selectedNumber) {
      lowOrHigh.textContent = comment + "too high!";
    } else {
      lowOrHigh.textContent = comment + "too low!";
    }
  }
});

function livesLeft() {
  if (lifeLeft <= 10 && lifeLeft > 2) {
    lifeLeft -= 1;
    return "Wrong! You have " + lifeLeft + " turns left.";
  } else if (lifeLeft < 3 && lifeLeft > 1) {
    lifeLeft -= 1;
    return "Wrong! You have " + lifeLeft + " turn left.";
  } else {
    lifeLeft -= 1;
    return "Game Over! You have no more turns.";
  }
}
