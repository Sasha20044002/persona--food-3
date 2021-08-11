$(".confirm").click(function () {
  $(".modal").removeClass("hidden");
  $(".modal").addClass("visible");
  $("body").addClass("overflow");
});

$(".modal__close").click(function () {
  $(".modal").addClass("hidden");
  $(".modal").removeClass("visible");
  $("body").removeClass("overflow");
});
