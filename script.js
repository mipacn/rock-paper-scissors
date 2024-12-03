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


let gamesCount = 0
let humanScore = 0
let computerScore = 0




const div = document.querySelector(".two")
const div1 = document.querySelector(".one")


const hscore = document.createElement("h3")
div.append(hscore)
const cscore = document.createElement("h3")
div.append(cscore)
hscore.textContent = ("your score is: 0")
cscore.textContent = ("the computer score is: 0" )

const winner = document.createElement("h1")
div.append(winner)

let aclaration = document.createElement("h3")
div.append(aclaration)


function playRock (comp) {

    const cchoice = document.createElement("p")
    cchoice.textContent = ("the machine choice was "+ comp)
    div.append(cchoice)

    const result = document.createElement("p")
    div.append(result)

    if (comp == "rock"){
        result.textContent = "this round ended in a tie"

    }
    else if (comp == "paper"){
        result.textContent = "computer won this round"
        cscore.textContent = ("the computer score is: " + (computerScore += 1))
    }
    else {
        result.textContent = "you won this round"
        hscore.textContent = ("your score is: " + (humanScore += 1))
    }

    if (humanScore == 5){
        winner.textContent = "you won the game"
        aclaration.textContent = "refresh to play again"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true

        let refresh = document.createElement("button")
        refresh.textContent = "refresh"
        div1.append(refresh)

        refresh.addEventListener("click", () => location.reload()) 
    }
    
    else if (computerScore == 5){
        winner.textContent = "the computer won the game"
        aclaration.textContent = "refresh to play again"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true

        let refresh = document.createElement("button")
        refresh.textContent = "refresh"
        div1.append(refresh)

        refresh.addEventListener("click", () => location.reload())
    }
        
}

function playPaper (comp) {
    const cchoice = document.createElement("p")
    cchoice.textContent = ("the machine choice was "+ comp)
    div.append(cchoice)

    const result = document.createElement("p")
    div.append(result)

    if (comp == "paper"){
        result.textContent = "this round ended in a tie"

    }
    else if (comp == "scissors"){
        result.textContent = "computer won this round"
        cscore.textContent = ("the computer score is: " + (computerScore += 1))
    }
    else {
        result.textContent = "you won this round"
        hscore.textContent = ("your score is: " + (humanScore += 1))
    }

    if (humanScore == 5){
        winner.textContent = "you won the game"
        aclaration.textContent = "refresh to play again"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true

        let refresh = document.createElement("button")
        refresh.textContent = "refresh"
        div1.append(refresh)

        refresh.addEventListener("click", () => location.reload()) 

    }
    
    else if (computerScore == 5){
        aclaration.textContent = "refresh to play again"
        winner.textContent = "the computer won the game"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true

        let refresh = document.createElement("button")
        refresh.textContent = "refresh"
        div1.append(refresh)

        refresh.addEventListener("click", () => location.reload()) 
    }
        
}

function playScissors (comp) {
    const cchoice = document.createElement("p")
    cchoice.textContent = ("the machine choice was "+ comp)
    div.append(cchoice)

    const result = document.createElement("p")
    div.append(result)

    if (comp == "scissors"){
        result.textContent = "this round ended in a tie"

    }
    else if (comp == "rock"){
        result.textContent = "computer won this round"
        cscore.textContent = ("the computer score is: " + (computerScore += 1))
    }
    else {
        result.textContent = "you won this round"
        hscore.textContent = ("your score is: " + (humanScore += 1))
    }

    if (humanScore == 5){
        winner.textContent = "you won the game"
        aclaration.textContent = "refresh to play again"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true

        let refresh = document.createElement("button")
        refresh.textContent = "refresh"
        div1.append(refresh)

        refresh.addEventListener("click", () => location.reload()) 
    }
    
    else if (computerScore == 5){
        winner.textContent = "the computer won the game"
        aclaration.textContent = "refresh to play again"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true

        let refresh = document.createElement("button")
        refresh.textContent = "refresh"
        div1.append(refresh)

        refresh.addEventListener("click", () => location.reload()) 
    }
     
}


let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")

btn1.addEventListener("click", () => playRock(computerChoice()))
btn2.addEventListener("click", () => playPaper(computerChoice()))
btn3.addEventListener("click", () => playScissors(computerChoice()))



// playRound(computerChoice(), humanChoice())s
/*x 
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
*/


