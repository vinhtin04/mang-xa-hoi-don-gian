$(document).ready(() => {


});
$("textarea").keyup(function(){
  var t=140 - $(this).val().length;
  $(".characters").text(t);
  if (t < 0) {
    $(".wordcount").css("color", "red");
  }
  else {
    $(".wordcount").css("color", "black");
  }
});
$(".btn-post").on("click", function() {
        $("textarea")
              .addClass("postText")
              .css("width", "100%")
              .css("height", "100px")
              .placeholder("What's on your mind?");
        $(".characters").text("140");
})
$("img").mousemove(function() {
        $("body").css("background-color", "#0080FF");
})
$("p").mousemove(function() {
        $("body").css("background-color", "#0080FF");
})
$(".btn").mousemove(function() {
        $("body").css("background-color", "black");
})
