// Initialize event listeners

// Adds event listener to track the coordinates of the uses mouse as well as the
// tile that the user is hovering over
function setMouseTile() {
  canvas.addEventListener("mousemove", function(event) {
    var rect = canvas.getBoundingClientRect();
    mouseCoordinates = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
    mouseTile = {
      col: Math.floor(mouseCoordinates.x / columnWidth), 
      row: Math.floor(mouseCoordinates.y / rowHeight) 
    };
  });  
}

// Adds event listeners to track presses of 'shift' and 'ctrl'
function setKeyPresses () {
  window.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
      case 16:
        shiftDown = true;
      case 17:
        controlDown = true;
    }
  });
  window.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
      case 16:
        shiftDown = false;
      case 17:
        controlDown = false;
    }
  });
}

// Adds event listener to mouse clicks and handle selection/user-input logic
function setMouseClicks() {
  canvas.addEventListener("mouseup", function(event) {

    // Do nothing if the game is over
    if (!turn) {
      return false;
    }

    var squareBeingSelected = board[mouseTile.row][mouseTile.col];
    var previouslySelectedSquare;

    if (selectedSquare) {
      // User is selecting a second square

      previouslySelectedSquare = selectedSquare;

      if (squareBeingSelected.player && previouslySelectedSquare.player != squareBeingSelected.player) {
        broadcastAction(previouslySelectedSquare, squareBeingSelected, "fight");
        soldiersEngageInCombat(previouslySelectedSquare, squareBeingSelected);
      } else if (squareBeingSelected != previouslySelectedSquare) {
        broadcastAction(previouslySelectedSquare, squareBeingSelected, "move");
        soldiersMove(previouslySelectedSquare, squareBeingSelected);
      }

      deselectSquare(); 

    } else {
      // User is selecting a square for the first time

      if (numberOfActiveSoldiers(squareBeingSelected) > 0 && turn == squareBeingSelected.player) {

        // Set selected square to square being selected unless it's empty
        selectedSquare = squareBeingSelected;
      }
    }
  });
}

function initializeEventListeners() {
  setMouseTile();
  setKeyPresses();
  setMouseClicks();
}