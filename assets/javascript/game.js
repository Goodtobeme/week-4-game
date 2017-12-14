


var wins = 0;
var losses = 0;
var yourTotalScore = 0;
var targetNumber = 39;

$( document ).ready(function() {
var random = [Math.floor(Math.random() * 39)];
console.log(random);
// var counter = 0;

// Array with four options
 var numberOptions = [1,10,6,4];


// Loop that creates crystals for numberOptions
 for (var i = 0; i < 4; i++) {
   
$("#crystalmage0,1,2,3" + i ).attr("data-crystalValue", numberOptions[i]);
// This iteration creates an image crystal

}

// Giving each crystal a class

// All crystalImage will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.

$(".crystal-image1").on("click", function(event) {

// console.log(event.target);
console.log(event.targetNumber);

// Extract the value from the data-attr
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);


counter += crystalValue;



score("New score: " + counter);

if (counter ===targetNumber) {
catagory("you win!");
}

else if (counter > targetNumber) {
catagory1("You lose!!");


}
});

});
