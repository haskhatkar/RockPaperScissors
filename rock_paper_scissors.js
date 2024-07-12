let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('.element-button')

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
})

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let choicesIndex = Math.floor(Math.random() * choices.length);

    return choices[choicesIndex];
};

console.log(computerPlay());


function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if (playerSelection == computerSelection) {
        result = '<br>You both picked ' + playerSelection
    }

    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection = 'scissors' && computerSelection == 'paper')) {
            playerScore += 1
            result = `<br><b>You win: </b><br>` + playerSelection + ` beats ` + computerSelection;

                if (playerScore == 5) {
                    result += `<br><br>Player wins game. Reload page to play again.`
                    disableButtons()
                }
    }

    else {
        computerScore += 1
        result = `<br><b>Defeat:</b><br>` + computerSelection + ` beats ` + playerSelection;

            if (computerScore == 5) {
                result += `<br><br>Computer wins game. Reload the page to play again.`
                disableButtons()
            }
        }

        updateChoices(playerSelection, computerSelection);

        document.getElementById('result').innerHTML = result
        document.getElementById('result-playerscore').innerHTML = `<b>Player:</b><br> ${playerScore}`;
        document.getElementById('result-computerscore').innerHTML = `<b>Computer:</b><br>
    ${computerScore}`;

}

function updateChoices(playerSelection, computerSelection) {
    // create variables to link to our HTML elements
    const playerElement = document.getElementById("player-element"); 
    const computerElement = document.getElementById("computer-element"); 
    // assigns classList property to our variables, than adds 'active' class to our classList 
    playerElement.classList.add("active");
    computerElement.classList.add("active"); 
    
    // creates a second set of variables to pull our button.value
    const playerElementClassName = `${playerSelection}`
    const computerElementClassName = `${computerSelection}`
    
    playerElement.classList = `${playerElementClassName} active`;
    computerElement.classList = `${computerElementClassName} active`;
    
  }
