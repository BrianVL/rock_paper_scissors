function getComputerChoice () {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
    }
}

function playRPS (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    }
    else {
        return 'Error';
    }
}