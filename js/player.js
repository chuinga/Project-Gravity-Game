class Player{
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.left = 40
        this.top = 690
        this.height = 128
        this.width = 120
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
        //this.left += 1
        requestAnimationFrame(this.move)

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }
}