var luckySevens = document.forms["luckySevens"];
var startingBet = document.getElementById("startingBet");
var submitButton = document.getElementById("submitButton");
var rolls = 0;
var maxMoney = 0;
var rollsAtMaxMoney = 0;

function validate() {

    luckySevens.className = "needs-validation";

    if (!luckySevens.checkValidity()) {
        luckySevens.className = "was-validated";
        return false;
    }

    playGame()

    document.getElementById("money").innerText = parseInt(startingBet.value, 10);
    document.getElementById("rolls").innerText = rolls;
    document.getElementById("maxMoney").innerText = maxMoney;
    document.getElementById("rollsAtMaxMoney").innerText = rollsAtMaxMoney;

    results.style.display = "block";
    submitButton.innerText = "Play";

    return false;
}

function playGame() {
    money = parseInt(startingBet.value, 10)
    maxMoney = money;

    for(var i = money; money > 0; i) {
        if ((rollDice() + rollDice()) == 7) {
            money += 4;
        } else {
            money--;
        }
        rolls++;
        if (money > maxMoney) {
            maxMoney = money;
            rollsAtMaxMoney = rolls;
        }
    }
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function resetView() {
    luckySevens.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Play";
    rolls = 0;
    maxMoney = 0;
    startingBet.focus();
}