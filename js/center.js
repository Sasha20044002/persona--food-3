function openModalConsultation() {
  $(".modal-consultation").removeClass("hidden");
  $(".modal-consultation").addClass("visible");
  $("body").addClass("overflow");
}

function closeModalConsultation() {
  $(".modal-consultation").addClass("hidden");
  $(".modal-consultation").removeClass("visible");
  $("body").removeClass("overflow");
}

$(".main__item__btn").click(function () {
  openModalConsultation();
});

$(".back").click(function () {
  closeModalConsultation();
});
