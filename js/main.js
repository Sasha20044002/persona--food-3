function range() {
  var val = $(".discount__range__item").val();
  $(".discount__range__item").css({
    background:
      "-webkit-linear-gradient(left,#85af27 0%,#85af27 " +
      val +
      "%,#ffffff " +
      val +
      "%,#ffffff 100%)",
  });
}
