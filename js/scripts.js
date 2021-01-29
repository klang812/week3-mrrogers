$(document).ready(function() {
  $("#input").submit(function(event) {
  event.preventDefault();
  const count = parseInt($("input#userInput").val());
  let userName=$("input#name").val();
  $("#output1").text(countTo(count, userName));
  $("#output2").text(countTo(count, userName).reverse());
  });
});

function countTo(count, userName) {
  let number=[];
  for (let index=0; index<=count; index++) {
    let outerLoopNumberAsString = index.toString()
    let subNumber = "";
      for (let j=0; j<=outerLoopNumberAsString.length-1; j++) {
        let singleDigit = outerLoopNumberAsString.charAt(j)
        if (singleDigit === "3") {
          subNumber = "Won't you be my neighbor, " + userName + "?";
          break;
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


