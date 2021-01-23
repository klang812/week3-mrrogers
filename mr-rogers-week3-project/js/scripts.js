$(document).ready(function() {
  $("#input").submit(function(event) {
  event.preventDefault();
  const count = parseInt($("input#userInput").val());
  $("#output").text(countTo(count));
  });
});

function countTo(count) {
  let number=[];
  for (let outerLoopNumber=0; outerLoopNumber<=count; outerLoopNumber++) {
    let outerLoopNumberAsString = outerLoopNumber.toString()
    let subNumber = "";
      for (let indexOfOuterLoopNumber=0; indexOfOuterLoopNumber<=outerLoopNumberAsString.length-1; indexOfOuterLoopNumber++) {
        let singleDigit = outerLoopNumberAsString.charAt(indexOfOuterLoopNumber)
        if (singleDigit === "3") {
          subNumber = "Won't you be my neighbor?";
        } 
        else if (singleDigit === "2") {
          subNumber = "Boop!";
        }
        else if (singleDigit === "1") {
          subNumber = "Beep!";
        }
      }
      if (subNumber === "") {
        number.push(outerLoopNumberAsString);
      }
      else {number.push(subNumber)}
    }
  return number;
}