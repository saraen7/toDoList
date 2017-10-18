$(document).ready(function(){

var count = 0;

function countText(){
  $(".count").text(count);
};

//adding items to the list
  $("form").submit(function() {
    event.preventDefault();
    $("ul").append("<li>" + $("input")[0].value + "</li>");
    $("input")[0].value = "";
    count++;
    countText();
  });

//clear list
  $(".clear").on("click",function(){
    $("li").remove();
    count = 0;
    countText();
  });

//mark completed
  $("ul").on("click", "li", function(evt) {
    $(this).addClass("completed");
    count--;
    countText();
  });

//clear completed
  $(".clearCompleted").on("click",function(){
    if($(".completed").length>0){
      $(".completed").remove();
    }
  });

});
