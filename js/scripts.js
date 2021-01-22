$(document).ready(function() {
  $("form#input").submit(function(event) {
  event.preventDefault();
  countTo(parseInt($("input#userInput").val()))
  $("#output").text(input);
  });
});

function countTo(count) {
  let input=0;
  for (let i=0; i<=count; i+=1) {
    input+=i;
  }
}



