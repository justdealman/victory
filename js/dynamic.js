$(document).ready(function() {
	$('.jcarousel').jcarousel({
		scroll: 1,
		animation: 250,
		easing: 'easeInOutQuart'
	});
	if ( $(window).height() > $('.options').offset().top ) {
		$('.options ul').css({
			'transform': 'scale(1)',
			'-webkit-transform': 'scale(1)',
			'-moz-transform': 'scale(1)',
			'-o-transform': 'scale(1)',
		});
	}
	if ( $(window).height() > $('.benefits').offset().top ) {
		$('.benefits').css({
			'transform': 'scale(1)',
			'-webkit-transform': 'scale(1)',
			'-moz-transform': 'scale(1)',
			'-o-transform': 'scale(1)',
		});
	}
	$('.main > div').each(function() {
		if ( $(window).height() > $(this).offset().top ) {
			$(this).children('div').css({
				'transform': 'scale(1)',
				'-webkit-transform': 'scale(1)',
				'-moz-transform': 'scale(1)',
				'-o-transform': 'scale(1)',
			});
		}
	});
	$(window).bind('scroll', function() {
		if ( $(window).scrollTop() + $(window).height() > $('.options').offset().top ) { 
			$('.options ul').css({
				'transform': 'scale(1)',
				'-webkit-transform': 'scale(1)',
				'-moz-transform': 'scale(1)',
				'-o-transform': 'scale(1)',
			});
		}
		if ( $(window).scrollTop() + $(window).height() > $('.benefits').offset().top ) { 
			$('.benefits').css({
				'transform': 'scale(1)',
				'-webkit-transform': 'scale(1)',
				'-moz-transform': 'scale(1)',
				'-o-transform': 'scale(1)',
			});
		}
		$('.main > div').each(function() {
			if ( $(window).scrollTop() + $(window).height() > $(this).offset().top ) {
				$(this).children('div').css({
					'transform': 'scale(1)',
					'-webkit-transform': 'scale(1)',
					'-moz-transform': 'scale(1)',
					'-o-transform': 'scale(1)',
				});
			}
		});
	});
	$('div.modal').append('<span class="close"></span>');
	$('div.modal').each(function() {
		$(this).css({
			'margin-top': -$(this).outerHeight()/2+'px'
		});
	});
	var bh = 0;
	$('button.modal').bind('click', function() {
		$('.fade').stop(true,true).fadeIn(500);
		$('div.modal[data-result='+$(this).attr('data-target')+']').stop(true,true).fadeIn(500);
		bh = $(document).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('div.modal .close, .fade').bind('click', function() {
		$('.fade').stop(true,true).fadeOut(500);
		$('div.modal').stop(true,true).fadeOut(500);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(document).scrollTop(bh);
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27) {
			$('.fade').stop(true,true).fadeOut(500);
			$('div.modal').stop(true,true).fadeOut(500);
			$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
			$(document).scrollTop(bh);
		}
	});
	$('.benefits button, .reviews button').bind('click', function() {
		if ( $(window).height() > $('.services').height() ) {
			$('html, body').animate({scrollTop: $('.services').offset().top - ($(window).height()-$('.services').height())/2 }, 1000);
		}
		else {
			$('html, body').animate({scrollTop: $('.services').offset().top}, 1000);
		}
		return false;
	});
});