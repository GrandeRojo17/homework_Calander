$(document).ready(function () {
  $(".add-btn").on("click", function () {
    var activity = $(this).siblings(".textBox").val();
    var time = $(this).parent().attr("id");

    console.log("successful click");
    console.log("Ok, so:  " + activity);
    console.log("for " + time + "sharp!");
    localStorage.setItem(time, activity);

    // assign these to local storage.
  });
$(
  'delete-btn'
).on('click',function(){

textBox


}

)




  // create a seperate function to update the hour
  function colorHour() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function () {
      var blockhour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockhour);
      if (blockhour < currentHour) {
        //looking at past
        $(this).addClass("past");
      } else if (blockhour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }


  function displayDate() {
    var dt = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(dt);
    //clear and add in the date.
    //id is current date
  }

  displayDate();
  colorHour();
  // check current time against the hour. spl

  $("#hour-6 .textBox").val(localStorage.getItem("hour-6"));
});

// m = moment();
// console.log(m.toString());

//for each hour in the list all the way up to 24
