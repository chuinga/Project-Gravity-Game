class Bonus {
    constructor(gameScreen, image) {
        this.gameScreen = gameScreen;
        this.left = 1200;
        this.top = 758;
        this.height = 60 ;   
        this.width = 56;       
        
        this.element = document.createElement('img');
        this.element.src = image;
        this.element.style.position = 'absolute';

        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        
        this.gameScreen.appendChild(this.element);
    }
    move()  {
        this.left -= 3;
        this.updatePosition();
    }
    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }
}