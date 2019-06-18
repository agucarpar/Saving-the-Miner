var game = new Game ()


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  startGame = ()=>{
      let marife = document.getElementById("canvas")
      
    game.initGame(marife);
  }
}
