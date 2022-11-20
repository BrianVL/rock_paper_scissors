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

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        alert ('Draw');
        return 0;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'rock') {
        alert (`You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`);
        return -1;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper') {
        alert (`You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
        return 1;
    }
    else {
        alert ('Error');
        return 0;
    }
}

function game () {
    let score = 0;
    let roundResult = 0;
    let finalResult = '';
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you choose Rock, Paper or Scissors?");
        roundResult = playRound (playerSelection, getComputerChoice());
        score = score + roundResult;
    }
    if (score > 0) {
        finalResult = 'You win';
    }
    else if (score < 0) {
        finalResult = 'You lose';
    }
    else {
        finalResult = 'It\'s a draw';
    }
    alert (`Your score is ${score}. ${finalResult}`);
}