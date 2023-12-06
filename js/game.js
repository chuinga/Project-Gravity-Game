class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.endScreen = document.getElementById('game-end')
        //this.height = 80
        //this.width = 100
        this.height = 800
        this.width = 900
        this.rider = null
        this.obstacles = []
        this.bonus = []
        this.animateId = null
        this.score = 0
        this.lives = 1
        this.isGameOver = false
        this.finalScore = 0
        this.gameMusic = new Audio('/sounds/game.mp3')
        this.ouchSound = new Audio('/sounds/ouch.mp3')
        this.yummySound = new Audio('/sounds/yummy.mp3')
        this.gameOverSound = new Audio('/sounds/game-over.mp3')
        this.endMusic = new Audio('/sounds/end.mp3')
        this.gameMusic.volume = 0.2
        this.ouchSound.volume = 0.3
        this.yummySound.volume = 0.6
        this.gameOverSound.volume = 0.1
        this.endMusic.volume = 0.1
        this.bottle = false
        

        this.snackDb = ['images/apple.png', 'images/avocado.png', 'images/whey.png']        
        this.bottleDb = ['images/beirao.png', 'images/barcavelha.png', 'images/sagres.png']
        
        
    }

    showImage() {
        if(this.bottle) {
           const a = Math.floor(Math.random() * this.bottleDb.length);
            return this.bottleDb[a]; 
        }
        else {
            const a = Math.floor(Math.random() * this.snackDb.length);
            return this.snackDb[a];         
        }            
    } 

    start() {
        this.startScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'
        this.endScreen.style.display = 'none'
        this.endMusic.pause()        
        this.gameMusic.play()
        //this.gameScreen.style.height = `${this.height}vh`
        //this.gameScreen.style.width = `${this.width}vw`
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.rider = new Rider(this.gameScreen)
        this.gameLoop()
    }

    gameLoop() {
        this.rider.move()
        
        // obstacles behaviour
        const nextObstacles = []
        this.obstacles.forEach(currentObstacle => {
            currentObstacle.move()            
            if(currentObstacle.left > -100) {
                if(this.rider.didCollide(currentObstacle)) {  
                    currentObstacle.element.remove()  
                    this.lives -= 1  
                    this.ouchSound.play()
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
        function rndIntvObstacles(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        const randomObstacles = rndIntvObstacles(200, 400)
        if (this.animateId % randomObstacles === 2) {
            this.obstacles.push(new Obstacles(this.gameScreen))      
        }

        // bonus items behaviour
        const nextBonus = []
        this.bonus.forEach(currentBonus => {
            currentBonus.move()            
            if(currentBonus.left > -100) {
                if(this.rider.didCollide(currentBonus)) {
                    currentBonus.element.remove()                     
                    this.yummySound.play() 
                    this.lives += 1
                    this.score += 5                                                              
                }
                else {
                    nextBonus.push(currentBonus)
                }                
            }
            else {
                currentBonus.element.remove()
            }
        })

        this.bonus = nextBonus
        function rndIntvBonus(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        const randomBonus = rndIntvBonus(300, 500)
        if (this.animateId % randomBonus === 1) {
            this.bonus.push(new Bonus(this.gameScreen, this.showImage()))
        }

        document.getElementById('score').innerText = this.score
        document.getElementById('lives').innerText = this.lives

        if (this.isGameOver) {
            this.gameScreen.style.display = 'none'
            this.endScreen.style.display = 'block'  
            this.gameMusic.pause()            
            this.gameOverSound.play()             
            this.endMusic.play()
            this.rider.element.remove()
            document.getElementById('finalScore').innerText = this.score
            console.log(this.finalScore)

        }
        else {
          this.animateId = requestAnimationFrame(() => this.gameLoop()
        )  
        }        
    }
}