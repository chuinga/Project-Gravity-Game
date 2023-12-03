window.addEventListener('load', () => {
    const startButton = document.getElementById("start-button")
    const restartButton = document.getElementById("restart-button")
  
    const game = new Game()
  
    function startGame() {
      console.log("start game")
      game.start()
    }
    startButton.addEventListener("click", function () {
      startGame()
    })

    document.addEventListener('keydown', event => { 
      if (
        event.code === 'ArrowUp' || 
        event.code === 'KeyW') {
        console.log('Jump!')
        game.player.directionY = -3
      }
      if (
        event.code === 'ArrowLeft' || 
        event.code === 'KeyA') {
        console.log('Go back')
        game.player.directionX = -3
      }
      if (
        event.code === 'ArrowRight' || 
        event.code === 'KeyD') {
        console.log('Go forward')
        game.player.directionX = 3
      }
    })

    document.addEventListener('keyup', event => { 
      if (
        event.code === 'ArrowUp' || 
        event.code === 'KeyW') {
        console.log('Jump!')
        game.player.directionY = 3
      }
      if (
        event.code === 'ArrowLeft' || 
        event.code === 'KeyA' || 
        event.code === 'ArrowRight' || 
        event.code === 'KeyD') {
        console.log('Go back')
        game.player.directionX = 0
      }
    })
  })  
  