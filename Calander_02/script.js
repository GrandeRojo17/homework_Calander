$(document).ready(function () {
  $(".add-btn").on("click", function () {
    var activity = "I want to: " + $(this).siblings(".textBox").val();
    var time = $(this).parent().attr("id");

    console.log("Ok, so:  " + activity);
    console.log("for " + time + "sharp!");
    localStorage.setItem(time, activity);

    // assign these to local storage.
  });
  $(".delete-btn").on("click", function () {
    $(this).siblings(".textBox").val("I want to:");
    var hourKey = $(this).parent().attr("id");

    localStorage.removeItem(hourKey);
  });

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

  colorHour();
  // check current time against the hour. spl
  $("#hour-5 .textBox").val(localStorage.getItem("hour-5"));
  $("#hour-6 .textBox").val(localStorage.getItem("hour-6"));
  $("#hour-7 .textBox").val(localStorage.getItem("hour-7"));
  $("#hour-8 .textBox").val(localStorage.getItem("hour-8"));
  $("#hour-9 .textBox").val(localStorage.getItem("hour-9"));
  $("#hour-10 .textBox").val(localStorage.getItem("hour-10"));
  $("#hour-11 .textBox").val(localStorage.getItem("hour-11"));
  $("#hour-12 .textBox").val(localStorage.getItem("hour-12"));
  $("#hour-13 .textBox").val(localStorage.getItem("hour-13"));
  $("#hour-14 .textBox").val(localStorage.getItem("hour-14"));
  $("#hour-15 .textBox").val(localStorage.getItem("hour-15"));
  $("#hour-16 .textBox").val(localStorage.getItem("hour-16"));
  $("#hour-17 .textBox").val(localStorage.getItem("hour-17"));
  $("#hour-18 .textBox").val(localStorage.getItem("hour-18"));
  $("#hour-19 .textBox").val(localStorage.getItem("hour-19"));
  $("#hour-20 .textBox").val(localStorage.getItem("hour-20"));
  $("#hour-21 .textBox").val(localStorage.getItem("hour-21"));
  $("#hour-22 .textBox").val(localStorage.getItem("hour-22"));
  $("#hour-23 .textBox").val(localStorage.getItem("hour-23"));
  $("#hour-24 .textBox").val(localStorage.getItem("hour-24"));

  $("#current-date").text(moment().format("dddd, MMMM Do"));
});

// m = moment();
// console.log(m.toString());

//for each hour in the list all the way up to 24
