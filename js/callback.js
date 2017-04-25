$("#callback").submit(function() {
  $.ajax({
    type: "GET",
    url: "mail.php",
    data: $("#callback").serialize()
  }).done(function() {
    alert("Спасибо за заявку! Менеджеры с Вами свяжутся!");
    setTimeout(function() {
      $.fancybox.close();
    }, 1000);
  });
  return false;
});
