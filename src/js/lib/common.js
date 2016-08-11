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
		var allButtons = $('.js-accordion-title'),
				allPanels = $('.js-accordion-inner');

		allButtons.click(function() {
			if (!$(this).parent().hasClass('is-active')) {
				allPanels.slideUp();
				allButtons.parent().removeClass('is-active');
				$(this).parent().addClass('is-active').children().last().slideDown();
				return false;
			} else {
				$(this).parent().removeClass('is-active').children().last().slideUp();
			}
		});
	})();

	(function () {
		var tabs = $('.js-tabs');
		if (tabs.length) {
			$(window).resize(function () {
				tabs.css({height: 'auto'});
			});
			var tabsItem = $('.js-tabs-item'),
					tabsButton = $('.js-tabs-btn'),
					currentHeight = 0;

			currentHeight = tabsItem.outerHeight();
			tabsItem.next().hide();
			tabs.css({height: currentHeight});

			tabsButton.on('click', function () {
				var index = $(this).index(),
						tabsHeight = 0;
				tabsButton.removeClass('is-active');
				$(this).addClass('is-active');
				tabsItem.fadeOut().promise().done(function () {
					tabsHeight = tabsItem.eq(index).outerHeight();
					tabs.css({height: tabsHeight});
					tabsItem.eq(index).fadeIn();
				});
			});
		}
	})();

	(function () {
		var slider = $('.js-slider');
		if (slider.length) {
			slider.owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				items: 1
			});
		}
	})();

});