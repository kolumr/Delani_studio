$(function(){
  $(".display").hide();
  $(".service1, .display1").click(function(){
    $(".display1").toggle();
    $(".service1").toggle();
  })
  $(".service2, .display2").click(function(){
    $(".display2").toggle();
    $(".service2").toggle();
  })
  $(".service3, .display3").click(function(){
    $(".display3").toggle();
    $(".service3").toggle();
  })
  $(".web1").hover(function(){
    $(".website1").fadeIn();
    $(".website1").show();
  }, function(){
    $(".website1").hide();
  });
});