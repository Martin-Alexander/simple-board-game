// Game loop

window.onload = function() {

  initializeGame();
  initializeGUI();
  initializeEventListeners();

  window.setInterval(function() {
    renderBoard();
  }, 3);
}