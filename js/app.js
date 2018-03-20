$(document).ready(function() {
  let trigger = $("#container").height();

  $(window).resize(function() {
    trigger = $("#container").height();
  });

  const steps = $("#container").children();

  $("#container").scroll(function() {
    steps.each(i => {
      if ($(steps[i]).position().top < 0 && i < 7) {
        $(steps[i])
          .next()
          .fadeTo("fast", 1);

        if (i > 1 && i < 6) {
          $("#map" + i)
            .children()
            .switchClass("active", "unactive", "slow", "swing");
        }
      } else {
        $("#map" + i)
          .children()
          .switchClass("unactive", "active", "slow", "swing");
      }
    });
  });
});
