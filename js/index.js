// got some ideas from http://www.dreamincode.net/forums/topic/247361-simple-tic-tac-toe-using-html5-css3-and-javascript/ 

// GLOBAL VARIABLES
// squares default values: 0 = off, 1 = X, 2 = O
var squareStatus = {
  "square_1": 0,
  "square_2": 0,
  "square_3": 0,
  "square_4": 0,
  "square_5": 0,
  "square_6": 0,
  "square_7": 0,
  "square_8": 0,
  "square_9": 0
};
var playerMarker = "X";
var squareCount = 0;
var win = false;
var elementID;
var playerSquares = [];
var cpuSquares = [];
var winningSquares = [];
var winCountCPU = 0;
var winCountP = 0;
var idNum;
var cpuSeq = [];
var winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

// generate random sequence for cpu to pick squares from  - yeah it's dumb logic, but at least the human wins once in a while
function genSeq(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {

    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;

  }
  cpuSeq = [].concat(array);
}

// button functions for player to choose marker
function chooseX() {
  playerMarker = "X";
  document.getElementById("choose-marker").style.display = "none";
}

function chooseO() {
  playerMarker = "O";
  document.getElementById("choose-marker").style.display = "none";
}

// Player squares functions
function tlSquareFunc() {
  if (playerMarker === "X" && squareStatus["square_1"] === 0) {
    document.getElementById("marker_1").innerHTML = "X";
    $('#marker_1').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_1"] = 1;
    playerSquares.push(1);
    endHumanTurn();
  } else if (squareStatus["square_1"] === 0) {
    document.getElementById("marker_1").innerHTML = "O";
    $('#marker_1').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_1"] = 2;
    playerSquares.sort(function(a, b) {
      return a - b;
    });
    playerSquares.push(1);
    endHumanTurn();
  } else {

  }

}

function tcSquareFunc() {
  if (playerMarker === "X" && squareStatus["square_2"] === 0) {
    document.getElementById("marker_2").innerHTML = "X";
    $('#marker_2').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_2"] = 1;
    playerSquares.push(2);
    endHumanTurn();
  } else if (squareStatus["square_2"] === 0) {
    document.getElementById("marker_2").innerHTML = "O";
    $('#marker_2').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_2"] = 2;
    playerSquares.push(2);
    endHumanTurn();
  } else {

  }
}

function trSquareFunc() {
  if (playerMarker === "X" && squareStatus["square_3"] === 0) {
    document.getElementById("marker_3").innerHTML = "X";
    $('#marker_3').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_3"] = 1;
    playerSquares.push(3);
    endHumanTurn();
  } else if (squareStatus["square_3"] === 0) {
    document.getElementById("marker_3").innerHTML = "O";
    $('#marker_3').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_3"] = 2;
    playerSquares.push(3);
    endHumanTurn();
  } else {

  }
}

function mlSquareFunc() {
  if (playerMarker === "X" && squareStatus["square_4"] === 0) {
    document.getElementById("marker_4").innerHTML = "X";
    $('#marker_4').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_4"] = 1;
    playerSquares.push(4);
    endHumanTurn();
  } else if (squareStatus["square_4"] === 0) {
    document.getElementById("marker_4").innerHTML = "O";
    $('#marker_4').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_4"] = 2;
    playerSquares.push(4);
    endHumanTurn();
  } else {

  }
}

function mcSquareFunc() {
  if (playerMarker === "X" && squareStatus["square_5"] === 0) {
    document.getElementById("marker_5").innerHTML = "X";
    $('#marker_5').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_5"] = 1;
    playerSquares.push(5);
    endHumanTurn();
  } else if (squareStatus["square_5"] === 0) {
    document.getElementById("marker_5").innerHTML = "O";
    $('#marker_5').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_5"] = 2;
    playerSquares.push(5);
    endHumanTurn();
  } else {

  }
}

function mrSquareFunc() {
  if (playerMarker === "X" && squareStatus["square_6"] === 0) {
    document.getElementById("marker_6").innerHTML = "X";
    $('#marker_6').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_6"] = 1;
    playerSquares.push(6);
    endHumanTurn();
  } else if (squareStatus["square_6"] === 0) {
    document.getElementById("marker_6").innerHTML = "O";
    $('#marker_6').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_6"] = 2;
    playerSquares.push(6);
    endHumanTurn();
  } else {

  }
}

function blSquareFunc() {
  if (playerMarker === "X" && squareStatus["square_7"] === 0) {
    document.getElementById("marker_7").innerHTML = "X";
    $('#marker_7').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_7"] = 1;
    playerSquares.push(7);
    endHumanTurn();
  } else if (squareStatus["square_7"] === 0) {
    document.getElementById("marker_7").innerHTML = "O";
    $('#marker_7').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_7"] = 2;
    playerSquares.push(7);
    endHumanTurn();
  } else {

  }
}

function bcSquareFunc() {
  if (playerMarker === "X" && squareStatus["square_8"] === 0) {
    document.getElementById("marker_8").innerHTML = "X";
    $('#marker_8').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_8"] = 1;
    playerSquares.push(8);
    endHumanTurn();
  } else if (squareStatus["square_8"] === 0) {
    document.getElementById("marker_8").innerHTML = "O";
    $('#marker_8').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_8"] = 2;
    playerSquares.push(8);
    endHumanTurn();
  } else {

  }
}

