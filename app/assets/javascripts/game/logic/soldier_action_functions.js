// Soldier action functions (attacking and moving)

// Engages combat between two squares
function soldiersEngageInCombat(attackerSquare, defenderSquare) {

  // The size of the attacker's army is the number of active soldiers
  // whereas the size of the defenders army is the total number of soldiers
  var attackerSize = numberOfActiveSoldiers(attackerSquare);
  var defenderSize = totalNumberOfSoldiers(defenderSquare);

  // In all cases all defending soldiers are inactivated
  inactivateSoldiers(defenderSize, defenderSquare);

  if (defenderSize == 0) {
    turn = false;
    winner(attackerSquare.player);
  }

  if (attackerSize == defenderSize) {

    removeActiveSoldersFromSquare(attackerSize, attackerSquare);
    removeAllSoldiers(defenderSquare);

  } else if (attackerSize > defenderSize) {

    removeAllSoldiers(defenderSquare);
    var attackersLoses = Math.floor(defenderSize / Math.floor(attackerSize / defenderSize));
    removeActiveSoldersFromSquare(attackersLoses, attackerSquare);
    inactivateSoldiers(attackerSize, attackerSquare);
  
  } else if (attackerSize < defenderSize) {
    
    removeActiveSoldersFromSquare(attackerSize, attackerSquare);
    var defendersLoses = Math.floor(attackerSize / Math.floor(defenderSize / attackerSize));
    removeInactiveSoldersFromSquare(defendersLoses, defenderSquare);

  }

  updateSquarePlayer(attackerSquare);
  updateSquarePlayer(defenderSquare);
}

// Runs validates and moves soldiers from one square to another
function soldiersMove(fromSquare, toSquare, type) {
  if (areAdjacent(fromSquare, toSquare)) {
    if (type == "all") {
      var numberOfSoldiersToMove = numberOfActiveSoldiers(fromSquare);
    } else if (type == "half") {
      var numberOfSoldiersToMove = Math.floor(numberOfActiveSoldiers(fromSquare) / 2);
    } else if (type == "single") {
      if (fromSquare.contents.length > 0) {
        var numberOfSoldiersToMove = 1;
      } else {
        var numberOfSoldiersToMove = 0;
      }
    }
    moveSoldiers(numberOfSoldiersToMove, fromSquare, toSquare)
  }
}

// Performs the necessary steps of a move
function moveSoldiers(numberOfSoldiers, fromSquare, toSquare) {
  removeActiveSoldersFromSquare(numberOfSoldiers, fromSquare);
  addSoldiersToSquare(numberOfSoldiers, turn, toSquare);
  inactivateSoldiers(numberOfSoldiers, toSquare);
}