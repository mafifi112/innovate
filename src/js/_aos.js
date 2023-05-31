import $ from "jquery";

// animate on scroll
export class AOS {
  static CLASS_SHOW = "show";

  constructor({ targets, threshold = 0 }) {
    this.targetsEl = $(targets);
    this.threshold = threshold;
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            $(entry.target).addClass(AOS.CLASS_SHOW);
          }
        });
      },
      {
        threshold: this.threshold,
      }
    );
  }

  run() {
    $.each(this.targetsEl, (_, target) => {
      this.observer.observe(target);
    });
  }
}
