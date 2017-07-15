function broadcastAction(fromSquare, toSquare, action, type) {
  $.ajax({
    method: "POST",
    url: "/action",
    data: {
      from: fromSquare,
      to: toSquare,
      myAction: action,
      token: myToken,
      type: type
    }
  });
}

function recieveAction(data) {
  var from = board[data.from.y][data.from.x];
  var to = board[data.to.y][data.to.x];
  if (data.action == "move") {
    soldiersMove(from, to, data.type)
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