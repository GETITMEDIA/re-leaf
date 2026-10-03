(function ($) {
    'use strict';

	// Scroll smoother
	if ($("#smooth-wrapper").length && $("#smooth-content").length) {
		gsap.registerPlugin(
			ScrollTrigger,
			ScrollSmoother,
			TweenMax,
			ScrollToPlugin
		);

		gsap.config({
			nullTargetWarn: false,
		});

		let smoother = ScrollSmoother.create({
			smooth: 2,
			effects: true,
			smoothTouch: 0.1,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});
	}

  // Section Title Animation
  if ($('.char-animation').length > 0) {
    let char_come = gsap.utils.toArray(".char-animation");
    char_come.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'

        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: "chars, words" })
      tl.from(itemSplitted.chars,
        {
          duration: 1,
          delay: 0.5,
          x: 100,
          autoAlpha: 0,
          stagger: 0.05
        });
    });
  }
	

  // common heading animation
	gsap.registerPlugin(SplitText);
	gsap.set("h1", { opacity: 1 });
	let split = SplitText.create("#common-heading", { type: "chars" });
	gsap.from(split.chars, {
	y: 20,
	autoAlpha: 0,
	stagger: 0.3
	});


	// About shape
	if (document.querySelector(".about-bg-shape-1")) { 
		let counterImgTL = gsap.timeline({
		  scrollTrigger: {
		    trigger: ".about-bg-shape-1",
		    start: "top 80%",
		    end: "bottom 10%",
		    scrub: 2,  
		    markers: false,
		  }
		});
		counterImgTL.fromTo(".about-bg-shape-1", 
		  {
		    x: 200,
		  },  
		  { 
		    x: 0,
		    duration: 1.6
		  } 
		);
	}


	// blue biman
	if (document.querySelector(".feature-bg-shape-birds")) { 
		let counterBimanTL = gsap.timeline({
		scrollTrigger: {
		trigger: ".feature-bg-shape-birds",
		start: "top 90%",
		end: "bottom 15%",
		scrub: 2,  
		markers: false,
		}
		});
		counterBimanTL.fromTo(".feature-bg-shape-birds", 
		{
		x: 140,
		scale: .3
		},  
		{ 
		x: 0,
		scale: 1,
		duration: 1.6
		} 
		);
	}
	
	// gallery animation
	if ($('.gallery-area').length > 0) {
		if (window.matchMedia("(min-width: 1200px)").matches) {
		    let tp_instagram_3 = gsap.timeline({
			   scrollTrigger: {
				  trigger: ".gallery-area",
				  start: "top 30%",
				  pin: true,
				  markers: false,
				  scrub: 1,
				  pinSpacing: false,
				  end: "bottom 100%",
				  duration: 3,
			   }
		    });
	 
		    tp_instagram_3.to(".gallery-thumb img", {
			   width: "580px",
			   height: "580px",
		    });
		}
	 }


	// About shape
	if (document.querySelector(".suite-bg-shape-1")) { 
		let counterImgTL = gsap.timeline({
		  scrollTrigger: {
		    trigger: ".suite-bg-shape-1",
		    start: "top 80%",
		    end: "bottom 10%",
		    scrub: 2,  
		    markers: false,
		  }
		});
		counterImgTL.fromTo(".suite-bg-shape-1", 
		  {
		    x: -300,
		  },  
		  { 
		    x: 0,
		    duration: 1.6
		  } 
		);
	}

	// explore shape
	if (document.querySelector(".explore-shape-1")) { 
		let trucktl = gsap.timeline({
		scrollTrigger: {
			trigger: ".explore-shape-1",
			start: "top 50%",
			end: "bottom 10%",
			scrub: 2,  
			markers: false,
		}
		});
		trucktl.fromTo(".explore-shape-1", 
		{
			y: -200,
		},  
		{ 
			y: 0,
			duration: 1.6
		} 
	);
	}

	// explore shape
	if (document.querySelector(".explore-shape-2")) { 
		let counterImgTL = gsap.timeline({
		  scrollTrigger: {
		    trigger: ".explore-shape-2",
		    start: "top 80%",
		    end: "bottom 10%",
		    scrub: 2,  
		    markers: false,
		  }
		});
		counterImgTL.fromTo(".explore-shape-2", 
		  {
		    x: 200,
		  },  
		  { 
		    x: 0,
		    duration: 1.6
		  } 
		);
	}


	// Text Invert
	function initTextReveal() {
		const tagetedElementContainer =
			document.querySelectorAll(".text-reveal-anim");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(e => {
				var t = new SplitType(e, {
					types: "words, chars",
				});
				gsap.from(t.chars, {
					scrollTrigger: {
						trigger: e,
						start: "top 75%",
						end: "top 25%",
						scrub: !0,
						duration: 0.5
					},
					opacity: 0.6,
					stagger: 5,
					ease: "back.out",
				});
			});
		}
	}
	initTextReveal();

	// Room BreakFast
	let tl = gsap.timeline();
	if (window.matchMedia("(min-width: 767px)").matches) {
	  let otherSections = document.querySelectorAll('.room-block-breakfast');
	  otherSections.forEach((section) => {
	      gsap.set(otherSections, { scale: 1 });
	      tl.to(section, {
	          scale: 1,
	          scrollTrigger: {
	              trigger: section,
	              pin: section,
	              scrub: 1,
	              start: 'top 70px',
	              end: "bottom 82%",
	              endTrigger: '.room-section-breakfast',
	              pinSpacing: false,
	              markers: false,
	          },
	      });
	  });
	}


})(jQuery);
