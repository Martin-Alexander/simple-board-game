function broadcastAction(fromSquare, toSquare, action) {
  $.ajax({
    method: "POST",
    url: "/action",
    data: {
      from: fromSquare,
      to: toSquare,
      my_action: action,
      token: myToken
    }
  });
}

function recieveAction(data) {
  var from = board[data.from.y][data.from.x];
  var to = board[data.to.y][data.to.x];
  if (data.action == "move") {
    soldiersMove(from, to)
  } else if (data.action == "fight") {
    soldiersEngageInCombat(from, to)
  }
}

function broadcastNextTurn() {
  if (turn) {
    $.ajax({
      method: "POST",
      url: "/turn"
    });
  }
}