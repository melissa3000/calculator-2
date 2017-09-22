// ToDo:
// functions needed (onclick):
// - fix decimal function - allows multiple decimals and doesn't allow initial decimal
// -when pos neg +- clicked, add to display


// -when operator button clicked, capture number from display field
// -add error handling if user tries to divide by zero - display shows "Error"
// -perform calculation when = is clicked





"use strict";

$(document).ready(function() {


var previousNum = "0";
var currentNum = "0";
var operation = 0;



function clear() {
  $("#clear").click(function(){
    currentNum = "0";
    // console.log("currentNum: " + currentNum);
    document.getElementById("result-display").value = currentNum;
  });
}



function addNum() {
  // add number to display

  // Make this more concise
  $("#1").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "1";
    } else {
      currentNum += "1";
    }
    document.getElementById("result-display").value = currentNum;
    });

  $("#2").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "2";
    } else {
      currentNum += "2";
    }
    document.getElementById("result-display").value = currentNum;
    });

  $("#3").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "3";
    } else {
      currentNum += "3";
    }
    document.getElementById("result-display").value = currentNum;
    });

  $("#4").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "4";
    } else {
      currentNum += "4";
    }
    document.getElementById("result-display").value = currentNum;
    });

  $("#5").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "5";
    } else {
      currentNum += "5";
    }
    document.getElementById("result-display").value = currentNum;
    });

  $("#6").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "6";
    } else {
      currentNum += "6";
    }
    document.getElementById("result-display").value = currentNum;
    });

  $("#7").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "7";
    } else {
      currentNum += "7";
    }
    document.getElementById("result-display").value = currentNum;
    });

  $("#8").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "8";
    } else {
      currentNum += "8";
    }
    document.getElementById("result-display").value = currentNum;
    });

  $("#9").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "9";
    } else {
      currentNum += "9";
    }
    document.getElementById("result-display").value = currentNum;
    });
}




function addDecimal() {
  // add decimal to display

  $("#decimal").click(function(){

    if (currentNum.length == 0) {
      currentNum = "0.";
    } else {
      if (currentNum.indexOf("." == -1)) {
        currentNum = currentNum + ".";
      }
    }
    // if current number does already have a decimal, do not change current number
    // if (currentNum.indexOf("." !== -1)) {
    //   currentNum = currentNum;

    //   // console.log("has decimal");
    //   // console.log(currentNum);
    //   // return false;
    // } else if

    // if current is 0 and does not already contain a decimal
    // if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
    //   currentNum = "0.";
    // // } else if (currentNum.indexOf("." !== -1)) {
    // //   currentNum = currentNum;
    // }

    // else {
    //   currentNum += ".";
    // }
    // document.getElementById("result-display").value = currentNum;
    });
  document.getElementById("result-display").value = currentNum;

}

function positiveNegative() {
  // change from positive to neg or vice versa on display
}

function operate() {
  // perform mathematical operation when operator button clicked
}

function calculate() {
  // calculate result when equal sign is pressed
}


clear();

// compute();

addNum();
addDecimal();

});