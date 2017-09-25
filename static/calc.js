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
var operation = "";
var result;



function clear() {
  $("#clear").click(function(){
    currentNum = "0";
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

  $("#0").click(function(){
    if ((eval(currentNum) == 0) && (currentNum.indexOf("." == -1))) {
      currentNum = "0";
    } else {
      currentNum += "0";
    }
    document.getElementById("result-display").value = currentNum;
    });
}




function addDecimal() {
  // add decimal to display

  $("#decimal").click(function(){

    if (currentNum.indexOf("." ) !== -1) {
        currentNum = currentNum;
    } else if ((eval(currentNum) == 0) && (currentNum.indexOf(".") == -1)) {
      currentNum = "0.";
    } else {
        currentNum = currentNum + ".";
    }
      document.getElementById("result-display").value = currentNum;
    });
}


function positiveNegative() {
  // change from positive to neg or vice versa on display
  $("#negative").click(function() {
    if (currentNum.indexOf("-") == -1) {
      currentNum = "-" + currentNum;
    } else {
      currentNum = currentNum.substring(1);
    }
    document.getElementById("result-display").value = currentNum;
  });
}

function percentage() {
    $("#percentage").click(function() {
      currentNum = parseInt(currentNum) / 100;
      document.getElementById("result-display").value = currentNum;
  });
}


//This doesn't work yet
function operate() {
  // perform mathematical operation when operator button clicked
  $("#add").click(function() {
    operation = "addition";
    previousNum = currentNum;
    currentNum = "0";
  });
  $("#subtract").click(function() {
    operation = "subtraction";
    previousNum = currentNum;
    currentNum = "0";
  });
  $("#multiply").click(function() {
    operation = "multiplication";
    previousNum = currentNum;
    currentNum = "0";
  });
  $("#divide").click(function() {
    operation = "division";
    previousNum = currentNum;
    currentNum = "0";
  });

}


function calculate() {
  // calculate result when equal sign is pressed
  $("#equals").click(function() {
    if (operation === "addition"){
      addition(parseInt(previousNum), parseInt(currentNum));
      document.getElementById("result-display").value = result;
    } else if (operation === "subtraction"){
      subtraction(parseInt(previousNum), parseInt(currentNum));
      document.getElementById("result-display").value = result;
    } else if (operation === "multiplication"){
      multiply(parseInt(previousNum), parseInt(currentNum));
      document.getElementById("result-display").value = result;
    } else if (operation === "division"){
      divide(parseInt(previousNum), parseInt(currentNum));
      document.getElementById("result-display").value = result;
    }
  });

}


function addition(x, y) {
  result = x + y;
}

function subtraction(x, y) {
  result = x - y;
}

function multiply(x, y) {
  result = x * y;
}

function divide(x, y) {
  result = x / y;
}




clear();
addNum();
addDecimal();
positiveNegative();
operate();
calculate();
percentage();

});