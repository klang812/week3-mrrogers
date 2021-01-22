function countTo(count) {
  let input=[];
  for (let i=0; i<=count; i+=1) {
  input+=i;
  }
}

$(document).ready.function() {
  $("#input").submit(function(event) {
  event.preventDefault();
  countTo(parseInt($("input#userInput").val()))
  alert("Success!")
  });
});

