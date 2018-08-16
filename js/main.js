$(document).ready(function(){
  	$(document).on('click', '.smooth', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});

});
