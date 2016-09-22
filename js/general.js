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
			$borderHeight = parseInt($winW()/4);
			if($('.strip-01').length){
				$('.strip-01').css('border-bottom-width',$winW()-$borderHeight-68);
				$('.strip-01').css('border-left-width', $borderHeight);
			}
			
			if($('.strip-03').length){
				$('.strip-03').css('border-bottom-width',$winW()*2-$borderHeight);
				$('.strip-03').css('border-left-width', $winW()/2+170);
			}
			
			$('.strip-line').css('height',$winW());
			
			$stripWidth = $('.video-section .strip-01').width();
			$('.section-container > .strip').css('width',$borderHeight+72)
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
		
		if($('.carousel-section .box-summary').length){
			$('.carousel-section .box-summary').matchHeight();
		}
		
		if($('.equalheight').length){
			$('.equalheight').matchHeight();
		}
		
		
		if($('.carousel-section').length){
			$('.carousel-section').slick({
			  slidesToShow:3,
			  slidesToScroll:1,
			  autoplay:true,
			  arrows:true,
			  dots:false,
			  autoplaySpeed:5000,
			  responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll:1,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
					slidesToScroll:1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
				]
			});
		}

	});
})(jQuery, window, document);
