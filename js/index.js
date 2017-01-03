$(document).ready(function() {
    var distance = $('.gallery-section').offset().top,
    $window = $(window);

$("#galleries-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#galleries").offset().top},
        'slow');
});
$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        // Your div has reached the top
		    $('.fixed-nav-bar').addClass('scrolled')
	}
	else {
            $('.fixed-nav-bar').removeClass('scrolled')
	}
});
   
    // Drop Down Function
    $('#menuButton').on('change', function(){
        ($('#menuButton').is(':checked')) ? (
            $('.the-bass').addClass('dropped')
        ) : (
            $('.the-bass').removeClass('dropped')
        );
    });
var header = $('.buy-btn');
var range = 100;

$(window).on('scroll', function () {
  
    var scrollT = $(this).scrollTop();
    var offset = header.offset().top;
    var height = header.outerHeight();
    /* offset = offset + height / 2; */
	if (scrollT >= 1) {
    var calc = 0;
	}
	else calc = 1;

    header.css({ 'opacity': calc });
    if ( calc > '1' ) {
      header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }
  
});
});
