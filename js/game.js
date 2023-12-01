class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.height = 800
        this.width = 900
        this.player = null
    }

    start() {
        this.startScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.player = new Player(this.gameScreen)
        this.gameLoop()
    }

    gameLoop() {
        this.player.move()

        requestAnimationFrame(() => {
            this.gameLoop()
        })
    }
}