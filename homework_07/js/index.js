$(document).ready(function(event){
var cell = $('.cell');


let black = {
   value: 'X',
   image: "images/black.jpg",
};

let white = {
   value:'O',
   image: "images/white.jpg",
};

const Os = "OOOO";
const Xs = "XXXX";

let turn = 1;  

let plays = true;
var board = [['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
            ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],];
let rows =  ["","","","","","","","","","","","","","",""];
let cols = ["","","","","","","","","","","","","","",""];
let diagonal1 = ["","","","","","","","","","","","","","","","","","","","","","",""];
let diagonal2 = ["","","","","","","","","","","","","","","","","","","","","","",""];


function inputVal(index, playerVal){
   var rowindex = Math.floor(index/board.length);
   var colindex = index % board.length;
   board[rowindex][colindex] = playerVal;
}
function win(){
   rowcheck();
   colcheck();
   diacheck();
   diacheck2();
}
function rowcheck(){
  for(let i=0;i<board.length;i++){
    var temArr = [];
    for(let j=0;j<board.length;j++){
      temArr.push(board[i][j]);       
      rows[i] = temArr.join('');  
    }
    checkForWin(rows[i]);
  }
}

function colcheck(){
  for(let i=0;i<board.length;i++){
    var temArr2 = [];
      for(let j=0;j<board.length;j++){
        temArr2.push(board[j][i]);        
        cols[j] = temArr2.join('');  
        checkForWin(cols[j]);
      }
  }
}

function diacheck(){
   var temArr0 = [],temArr1 = [],temArr2 = [],temArr3 = [];
   var temArr4 = [],temArr5 = [],temArr6 = [],temArr7 = [];
   var temArr8 =[], temArr9=[], temArr10=[], temArr11=[], temArr12=[];
   var temArr13=[], temArr14=[], temArr15=[], temArr16=[], temArr17=[];
   var temArr18=[], temArr19=[], temArr20=[], temArr21=[], temArr22=[], temArr23=[], temArr24=[];

   for(let i=0;i<board.length;i++){
    for(let j=0;j<board.length;j++){
      switch(i+j){
              case 3:
                temArr0.push(board[i][j]);       
                diagonal1[0] = temArr0.join('');
                break;
              case 4:
                temArr1.push(board[i][j]);       
                diagonal1[1] = temArr1.join('');
                break;
              case 5:
                temArr2.push(board[i][j]);      
                diagonal1[2] = temArr2.join('');
                break;
              case 6:
                temArr3.push(board[i][j]);
                diagonal1[3] = temArr3.join('');
                break;
              case 7:
                temArr4.push(board[i][j]);
                diagonal1[4] = temArr4.join('');
                break;
              case 8:
                temArr5.push(board[i][j]);
                diagonal1[5] = temArr5.join('');
                break;
              case 9:
                temArr6.push(board[i][j]);
                diagonal1[6] = temArr6.join('');
                break;
              case 10:
                temArr7.push(board[i][j]);
                diagonal1[7] = temArr7.join('');
                break;
              case 11:
                temArr8.push(board[i][j]);
                diagonal1[8] = temArr8.join('');
                break;
              case 12:
                temArr9.push(board[i][j]);
                diagonal1[9] = temArr9.join('');
                break;
              case 13:
                temArr10.push(board[i][j]);
                diagonal1[10] = temArr10.join('');
                break;
              case 14:
                temArr11.push(board[i][j]);
                diagonal1[11] = temArr11.join('');
                break;
              case 15:
                temArr12.push(board[i][j]);
                diagonal1[12] = temArr12.join('');
                break;
              case 16:
                temArr13.push(board[i][j]);
                diagonal1[13] = temArr13.join('');
                break;
              case 17:
                temArr14.push(board[i][j]);
                diagonal1[14] = temArr14.join('');
                break;
              case 18:
                temArr15.push(board[i][j]);
                diagonal1[15] = temArr15.join('');
                break;
              case 19:
                temArr16.push(board[i][j]);
                diagonal1[16] = temArr16.join('');
                break;
              case 20:
                temArr17.push(board[i][j]);
                diagonal1[17] = temArr17.join('');
                break;
              case 21:
                temArr18.push(board[i][j]);
                diagonal1[18] = temArr18.join('');
                break;
              case 22:
                temArr19.push(board[i][j]);
                diagonal1[19] = temArr19.join('');
                break;
              case 23:
                temArr20.push(board[i][j]);
                diagonal1[20] = temArr20.join('');
                break;
     }            
    }
   }
   for(let k=0; k<diagonal1.length;k++){
        checkForWin(diagonal1[k]);
   }
}

function diacheck2(){
   var temArr0 = [],temArr1 = [],temArr2 = [],temArr3 = [];
   var temArr4 = [],temArr5 = [],temArr6 = [],temArr7 = [];
   var temArr8 =[], temArr9=[], temArr10=[], temArr11=[], temArr12=[];
   var temArr13=[], temArr14=[], temArr15=[], temArr16=[], temArr17=[];
   var temArr18=[], temArr19=[], temArr20=[], temArr21=[], temArr22=[], temArr23=[];
   for(let i=0;i<board.length;i++){
    for(let j=0;j<board.length;j++){
      switch(i-j){
              case -4:
                temArr0.push(board[i][j]);          
                diagonal2[0] = temArr0.join('');
                break;
              case -3:
                temArr1.push(board[i][j]);          
                diagonal2[1] = temArr1.join('');
                break;
              case -2:
                temArr2.push(board[i][j]);          
                diagonal2[2] = temArr2.join('');
                break;
              case -1:
                temArr3.push(board[i][j]);          
                diagonal2[3] = temArr3.join('');
                break;
              case 0:
                temArr4.push(board[i][j]);          
                diagonal2[4] = temArr4.join('');
                break;
              case 1:
                temArr5.push(board[i][j]);          
                diagonal2[5] = temArr5.join('');
                break;
              case 2:
                temArr6.push(board[i][j]);          
                diagonal2[6] = temArr6.join('');
                break;
              case 3:
                temArr7.push(board[i][j]);          
                diagonal2[7] = temArr7.join('');
                break;
              case 4:
                temArr8.push(board[i][j]);         
                diagonal2[8] = temArr8.join('');
                break;
              case 5:
                temArr9.push(board[i][j]);         
                diagonal2[9] = temArr9.join('');
                break;
              case 6:
                temArr10.push(board[i][j]);          
                diagonal2[10] = temArr10.join('');
                break;
              case 7:
                temArr11.push(board[i][j]);          
                diagonal2[11] = temArr11.join('');
                break;
              case 8:
                temArr12.push(board[i][j]);
                diagonal2[12] = temArr12.join('');
                break;
              case 9:
                temArr13.push(board[i][j]);          
                diagonal2[13] = temArr13.join('');
                break;
              case 10:
                temArr14.push(board[i][j]);          
                diagonal2[14] = temArr14.join('');
                break;
              case 11:
                temArr15.push(board[i][j]);         
                diagonal2[15] = temArr15.join('');
                break;
              case 12:
                temArr16.push(board[i][j]);          
                diagonal2[16] = temArr16.join('');
                break;
              case 13:
                temArr17.push(board[i][j]);          
                diagonal2[17] = temArr17.join('');
                break;
              case 10:
                temArr14.push(board[i][j]);          
                diagonal2[14] = temArr14.join('');
                break;
              case 11:
                temArr15.push(board[i][j]);          
                diagonal2[15] = temArr15.join('');
                break;
              case 12:
                temArr16.push(board[i][j]);          
                diagonal2[16] = temArr16.join('');
                break;
      }
    }
   }
   for(let i=0; i<diagonal2.length;i++){
         checkForWin(diagonal2[i]);
   }
}

function checkForWin(str){
  for(let a =0; a<str.length;a++){
    if( str.substring(a,a+4) === Os){
        $('#screen').html("White stones win!");
        plays = false;       
    }else if( str.substring(a,a+4) === Xs){
        $('#screen').html("Black stones win!");
        plays = false;
    }
  }
}

function game(){
  for(let i=0; i<225; i++){
     $(cell[i]).on("click", function play() {
      if(plays === true){
        if(!$(cell[i]).children().length){
        let child = $('<img>').attr('class','image').css({"width":"30px", "height":"30px"});
        if(turn%2===0){
          child.attr('src',white.image);
          inputVal(i,white.value);
          $("#screen").html("Black's turn");
          turn++;
        }else{
          child.attr('src',black.image);
          inputVal(i,black.value);
          $("#screen").html("White's turn");
          turn++;
        }
        child.appendTo(cell[i]);
      }
      $(cell[i]).off('click',play);
      win();  
    }
  });
     $(cell[i]).on("mouseenter", function(){
      if($(cell[i]).has("img")){
        
        if(turn%2===0){
        $(cell[i]).css({"background": "white","border-radius": "50%"});
        }else{
         $(cell[i]).css({"background": "black","border-radius": "50%"});
        }

        } 
    });
     $(cell[i]).on("mouseleave", function(){
      if($(cell[i]).has("img")){
      $(cell[i]).css({"background": "none"});}
      else{console.log("hmm")}
    });
}}
game();

});