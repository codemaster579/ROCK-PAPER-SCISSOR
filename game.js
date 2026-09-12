let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {

    choice.onclick = function () {

        // Get the clicked choice
        let userChoice = choice.id;

        // Computer choice
        let options = ["rock", "paper", "scissor"];
        let randomIndex = Math.floor(Math.random() * 3);
        let compChoice = options[randomIndex];

        // Draw
        if (userChoice === compChoice) {
            msg.innerText = "Game Draw! Play Again";
        }

        // User chooses Rock
        else if (userChoice === "rock") {

            if (compChoice === "scissor") {
                userScore++;
                userScorePara.innerText = userScore;
                msg.innerText = "You Win!";
            }
            else {
                compScore++;
                compScorePara.innerText = compScore;
                msg.innerText = "You Lose!";
            }
        }

        // User chooses Paper
        else if (userChoice === "paper") {

            if (compChoice === "rock") {
                userScore++;
                userScorePara.innerText = userScore;
                msg.innerText = "You Win!";
            }
            else {
                compScore++;
                compScorePara.innerText = compScore;
                msg.innerText = "You Lose!";
            }
        }

        // User chooses Scissor
        else if (userChoice === "scissor") {

            if (compChoice === "paper") {
                userScore++;
                userScorePara.innerText = userScore;
                msg.innerText = "You Win!";
            }
            else {
                compScore++;
                compScorePara.innerText = compScore;
                msg.innerText = "You Lose!";
            }
        }
    };
});