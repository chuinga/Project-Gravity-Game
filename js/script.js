window.addEventListener('load', () => {
    const startButton = document.getElementById("start-button")
    const restartButton = document.getElementById("restart-button")
    //const jumping = document.getElementById()
    let game
    
    function startGame() {
      game = new Game()
      game.start()
    }
    startButton.addEventListener("click", function () {
      startGame()
    })

    restartButton.addEventListener("click", function () {
      location.reload()
    })

    // rider controls
    document.addEventListener('keydown', event => { 
      if (
        event.code === 'ArrowUp' || 
        event.code === 'KeyW') {
        game.rider.directionY = -3
      }
      if (
        event.code === 'ArrowLeft' || 
        event.code === 'KeyA') {
        game.rider.directionX = -3
      }
      if (
        event.code === 'ArrowRight' || 
        event.code === 'KeyD') {
        game.rider.directionX = 3
      }      
    })

    document.addEventListener('keyup', event => { 
      if (
        event.code === 'ArrowUp' || 
        event.code === 'KeyW') {
        game.rider.directionY = 3
      }
      if (
        event.code === 'ArrowLeft' || 
        event.code === 'KeyA' || 
        event.code === 'ArrowRight' || 
        event.code === 'KeyD') {
        game.rider.directionX = 0
      }
    }) 

    document.addEventListener('keydown', event => { 
      if (event.code === 'KeyB') {              
          game.bottle = true
          console.log(event.code)
      }
      if (event.code === 'KeyS') {              
          game.bottle = false
          console.log(event.code)
      }   
      
            })

  })  
  