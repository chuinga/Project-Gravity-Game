class Rider{
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = 30;
        this.top = 700;
        this.height = 128;
        this.width = 120;
        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement('img');
        this.element.src = 'images/xico.png';       
        this.element.style.position = 'absolute';

        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        
        this.gameScreen.appendChild(this.element);        
        this.rotated = document.getElementById(this.element);
    }

    move() { 
        // x axis movement
        // max left position
        if (this.left >= 30) {
            this.left += this.directionX;
        }
        else {
            this.left = 30;
        }
        // max right position
        if (this.left <= 870 - this.width) {
            this.left += this.directionX;
        }
        else {
            this.left = 870 - this.width;
        }
        // y axis movement
        // max top position
        if (this.top <= 690) {
            this.top += this.directionY;
        }
        else {
            this.top = 690;
        }
        // max bottom position
        if (this.top >= 690 - this.height) {
            this.top += this.directionY;
        }
        else {
            this.top = 690 - this.height;
        }      
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        const riderRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          riderRect.left < obstacleRect.right &&
          riderRect.right > obstacleRect.left &&
          riderRect.top < obstacleRect.bottom &&
          riderRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false;
        }
      }
      didCollide(bonus) {
        const riderRect = this.element.getBoundingClientRect();
        const bonusRect = bonus.element.getBoundingClientRect();
    
        if (
          riderRect.left < bonusRect.right &&
          riderRect.right > bonusRect.left &&
          riderRect.top < bonusRect.bottom &&
          riderRect.bottom > bonusRect.top
        ) {
          return true;
        } else {
          return false;
        }
      }
}