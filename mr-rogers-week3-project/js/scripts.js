$(document).ready(function() {
  $("#input").submit(function(event) {
  event.preventDefault();
  const count = parseInt($("input#userInput").val());
  $("#output").text(countTo(count));
  });
});

function countTo(count) {
  let number=[];
  console.log("count: " + count)
  for (let i=0; i<=count; i++) {
    console.log("i " + i);
    number += i;
  }
  return number;
}