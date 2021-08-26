const sliderHeader = new Swiper("#slider", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  slidesPerView: 1,
});

$("#style-1").text(`
.back.fixed, back-2.fixed{
  width: 1120px;
  padding: 0 ${($(window).width() - 1120) / 2}px;
}

@media (max-width: 1061px) {
  .header #mobile-menu:checked ~ .header__nav {
    height: ${$(window).height()}px;
  }
}
`);

$(window).resize(function () {
  $("#style-1").text(`
  .back.fixed, back-2.fixed{
    width: 1120px;
    padding: 0 ${($(window).width() - 1120) / 2}px;
  }

  @media (max-width: 1061px) {
    .header #mobile-menu:checked ~ .header__nav {
      height: ${$(window).height()}px;
    }
  }
`);
});

$(window).scroll(function () {
  $(window).resize(function () {
    $("#style-1").text(`
    .back.fixed, back-2.fixed{
      width: 1120px;
      padding: 0 ${($(window).width() - 1120) / 2}px;
    }
  
    @media (max-width: 1061px) {
      .header #mobile-menu:checked ~ .header__nav {
        height: ${$(window).height()}px;
      }
    }
  `);
  });
});

if ($(window).scrollTop() >= 72) {
  $(".back").addClass("fixed");
} else {
  $(".back").removeClass("fixed");
}

$(window).scroll(function () {
  if ($(window).scrollTop() >= 72) {
    $(".back").addClass("fixed");
  } else {
    $(".back").removeClass("fixed");
  }
});

$(window).resize(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 72) {
      $(".back").addClass("fixed");
    } else {
      $(".back").removeClass("fixed");
    }
  });
});

if (
  $(window).scrollTop() >=
  $(".header").height() +
    $("#slider").height() +
    $("#programms").height() +
    $("#popular").height() +
    $(".restaurant__title").height()
) {
  $(".back-2").addClass("fixed");
} else {
  $(".back-2").removeClass("fixed");
}

$(window).scroll(function () {
  if (
    $(window).scrollTop() >=
    $(".header").height() +
      $("#slider").height() +
      $("#programms").height() +
      $("#popular").height() +
      $(".restaurant__title").height()
  ) {
    $(".back-2").addClass("fixed");
  } else {
    $(".back-2").removeClass("fixed");
  }
});

$(window).resize(function () {
  $(window).scroll(function () {
    if (
      $(window).scrollTop() >=
      $(".header").height() +
        $("#slider").height() +
        $("#programms").height() +
        $("#popular").height() +
        $(".restaurant__title").height()
    ) {
      $(".back-2").addClass("fixed");
    } else {
      $(".back-2").removeClass("fixed");
    }
  });
});

for (
  let i = 0;
  i < document.getElementsByClassName("restaurant__item").length;
  i++
) {
  const a = document.getElementsByClassName("restaurant__item")[i];
  a.onclick = function () {
    $("html, body").animate(
      {
        scrollTop:
          $(".header").height() +
          $("#slider").height() +
          $("#programms").height() +
          $("#popular").height() +
          $(".restaurant__title").height() +
          20,
      },
      500
    );
  };
}

// $(document).ready(function () {
//   $(".restaurant__item").click(function () {
//     var value = $(this).attr("data-filter");
//     var elem = $(".restaurant__block");
//     if (value == "all") {
//       $(elem).show("0");
//     } else {
//       $(elem)
//         .not("." + value)
//         .hide("0");
//       $(elem)
//         .filter("." + value)
//         .show("0");
//     }
//   });
// });

$("#fixed").text(`
  .fixed-btn{
    position: fixed;
    right: ${($(window).width() - $("#modal-body").width()) / 2 + 16}px;
    bottom: ${($(window).height() - $("#modal-body").height()) / 2}px;
  }

  @media (max-width: 850px) {
    .fixed-btn{
      right: 0;
      bottom: 0;
    }
  }
`);

$(window).resize(function () {
  $("#fixed").text(`
    .fixed-btn{
      position: fixed;
      right: ${($(window).width() - $("#modal-body").width()) / 2 + 16}px;
      bottom: ${($(window).height() - $("#modal-body").height()) / 2}px;
    }
    @media (max-width: 850px) {
      .fixed-btn{
        right: 0;
        bottom: 0;
      }
    }
  `);
});

$("#open-modal-1").click(function () {
  $("#programm-modal").addClass("visible");
  $("#programm-modal").removeClass("hidden");
  $("body").addClass("overflow");
});

