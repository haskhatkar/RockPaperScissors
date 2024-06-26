const getComputerHand = () => {
    choices = ["rock", "paper", "scissors"];
    randomInt = Math.floor(Math.random()*choices.length);
    return choices[randomInt];
}

console.log(getComputerHand());


const getHumanHand = () => {
    const ask = prompt("Choose rock paper or scissors").toLowerCase();
    if (["rock", "paper", "scissors"].includes(ask)) {
        return ask;
    } else {
        alert("Wrong! Choose rock paper or scissors!");
        return getHumanHand();
    }
};

console.log(getHumanHand());

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const roundOne = (humanHand, computerHand) => {
        humanHand = humanHand.toLowerCase();

        if (humanHand === computerHand) {
            console.log(`It's a tie! Both played ${humanHand}`);
        } else if (
            (humanHand === "rock" && computerHand === "scissors") ||
            (humanHand === "paper" && computerHand === "rock") ||
            (humanHand === "scissors" && computerHand === "paper"))
        {
            console.log(`You win! Played: ${humanHand} and Computer played ${computerHand}`);
            humanScore++;
        } else {
            console.log(`You lose! Played: ${humanHand} and Computer played ${computerHand}`);
            computerScore++;
        }

        console.log(`Current score is ${humanScore} for Player and ${computerScore} for Computer`);
    }
    for (i=0; i<7; i++) {
        let humanCount = getHumanHand();
        let computerCount = getComputerHand();
        roundOne(humanCount, computerCount);
    }


    if (humanScore > computerScore) {
        console.log(`You won the game!!! With ${humanScore} points vs ${computerScore} points for computer`)
    } else if (humanScore < computerScore) {
        console.log(`You lost the game!!! With ${humanScore} points vs ${computerScore} points for Computer`)
    } else {
        console.log("It's a tie game!!!!");
    }

};

playGame();