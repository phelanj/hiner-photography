$( document ).ready(function() {
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
});
