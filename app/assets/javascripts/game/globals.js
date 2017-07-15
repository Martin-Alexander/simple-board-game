const xSize = 10;
const ySize = 10;

const initialNumberOfSoldiers = 10;

var playerOne;
var playerTwo;

var board = [];

var turn;

var costOfSoldier = 4;

var canvas;
var canvasContext;

var numberOfRows;
var numberOfColumns;
var rowHeight;
var columnWidth;

var mouseCoordinates;
var mouseTile = {col: 0, row: 0};
var selectedSquare = false;

var shiftDown = false;
var controlDown = false;

var myToken;