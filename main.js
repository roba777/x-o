console.log('Week 4 - Day 4')

console.log('Tuwaiq Academy   JS')



$(document).ready(function(){
const cells=$(".cell");
const winnerspan = $("#winner");
const turnspan=$("#turn");
const winnerpar = $("#parWinner");
const turnpar=$("#parTurn");

const restsrt=$("#restsrt");
//console.log(cells);
let turn= "X";
const O ="O"
const X ="X"

winnerpar.hide()
restsrt.hide()

cells.click(cellClicked);
restsrt.click(restsrtTheGame);

function cellClicked(){

    console.log(this);
    //this=>dom
    if($(this).text()===""){
    
    if(turn===X){
    $(this).text(X);
    turnspan.text(O)
    checkWinner(X);
    turn = O;
    }else{
        $(this).text(O);
        turnspan.text(X)
        checkWinner(O);
        turn= X;
    }
    }else{

        $($(this)[0]).css("background-color","red");
        setTimeout(()=>{
            $($(this)[0]).css("background-color","transparent");
            
        },500)
    
    
    }
}




function restsrtTheGame(){
    console.log("restart called");
    location.reload()
    }


  function checkWinner(currentPlayer){
     
  if($(cells[0]).text()===$(cells[1]).text()&&
    $(cells[1]).text()=== $(cells[2]).text()&&
    $(cells[0]).text() !== ''
    ){
    
    playerWin(currentPlayer)
  }else if ($(cells[3]).text()===$(cells[4]).text()&&
  $(cells[4]).text()=== $(cells[5]).text()&&
  $(cells[3]).text() !== ''
  ){
  
  playerWin(currentPlayer)
}else if($(cells[6]).text()===$(cells[7]).text()&&
$(cells[7]).text()=== $(cells[8]).text()&&
$(cells[6]).text() !== ''
){

playerWin(currentPlayer)
}else if($(cells[0]).text()===$(cells[3]).text()&&
$(cells[3]).text()=== $(cells[6]).text()&&
$(cells[0]).text() !== ''
){

playerWin(currentPlayer)
}else if($(cells[1]).text()===$(cells[4]).text()&&
$(cells[4]).text()=== $(cells[7]).text()&&
$(cells[1]).text() !== ''
){

playerWin(currentPlayer)
}else if($(cells[2]).text()===$(cells[5]).text()&&
$(cells[5]).text()=== $(cells[8]).text()&&
$(cells[2]).text() !== ''
){

playerWin(currentPlayer)
}else if($(cells[0]).text()===$(cells[4]).text()&&
$(cells[4]).text()=== $(cells[8]).text()&&
$(cells[0]).text() !== ''
){

playerWin(currentPlayer)
}else if($(cells[2]).text()===$(cells[4]).text()&&
$(cells[4]).text()=== $(cells[6]).text()&&
$(cells[2]).text() !== ''
){

playerWin(currentPlayer)
  }
}

  function playerWin(TheWinner){
  winnerspan.text(TheWinner)
  winnerpar.show(1000)
  turnpar.hide(1000)
  restsrt.show(2000)

  }

});





/*
  STEP 1: Grid Layout [HTML + CSS]
    HTML: use div with id 'board' and 9 div with class 'cell'
    CSS: style grid "board"
    CSS: style width & height "cell"
    HTML: add div id="all"
    HTML: add par "PLAYER TURN:" id='turn'
    HTML: add par "WIN" id='winner'
    HTML: add button "Play Again" id='restart'
    CSS: #all display: grid; && justify-content: center;
    CSS: p text-align: center;    

  STEP 2: When the player click on one of the cell => Show X || O
    show click X
    show click X || O (turn variable to switch between turns)
    Show the turn show turn to which player => PLAYER TURN: X || O
    Extra: 
      Invalid move => background red || can't click 

  NOW. when click on the button 'Play Again' the game will restart or the page will refresh (restart the game)

  STEP 3: When the player select 3 Win (check the winner)
    Build the logic to check if a player win or not [horizontal, vertical, or diagonal]
    Call the function check winner on each turn. if so change the winner p to the player who win
    if not don't do anything

  STEP 4: When a player win 
    Show who is the winner
    Hide the 'turn' p
    Show button say "Play Again" (restart the game)
    Make this button restart the game (refresh the page)
    
  Extra:
    Block clicked on the cell after a player win
    Enhance the design CSS
    Add tone when the player win
    Use Animation
    Change the background in the path that the winner win in
*/
