var day = moment().format("MMMM Do YYYY, h:mm");
$("#currentDay").html(day);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });
});

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));

function background() {
  var presentTime = moment().hours();
  $(".time-block").each(function () {
    var timeDiv = parseInt($(this).attr("id"));
    if (timeDiv < presentTime) {
      $(this).addClass("past");
    } else if (timeDiv == presentTime) {
      $(this).addClass("present");
    } else if (timeDiv > presentTime) {
      $(this).addClass("future");
    }
  });
}

background();
