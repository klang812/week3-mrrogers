$(document).ready(function() {
  $("#input").submit(function(event) {
  event.preventDefault();
  const count = parseInt($("input#userInput").val());
  $("#output1").text(countTo(count));
  $("#output2").text(countTo(count).reverse());
  });
});

function countTo(count) {
  let number=[];
  let userName=$("input#name").val();
  for (let outerLoopNumber=0; outerLoopNumber<=count; outerLoopNumber++) {
    let outerLoopNumberAsString = outerLoopNumber.toString()
    let subNumber = "";
      for (let index=0; index<=outerLoopNumberAsString.length-1; index++) {
        let singleDigit = outerLoopNumberAsString.charAt(index)
        if (singleDigit === "3") {
          subNumber = "Won't you be my neighbor, " + userName + "?";
        } 
          else if (singleDigit === "2") {
          subNumber = "Boop! ";
        }
        else if (singleDigit === "1" && subNumber === "") {
          subNumber = "Beep! ";
        }
      }
      if (subNumber === "") {
        number.push(outerLoopNumberAsString);
      }
      else {number.push(subNumber)}
    }
  return number;
}
