$(document).ready(function(){
  $(".display").hide();
  $(".service1, .display1").click(function(){
    $(".display1").toggle();
    $(".service1").toggle();
  });
  $(".service2, .display2").click(function(){
    $(".display2").toggle();
    $(".service2").toggle();
  });
  $(".service3, .display3").click(function(){
    $(".display3").toggle();
    $(".service3").toggle();
  });
  $(".website").hide();
  $(".web1").hover(function(){
    $(".website1").show();
  },function(){
    $(".website1").hide();
  });
  $(".web2").hover(function(){
    $(".website2").show();
  },function(){
    $(".website2").hide();
  });
  $(".web3").hover(function(){
    $(".website3").show();
  },function(){
    $(".website3").hide();
  });
  $(".web4").hover(function(){
    $(".website4").show();
  },function(){
    $(".website4").hide();
  });
  $(".web5").hover(function(){
    $(".website5").show();
  },function(){
    $(".website5").hide();
  });
  $(".web6").hover(function(){
    $(".website6").show();
  },function(){
    $(".website6").hide();
  });
  $(".web7").hover(function(){
    $(".website7").show();
  },function(){
    $(".website7").hide();
  });
  $(".web8").hover(function(){
    $(".website8").show();
  },function(){
    $(".website8").hide();
  });
})
$(document).ready(function(){
  document.getElementById("form").addEventListener("submit", msg)
  function msg (){
    var name1 = document.getElementById("name").Value;
    alert("Hi we have received your message. Thank you");
  }
});