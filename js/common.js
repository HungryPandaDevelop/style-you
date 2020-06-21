$(document).ready(function () {

  $(".play-ico").on('click', function () {
    $(this).hide().prev()[0].play();
  });

  var st = 0;

  function checkStick() {
    st = $(this).scrollTop();
    if (st > 0) {
      $("header, .portfolio-nav").addClass("isStick");
    } else {
      $("header, .portfolio-nav").removeClass("isStick");
    }
  }
  $(window).scroll(function (event) {
    checkStick();
  });
  checkStick();

  var indexSL;
  $(".popup-header, .show-list").on("mouseleave", function () {
    $(".popup-header, .show-list, header").removeClass("active");
  });

  $(".show-list,.popup-header").on('mouseenter', function () {
    console.log('in');

    indexSL = $(this).data("show");
    console.log("index", indexSL);
    $("header").addClass("active")
    $(this).addClass("active");
    $(".popup-header").removeClass("active");
    $(".popup-header-" + indexSL).addClass("active");
  });


  $(".opening-list").on("click", function () {
    if ($(this).hasClass("active")) {
      $(".opening-list").removeClass("active");
    } else {
      $(".opening-list").removeClass("active").eq($(this).index()).addClass("active");
    }
  });

  $(".hamburger").on("click", function () {
    if ($(this).hasClass("close")) {
      $("header,.mobile-menu").removeClass("active");
      $(this).removeClass("close");
    } else {
      $("header,.mobile-menu").addClass("active");
      $(this).addClass("close");
    }
  });
  var topStick = "60px";

  if ($(window).width() < 1080) {
    topStick = "43px";
  } else if ($(window).width() < 1280) {
    topStick = "48px";
  } else if ($(window).width() < 1440) {
    topStick = "49px";
  }


  if ($(window).width() > 988) {
    $('.js-sticky').stickUp({
      topMargin: topStick
    });
  } else {
    $('.js-sticky-mobile').stickUp({
      topMargin: "30px"
    });
  }



  var owlSlider = $(".slider-owl");

  owlSlider.owlCarousel({
    items: 1,
    nav: true,
    dots: true
  });

  //.work-carousel

  var workCarousel = $(".work-carousel");

  workCarousel.owlCarousel({

    dots: false,
    margin: 30,

    responsive: {
      0: {
        items: 1,
        nav: false,
        stagePadding: 20
      },
      768: {
        items: 4,
        nav: true,
        stagePadding: 30
      }
    }
  });

  if ($(window).width() < 988) {

    var owlPortfolio = $(".owl-portfolio");

    owlPortfolio.owlCarousel({
      items: 1,
      nav: false,
      dots: false,
      margin: 30
    });

    var owlDev = $(".owl-dev-stage");

    owlDev.owlCarousel({
      items: 1,
      nav: false,
      dots: false,
      margin: 30
    });

    $("header").addClass("black");
    $("header img").removeClass("active");
    $("header img.black").addClass("active");
    $(".hamburger").addClass("black")
  }


  var owlServices = $(".owl-services");

  owlServices.owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    onChanged: callback,
    responsive: {
      0: {
        nav: false,
        stagePadding: 20,
        margin: 20
      },
      768: {
        nav: true

      }
    }
  });

  function callback(event) {

    var element = event.target; // DOM element, in this example .owl-carousel
    var name = event.type; // Name of the event, in this example dragged
    var namespace = event.namespace; // Namespace of the event, in this example owl.carousel
    var items = event.item.count; // Number of items
    var item = event.item.index; // Position of the current item
    // Provided by the navigation plugin
    var pages = event.page.count; // Number of pages
    var page = event.page.index + 1; // Position of the current page
    var size = event.page.size; // Number of items per page
    console.log("owl", items, item, pages, page);

    $(".ss-count").text(item + 1);
    $(".ss-all").text(items);
  }
});