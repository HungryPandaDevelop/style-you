$(document).ready(function () {

  var stopFlag = 1;

  var slider = {
    objWrap: $(".slider-class"),
    objEl: $(".slider-class .item"),
    objPagination: $(".slider-pagination"),
    btnPrev: $(".arr-prev"),
    btnNext: $(".arr-next"),
    count: 0,
    maxSize: function () {
      return slider.objEl.length - 1;
    },
    timeAnimation: 750,
    movementFlag: 1,
    increaseCount: function () {
      if (this.maxSize() > this.count) {
        this.count++;
      } else {
        this.count = 0;
      }
    },
    decreaseCount: function () {
      if (this.count > 0) {
        this.count--;
      } else {
        this.count = this.maxSize();
      }
    },
    movementNext: function () {

      if (stopFlag == 1) {

        this.movementFlag = 1;
        this.changeSlider();
        this.increaseCount();
        this.objWrap.removeClass("move-right");

        setTimeout(function () {
          stopFlag = 1;
        }, 750);
      }
    },
    movementPrev: function () {

      if (stopFlag == 1) {

        this.movementFlag = 0;
        this.changeSlider();
        this.decreaseCount();
        this.objWrap.addClass("move-right");

        setTimeout(function () {
          stopFlag = 1;
        }, 750);
      }

    },
    changeSlider: function () {

      stopFlag = 0;
      $(".slider-class .item.active").addClass("active-prev");

      slider.objPagination.find("span").removeClass("active").eq(this.count).addClass("active");
      this.objEl.removeClass("active").eq(this.count).addClass("active");


      clearTimeout(removeActive);
      var tempEl = this.objEl;
      var removeActive = setTimeout(function () {
        tempEl.removeClass("active-prev");
      }, this.timeAnimation);
    }
  }
  slider.objEl.each(function () {
    slider.objPagination.append("<span/>");
  });



  slider.movementNext();



  function changeWidth() {
    var windowWidth = $(window).width();
    slider.objEl.find("img").width(windowWidth);
    slider.objEl.find(".content-item").width($(".content-item").width());
  }
  changeWidth();
  $(window).on("resize", function () {
    changeWidth();
  });

  slider.btnPrev.on("click", function () {
    slider.movementNext();
  });
  slider.btnNext.on("click", function () {
    slider.movementPrev();
  });
  slider.objPagination.find("span").on('click', function () {
    slider.count = $(this).index();
    slider.movementNext();
  });
});