import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#reviews-carousel", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 1 },
    },
  }).mount({ AutoScroll });

  new Splide("#why-us-carousel", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 5,
    breakpoints: {
      1600: { perPage: 4 },
      1200: { perPage: 3 },
      920: { perPage: 2 },
      640: { perPage: 1 },
    },
  }).mount();
});
