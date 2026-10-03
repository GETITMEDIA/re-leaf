var THEMEMASCOT = {};
(function($) {

	"use strict";

	//>> Preloader Start <<//
	const svg = document.getElementById("preloaderSvg");
		const preTl = gsap.timeline({
			onComplete: startAnimationAfterPreloader,
		});
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
	preTl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 1.5,
			y: -100,
			opacity: 0,
		});
		preTl
			.to(svg, {
				duration: 0.5,
				attr: { d: curve },
				ease: "power2.easeIn",
			})
			.to(svg, {
				duration: 0.5,
				attr: { d: flat },
				ease: "power2.easeOut",
			});
		preTl.to(".preloader", {
		delay: 1.5,
			y: -1500,
		});
		preTl.to(".preloader", {
			zIndex: -1,
			display: "none",
		});
		let svgText = document.querySelector("svg text");
		function startAnimationAfterPreloader() {
			if (svgText) {
				// Add a class or directly apply styles to trigger the stroke animation
				svgText.classList.add("animate-stroke");
			}
	}

	//>> Back Too Top Start <<//
	function back_to_top() {
	var btn = $('#back_to_top');
	var btn_wrapper = $('.back-to-top-wrapper');
	var windowOn = $(window); // Define windowOn properly

	windowOn.on('scroll', function () {
		if (windowOn.scrollTop() > 300) {
			btn_wrapper.addClass('back-to-top-btn-show');
		} else {
			btn_wrapper.removeClass('back-to-top-btn-show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 300); // Removed quotes from 300, since it's a number
	});
	}

	back_to_top();

	// Call headerStyle on scroll
	$(window).on('scroll', function() {
		headerStyle();
	});

	// Also call on page load to handle reload
	$(document).on('ready', function() {
		headerStyle();
	});


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();
	
	// Header hide on scroll down, show on scroll up (optional)


	


	//>> Room Suites Start <<//
	// document.addEventListener("DOMContentLoaded", function () {
	// gsap.registerPlugin(ScrollTrigger);

	// const content = document.querySelector(".room-suites-content");

	// 	if (content) {
	// 		ScrollTrigger.create({
	// 			trigger: ".room-suites-wrapper",
	// 			start: "top 60%",
	// 			toggleClass: { targets: content, className: "in-view" },
	// 			markers: false,
	// 			once: false,
	// 		});
	// 	}
	// });

	//>> Aos Animation Start <<//
    AOS.init();
	

	//>> Wow Animation Start <<//
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	

	
})(window.jQuery);








