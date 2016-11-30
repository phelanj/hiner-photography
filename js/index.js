$( document ).ready(function() {
    var distance = $('.deer-section').offset().top,
    $window = $(window);

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
});