function brSquareFunc() {
  if (playerMarker === "X" && squareStatus["square_9"] === 0) {
    document.getElementById("marker_9").innerHTML = "X";
    $('#marker_9').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_9"] = 1;
    playerSquares.push(9);
    endHumanTurn();
  } else if (squareStatus["square_9"] === 0) {
    document.getElementById("marker_9").innerHTML = "O";
    $('#marker_9').addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $(this).removeClass('animated bounceIn');
      }
    );
    squareStatus["square_9"] = 2;
    playerSquares.push(9);
    endHumanTurn();
  } else {

  }
}

function endHumanTurn() {
  squareCount = squareCount + 1;
  setTimeout(function() {
    computerAI();
  }, 500);
}

function computerAI() {
  checkForWinP();
  aiLogic: if (win === true) {
      break aiLogic;
    } else {
      checkSquareCount();
      for (var a = 1; a < 9; a++) {

        idNum = cpuSeq.shift();

        if (squareStatus["square_" + idNum] === 0) {
          elementID = "marker_" + idNum;
          if (playerMarker === "X") {
            document.getElementById(elementID).innerHTML = "O";
            $('#' + elementID).addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
              function(e) {
                $(this).removeClass('animated bounceIn');
              }
            );
            squareStatus["square_" + idNum] = 2;
            cpuSquares.push(idNum);
            checkSquareCount();
            checkForWinCPU();
            break;
          } else {
            document.getElementById(elementID).innerHTML = "X";
            $('#' + elementID).addClass('animated bounceIn').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
              function(e) {
                $(this).removeClass('animated bounceIn');
              }
            );
            squareStatus["square_" + idNum] = 1;
            cpuSquares.push(idNum);
            checkSquareCount();
            checkForWinCPU();
            break;
          }
        }
      }
    }

}

function checkSquareCount() {
  if (squareCount === 5 && win === false) {

    setTimeout(function() {
      console.log("NO WINNER");
      document.getElementById("tie").style.display = "block";
    }, 500);
    setTimeout(function() {
      resetBoard();
    }, 2000);

  }
}

// functions to check for winners
function checkForWinP() {
  winningSquares = [];
  for (var c = 0; c < 8; c++) {
    var tempArr = winningCombinations[c];
    for (var d = 0; d < 3; d++) {
      var tempObject = tempArr[d];
      for (var e = 0; e <= playerSquares.length; e++) {
        if (tempObject === playerSquares[e]) {
          winCountP = winCountP + 1;
          if (winCountP === 3) {
            win = true;
            winningSquares = [].concat(tempArr);
            break;
          } else {}
        }
      }

    }
    winCountP = 0;
  }
  if (win === true) {
    winCountP = 0;
    winSeqP();
  }
}

function checkForWinCPU() {
  winningSquares = [];
  for (var e = 0; e < 8; e++) {
    var tempArrCPU = winningCombinations[e];
    for (var f = 0; f < 3; f++) {
      var tempObjectCPU = tempArrCPU[f];
      for (var g = 0; g < cpuSquares.length; g++) {
        if (tempObjectCPU === cpuSquares[g]) {
          winCountCPU = winCountCPU + 1;
          
          if (winCountCPU === 3) {
            win = true;
            winningSquares = [].concat(winningCombinations[e]);
            break;
          } else {}
        }
      }
    }
    winCountCPU = 0;
  }
  if (win === true) {
    winCountCPU = 0;
    winSeqCPU();
  }
}

// functions to highlight winning markers and then reset them
function highlightNum() {
    for (var winNum = 1; winNum < 4; winNum++) {
    idNum = winningSquares.shift();
    elementID = "marker_" + idNum;
    $('#' + elementID).addClass('winColors');
  }
}

function resetHighlights() {
    for (var winNumReset = 1; winNumReset < 10; winNumReset++) {
    elementID = "marker_" + winNumReset;
    $('#' + elementID).removeClass('winColors');
  }  
}


// functions for win sequences
function winSeqP() {
  win === true;

  highlightNum();

  setTimeout(function() {
    console.log("WINNER, PLAYER");
    document.getElementById("player-wins").style.display = "block";
  }, 500);

  setTimeout(function() {   
    resetBoard();
  }, 2000);
}

function winSeqCPU() {
  win === true;

  highlightNum();
  
  setTimeout(function() {
    console.log("WINNER, COMPUTER");
    document.getElementById("cpu-wins").style.display = "block";
  }, 500);
  setTimeout(function() {
    resetBoard();
  }, 2000);
}


// function to reset the board
function resetBoard() {
  for (var b = 1; b < 10; b++) {
    var resetElementID = "marker_" + b;
    document.getElementById(resetElementID).innerHTML = " ";
    squareStatus["square_" + b] = 0;
  }
  squareCount = 0;
  playerSquares = [];
  cpuSquares = [];
  winCountCPU = 0;
  winCountP = 0;
  cpuSeq = [];
  genSeq([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log("board reset");
  win = false;
  resetHighlights();
  document.getElementById("player-wins").style.display = "none";
  document.getElementById("cpu-wins").style.display = "none";
  document.getElementById("tie").style.display = "none";
  document.getElementById("choose-marker").style.display = "block";

}

// generate inital sequence
window.onload = function() {
  genSeq([1, 2, 3, 4, 5, 6, 7, 8, 9]);
};