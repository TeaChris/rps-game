// set computer and player score to 👉 0
const totalScore = {
    computerScore: 0,
    playerScore: 0
}

// function that makes computer select random choices
function getComputerChoice() {
    // choice which the computer can select from
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    // returns random shoice
    const randomChoice = Math.floor(Math.random() * 3)
    return rpsChoice[randomChoice]
}

// function thst compares between player choice and the computer's
function getResult(playerChoice, computerChoice) {

    // situation where human draws is 👉 0
    if (playerChoice == computerChoice) {
        score = 0

        // situation where human wins is 👉 0
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    } else if ( playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1

        // situation where human lose is 👉 -1
    } else {
        score = -1
    }
    // return score
    return score
}

// printing updates to the DOM based on your result 👉 'You WIn!', 'You Lose!', 'It's a Tie!'
function showResult(score, playerChoice, computerChoice) {
    
    // grabing element from HTML
    const resultDiv = document.getElementById('result')
    const descDiv = document.getElementById('discription')
    const scoreDiv = document.getElementById('score')

    // show result in document
    if (score == -1) {
        resultDiv.innerText = 'You Lose!❌'
    } else if (score == 0) {
        resultDiv.innerText = 'It`s a Tie!🤝'
    } else {
        resultDiv.innerText = 'You Won!😍🎉'
    }

    descDiv.innerText = `👨‍🦰${playerChoice} vs 🤖${computerChoice}`
    scoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}

// calculating who won and printing it in document
function onClickRPS(playerChoice) {
    console.log(playerChoice)
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    console.log({score})
    console.log(totalScore)
    showResult(score, playerChoice, computerChoice)
}

// making RPS buttons clickable and making them perfom certain function
function playGame() {
    // selecting all RPS buttons with querySelector
    const rpsButtons = document.querySelectorAll('.rpsButton')
    // printing each button's function to the console
    rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

    // looping through each button
    // adding click listener to each button
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
    // adding click listener that ends game
    const endgameButton = document.getElementById('endGameButtton')
    endgameButton.onclick = () => endGame(totalScore)
}

// clearing all text on DOM using the endGame button
function endGame() {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultDiv = document.getElementById('result')
    const descDiv = document.getElementById('discription')
    const scoreDiv = document.getElementById('score')
    
    resultDiv.innerText = ''
    descDiv.innerText = ''
    scoreDiv.innerText = ''
}

playGame()