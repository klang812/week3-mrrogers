$(document).ready(function() {
  $("#input").submit(function(event) {
  event.preventDefault();
  // count = nan should be 30 (user input)
  const count = parseInt($("input#userInput").val());
  // console.log("count" + count);
  //countTo(count)
  // let input = [];
  //console.long(number)
  $("#output").text(countTo(count));
  });
});

function countTo(count) {
  // console.log("line27" + count);
  let number="";
  console.log("count: " + count)
  for (let i=0; i<=count; i++) {
    console.log("i " + i);
    number += i;
    console.log("input1: " + number)

  }
}