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
