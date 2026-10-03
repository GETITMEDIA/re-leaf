var THEMEMASCOT = {};
(function($) {

	"use strict";


	/* ---------------------------------------------------------------------- */
	/* --------------------------- Start Demo Switcher  --------------------- */
	/* ---------------------------------------------------------------------- */
	var showSwitcher = false; // demo colour switcher file is not part of this site
	var $body = $('body');
	var $style_switcher = $('#style-switcher');
	if( !$style_switcher.length && showSwitcher ) {
	      $.ajax({
	          url: "color-switcher/style-switcher.html",
	          success: function (data) { $body.append(data); },
	          dataType: 'html'
	      });
	}

	/* ---------------------------------------------------------------------- */
	/* ----------------------------- En Demo Switcher  ---------------------- */
	/* ---------------------------------------------------------------------- */


	THEMEMASCOT.isRTL = {
	    check: function() {
	      if( $( "html" ).attr("dir") === "rtl" ) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	};

	THEMEMASCOT.isLTR = {
	    check: function() {
	      if( $( "html" ).attr("dir") !== "rtl" ) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	};

  document.addEventListener('DOMContentLoaded', function() {
    const swiperContainer = document.querySelector('#features-swiper');

    // Create initial background container
    const bgElements = Array.from(document.querySelectorAll('#features-swiper .swiper-slide')).map(slide => {
      const bgUrl = slide.getAttribute('data-bg');
      const bgElement = document.createElement('div');
      bgElement.className = 'swiper-bg-container';
      bgElement.style.backgroundImage = `url('${bgUrl}')`;
      bgElement.style.backgroundSize = 'cover';
      bgElement.style.backgroundPosition = 'center';
      return bgElement;
    });

    // Insert all background elements
    bgElements.forEach((bg, index) => {
      swiperContainer.insertBefore(bg, swiperContainer.firstChild);
      bg.classList.add('swiper-bg-container');
      if (index === 0) {
        bg.classList.add('active');
      } else {
        bg.classList.add('inactive');
      }
    });

	  // Initialize Swiper
    const swiper = new Swiper('#features-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'slide',
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function() {
                    // Set initial active background
          bgElements[0].className = 'swiper-bg-container active';
        },
        slideChangeTransitionStart: function() {
          const nextSlide = this.slides[this.activeIndex];
          const nextIdx = this.slides.indexOf(nextSlide);
          const currentIdx = this.realIndex;

                    // Fade transition between backgrounds
          bgElements.forEach((bg, idx) => {
            if (idx === this.realIndex) {
              bg.classList.remove('inactive');
              bg.classList.add('active');
            } else {
              bg.classList.remove('active');
              bg.classList.add('inactive');
            }
          });
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const swiperContainer = document.querySelector('#features-swiper-two');

    // Create initial background container
    const bgElements = Array.from(document.querySelectorAll('#features-swiper-two .swiper-slide')).map(slide => {
      const bgUrl = slide.getAttribute('data-bg');
      const bgElement = document.createElement('div');
      bgElement.className = 'swiper-bg-container';
      bgElement.style.backgroundImage = `url('${bgUrl}')`;
      bgElement.style.backgroundSize = 'cover';
      bgElement.style.backgroundPosition = 'center';
      return bgElement;
    });

    // Insert all background elements
    bgElements.forEach((bg, index) => {
      swiperContainer.insertBefore(bg, swiperContainer.firstChild);
      bg.classList.add('swiper-bg-container');
      if (index === 0) {
        bg.classList.add('active');
      } else {
        bg.classList.add('inactive');
      }
    });

    // Initialize Swiper
    const swiper = new Swiper('#features-swiper-two', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'slide',
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function() {
                    // Set initial active background
          bgElements[0].className = 'swiper-bg-container active';
        },
        slideChangeTransitionStart: function() {
          const nextSlide = this.slides[this.activeIndex];
          const nextIdx = this.slides.indexOf(nextSlide);
          const currentIdx = this.realIndex;

                    // Fade transition between backgrounds
          bgElements.forEach((bg, idx) => {
            if (idx === this.realIndex) {
              bg.classList.remove('inactive');
              bg.classList.add('active');
            } else {
              bg.classList.remove('active');
              bg.classList.add('inactive');
            }
          });
        }
      }
    });
  });

	// home layout 5 gallery section script
	// Check if matchMedia exists, otherwise use fallback
	if (typeof gsap.matchMedia === 'function') {
	  let vd = gsap.matchMedia();
	  vd.add("(min-width: 1199px)", () => {
	    if ($(".gallery-section-island2").length) {
	      const tl = gsap
	        .timeline({
	          scrollTrigger: {
	            trigger: ".gallery-section-island2",
	            scrub: 1,
	            pin: true,
	            start: "top 40px",
	            end: "+=100%",
	          },
	        })
	        .to(".gallery-wrapper", {
	          scale: 4.2,
	          ease: "none",
	        });
	    }
	  });
	} else {
	  // Fallback for older GSAP versions
	  if (window.matchMedia("(min-width: 1199px)").matches && $(".gallery-section-island2").length) {
	    const tl = gsap
	      .timeline({
	        scrollTrigger: {
	          trigger: ".gallery-section-island2",
	          scrub: 1,
	          pin: true,
	          start: "top 40px",
	          end: "+=100%",
	        },
	      })
	      .to(".gallery-wrapper", {
	        scale: 4.2,
	        ease: "none",
	      });
	  }
	}

  // project panel Home Layout 6

	if (typeof gsap.matchMedia === 'function') {
	  let vd = gsap.matchMedia();
	  vd.add("(min-width: 767px)", () => {
	    if ($(".room-block-breakfast").length) {
	      const tl = gsap
	        .timeline({
	          scrollTrigger: {
	            trigger: ".room-block-breakfast",
	            scrub: 1,
	            pin: true,
	            start: "top 40px",
	            end: "+=100%",
	          },
	        })
	        .to(".gallery-wrapper", {
	          scale: 4.2,
	          ease: "none",
	        });
	    }
	  });
	} else {
	  // Fallback for older GSAP versions
	  if (window.matchMedia("(min-width: 767px)").matches && $(".room-block-breakfast").length) {
	    const tl = gsap
	      .timeline({
	        scrollTrigger: {
	          trigger: ".room-block-breakfast",
	          scrub: 1,
	          pin: true,
	          start: "top 100px",
	          end: "bottom 82%",
	        },
	      })
	      .to(".gallery-wrapper", {
	        scale: 4.2,
	        ease: "none",
	      });
	  }
	}

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 99,
			values: [ 10, 60 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}

  /* ---------------------------------------------------------------------- */
  /* ----------------------------- En Demo Switcher  ---------------------- */
  /* ---------------------------------------------------------------------- */

	//Hide Loading Box (Preloader)
	const svg = document.getElementById("preloaderSvg");
		const preTl = gsap.timeline({
			onComplete: startAnimationAfterPreloader,
		});
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
		preTl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 0.3,
			y: -100,
			opacity: 0,
		});
		preTl
			.to(svg, {
				duration: 0.3,
				attr: { d: curve },
				ease: "power2.easeIn",
			})
			.to(svg, {
				duration: 0.3,
				attr: { d: flat },
				ease: "power2.easeOut",
			});
		preTl.to(".preloader", {
		delay: 0.3,
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


	// Backtotop Js
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


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
		//Megamenu Toggle
	}

	//Hidder bar
	if ($('.hidden-bar').length){
		//Menu Toggle Btn
		$('.toggle-hidden-bar').on('click', function() {
			$('body').addClass('active-hidden-bar');
		});

		//Menu Toggle Btn
		$('.hidden-bar-back-drop, .hidden-bar .close-btn').on('click', function() {
			$('body').removeClass('active-hidden-bar');
		});
	}

	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){

		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
			$(this).prev('.mega-menu').slideToggle(500);
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

	}


	if ($('.services-section-eight22 .outer-box').length) {
	  const serviceImage = document.getElementById('service-image');
	  const serviceImage2 = document.getElementById('service-image-2');
	  const serviceItems = document.querySelectorAll('.services-list .service-block-island');

	  // Set the default active item
	  const defaultItem = document.querySelector('.services-list .service-block-island.active');
	  if (defaultItem) {
	    const defaultImage = defaultItem.getAttribute('data-image');
	    const defaultImage2 = defaultItem.getAttribute('data-image-2');
	    if (defaultImage) {
	      serviceImage.src = defaultImage;
	      serviceImage.classList.add('active');
	    }
	    if (defaultImage2) {
	      serviceImage2.src = defaultImage2;
	      serviceImage2.classList.add('active');
	    }
	  }

	  // Handle hover effect and active state change
	  serviceItems.forEach(item => {
	    item.addEventListener('mouseover', () => {
	      const newImage = item.getAttribute('data-image');
	      const newImage2 = item.getAttribute('data-image-2');
	      if (newImage) {
	        serviceImage.src = newImage;
	        serviceImage.classList.add('active');
	      }
	      if (newImage2) {
	        serviceImage2.src = newImage2;
	        serviceImage2.classList.add('active');
	      }
	      // Remove active class from all items and add to the hovered one
	      serviceItems.forEach(el => el.classList.remove('active'));
	      item.classList.add('active');
	    });
	  });
	}

	if($('.service-block-island .inner-box').length) {
	  const $boxes = $('.service-block-island .inner-box');

	  if ($boxes.length) {
	    // Activate the first box on load
	    // const $firstBox = $boxes.first();
	    // $firstBox.addClass('active');
	    // $firstBox.find('.image-box').addClass('active').slideDown();

	    // Click logic
	    $boxes.on('click', function () {
	      $boxes.removeClass('active');
	      $('.service-block-island .image-box').removeClass('active');

	      $(this).addClass('active');
	      $(this).find('.image-box').addClass('active');
	    });
	  }
	}

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}

	// background image show js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

  // Background image hover change area start here ***
	$(".service-block-two").on("mouseenter mouseleave", function (e) {
	  if (e.type === "mouseenter") {
	    let newBackground = $(this).data("bg");
	    $(".service-section-two .outer-box")
	      .attr("data-background", newBackground)
	      .css("background-image", "url(" + newBackground + ")");
	  }
	});

  // Hover logic
	$(".golf-event-box .inner-box").on({
	  mouseenter: function () {
	    // Find the image-box inside the hovered inner-box
	    let newBackground = $(this).find(".image-box").attr("data-bg");

	    if (newBackground) {
	      $(".golf-event-image-show .image-visible")
	        .attr("data-background", newBackground)
	        .css("background-image", "url(" + newBackground + ")");
	    }
	  },
	  mouseleave: function () {
	    // Optional: Add mouseleave behavior if needed
	  }
	});


	// Home 1 Banner Js
	var swiper = new Swiper(".banner-active", {
		speed:4000,
		loop: true,
		slidesPerView: 1,
		effect:'fade',
		autoplay: {
			delay: 4000,            // time between slides (in ms)
			disableOnInteraction: false, // keep autoplay after user interactions
			pauseOnMouseEnter: false,    // optional: autoplay won't pause on hover
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});



	// Home 1 Banner Js
	var swiper = new Swiper(".features-swiper2", {
		speed:500,
		loop: true,
		slidesPerView: 1,
		effect:'fade',
		autoplay: {
			delay: 2000,            // time between slides (in ms)
			disableOnInteraction: false, // keep autoplay after user interactions
			pauseOnMouseEnter: false,    // optional: autoplay won't pause on hover
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
	});

	//>> Banner Pinned Image Start <<//
	if (document.querySelectorAll(".pinned-3").length > 0) {
		const tl = gsap.timeline({
			ease: "none",
			scrollTrigger: {
				trigger: ".pinned-3",
				pin: true,
				pinSpacing: false,
				scrub: 2.1,
				start: "top top",
				endTrigger: ".banner-section-3__video__wrapper",
				end: "bottom bottom",
				markers: false,
				invalidateOnRefresh: true
			}
		});

		tl.to(".pinned-3 #myImage", {
			scale: 1,
			width: "100vw",
			height: "100vh",
			right: "auto",
			x: () => -document.querySelector(".pinned-3").getBoundingClientRect().left,
			transformOrigin: "center center",
			ease: "power11.out"
		});
	}

	//>> Banner Pinned Image Start <<//
	if (document.querySelectorAll(".pinned-5").length > 0) {
		const tl = gsap.timeline({
			ease: "none",
			scrollTrigger: {
				trigger: ".pinned-5",
				pin: true,
				pinSpacing: false,
				scrub: 2.1,
				start: "top top",
				endTrigger: ".banner-section-5__video__wrapper",
				end: "bottom bottom",
				markers: false,
				invalidateOnRefresh: true
			}
		});

		tl.to(".pinned-5 #myImage", {
			scale: 1,
			width: "100vw",
			height: "100vh",
			right: "auto",
			x: () => -document.querySelector(".pinned-5").getBoundingClientRect().left,
			transformOrigin: "center center",
			ease: "power11.out"
		});
	}

	gsap.utils.toArray(".tm-gsap-img-parallax").forEach(function(container) {
      let image = container.querySelector("img");

      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: container,
              scrub: .5,
          },
      });
      tl.from(image, {
          yPercent: -30,
          ease: "none",
      }).to(image, {
          yPercent: 30,
          ease: "none",
      });
    });

	//>> Hotel Activity Start <<//
    const hotelActivityItemsMountain = document.querySelectorAll(".hotel-activity-items-mountain");

	function followImageCursor(event, hotelActivityItemsMountain) {
		const contentBox = hotelActivityItemsMountain.getBoundingClientRect();
		const dx = event.clientX - contentBox.left;
		const dy = event.clientY - contentBox.top;

		const targetImage = hotelActivityItemsMountain.querySelector('.hover-image'); // Use a class instead of children[2]

		if (targetImage) {
			targetImage.style.transform = `translate(${dx}px, ${dy}px) rotate(15deg)`;
		}
	}

	// Optional: Throttle function to improve performance
	function throttle(fn, limit) {
		let inThrottle;
		return function (...args) {
			if (!inThrottle) {
				fn.apply(this, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	}

	hotelActivityItemsMountain.forEach((item) => {
			item.addEventListener("mousemove", throttle((event) => {
				followImageCursor(event, item);
			}, 16)); // ~60fps (1000ms/60 = ~16ms)
	});

    // if ($('.room-suites-section').length > 0) {
    //     let project_text = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".room-suites-section",
    //             start: 'top center-=350',
    //             end: "bottom 90%",
    //             pin: ".room-suites-title",
    //             markers: false,
    //             pinSpacing: false,
    //             scrub: 1,
    //         }
    //     })
    //     project_text.set(".room-suites-title", {
    //         scale: .5,
    //         duration: 2
    //     })
    //     project_text.to(".room-suites-title", {
    //         scale: 1,
    //         duration: 2
    //     })
    //     project_text.to(".room-suites-title", {
    //         scale: 1,
    //         duration: 2
    //     }, "+=2")
    // }

	if ($('.tp-project-5-2-area').length > 0) {
		let project_text = gsap.timeline({
			scrollTrigger: {
				trigger: ".tp-project-5-2-area",
				start: 'top center-=350',
				end: "bottom 70%",
				pin: ".tp-project-5-2-title",
				markers: false,
				pinSpacing: false,
				scrub: 1,
			}
		})
		project_text.set(".tp-project-5-2-title", {
			scale: 1,
			duration: 3
		})
		project_text.to(".tp-project-5-2-title", {
			scale: 2,
			duration: 3
		})
		project_text.to(".tp-project-5-2-title", {
			scale: 2,
			duration: 3
		}, "+=2")

         project_text.to(".tp-project-5-2-title", {
            autoAlpha: 0,
            duration: 2
        });
	}
	

	//Testimonial Slider
	if($('.gallery-slider-5').length > 0) {
		const instagramSlider5 = new Swiper(".gallery-slider-5", {
			spaceBetween: 30,
			speed: 500,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
				1399: {
					slidesPerView: 5,
				},
				1199: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				400: {
					slidesPerView: 1.3,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	//>> Testimonial Slider Start <<//
	if ($('.room-suites-slider').length > 0) {
		const roomSuitesSlider = new Swiper(".room-suites-slider", {
			spaceBetween: 30,
			speed: 500,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
				navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
		});
	}

	//>> Testimonial Slider Start <<//
	if ($('.testimonial-slider-mountain').length > 0) {
		const testimonialSlider = new Swiper(".testimonial-slider-mountain", {
			spaceBetween: 30,
			speed: 500,
			loop: true,
			fadeEffect: {
			crossFade: true,
			},
			autoHeight: true,
			autoplay: {
			delay: 1000,
			disableOnInteraction: false,
			},
			navigation: {
			nextEl: ".array-prev",
			prevEl: ".array-next",
			},
		});
	}
	//>> News Slider Start <<//
	if($('.news-slider').length > 0) {
		const newsSlider = new Swiper(".news-slider", {
			spaceBetween: 30,
			speed: 500,
			loop: true,
			autoplay: {
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}
	//>> Footer Instagram Slider Start <<//
	if($('.footer-instagram-slider').length > 0) {
		const footerInstagramSlider = new Swiper(".footer-instagram-slider", {
			spaceBetween: 10,
			speed: 500,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			
			breakpoints: {
				1199: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}


    var swiper = new Swiper(".five-grid-slider", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
			breakpoints: {
				1199: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			},
    });

	

	//>> Shape Animation Start <<//
	const shapeElements = document.querySelectorAll(".suite-bg-shape-1");

	if (shapeElements.length > 0 && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);

		shapeElements.forEach(function(el) {
		gsap.timeline({
			scrollTrigger: {
			trigger: el,
			start: "top 80%",
			end: "bottom 10%",
			scrub: 2,
			markers: false,
			}
		}).fromTo(el,
			{
			x: -300,
			},
			{
			x: 0,
			duration: 1.6,
			ease: "power2.out"
			}
		);
		});
	}


	//>> Text Title Animation Start <<//
	if($('.tz-itm-title').length) {
		var txtheading = $(".tz-itm-title");

    if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-itm-anim') ){
          gsap.set(el.split.chars, {
            opacity: .3,
            x: "-7",
          });
        }
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

	//>> Text Jumping Animation Start <<//
	if ($('.footer-big-text').length > 0) {

		let cta = gsap.timeline({
			repeat: -1,
			delay: 0.5,
			scrollTrigger: {
				trigger: '.footer-big-text',
				start: 'bottom 100%-=50px'
			}
		});
		gsap.set('.footer-big-text', {
			opacity: 0
		});
		gsap.to('.footer-big-text', {
			opacity: 1,
			duration: 1,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: '.footer-big-text',
				start: 'bottom 100%-=50px',
				once: true
			}
		});
	
		let mySplitText = new SplitText(".footer-big-text", { type: "words,chars" });
		let chars = mySplitText.chars;
		let endGradient = chroma.scale(['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']);
		cta.to(chars, {
			duration: 0.5,
			scaleY: 0.6,
			ease: "power1.out",
			stagger: 0.04,
			transformOrigin: 'center bottom'
		});
		cta.to(chars, {
			yPercent: -20,
			ease: "elastic",
			stagger: 0.03,
			duration: 0.8
		}, 0.5);
		cta.to(chars, {
			scaleY: 1,
			ease: "elastic.out",
			stagger: 0.03,
			duration: 1.5
		}, 0.5);
		cta.to(chars, {
			color: (i, el, arr) => {
				return endGradient(i / arr.length).hex();
			},
			ease: "power1.out",
			stagger: 0.03,
			duration: 0.3
		}, 0.5);
		cta.to(chars, {
			yPercent: 0,
			ease: "back",
			stagger: 0.03,
			duration: 0.8
		}, 0.7);
		cta.to(chars, {
			color: '#FFFFFF',
			duration: 1.4,
			stagger: 0.05
		});
	}

	// Golf Service Slider Start
	document.addEventListener("DOMContentLoaded", function () {
	  var swiper = new Swiper(".golf-service-slider", {
	    centeredSlides: true,
	    loop: true,
	    slidesPerView: 1.8,
	    spaceBetween: 30,
	    speed: 500,
	    pagination: {
	      el: '.swiper-pagination',
	      type: 'fraction',
	      renderFraction: function (currentClass, totalClass) {
	        return '<span class="' + currentClass + '"></span> - <span class="' + totalClass + '"></span>';
	      }
	    },
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-prev',
				prevEl: '.swiper-button-next',
			},
		  breakpoints: {
		    // when window width is >= 320px
		    320: {
		      slidesPerView: 1,
		      spaceBetween: 15
		    },
		    // when window width is >= 320px
		    768: {
		      slidesPerView: 1,
		      spaceBetween: 20
		    },
		    // when window width is >= 480px
		    1024: {
		      slidesPerView: 1.8,
		      spaceBetween: 30
		    },
		    // when window width is >= 640px
		    1280: {
		      slidesPerView: 1.8,
		      spaceBetween: 30
		    }
		  },
	    on: {
	      init: function () {
	        updateFraction(this);
	      },
	      slideChange: function () {
	        updateFraction(this);
	      }
	    }
	  });

	  function updateFraction(swiper) {
	    if (!swiper.pagination || !swiper.pagination.el) return;

	    const currentEl = swiper.pagination.el.querySelector('.swiper-pagination-current');
	    const totalEl = swiper.pagination.el.querySelector('.swiper-pagination-total');

	    const currentIndex = swiper.realIndex + 1;
	    const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;

	    if (currentEl && totalEl) {
	      currentEl.textContent = padZero(currentIndex);
	      totalEl.textContent = padZero(totalSlides);
	    }
	  }

	  function padZero(num) {
	    return num < 10 ? '0' + num : num.toString();
	  }
	});
	// Golf Service Slider END

	// Home 1 Destination js
	var swiper = new Swiper(".destination-active", {
		speed:500,
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 1000,            // time between slides (in ms)
			disableOnInteraction: false, // keep autoplay after user interactions
			pauseOnMouseEnter: false,    // optional: autoplay won't pause on hover
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		// pagination
		pagination: {
			el: ".destination-dots",
			clickable:true,
		},
	});

	// Home 1 suite js
	var swiper = new Swiper(".suite-active", {
		speed:1000,
		loop: false,
		slidesPerView: 1,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});


	// Home 1 explore 
	var swiper = new Swiper(".explore-active", {
		speed:500,
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// pagination
		pagination: {
			el: ".pagination",
			clickable:true,
		},

	});



	// Home 1 testimonial
	var slider = new Swiper('.testimonial-active', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: false,
		speed: 500,
		autoplay: true,
		centeredSlides: true,
		centeredSlidesBounds: true,
		breakpoints: {
			'1600': {
				slidesPerView: 2.1,
			},
			'1400': {
				slidesPerView: 1.8,
			},
			'1200': {
				slidesPerView: 1.6,
			},
			'992': {
				slidesPerView: 1.4,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// pagination
		pagination: {
			el: ".testi-dot",
			clickable:true,
		},
	});



	// Home 1 testimonial
	var slider = new Swiper('.testimonial-active-five', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		speed: 500,
		autoplay: true,
		centeredSlides: true,
		breakpoints: {
			'1600': {
				slidesPerView: 1.5,
			},
			'1400': {
				slidesPerView: 1.8,
			},
			'1200': {
				slidesPerView: 1.6,
			},
			'992': {
				slidesPerView: 1.4,
			},
			'768': {
				slidesPerView: 1.1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// pagination
		pagination: {
			el: ".testi-dot",
			clickable:true,
		},
	});



	// Home 1 testimonial
	var slider = new Swiper('.testimonial-active-royal', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		speed: 500,
		autoplay: true,
		centeredSlides: true,
		breakpoints: {
			'1600': {
				slidesPerView: 1.5,
			},
			'1400': {
				slidesPerView: 1.4,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// pagination
		pagination: {
			el: ".testi-dot",
			clickable:true,
		},
	});


	// Home 1 blog 
	var swiper = new Swiper(".blog-active", {
		speed:500,
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		autoplay: {
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});


	// Home 1 blog 
	if ($('.testimonial-breakfast-swiper').length) {
		var swiper = new Swiper(".testimonial-breakfast-swiper", {
			speed:500,
			loop: true,
			spaceBetween: 30,
			slidesPerView: 1,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-prev',
				prevEl: '.swiper-button-next',
			},
		});
	}

	

	//service-carousel Two
	if ($('.service-two-slider').length) {
	   $('.service-two-slider').slick({
		    infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			responsive: [
			    {
			      breakpoint: 1600,
			      settings: {
			        slidesToShow: 4,
			      }
			    },
			    {
			      breakpoint: 1500,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 1,
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
			]
		});
	}

	 /* ================================
       Des Portfolio Anim Js Start
    ================================ */
    
    if (document.querySelector(".des-portfolio-wrap")) {
        const pr = ScrollTrigger.matchMedia();

        pr.add("(min-width: 1199px)", () => {

            const sections = document.querySelectorAll(".des-portfolio-panel");
            const wrap = document.querySelector(".des-portfolio-wrap");

            if (!sections.length || !wrap) return;

            // Initial state
            gsap.set(sections, { scale: 1 });

            // Animate each section except the last one
            sections.forEach((section, index) => {
                const isLast = index === sections.length - 1;

                gsap.to(section, {
                    scale: isLast ? 1 : 0.8, // 👈 last one stays full-size
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom 60%",
                        scrub: true,
                        pin: true,
                        pinSpacing: false,
                        endTrigger: wrap,
                        markers: false,
                    },
                });
            });

            // Cleanup on condition change
            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
    }

	// Golf Testinomials Slider
	if ($('.testimonial-slider-content').length) {
		var slider = new Swiper ('.testimonial-slider-content', {
			slidesPerView: 1,
			spaceBetween: 15,
			navigation: true,
			//centeredSlides: true,
			loop: true,
			loopedSlides: 6,
			autoplay: {
				delay: 1000,
				pauseOnMouseEnter: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		var thumbs = new Swiper ('.testimonial-thumbs', {
			slidesPerView: 'auto',
			spaceBetween: 15,
			centeredSlides: true,
			loop: true,
			slideToClickedSlide: true,
		});
		slider.controller.control = thumbs;
		thumbs.controller.control = slider;
	}

	// Testimonial Slider
	if ($(".testimonial-slider-resort").length) {
		var swiper = new Swiper(".testimonial-slider-resort", {
			loop: "true",
			spaceBetween: 24,
			speed: 1000,
			breakpoints: {
				1199: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 2,
				},
			},
		});
	}

	// Testimonial Slider
	if ($(".testimonial-slider-resort1").length) {
		var swiper = new Swiper(".testimonial-slider-resort1", {
			loop: "true",
			spaceBetween: 30,
			speed: 1000,
			breakpoints: {
				1199: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 2,
				},
			},
		});
	}

	// Home BreakFast Gallery Section Slider
	var mySwiper = new Swiper('.gallery-swiper-container', {
	  loop: true,
	  speed: 1000,
	  autoplay: {
	    delay: 1000,
	  },
	  effect: 'coverflow',
	  grabCursor: true,
	  centeredSlides: true,
	  slidesPerView: 'auto',
	  coverflowEffect: {
	    rotate: 0,
	    stretch: 0,
	    depth: 858,
	    modifier: 2,
	    slideShadows: true,
	  },
	  pagination: {
	    el: ".swiper-pagination",
	    clickable: true,
	  },
	  // Navigation arrows
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	})

	//product bxslider
	if ($('.product-details .bxslider').length) {
		$('.product-details .bxslider').bxSlider({
        nextSelector: '.product-details #slider-next',
        prevSelector: '.product-details #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.product-details .slider-pager .thumb-box'
	    });
	};

	//MixItup Gallery
	if ($('.filter-list').length) {
		$('.filter-list').mixItUp({});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($('.dial').length) {
		$('.dial').appear(function () {
			var elm = $(this);
			var color = elm.attr('data-fgColor');
			var perc = elm.attr('value');

			elm.knob({
				'value': 0,
				'min': 0,
				'max': 100,
				'skin': 'tron',
				'readOnly': true,
				'thickness': 0.15,
				'dynamicDraw': true,
				'displayInput': false
			});
			$({ value: 0 }).animate({ value: perc }, {
				duration: 2000,
				easing: 'swing',
				progress: function () {
					elm.val(Math.ceil(this.value)).trigger('change');
				}
			});
			//circular progress bar color
			$(this).append(function () {
				// elm.parent().parent().find('.circular-bar-content').css('color',color);
				//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
			});

		}, { accY: 20 });
	}


	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
		},{accY: 0});
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}


	// Feature Content Active
	if($('.feature-block .inner-block').length) {
		$('.feature-block .inner-block').on('mouseenter', function() {
		$(this).addClass('active');
		$('.inner-block').removeClass('active');
		});
		$('.feature-block .inner-block').on('mouseleave', function() {
		$(this).addClass('active');
		});
	}


	// Image move with mouse Feature Block Resort Home Layout 3
	if ($(".feature-block-resort .list-item").length) {
		$(".feature-block-resort .list-item").each(function () {
			const $item = $(this);
			const $hoverImage = $item.find(".hover-image");

			if ($hoverImage.length === 0) return;

			$item.on("mousemove", function (e) {
				const offset = $item.offset();
				const dx = e.pageX - offset.left;
				const dy = e.pageY - offset.top;

				// ✅ Keep the rotate(30deg) here always
				$hoverImage.css(
					"transform",
					`translate(${dx}px, ${dy}px) rotate(30deg)`
				);
			});
		});
	}

	// Service slider Resort
	if ($(".service-slider-resort").length) {
		var swiper = new Swiper(".service-slider-resort", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 500,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			// effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				nextEl: ".service-slider-next",
				prevEl: ".service-slider-prev",
			},
		});
	}

	// Discover slider Resort
	if ($(".discover-slider-resort").length) {
		var swiper = new Swiper(".discover-slider-resort", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 500,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			// effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				nextEl: ".discover-slider-next",
				prevEl: ".discover-slider-prev",
			},
		});
	}

	// Discover slider Room Resort Layout
	if ($(".discover-slider-rooms").length) {
		var swiper = new Swiper(".discover-slider-rooms", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 500,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-slider-next",
				prevEl: ".swiper-slider-prev",
			},
		});
	}

	// Blog Slider
	if ($(".blog-slider-resort").length) {
		var swiper = new Swiper(".blog-slider-resort", {
			spaceBetween: 24,
			speed: 500,
			breakpoints: {
				1199: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 2,
				},
			},
			navigation: {
				nextEl: ".blog-slider-next",
				prevEl: ".blog-slider-prev",
			},
			pagination: {
				el: ".blog-slider-pagination",
				clickable: true,
			},
		});
	}

	// Blog Slider
	if ($(".room-slider-resort-2").length) {
		var swiper = new Swiper(".room-slider-resort-2", {
			spaceBetween: 24,
			speed: 500,
			breakpoints: {
				991: {
					slidesPerView: 2,
				},
				1199: {
					slidesPerView: 2,
				},
				1399: {
					slidesPerView: 3,
				},
			},
			navigation: {
				nextEl: ".blog-slider-next",
				prevEl: ".blog-slider-prev",
			},
			pagination: {
				el: ".blog-slider-pagination",
				clickable: true,
			},
		});
	}


	// Blog Image Active
	if($('.blog-block .inner-block').length) {
		$('.blog-block .inner-block').on('mouseenter', function() {
		$(this).addClass('active');
		$('.inner-block').removeClass('active');
		});
		$('.blog-block .inner-block').on('mouseleave', function() {
		$(this).addClass('active');
		});
	}


	// Hover reveal start
	const hoverItems = document.querySelectorAll(".rr-hover-reveal-item");

	hoverItems.forEach((item, i) => {
		let hoverImage = item.children[1]; // assuming 2nd child is image

		if (!hoverImage) return; // 🚫 Skip if second child doesn't exist

		let isHovering = false;

		item.addEventListener("mouseenter", () => {
			isHovering = true;
			hoverImage.style.opacity = 1;
			animate();
		});

		item.addEventListener("mouseleave", () => {
			isHovering = false;
			hoverImage.style.opacity = 0;
		});

		let mouseX = 0, mouseY = 0;
		let currentX = 0, currentY = 0;

		item.addEventListener("mousemove", (e) => {
			const rect = item.getBoundingClientRect();
			mouseX = e.clientX - rect.left;
			mouseY = e.clientY - rect.top;
		});

		function animate() {
			if (!isHovering) return;
			currentX += (mouseX - currentX) * 0.1;
			currentY += (mouseY - currentY) * 0.1;
			hoverImage.style.transform = `translate(${currentX}px, ${currentY}px)`;
			requestAnimationFrame(animate);
		}
	});

	// Background image from data-background
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});
	// hover reveal end
	

	//product bxslider
	if ($('.product-details .bxslider').length) {
		$('.product-details .bxslider').bxSlider({
        nextSelector: '.product-details #slider-next',
        prevSelector: '.product-details #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.product-details .slider-pager .thumb-box'
	    });
	};

	//Quantity box
   $(".quantity-box .add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
   });
   $(".quantity-box .sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
   });

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 99,
			values: [ 10, 60 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}

  // count Bar
  if ($(".count-bar").length) {
      $(".count-bar").appear(
          function () {
                  var el = $(this);
                  var percent = el.data("percent");
                  $(el).css("width", percent).addClass("counted");
              }, {
                  accY: -50
          }
      );
  }

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}


	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 0);

		});
	}

	// Nice seclect
	
	if ($("select").length) {
		$("select").niceSelect();
	}

	//Header Search
	if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function(e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $("body").toggleClass("locked");
        });
    }


	//>> Scrolldown Start <<//
	$("#scrollDown").on("click", function () {
		setTimeout(function () {
			$("html, body").animate({ scrollTop: "+=1000px" }, "slow");
		}, 1000);
	});

	// Discover Slider
	if ($(".discover-slick").length) {
		const $slider = $(".discover-slick");
		const $price = $(".dolar");

		// Initialize slick
		$slider.slick({
			arrows: false,
			dots: false,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			pauseOnHover: false,
			pauseOnFocus: false,
			pauseOnDotsHover: false,
		});

		// Initial price (from first slide)
		const firstPrice = $slider
			.find('.slick-slide[data-slick-index="0"]')
			.data("price");
		$price.text(firstPrice).addClass("active");

		// Before slide change — remove animation
		$slider.on("beforeChange", function () {
			$price.removeClass("active");
		});

		// After slide change — update price & animate
		$slider.on("afterChange", function (event, slick, currentSlide) {
			const newPrice = $slider
				.find('.slick-slide[data-slick-index="' + currentSlide + '"]')
				.data("price");
			$price.text(newPrice);
			setTimeout(() => {
				$price.addClass("active");
			}, 50);
		});

		// Custom arrow navigation
		$(".discover-arry-left").on("click", function () {
			$slider.slick("slickPrev");
		});
		$(".discover-arry-right").on("click", function () {
			$slider.slick("slickNext");
		});
	}

	// AOS js
	AOS.init();
	

	// Elements Animation
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

  /* ---------------------------------------------------------------------- */
  /* ----------- Activate Menu Item on Reaching Different Sections ---------- */
  /* ---------------------------------------------------------------------- */
  var $onepage_nav = $('.onepage-nav');
  var $sections = $('section');
  var $window = $(window);
  function TM_activateMenuItemOnReach() {
	  if( $onepage_nav.length > 0 ) {
	    var cur_pos = $window.scrollTop() + 2;
	    var nav_height = $onepage_nav.outerHeight();
	    $sections.each(function() {
	      var top = $(this).offset().top - nav_height - 80,
	        bottom = top + $(this).outerHeight();

	      if (cur_pos >= top && cur_pos <= bottom) {
	        $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
	        $sections.removeClass('current').removeClass('active');
	        $onepage_nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
	      }

	      if (cur_pos <= nav_height && cur_pos >= 0) {
	        $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
	        $onepage_nav.find('a[href="#header"]').parent().addClass('current').addClass('active');
	      }
	    });
	  }
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
		TM_activateMenuItemOnReach();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
	});

})(window.jQuery);
