/* Custom General jQuery
/*--------------------------------------------------------------------------------------------------------------------------------------*/
;(function($, window, document, undefined) {

	//Genaral Global variables
	//"use strict";
	var $win = $(window);
	var $doc = $(document);
	var $winW = function(){ return $(window).width(); };
	var $winH = function(){ return $(window).height(); };
	var $screensize = function(element){
			$(element).width($winW()).height($winH());
		};

		var screencheck = function(mediasize){
			if (typeof window.matchMedia !== "undefined"){
				var screensize = window.matchMedia("(max-width:"+ mediasize+"px)");
				if( screensize.matches ) {
					return true;
				}else {
					return false;
				}
			} else { // for IE9 and lower browser
				if( $winW() <=  mediasize ) {
					return true;
				}else {
					return false;
				}
			}
		};

	$doc.ready(function() {
/*--------------------------------------------------------------------------------------------------------------------------------------*/
		// Remove No-js Class
		$("html").removeClass('no-js').addClass('js');



		/* Get Screen size
		---------------------------------------------------------------------*/
		$win.load(function(){
			$win.on('resize', function(){
				$screensize('your selector');
			}).resize();
		});


		/* Menu ICon Append prepend for responsive
		---------------------------------------------------------------------*/
		$(window).on('resize', function(){
			if (screencheck(767)) {
			}
			
			}).resize();


		/* This adds placeholder support to browsers that wouldn't otherwise support it.
		---------------------------------------------------------------------*/
		if (document.createElement("input").placeholder === undefined) {
			var active = document.activeElement;
			$(':text').focus(function () {
				if ($(this).attr('placeholder') !== '' && $(this).val() === $(this).attr('placeholder')) {
					$(this).val('').removeClass('hasPlaceholder');
				}
			}).blur(function () {
				if ($(this).attr('placeholder') !== '' && ($(this).val() === '' || $(this).val() === $(this).attr('placeholder'))) {
					$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
				}
			});
			$(':text').blur();
			$(active).focus();
			$('form:eq(0)').submit(function () {
				$(':text.hasPlaceholder').val('');
			});
		}
		
		/* MatchHeight Js
		-------------------------------------------------------------------------*/
		if($('.communication-section .col-container').length){
			$('.communication-section .col-container').matchHeight();
		}

	});
})(jQuery, window, document);
