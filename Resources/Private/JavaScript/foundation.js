
Foundation.Orbit.defaults = {
    accessible: true,
    animInFromLeft: "slide-in-left",
    animInFromRight: "slide-in-right",
    animOutToLeft: "slide-out-left",
    animOutToRight: "slide-out-right",
    autoPlay: false,
    boxOfBullets: "orbit-bullets",
    bullets: true,
    containerClass: "orbit-container",
    infiniteWrap: false,
    navButtons: true,
    nextClass: "orbit-next",
    pauseOnHover: true,
    prevClass: "orbit-previous",
    slideClass: "orbit-slide",
    swipe: true,
    timerDelay: 4000,
    useMUI: true
};

Foundation.AccordionMenu.defaults = {
  /**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,
  /**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
  submenuToggle: true,
  /**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
  submenuToggleText: 'Toggle menu',
  /**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
  multiOpen: false
};

// console.log(Foundation.Orbit.defaults);
$(document).foundation();
