window.addEventListener('load', () => {
    const startButton = document.getElementById("start-button")
    const restartButton = document.getElementById("restart-button")
  
    let game
  
    function startGame() {
      console.log("start game")
      game = new Game()
      game.start()
    }
    startButton.addEventListener("click", function () {
      startGame()
    })

    restartButton.addEventListener("click", function () {
      //startGame()
      location.reload()
    })

    document.addEventListener('keydown', event => { 
      if (
        event.code === 'ArrowUp' || 
        event.code === 'KeyW') {
        game.player.directionY = -3
      }
      if (
        event.code === 'ArrowLeft' || 
        event.code === 'KeyA') {
        game.player.directionX = -3
      }
      if (
        event.code === 'ArrowRight' || 
        event.code === 'KeyD') {
        game.player.directionX = 3
      }
    })

    document.addEventListener('keyup', event => { 
      if (
        event.code === 'ArrowUp' || 
        event.code === 'KeyW') {
        game.player.directionY = 3
      }
      if (
        event.code === 'ArrowLeft' || 
        event.code === 'KeyA' || 
        event.code === 'ArrowRight' || 
        event.code === 'KeyD') {
        game.player.directionX = 0
      }
    })
  })  
  