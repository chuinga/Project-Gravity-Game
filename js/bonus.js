class Bonus {
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.left = 1200
        this.top = 758
        this.height = 60    
        this.width = 56
        let bottle = false
        

        const snackDb = ['images/apple.png', 'images/avocado.png', 'images/whey.png']        
        const bottleDb = ['images/beirao.png', 'images/barcavelha.png', 'images/sagres.png']
        
        function showImage() {
            if(bottle) {
               const a = Math.floor(Math.random() * bottleDb.length);
            return bottleDb[a]; 
            }
            else {
                const a = Math.floor(Math.random() * snackDb.length);
            return snackDb[a]; 
            }            
        }    

        document.addEventListener('keydown', event => { 
            if (event.code === 'KeyB') {              
                bottle = true
                console.log(event.code)
            }
            if (event.code === 'KeyS') {              
                bottle = false
                console.log(event.code)
            }   
            
                  })

        this.element = document.createElement('img')
        this.element.src = showImage()
        this.element.style.position = 'absolute'

        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        
        this.gameScreen.appendChild(this.element)
    }

    move()  {
        this.left -= 3
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
    }
}