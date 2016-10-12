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
			if (screencheck(1023)) {
				if(!$('#menu').length){
					$('.navbar .container').prepend('<a href="#" id="menu" class="menulines-button"><span class="menulines"></span><em>Menu</em></a>');
				}			
			} else {
				$('#menu').remove();		
			}
			if(!screencheck(767)){
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
				
				var $containerWidth = $('.container').width();
				var $totalWidth = parseInt($winW()-$containerWidth);
				$('.strip-space').css('width',$totalWidth/2);
				
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
		
		$(document).on('click',"#menu", function(){
			$this = $(this);
			$(this).toggleClass('menuopen');
			$('.navbar > .container > ul').slideToggle();
			return false;
		});
		
		$('.navbar > .container > ul > li > a').click(function(){
			if(screencheck(1023)){
				$('.navbar > .container > ul').slideUp();
				$('#menu').removeClass('menuopen');
			}
		});
		
		/* MatchHeight Js
		-------------------------------------------------------------------------*/
		if($('#communication-section .col-container').length){
			$('#communication-section .col-container').matchHeight();
		}
		
		if($('.carousel-section .box-summary').length){
			$('.carousel-section .box-summary').matchHeight();
		}
		
		if($('.equalheight').length){
			$('.equalheight').matchHeight();
		}
		
		
		if($('.slider-navigation .item').length){
			$('.slider-navigation .item').matchHeight();
		}
		
		/* Slickslider
		---------------------------------------------------------------------*/
		if($('.slider-section').length){
			$('.slider-section').slick({
			  slidesToShow:1,
			  slidesToScroll: 1,
			  autoplay: true,
			  dots:true,
			  arrows:false,
			  fade: true,
			  adaptiveHeight: false,
			  autoplaySpeed: 2000,
			  responsive: [
				{
				  breakpoint: 640,
				  settings: {
					slidesToShow:1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					adaptiveHeight: true
				  }
				}
			  ]
			});
		}
		
		if($('.slider-navigation').length){
			$('.slider-navigation').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				if($('.slider-navigation .item').length){
					$('.slider-navigation .item').matchHeight();
				}
			}).on('afterChange', function(event, slick, currentSlide, nextSlide){
				if($('.slider-navigation .item').length){
					$('.slider-navigation .item').matchHeight();
				}
			});
			$('.slider-navigation').slick({
			  slidesToShow:9,
			  slidesToScroll: 1,
			  autoplay: true,
			  arrows:true,
			  autoplaySpeed: 2000,
			  variableWidth:true,
			  responsive: [
				{
				  breakpoint:1170,
				  settings: {
					slidesToShow:6,
					slidesToScroll:1,
					variableWidth:false
				  }
				},
				{
				 breakpoint:1024,
				  settings: {
					slidesToShow:4,
					slidesToScroll:1,
					variableWidth:false
				  }
				},
				{
				 breakpoint:768,
				  settings: {
					slidesToShow:3,
					slidesToScroll:1,
					variableWidth:false
				  }
				},
				{
				 breakpoint:480,
				  settings: {
					slidesToShow:1,
					slidesToScroll: 1,
					variableWidth:false
				  }
				}

			  ]
				
			});
		}

		
		if($('.carousel-section').length){
			$('.carousel-section').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				if($('.carousel-section .box-summary').length){
					$('.carousel-section .box-summary').matchHeight();
				}
			}).on('afterChange', function(event, slick, currentSlide, nextSlide){
				if($('.carousel-section .box-summary').length){
					$('.carousel-section .box-summary').matchHeight();
				}
			});


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

		$('.slider-section .item').each(function(index){ 
			 $getImageSrc = $(this).find('img').attr('src');
			 $(this).css('background-image', 'url(' + $getImageSrc + ')');
		});
		
		/* MatchHeight Js
		-------------------------------------------------------------------------*/
		if($('.navbar ul').length){
			$('.navbar ul').onePageNav({
				changeHash:false,
				scrollThreshold: 0.2
			});
		}
	
		$(document).on('click tap', '.readmore ', function(){
			var getoffset = $(this).parents('.section-container').next('.section-container').offset().top;
			$('html, body').animate({ scrollTop: getoffset  }, 'slow');
			return false;
		});
	
		if($('.video-button').length){
		 	$('.video-button').venobox({
				framewidth: '640px',        // default: ''
				frameheight: '360px',       // default: ''
				titleattr: 'data-title',    // default: 'title'
				numeratio: true,            // default: false
				infinigall: true            // default: false
			});
		}
	});
	
	wow = new WOW(
	{
		animateClass: 'animated',
		offset:       30,
		callback:     function(box) {
			//console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
		}
	);
	wow.init();


})(jQuery, window, document);
