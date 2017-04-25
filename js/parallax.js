$(window).scroll(function() {
  var st = $(this).scrollTop();


  $(".title").css({
    "transform" : "translate(0%," + st/20 + "%"
  });

  $(".desc").css({
    "transform" : "translate(0%," + st/20 + "%"
  });

  $(".form_call").css({
    "transform" : "translate(0%," + st/20 + "%"
  });
});
