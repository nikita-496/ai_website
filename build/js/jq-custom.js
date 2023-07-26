$(document).ready(function () {
  $(".marquee").marquee({
    //duration in milliseconds of the marquee
    duration: 15000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: "left",
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,
  });

  $(".header__burger").on("click", function () {
    $(this).toggleClass("active");
    $("body").toggleClass("hidden");
    $('.nav').toggleClass("active");
  });

  $(".nav__links a").click(function () {
    $("body").removeClass("hidden");
    $(".burger").removeClass("active");
    $(".nav").removeClass("active");
  });

  $(function () {
    $('a[href^="#"]').on("click", function (evt) {
      // отменяем стандартное действие
      evt.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $("html, body").animate({ scrollTop: dn }, 1000);

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });

  $(".tabs-content").hide();
  $(".tabs-head").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().toggle();
  });

  autosize($("textarea"));

  $(document).ready(function () {
    if (window.innerWidth < 768) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              $(entry.target).addClass("active bounceInLeft");
            } else {
              $(entry.target).removeClass("active bounceInLeft");
            }
          });
        },
        { threshold: 1 }
      );
      $(".cases__picture").each(function () {
        observer.observe(this);
      });
    }
  });

  $(document).ready(function() {
    var mh = 0;
    $(".swiper-reviews .swiper-slide").each(function () {
        var h_block = parseInt($(this).height());
        if(h_block > mh) {
           mh = h_block;
        };
    });
    $(".swiper-reviews .swiper-slide").height(mh);
  })
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcS1jdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKFwiLm1hcnF1ZWVcIikubWFycXVlZSh7XG4gICAgLy9kdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgb2YgdGhlIG1hcnF1ZWVcbiAgICBkdXJhdGlvbjogMTUwMDAsXG4gICAgLy9nYXAgaW4gcGl4ZWxzIGJldHdlZW4gdGhlIHRpY2tlcnNcbiAgICBnYXA6IDUwLFxuICAgIC8vdGltZSBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIHRoZSBtYXJxdWVlIHdpbGwgc3RhcnQgYW5pbWF0aW5nXG4gICAgZGVsYXlCZWZvcmVTdGFydDogMCxcbiAgICAvLydsZWZ0JyBvciAncmlnaHQnXG4gICAgZGlyZWN0aW9uOiBcImxlZnRcIixcbiAgICAvL3RydWUgb3IgZmFsc2UgLSBzaG91bGQgdGhlIG1hcnF1ZWUgYmUgZHVwbGljYXRlZCB0byBzaG93IGFuIGVmZmVjdCBvZiBjb250aW51ZXMgZmxvd1xuICAgIGR1cGxpY2F0ZWQ6IHRydWUsXG4gIH0pO1xuXG4gICQoXCIuaGVhZGVyX19idXJnZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAkKCcubmF2JykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gICQoXCIubmF2X19saW5rcyBhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAkKFwiLmJ1cmdlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKFwiLm5hdlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgfSk7XG5cbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnYVtocmVmXj1cIiNcIl0nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vINC+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90L7QtSDQtNC10LnRgdGC0LLQuNC1XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIHNjID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcbiAgICAgICAgZG4gPSAkKHNjKS5vZmZzZXQoKS50b3A7XG4gICAgICAvKlxuICAgICAgICogc2MgLSDQsiDQv9C10YDQtdC80LXQvdC90YPRjiDQt9Cw0L3QvtGB0LjQvCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDRgtC+0LwsINC6INC60LDQutC+0LzRgyDQsdC70L7QutGDINC90LDQtNC+INC/0LXRgNC10LnRgtC4XG4gICAgICAgKiBkbiAtINC+0L/RgNC10LTQtdC70Y/QtdC8INC/0L7Qu9C+0LbQtdC90LjQtSDQsdC70L7QutCwINC90LAg0YHRgtGA0LDQvdC40YbQtVxuICAgICAgICovXG5cbiAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGRuIH0sIDEwMDApO1xuXG4gICAgICAvKlxuICAgICAgICogMTAwMCDRgdC60L7RgNC+0YHRgtGMINC/0LXRgNC10YXQvtC00LAg0LIg0LzQuNC70LvQuNGB0LXQutGD0L3QtNCw0YVcbiAgICAgICAqL1xuICAgIH0pO1xuICB9KTtcblxuICAkKFwiLnRhYnMtY29udGVudFwiKS5oaWRlKCk7XG4gICQoXCIudGFicy1oZWFkXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJCh0aGlzKS5uZXh0KCkudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIGF1dG9zaXplKCQoXCJ0ZXh0YXJlYVwiKSk7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICBmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAkKGVudHJ5LnRhcmdldCkuYWRkQ2xhc3MoXCJhY3RpdmUgYm91bmNlSW5MZWZ0XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJChlbnRyeS50YXJnZXQpLnJlbW92ZUNsYXNzKFwiYWN0aXZlIGJvdW5jZUluTGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgeyB0aHJlc2hvbGQ6IDEgfVxuICAgICAgKTtcbiAgICAgICQoXCIuY2FzZXNfX3BpY3R1cmVcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciBtaCA9IDA7XG4gICAgJChcIi5zd2lwZXItcmV2aWV3cyAuc3dpcGVyLXNsaWRlXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaF9ibG9jayA9IHBhcnNlSW50KCQodGhpcykuaGVpZ2h0KCkpO1xuICAgICAgICBpZihoX2Jsb2NrID4gbWgpIHtcbiAgICAgICAgICAgbWggPSBoX2Jsb2NrO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgICQoXCIuc3dpcGVyLXJldmlld3MgLnN3aXBlci1zbGlkZVwiKS5oZWlnaHQobWgpO1xuICB9KVxufSk7XG4iXSwiZmlsZSI6ImpxLWN1c3RvbS5qcyJ9
