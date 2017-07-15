// Game loop

window.onload = function() {

  initializeGame();
  initializeGUI();

  window.setInterval(function() {
    renderBoard();
  }, 3);
}