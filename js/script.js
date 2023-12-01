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
  });
  
    
  