var targetNumber = 61;

// // console.log(targetNumber);

$(".matchNum").append(targetNumber);
var counter = 0;
// created an array of values**********
var numberChoices = [4, 9, 15, 7];
for (var i = 0; i < numberChoices.length; i++);

// assign numbervalue to each image with a click:
$(".aquaGem").on("click", function() {
  counter += numberChoices[0];
  $(".match").text("Your Score: " + counter);
  // I'm trying to add the index value to the image and then add it to the score box.
  $(".multiGem").on("click", function() {
    counter += numberChoices[1];
    $(".match").text("Your Score: " + counter);

    $(".purpleGem").on("click", function() {
      counter += numberChoices[2];
      $(".match").text("Your Score: " + counter);

      $(".rainbowGem").on("click", function() {
        counter += numberChoices[3];
        $(".match").text("Your Score: " + counter);
      });
    });
  });
});
// condition - if user matches target number tell them they won and increment number of wins
if (counter === targetNumber) {
  alert("Good Job! You Win!" + "#wins" + 1);
}
// if user goes over the target number tell them they lose and try again and increment # of losses by 1
else counter > targetNumber;
{
  $(".matchNum").reset(counter);
  alert("You lose, try again. " + "#losses" + 1);
}
