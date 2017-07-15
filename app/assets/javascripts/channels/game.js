App.game = App.cable.subscriptions.create("GameChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    console.log(data)
    if (data.action == "nextTurn") {
      nextTurn();
    } else {
      if (myToken != data.token) {
        recieveAction(data);
      }
    }
  }
});