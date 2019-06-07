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

if (counter === targetNumber) {
  alert("Good Job! You Win!" + "#wins" + 1);
} else counter > targetNumber;
{
  $(".matchNum").reset(counter);
  alert("You lose, try again. " + "#losses" + 1);
}

// var gemImagesVal = $(numberChoices[i]);
// console.log(gemImagesVal);

// $("gems").attr("data-vals", numberChoices[i]);

// assign gemimages a value
// gemImages.attr("data-gemValue", numberChoices[i]);

// var gemValue = $(this).attr("data-gemValue");

// gemValue = parseInt(gemValue);

// counter += gemValue;
// alert("score: " + counter);

// console.log(numberChoices[i]);
//   $(".box").attr("data-gemvalue", numberChoices[i]);
// $(".box").append(numberChoices);
// console.log();

//   gemValue = parseInt(gemValue);

//   counter += gemValue;
//   alert("score: " + counter);
// });

// var scoreTotals = 0;
// var userWins = 0;
// var userLose = 0;
