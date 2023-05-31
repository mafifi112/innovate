import $ from "jquery";

export class Offcanvas {
  static CLASS_SHOW = "show";
  static KEY_ESCAPE = "Escape";

  constructor({ trigger, target, dismiss }) {
    this.triggerEl = $(trigger);
    this.targetEl = $(target);
    this.dismissEl = $(dismiss);

    this.setup();
    this.registerEvents();
  }

  setup() {
    this.targetEl.hide();
  }

  registerEvents() {
    this.triggerEl.on("click", this.open.bind(this));
    this.dismissEl.on("click", this.close.bind(this));
    this.targetEl.on("transitionend", this.hide.bind(this));
  }

  open(e) {
    e.preventDefault();
    this.targetEl.show(0, () => {
      this.targetEl.addClass(Offcanvas.CLASS_SHOW);
      this.dismissEl.trigger("focus");
      $("html").css("overflow-y", "hidden");
    });
    $(document).on("keydown", (e) => {
      if (e.key === Offcanvas.KEY_ESCAPE) this.close(e);
    });
    $(document).on("focusin", (e) => {
      if (this.targetEl[0].contains(document.activeElement)) return;
      this.dismissEl.trigger("focus");
    });
  }

  close(e) {
    e.preventDefault();
    this.targetEl.removeClass(Offcanvas.CLASS_SHOW);
    $(document).off("keydown");
    $(document).off("focusin");
    this.triggerEl.trigger("focus");
    $("html").prop("style").removeProperty("overflow-y");
  }

  hide(e) {
    e.stopPropagation();
    if (this.targetEl.hasClass(Offcanvas.CLASS_SHOW)) return;
    this.targetEl.hide();
  }
}
