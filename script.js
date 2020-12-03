// Set up document elements
var number = document.getElementById("number");
var squares = document.getElementsByClassName("square");
var nextNum = document.getElementById("next");

// Global Variables
var currentNum = 0; // random number to find
var numbers = []; // numbers on board
var pickedNums = []; // numbers generated to find
var clickedSquares = []; // Squares that have been clicked

// Assign random numbers to squares
for (var i = 0; i < squares.length; i++) {
  var addNum = randomInt(1, 50);
  // keep generating random number until you have one that isn't on the board
  while (checkArray(addNum, numbers)) {
    addNum = randomInt(1, 50);
  }
  numbers.push(addNum);
  squares[i].innerHTML = addNum;
}

// Display random number
pickRandNum();
nextNum.onclick = nextNumButton;

// Call clickSquare function
for (var i = 0; i < squares.length; i++) {
  squares[i].onclick = clickSquare;
}

// function for clicking on square
function clickSquare() {
  if (parseInt(this.innerHTML) == currentNum) {
    this.style.backgroundColor = "yellow";
    clickedSquares.push(this.id);
    console.log(clickedSquares);
    checkWin();
    pickRandNum();
  }
}

// Pick a random number to find on board
function pickRandNum() {
  currentNum = randomInt(1, 50);
  // keep generating random number until you have one that hasn't been picked before
  while (checkArray(currentNum, pickedNums)) {
    currentNum = randomInt(1, 50);
    console.log(currentNum);
  }
  pickedNums.push(currentNum);
  number.innerHTML = currentNum;
}

// Handle next number button click
function nextNumButton() {
  if (checkArray(currentNum, numbers)) {
    alert("The number is on the board!")
  } else {
    pickRandNum();
  }
}

// Check for a win
function checkWin() {
  if (checkBoard("b1", "b2", "b3", "b4", "b5") ||
    checkBoard("b6", "b7", "b8", "b9", "b10") ||
    checkBoard("b11", "b12", "b13", "b14", "b15")) {
    alert("You Won!");
  }
}

// check if 5 squares have been clicked
function checkBoard(i1, i2, i3, i4, i5) {
  if (checkArray(i1, clickedSquares)) {
    if (checkArray(i2, clickedSquares)) {
      if (checkArray(i3, clickedSquares)) {
        if (checkArray(i4, clickedSquares)) {
          if (checkArray(i5, clickedSquares)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

// Get random integer
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkArray(n, a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] == n) {
      return true;
    }
  }
  return false;
}