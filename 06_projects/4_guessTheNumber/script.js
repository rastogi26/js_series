let randomNumber = parseInt(Math.random()*100+1)

const submit =  document.querySelector('#subt')
const userInput =  document.querySelector('#guessField')
const guessSlot =  document.querySelector('.guesses')
const remaining =  document.querySelector('.lastResult')
const lowOrHi =  document.querySelector('.lowOrHi')
const startOver =  document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess =[]
let numguess = 1

let playGame = true

//if playgame true then start the game

if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

//validate it is between 1 to 100
function validateGuess(guess){
  
    if (isNaN(guess)) {
        alert('Please add a valid number')
    }else if (guess<1) {
        alert('Please enter the number more than 1')
    }else if (guess>100) {
        alert('Please enter the number less than 100')
    }else{
        //if valid number push into array
        // prevGuess.push(guess)
        //if chances over than print
        if (numguess===11) {
            cleanUpGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }else{
            cleanUpGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess)
{
         if (guess===randomNumber) {
             displayMessage(`You won!!`)
             endGame()
         }else if (guess>randomNumber) {
            displayMessage(`Number is higher`)
         }else{
            displayMessage(`Number is lower`)
         }
}

function cleanUpGuess(guess)
{
        userInput.value =''
        guessSlot.innerHTML += `${guess}, `
        numguess++
        remaining.innerHTML =`${11-numguess}`



}

function displayMessage(message)
{
        lowOrHi.innerHTML =`<h2>${message}</h2>`
} 

function endGame(){
         userInput.value =''
         userInput.setAttribute('disabled','')
         p.classList.add('button')
         p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
         startOver.appendChild(p)
         playGame=false
         newGame()


}

function newGame(){
      const newGame = document.querySelector('#newGame')
      newGame.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess=[]
        numguess=1
        guessSlot.innerHTML=''
        remaining.innerHTML =`${11-numguess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
      })
}