$("#open-modal-2").click(function () {
  $("#programm-menu-modal").addClass("visible");
  $("#programm-menu-modal").removeClass("hidden");
  $("body").addClass("overflow");
});

$("#open-modal-3").click(function () {
  $("#item-modal").addClass("visible");
  $("#item-modal").removeClass("hidden");
  $("body").addClass("overflow");
});

$(".close-modal").click(function () {
  $("#programm-modal").removeClass("visible");
  $("#programm-modal").addClass("hidden");
  $("#programm-menu-modal").removeClass("visible");
  $("#programm-menu-modal").addClass("hidden");
  $("#item-modal").removeClass("visible");
  $("#item-modal").addClass("hidden");
  $("body").removeClass("overflow");
});

$("#programm-modal").click(function (e) {
  if (e.target == document.querySelector("#modal-wrapper")) {
    $("#programm-modal").removeClass("visible");
    $("#programm-modal").addClass("hidden");
    $("body").removeClass("overflow");
  }
});

$("#programm-menu-modal").click(function (e) {
  if (e.target == document.querySelector("#modal-wrapper-2")) {
    $("#programm-menu-modal").removeClass("visible");
    $("#programm-menu-modal").addClass("hidden");
    $("body").removeClass("overflow");
  }
});

$("#item-modal").click(function (e) {
  if (e.target == document.querySelector("#modal-wrapper-3")) {
    $("#item-modal").removeClass("visible");
    $("#item-modal").addClass("hidden");
    $("body").removeClass("overflow");
  }
});

function openCart() {
  $("#cart").removeClass("hidden");
  $("#cart").addClass("visible");
  $("body").addClass("overflow");
}

function closeCart() {
  $("#cart").addClass("hidden");
  $("#cart").removeClass("visible");
  $("body").removeClass("overflow");
  $("#page-1").addClass("visible");
  $("#page-1").removeClass("hidden");
  $("#page-2").removeClass("visible");
  $("#page-2").addClass("hidden");
  $("#page-3").removeClass("visible");
  $("#page-3").addClass("hidden");
}

$("#open-cart").click(function (e) {
  e.preventDefault();

  openCart();
});

$(".close-cart").click(function () {
  closeCart();
});


function closeFirstOpenSecond() {
  $("#page-1").removeClass("visible");
  $("#page-1").addClass("hidden");
  $("#page-2").addClass("visible");
  $("#page-2").removeClass("hidden");
}

function closeSecondOpenThird() {
  $("#page-2").removeClass("visible");
  $("#page-2").addClass("hidden");
  $("#page-3").addClass("visible");
  $("#page-3").removeClass("hidden");
}

function closeSecondOpenFirst() {
  $("#page-1").addClass("visible");
  $("#page-1").removeClass("hidden");
  $("#page-2").removeClass("visible");
  $("#page-2").addClass("hidden");
}

$("#next-page-to-2").click(function () {
  closeFirstOpenSecond();
});

$("#next-page-to-3").click(function (e) {
  e.preventDefault();

  closeSecondOpenThird();
});

$(".back-to-cart").click(function () {
  closeSecondOpenFirst();
});

$(".delivery-label").click(function () {
  $(".delivery").addClass("visible");
  $(".delivery").removeClass("hidden");
  $(".self-call").addClass("hidden");
  $(".self-call").removeClass("visible");
});

$(".self-call-label").click(function () {
  $(".delivery").removeClass("visible");
  $(".delivery").addClass("hidden");
  $(".self-call").removeClass("hidden");
  $(".self-call").addClass("visible");
});

$("#self-call-variants").click(function (e) {
  e.preventDefault();
});

function openOplataModalka() {
  $(".oplata-modalka").removeClass("hidden");
  $(".oplata-modalka").addClass("visible");
}

function closeOplataModalka() {
  $(".oplata-modalka").addClass("hidden");
  $(".oplata-modalka").remove("visible");
}

$("#oplata-modalka-btn-open").click(function (e) {
  e.preventDefault();

  openOplataModalka();
});

$(".oplata-modalka").click(function (e) {
  if (e.target == document.querySelector(".oplata-modalka")) {
    closeOplataModalka();
  }
});

$(".oplata-modalka__close").click(function (e) {
  closeOplataModalka();
});

$(".try-again").click(function () {
  closeOplataModalka();
});
