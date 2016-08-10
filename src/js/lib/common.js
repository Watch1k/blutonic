/* Common JS */
$(document).ready(function(){

	//for IE9
	svg4everybody();

	// Clear placeholder
	(function() {
		var el = $('input, textarea');
		el.focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).attr('placeholder','');
		});
		el.blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	})();

	(function() {
		var allButtons = $('.accordion__title'),
				allPanels = $('.accordion__inner');

		$('.accordion__title').click(function() {
			if (!$(this).hasClass('is-active')) {
				allPanels.slideUp();
				allButtons.removeClass('is-active');
				$(this).addClass('is-active').children('.accordion__inner').slideDown();
				return false;
			} else {
				$(this).removeClass('is-active').children('.accordion__inner').slideUp();
			}
		});
	})();

	(function () {
		if ($('.tabs-for').length) {
			var currentHeight = 0;

			currentHeight = $('.tabs-for__item.is-active').outerHeight();
			$('.tabs-for__item').next('.tabs-for__item').hide();
			$('.tabs-for').css({height: currentHeight});

			$('.media_platform .media__item').on('click', function () {
				var index = $(this).index(),
						tabsHeight = 0;
				$('.media_platform .media__item').removeClass('is-active');
				$(this).addClass('is-active');
				$('.tabs-for__item').fadeOut().promise().done(function () {
					tabsHeight = $('.tabs-for__item').eq(index).outerHeight();
					$('.tabs-for').css({height: tabsHeight});
					$('.tabs-for__item').eq(index).fadeIn();
				});
			});
		}
	})();

	(function () {
		$('.slider').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 1
		});
	})();

});