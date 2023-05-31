import $ from "jquery";
import { Offcanvas } from "./_offcanvas";
import { Collapse } from "./_collapse";
import { AOS } from "./_aos";
import "./_scroll";

new Offcanvas({
  trigger: ".js-open-menu",
  target: ".js-menu",
  dismiss: ".js-close-menu",
});

$(".js-faq-question").each(function () {
  const trigger = $(this);
  const target = $(".js-faq-answer", trigger.parent());
  new Collapse({
    trigger,
    target,
  });
});

new AOS({
  targets: $("[data-animate]"),
  threshold: 0.5,
}).run();
