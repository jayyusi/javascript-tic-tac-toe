"use strict";

// "X" starts the game
var player = 'X'; //table cells

var table = document.getElementById('table').getElementsByTagName('td');

function check(cell) {
  // check if cell is empty
  if (document.getElementById(cell).innerHTML == '') {
    document.getElementById(cell).innerHTML = player; //switch the player symbol

    playerTurn(); //check if won ?

    IsWinner();
  }
}

function playerTurn() {
  if (player == 'X') {
    player = 'O';
  } else if (player == 'O') {
    player = 'X';
  } else {
    alert('Error playerTurn() function');
  }
}

function IsWinner() {
  // row 1
  if (document.getElementById(1).innerHTML == 'X' && document.getElementById(2).innerHTML == 'X' && document.getElementById(3).innerHTML == 'X') {
    document.getElementById(1).style.backgroundColor = 'green';
    document.getElementById(2).style.backgroundColor = 'green';
    document.getElementById(3).style.backgroundColor = 'green';
    document.getElementById('result').innerHTML = 'X wins first row'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //row 2


  if (document.getElementById(4).innerHTML == 'X' && document.getElementById(5).innerHTML == 'X' && document.getElementById(6).innerHTML == 'X') {
    document.getElementById(4).style.backgroundColor = 'green';
    document.getElementById(5).style.backgroundColor = 'green';
    document.getElementById(6).style.backgroundColor = 'green';
    document.getElementById('result').innerHTML = 'X wins second row'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //row 3


  if (document.getElementById(7).innerHTML == 'X' && document.getElementById(8).innerHTML == 'X' && document.getElementById(9).innerHTML == 'X') {
    document.getElementById(7).style.backgroundColor = 'green';
    document.getElementById(8).style.backgroundColor = 'green';
    document.getElementById(9).style.backgroundColor = 'green';
    document.getElementById('result').innerHTML = 'X wins third row'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //col 1


  if (document.getElementById(1).innerHTML == 'X' && document.getElementById(4).innerHTML == 'X' && document.getElementById(7).innerHTML == 'X') {
    document.getElementById(1).style.backgroundColor = 'green';
    document.getElementById(4).style.backgroundColor = 'green';
    document.getElementById(7).style.backgroundColor = 'green';
    document.getElementById('result').innerHTML = 'X wins first column'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //col 2


  if (document.getElementById(2).innerHTML == 'X' && document.getElementById(5).innerHTML == 'X' && document.getElementById(8).innerHTML == 'X') {
    document.getElementById(2).style.backgroundColor = 'green';
    document.getElementById(5).style.backgroundColor = 'green';
    document.getElementById(8).style.backgroundColor = 'green';
    document.getElementById('result').innerHTML = 'X wins second column'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //col 2


  if (document.getElementById(3).innerHTML == 'X' && document.getElementById(6).innerHTML == 'X' && document.getElementById(9).innerHTML == 'X') {
    document.getElementById(3).style.backgroundColor = 'green';
    document.getElementById(6).style.backgroundColor = 'green';
    document.getElementById(9).style.backgroundColor = 'green';
    document.getElementById('result').innerHTML = 'X wins third column'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } // \ diagonal


  if (document.getElementById(1).innerHTML == 'X' && document.getElementById(5).innerHTML == 'X' && document.getElementById(9).innerHTML == 'X') {
    document.getElementById(1).style.backgroundColor = 'green';
    document.getElementById(5).style.backgroundColor = 'green';
    document.getElementById(9).style.backgroundColor = 'green';
    document.getElementById('result').innerHTML = 'X wins diagonnally \\'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } // / diagonal


  if (document.getElementById(3).innerHTML == 'X' && document.getElementById(5).innerHTML == 'X' && document.getElementById(7).innerHTML == 'X') {
    document.getElementById(3).style.backgroundColor = 'green';
    document.getElementById(5).style.backgroundColor = 'green';
    document.getElementById(7).style.backgroundColor = 'green';
    document.getElementById('result').innerHTML = 'X wins diagonnally /'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } // row 1


  if (document.getElementById(1).innerHTML == 'O' && document.getElementById(2).innerHTML == 'O' && document.getElementById(3).innerHTML == 'O') {
    document.getElementById(1).style.backgroundColor = 'red';
    document.getElementById(2).style.backgroundColor = 'red';
    document.getElementById(3).style.backgroundColor = 'red';
    document.getElementById('result').innerHTML = 'O wins first row'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //row 2


  if (document.getElementById(4).innerHTML == 'O' && document.getElementById(5).innerHTML == 'O' && document.getElementById(6).innerHTML == 'O') {
    document.getElementById(4).style.backgroundColor = 'red';
    document.getElementById(5).style.backgroundColor = 'red';
    document.getElementById(6).style.backgroundColor = 'red';
    document.getElementById('result').innerHTML = 'O wins second row'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //row 3


  if (document.getElementById(7).innerHTML == 'O' && document.getElementById(8).innerHTML == 'O' && document.getElementById(9).innerHTML == 'O') {
    document.getElementById(7).style.backgroundColor = 'red';
    document.getElementById(8).style.backgroundColor = 'red';
    document.getElementById(9).style.backgroundColor = 'red';
    document.getElementById('result').innerHTML = 'O wins third row'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //col 1


  if (document.getElementById(1).innerHTML == 'O' && document.getElementById(4).innerHTML == 'O' && document.getElementById(7).innerHTML == 'O') {
    document.getElementById(1).style.backgroundColor = 'red';
    document.getElementById(4).style.backgroundColor = 'red';
    document.getElementById(7).style.backgroundColor = 'red';
    document.getElementById('result').innerHTML = 'O wins first column'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //col 2


  if (document.getElementById(2).innerHTML == 'O' && document.getElementById(5).innerHTML == 'O' && document.getElementById(8).innerHTML == 'O') {
    document.getElementById(2).style.backgroundColor = 'red';
    document.getElementById(5).style.backgroundColor = 'red';
    document.getElementById(8).style.backgroundColor = 'red';
    document.getElementById('result').innerHTML = 'O wins second column'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } //col 2


  if (document.getElementById(3).innerHTML == 'O' && document.getElementById(6).innerHTML == 'O' && document.getElementById(9).innerHTML == 'O') {
    document.getElementById(3).style.backgroundColor = 'red';
    document.getElementById(6).style.backgroundColor = 'red';
    document.getElementById(9).style.backgroundColor = 'red';
    document.getElementById('result').innerHTML = 'O wins third column'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } // \ diagonal


  if (document.getElementById(1).innerHTML == 'O' && document.getElementById(5).innerHTML == 'O' && document.getElementById(9).innerHTML == 'O') {
    document.getElementById(1).style.backgroundColor = 'red';
    document.getElementById(5).style.backgroundColor = 'red';
    document.getElementById(9).style.backgroundColor = 'red';
    document.getElementById('result').innerHTML = 'O wins diagonnally \\'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  } // / diagonal


  if (document.getElementById(3).innerHTML == 'O' && document.getElementById(5).innerHTML == 'O' && document.getElementById(7).innerHTML == 'O') {
    document.getElementById(3).style.backgroundColor = 'red';
    document.getElementById(5).style.backgroundColor = 'red';
    document.getElementById(7).style.backgroundColor = 'red';
    document.getElementById('result').innerHTML = 'O wins diagonnally /'; //disable clicks on grid

    document.getElementById('table').style.pointerEvents = 'none';
  }
}

function reset() {
  for (var x = 1; x <= 9; x++) {
    //clear all cells
    document.getElementById(x).innerHTML = ''; //delete any previous output

    document.getElementById('result').innerHTML = 'Winner: '; //enable clicking on the grid

    document.getElementById('table').style.pointerEvents = 'auto'; //remove any green or red colors for ex-winners

    document.getElementById(x).style.backgroundColor = null; //make sure X starts first;

    player = 'X';
  }
} // TODO: Declare no winners if no one wins !!