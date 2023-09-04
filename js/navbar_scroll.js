const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}	

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});


// ------click button-toggler to bg color------
$('.navbar-toggler').click( function(){
    if ( $('.menu_nav').hasClass('current') ) {
        $('.menu_nav').removeClass('current');
    } else {
        $('.menu_nav').removeClass('current');
        $('.menu_nav').addClass('current');    
    }
});

// ---------------drop menu trantions-----------------------

$(document).ready(function(){
	$("#nav_dropmenu li").hover(
	function(){
		$(this).children('ul').hide();
		$(this).children('ul').slideDown('fast');
	},
	function () {
		$('ul', this).slideUp('fast');            
	});
});

// sub-menu tablet-mobile
accordionNav = $(function(){
	$('.menu-toggle').click(function(e) {
		e.preventDefault();
		var toggleButton = $(this);
		if (toggleButton.next().hasClass('active')) {
			toggleButton.next().removeClass('active');
			toggleButton.next().slideUp(400);
			toggleButton.removeClass('rotate');
		 } else {
			toggleButton.parent().parent().find('li .sub-menu').removeClass('active');
			toggleButton.parent().parent().find('li .sub-menu').slideUp(400);
			toggleButton.parent().parent().find('.menu-toggle').removeClass('rotate');
			toggleButton.next().toggleClass('active');
			toggleButton.next().slideToggle(400);
			toggleButton.toggleClass('rotate');
		}
	});
});