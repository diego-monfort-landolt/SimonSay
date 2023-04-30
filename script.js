const round = document.getElementById('round')
const simonButtons = document.getElementsByClassName('square')
const startButton = document.getElementById('startButton')

class simon {
    constructor(simonButtons, startButton, round) {
        this.round = 0
        this.userPosition = 0
        this.totalRounds = 10
        this.sequence = []
        this.speed = 1000
        this.blockedButtons = true
        this.buttons = Array.from(simonButtons)
        this.display = {
            startButton,
            round
        }
        this.errorSound = new Audio('./sounds/error.wav')
        this.buttonSounds = [
            new Audio('./sounds/sound1.wav'),
            new Audio('./sounds/sound2.wav'),
            new Audio('./sounds/sound3.wav'),
            new Audio('./sounds/sound4.wav')
        ]
    }
}
const simon = new simon(simonButtons, startButton, round)
simon.init()
//inicia simon
init() {

}

//comienza el juego
startGame() {

}
//Actualiza la ronda y el tablero
updateRound(value) {

}
//crea el array aleatorio de bottones
createSequence() {

}
//Devuelve un numero al azar entre 0 y 3
getRandomColor() {

}
//Ejecuta funcion cuando se hace click en btn
buttonClick(value) {

}
// Valida si el btn que toca el usr es corecto sound
validateChosenColor(value) {
    
}