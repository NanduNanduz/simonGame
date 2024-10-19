//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];
//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];
//11.create a new empty array with the name userClickedPattern.
var userClickedPattern = [];


//9. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function(){
  //10. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");
  //12. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);
  //13. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
  playSound(userChosenColour);
})




//1. Inside game.js create a new function called nextSequence()
function nextSequence() {
  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];

  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  //7. Use jQuery to select the button with the same id as the randomChosenColour
  //8. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  //var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  //audio.play();
  //15. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColour);
}


//14. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

