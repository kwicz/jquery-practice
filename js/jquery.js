$(document).ready(function(){
  
  $("img").fadeIn();
  
  $("img").click(function(){
    $("#photo").slideToggle();
  });

  $("#showing").click(function(){
    $("#showing").toggle();
    $("#hidden").toggle();
  });
});