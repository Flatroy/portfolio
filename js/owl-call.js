$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoWidth: false,
    center: true,
    stagePadding: 0,
    dots: true,
    margin: 25,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
      600: {
        items: 3,
        loop: false,
        touchDrag: false,
        mouseDrag: false,
        center: false,
      },

    }
  });
  $('.owl-carousel').on('changed.owl.carousel', function (e) {
    if (!e.namespace || e.property.name != 'position') return
    $('#info').text(e.relatedTarget.relative(e.item.index) + '/' + e.item.count)
  })
});