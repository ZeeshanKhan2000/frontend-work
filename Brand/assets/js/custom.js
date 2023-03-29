$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};

$("#number1").jQuerySimpleCounter({ end: 450, duration: 3000 });
$("#number2").jQuerySimpleCounter({ end: 2500, duration: 3000 });
$("#number3").jQuerySimpleCounter({ end: 4510, duration: 2000 });

/* AUTHOR LINK */
$(".about-me-img").hover(
  function () {
    $(".authorWindowWrapper").stop().fadeIn("fast").find("p").addClass("trans");
  },
  function () {
    $(".authorWindowWrapper")
      .stop()
      .fadeOut("fast")
      .find("p")
      .removeClass("trans");
  }
);

$("[data-tab]").on("click", function (e) {
  $(this).addClass("active").siblings("[data-tab]").removeClass("active");
  /* $(this).siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active')
    e.preventDefault() */

  $(this).closest(".zeehsan").find("[data-content]").removeClass("active");
  $(this)
    .closest(".zeehsan")
    .find("[data-content=" + $(this).data("tab") + "]")
    .addClass("active");

  /* $(this).addClass('active').siblings('[data-tab]').removeClass('active').siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active') */
});

$("[data-tab]").on("click", function (e) {
  $(this).addClass("active").siblings("[data-tab]").removeClass("active");
  /* $(this).siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active')
  e.preventDefault() */

  $(this)
    .closest(".custom-packages-section-tabs")
    .find("[data-content]")
    .removeClass("active");
  $(this)
    .closest(".custom-packages-section-tabs")
    .find("[data-content=" + $(this).data("tab") + "]")
    .addClass("active");

  /* $(this).addClass('active').siblings('[data-tab]').removeClass('active').siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active') */
});

$(".customer-feedback-slider-one ").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(".Achievements-slider ").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
