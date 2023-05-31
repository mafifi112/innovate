import $ from "jquery";

export class Collapse {
  static CLASS_SHOW = "show";

  constructor({ trigger, target }) {
    this.triggerEl = $(trigger);
    this.targetEl = $(target);

    this.setup();
    this.registerEvents();
  }

  setup() {
    this.targetEl.hide();
  }

  registerEvents() {
    this.triggerEl.on("click", this.toggle.bind(this));
    this.targetEl.on("transitionend", this.hide.bind(this));
  }

  toggle(e) {
    e.preventDefault();
    if (this.targetEl.hasClass(Collapse.CLASS_SHOW)) {
      this.targetEl.prop("style").removeProperty("max-height");
      this.targetEl.removeClass(Collapse.CLASS_SHOW);
      this.triggerEl.removeClass(Collapse.CLASS_SHOW);
      this.triggerEl.attr("aria-expanded", "false");
    } else {
      this.targetEl.show(0, () => {
        this.targetEl.css("max-height", this.targetEl.prop("scrollHeight"));
        this.targetEl.addClass(Collapse.CLASS_SHOW);
        this.triggerEl.addClass(Collapse.CLASS_SHOW);
        this.triggerEl.attr("aria-expanded", "true");
      });
    }
  }

  hide(e) {
    e.stopPropagation();
    if (this.targetEl.hasClass(Collapse.CLASS_SHOW)) return;
    this.targetEl.hide();
  }
}
