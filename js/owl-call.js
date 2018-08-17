$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        autoWidth: false,
        center: true,
        stagePadding: 0,
        dotsData: true,
        margin: -80,
        responsive:{
            600:{
                items:3,
                loop:false,
                touchDrag: false,
                center: false,
                mouseDrag: false
            }
        }
    });
    $('.owl-carousel').on('changed.owl.carousel', function(e) {
      if (!e.namespace || e.property.name != 'position') return
      $('#info').text(e.relatedTarget.relative(e.item.index) + '/' + e.item.count)
    })
});