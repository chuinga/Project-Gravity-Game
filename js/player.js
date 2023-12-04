class Player{
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.left = 30
        this.top = 690
        this.height = 128
        this.width = 120
        this.directionX = 0
        this.directionY = 0

        this.element = document.createElement('img')
        this.element.src = '../images/biker.png'        
        this.element.style.position = 'absolute'

        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        
        this.gameScreen.appendChild(this.element)
    }

    move() { 
        // x axis movement
        // max left position
        if (this.left >= 30) {
            this.left += this.directionX
        }
        else {
            this.left = 30
        }
        // max right position
        if (this.left <= 870 - this.width) {
            this.left += this.directionX
        }
        else {
            this.left = 870 - this.width
        }
        // y axis movement
        // max bottom position
        if (this.top <= 690) {
            this.top += this.directionY
        }
        else {
            this.top = 690
        }
        // max top position
        if (this.top >= 690 - this.height) {
            this.top += this.directionY
        }
        else {
            this.top = 690 - this.height
        }
        this.updatePosition()        
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true
        } else {
          return false
        }
      }
}