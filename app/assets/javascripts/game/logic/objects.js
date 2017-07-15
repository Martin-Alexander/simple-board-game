// Objects

function Player(playerNumber) {
  this.playerNumber = playerNumber;
}

function Soldier(player, active) {
  this.player = player;
  this.active = active;
}

function Square(x, y) {
  this.x = x;
  this.y = y;
  this.player = false;
  this.contents = [];
  this.HQ = false;
}