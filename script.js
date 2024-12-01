
function humanChoice() {
    let hchoice
    let newchoice
    hchoice = prompt("rock, paper, or scissors?")
    if (hchoice == null) {
        console.log("please enter a correct value, and refresh to start again")
    }
    else {
        newchoice = hchoice.toLowerCase()
        if (newchoice != "rock" && newchoice != "paper" && newchoice != "scissors"){
        
        }
        else{
            console.log("your choice was " + newchoice)
            return newchoice
        }
    }  
}

function computerChoice () {
    let mchoice
    let random = Math.random()
    let number 

    if (random <= 0.33 ) {
        number = 1
    }

    else if (random > 0.33 && random <= 0.66) {
        number = 2
    }

    else number = 3
    switch(number){
        case 1:
            mchoice = "rock"
            break
        case 2:
            mchoice = "paper"
            break
        default:
            mchoice = "scissors"
    }
    return mchoice
}

let humanScore = 0
let computerScore = 0
let gamesCount = 0

function playRound (comp, pers) {
    if (pers != "rock" && pers != "paper" && pers != "scissors"){
        console.log("please enter a correct value, and refresh to start again")
    }
    else {
        console.log("the machine choice was "+ comp)
        if (comp == "rock" && pers == "paper"){
            console.log("you won this round")
            humanScore += 1
        }
        else if (comp == "rock" && pers == "scissors"){
            console.log("machine won this round")
            computerScore += 1
        }
        else if (comp == "rock" && pers == "rock"){
            console.log("tie")
        }
    
        else if (comp == "paper" && pers == "scissors"){
            console.log("you won this round")
            humanScore += 1
        }
        else if (comp == "paper" && pers == "rock"){
            console.log("machine won this round")
            computerScore += 1
        }
        else if (comp == "paper" && pers == "paper"){
            console.log("tie")
        }
    
        else if (comp == "scissors" && pers == "rock"){
            console.log("you won this round")
            humanScore += 1
        }
        else if (comp == "scissors" && pers == "paper"){
            console.log("computer won this round")
            computerScore += 1
        }
        else console.log("tie")
    
        console.log("your score is: " + humanScore)
        console.log("the computer score is: " + computerScore)
        gamesCount += 1
        return gamesCount     
    }
    
}



function playGame(count){
    if (count < 5) {
        playRound(computerChoice(), humanChoice())
        playGame(playRound(computerChoice(), humanChoice()))
    }
    else {
        console.log("the game has ended")
        if (humanScore < computerScore){
            console.log("the computer has won the game")
        }
        else if (humanScore == computerScore){
            console.log("you have tied")
        }
        else console.log("you have won the game")
    }
}

playGame(playRound(computerChoice(), humanChoice()))



