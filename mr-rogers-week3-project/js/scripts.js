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
    console.log("outer log loop number " + outerLoopNumberAsString);
    //10 -> "10"
    //outer log loop number 10
    let subNumber = "";
      for (let indexOfOuterLoopNumber=0; indexOfOuterLoopNumber<=outerLoopNumberAsString.length-1; indexOfOuterLoopNumber++) {
        
        //if inner loop number is 3 then add Wont you be my neighbor to number
        // console.log("inner log loop number " + outerLoopNumberAsString[indexOfOuterLoopNumber]);
        let singleDigit = outerLoopNumberAsString.charAt(indexOfOuterLoopNumber)
        console.log("inner log loop number " + outerLoopNumberAsString.charAt(indexOfOuterLoopNumber));
        if (singleDigit === "3") {
          console.log("single");
          subNumber = "Won't you be my neighbor?";
          
          //update number
        } 
        else if (singleDigit === "2") {
          subNumber = "Boop!"
        }
        
      }
      if (subNumber === "") {
        number += outerLoopNumberAsString;
      
      }
      else {number+=subNumber}
      // number += outerLoopNumber;
    }



  console.log(number);
  return number;
}