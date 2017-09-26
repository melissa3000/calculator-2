// ToDo:
// functions needed (onclick):
// - fix decimal function - starting a number with decimnal doesn't work correctly
// - add ability to chain multiple operations together (x + y + z = )
// - refactor addNum function to be more concise





"use strict";

// Commented (document).ready line below out for Jasmine testing
// $(document).ready(function() {


var previousNum = "0";
var currentNum = "0";
var operation = "";
var result;
var queuedOperation = [];
var calculationFinished = false;



function clearDisplay() {
  $("#clear").click(function(){
    currentNum = "0";
    // previousNum = "0";
    calculationFinished = true;
    // operation = operations.none;
    document.getElementById("result-display").value = currentNum;
//

  });
}

// function clearPreviousResult() {
//   if (calculationFinished) {
//     document.getElementById("result-display").value = "0";
//     calculationFinished = false;
//   }
// }


function chainOperations() {

  $('button').click(function() {

    var op = $(this).attr("value");
    if (op === "clear" || op === "equals") {
      queuedOperation = [];
    } else if (op === "add" || op === "subtract" || op === "divide" || op === "multiply") {
    queuedOperation.push(op);
    console.log("queuedOperation: " +  queuedOperation);

    }
  });
}

  // Make this function more concise
function addNum() {
  // add number to display

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

// $('button').click(function() {
//   currentNum = $(this).attr("value");
//   // console.log("x: " + x);
//   // console.log("button value: " + $(this).attr("value"));
//   document.getElementById("result-display").value = currentNum;
// });




function addDecimal() {
  // add decimal to display

  $("#decimal").click(function(){

    if (currentNum.indexOf("." ) !== -1) {
        currentNum = currentNum;
    } else if ((eval(currentNum) === 0) && (currentNum.indexOf(".") == -1)) {
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

// var operations = {
//   none: function(a, b) { return b; },
//   addition: function(a, b) { return a + b; },
//   subtraction: function(a, b) { return a - b; },
//   multiply: function(a, b) { return a * b; },
//   divide: function(a, b) { return a / b; }
// };

// function operate(command) {
//   var display = document.getElementById('result-display');
//   calculate();
//   previousNum = display.value;
//   if (operations.hasOwnProperty(command))
//     operation = operations[command];
// }

// function calculate() {
//   var display = document.getElementById('result-display');
//   display.value = operation(+previousNum, +display.value);
//   operation = operations.none;
// }

function operate() {
  $("#add").click(function() {
    operation = "addition";
    previousNum = currentNum;
    currentNum = "0";

    // addition(parseInt(previousNum), parseInt(currentNum));
    // currentNum = toString(result);
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
      currentNum = result;
      document.getElementById("result-display").value = result;
    } else if (operation === "subtraction"){
      subtraction(parseInt(previousNum), parseInt(currentNum));
      currentNum = result;
      document.getElementById("result-display").value = result;
    } else if (operation === "multiplication"){
      multiply(parseInt(previousNum), parseInt(currentNum));
      currentNum = result;
      document.getElementById("result-display").value = result;
    } else if (operation === "division"){
      divide(parseInt(previousNum), parseInt(currentNum));
      currentNum = result;
      document.getElementById("result-display").value = result;
    }
  });

}


function addition(x, y) {
  result = x + y;
  return result;
}

function subtraction(x, y) {
  result = x - y;
  return result;
}

function multiply(x, y) {
  result = x * y;
  return result;
}

function divide(x, y) {
  if (y === 0){
    result = "Error";
  } else {
  result = x / y;
  return result;
  }
}




clearDisplay();
addNum();
addDecimal();
positiveNegative();
operate();
calculate();
percentage();
chainOperations();

// });




