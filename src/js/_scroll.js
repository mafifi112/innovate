import $ from "jquery";
import { throttle } from "./_utils";

const navbar = $(".js-navbar");

$(window).on(
  "scroll",
  throttle(function () {
    if (window.scrollY > 0) {
      navbar.addClass("scroll");
    } else {
      navbar.removeClass("scroll");
    }
  }, 150)
);
