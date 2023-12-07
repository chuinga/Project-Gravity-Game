window.addEventListener('load', () => {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game; 
    let isJumping = false;    
    
    function startGame() {
      game = new Game();
      game.start();
    }
    startButton.addEventListener("click", function () {
      startGame();
    })
    restartButton.addEventListener("click", function () {
      location.reload();
    })    

    // rider controls
    document.addEventListener('keydown', event => {     
      if (
        event.code === 'ArrowUp' || event.code === 'KeyW') {
          if(!isJumping) {
            setTimeout(() => {
            game.rider.directionY = 3;
          }, 500);
          game.rider.directionY = -7;
          isJumping = true;
      }
    }
      if (
        event.code === 'ArrowLeft' || event.code === 'KeyA') {
        game.rider.directionX = -3;
        game.rider.element.style.transform = 'rotate(350deg)';

      }
      if (
        event.code === 'ArrowRight' || event.code === 'KeyD') {
        game.rider.directionX = 3;
        game.rider.element.style.transform = 'rotate(5deg)';
      }      
    })
    document.addEventListener('keyup', event => { 
      if (
        event.code === 'ArrowUp' || event.code === 'KeyW') {
        game.rider.directionY = 3;
        isJumping = false;
      }
      if (
        event.code === 'ArrowLeft' || event.code === 'KeyA' || 
        event.code === 'ArrowRight' || event.code === 'KeyD') {
        game.rider.directionX = 0;
        game.rider.element.style.transform = 'rotate(360deg)';
      }
    }) 
    
    // "easter eggs" controls
    document.addEventListener('keydown', event => { 
      if (event.code === 'KeyB') {              
          game.bottle = true;
      }
      if (event.code === 'KeyS') {              
          game.bottle = false;
      }        
    })
})    