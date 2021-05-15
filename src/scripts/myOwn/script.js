//OWL

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
      1800: {
        items: 5,
      },
    },
  });
});

//SCROLL

const scrollBtn = $("#scrollBtn");
const firstSection = $("#firstSection");

scrollBtn.click(function () {
  $("html, body").animate(
    {
      scrollTop: firstSection.offset().top,
    },
    500
  );
});
