let userScore = 0;
let computerScore = 0;
let round = 1;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    updateGameInfo(userChoice, computerChoice);
    
    const result = determineWinner(userChoice, computerChoice);
    updateScore(result);

    updateRoundInfo();

    if (round > 5) {
        declareChampion();
        reset();
    }
    
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function updateScore(result) {
    if (result === 'user') {
        userScore++;
        
    } else if (result === 'computer') {
        computerScore++;
    }
    document.getElementById('user-scores').innerText = `Users's scores: : ${userScore}`;
    document.getElementById('computer-scores').innerText = `Computer's scores: : ${computerScore}`;
}

function updateRoundInfo() {
    document.getElementById('round-info').innerText = `Round: ${round}`;
    round++;
}

function declareChampion() {
    let winner;

    if (userScore > computerScore) {
        winner = 'You';
    } else if (userScore < computerScore) {
        winner = 'Computer';
    } else {
        winner = 'It\'s a tie';
    }

    document.getElementById('result-info').innerText = `Game Over! Winner: ${winner}`;
    
    // reset();
}



function updateGameInfo(userChoice, computerChoice) {
    document.getElementById('user-choice').innerText = `Your choice: ${userChoice}`;
    document.getElementById('computer-choice').innerText = `Computer's choice: ${computerChoice}`;
    document.getElementById('result-info').innerText = 'Result: '; // Clear previous result info
}
function reset(){
    // Reset scores and round for a new game
    userScore = 0;
    computerScore = 0;
    round = 1;
}