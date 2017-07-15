App.game = App.cable.subscriptions.create("GameChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    var move = data.move;
    var fromSquare = board[parseInt(move.fromY)][parseInt(move.fromX)]
    var toSquare = board[parseInt(move.toY)][parseInt(move.toX)]

    if (move.action == "move") {
      moveSoldier(fromSquare, toSquare)
    } else if (move.action == "movehalf") {
      moveHalfSoldier(fromSquare, toSquare)
    } else if (move.action == "moveall") {
      moveAllSoldier(fromSquare, toSquare)
    } else if (move.action == "fight") {
      fight(fromSquare, toSquare)
    }    
  }
});