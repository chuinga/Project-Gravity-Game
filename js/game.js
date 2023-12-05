class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.endScreen = document.getElementById('game-end')
        this.height = 800
        this.width = 900
        this.player = null
        this.obstacles = []
        this.animateId = null
        this.score = 0
        this.lives = 1
        this.isGameOver = false
    }

    start() {
        this.startScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'
        this.endScreen.style.display = 'none'
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.player = new Player(this.gameScreen)
        this.gameLoop()
    }

    gameLoop() {
        this.player.move()

        const nextObstacles = []
        this.obstacles.forEach(currentObstacle => {
            currentObstacle.move()            
            if(currentObstacle.left > -100) {
                if(this.player.didCollide(currentObstacle)) {
                     console.log('colision')    
                     currentObstacle.element.remove()  
                     this.lives -= 1  
                     if (this.lives <= 0) {
                        this.isGameOver = true
                     }
                }
                else {
                    nextObstacles.push(currentObstacle)
                }                
            }
            else {
                currentObstacle.element.remove()
                this.score += 10
            }
        })
        this.obstacles = nextObstacles
        function randomInterval(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        const random = randomInterval(200, 400)
        if (this.animateId % random === 0) {
            this.obstacles.push(new Obstacles(this.gameScreen))
        }

        /*if (this.animateId % 300 === 0) {
            this.obstacles.push(new Obstacles(this.gameScreen))
        }*/

        //document.getElementById('scores').innerText = this.score
        document.getElementById('lives').innerText = this.lives

        if (this.isGameOver) {
            this.gameScreen.style.display = 'none'
            this.endScreen.style.display = 'block'
            this.player.element.remove()
        }
        else {
          this.animateId = requestAnimationFrame(() => this.gameLoop()
        )  
        }

        
    }
}