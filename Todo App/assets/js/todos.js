// Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on x to delete Todo
$("ul").on("click", "span", function(event){
  //.parent() to work on parent element - in this case the "li"
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  //stops further events from running
  event.stopPropagation();

});

// Add todo when hit enter
$("input[type='text']").keypress(function(event){
  if(event.keyCode === 13){
    //text from input
    let todoText = $(this).val();
    //create new li and add to ul
    $("ul").append(`<li><span><i class='fa fa-trash'></i></span> ${todoText}</li>`);
    $(this).val("");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
