

  var win =0;
  var loses = 0;
  var random_result;
  var previous = 0;


  var resetAndStart = function() {

  $(".crystals").empty();

  var images = ["https://i.pinimg.com/736x/dc/a9/80/dca9802355d239acfbe03c2c93ba45ee--obsidian-stone-gems-and-minerals.jpg",
   "https://www.soulfulcrystals.co.uk/wp-content/uploads/2013/11/a-crystal-healing.jpg",
   "https://i.pinimg.com/564x/65/4d/e3/654de3967d826661e1da2f907dab2a98--gems-and-minerals-crystals-minerals.jpg",
   "http://solawakening.com/wp-content/uploads/2011/12/fantasy-crystal-field.jpg"];

  random_number = Math.floor(Math.random() * 29) + 10;


  $("#result").html("Random Number: " + random_number);
  $("#previous").html("Previous: " + previous);

  for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 19) + 1;
     // console.log(random);

    var crystal = $("<div>");
    crystal.attr( {
      "class": "crystal",
      "data-random": random
    });
    crystal.css({
      "background-image":"url('" + images[i] + "')",
       "background-size":"cover"
  });
    $(".crystals").append(crystal);
  }
  $("#previous").html("Total Score:" + previous);
  }

  resetAndStart();

  var reset = function () {

  }

  //Event Delagation
  $(document).on("click", ".crystal", function () {

  var num = parseInt($(this).attr("data-random"));

  $("#previous").html("Total Score:" + previous);
  previous += num;
  console.log(previous);


  if(previous > random_number) {
    loses++;
    $("#loses").html("You lose:" + loses);

    previous = 0;

      $("#previous").html(previous);
    resetAndStart();
  }

  else if(previous === random_number) {
       win++;
         $("#win").html("You Win:" + win);

         previous = 0;

           $("#previous").html(previous);
         resetAndStart();
    }
  });
