$(document).ready(function () {
  $('.tooltip').tooltipster({
    windowOffset: {
      bottom: 10,
      left: 10,
      right: 10,
      top: 10
    },
    trigger: 'custom',
    triggerOpen: {
      mouseenter: true,
      touchstart: true
    },
    triggerClose: {
      click: true,
      scroll: true,
      tap: true
    }
  });
});