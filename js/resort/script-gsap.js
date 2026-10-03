(function ($) {
	("use strict");

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
	if ($(".char-animation").length > 0) {
		let char_come = gsap.utils.toArray(".char-animation");
		char_come.forEach((splitTextLine) => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: "top 90%",
					end: "bottom 60%",
					scrub: false,
					markers: false,
					toggleActions: "play none none none",
				},
			});

			const itemSplitted = new SplitText(splitTextLine, {
				type: "chars, words",
			});
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" });
			tl.from(itemSplitted.chars, {
				duration: 1,
				delay: 0.5,
				x: 100,
				autoAlpha: 0,
				stagger: 0.05,
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
		stagger: 0.3,
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
			},
		});
		counterImgTL.fromTo(
			".about-bg-shape-1",
			{
				x: 200,
			},
			{
				x: 0,
				duration: 1.6,
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
			},
		});
		counterBimanTL.fromTo(
			".feature-bg-shape-birds",
			{
				x: 140,
				scale: 0.3,
			},
			{
				x: 0,
				scale: 1,
				duration: 1.6,
			}
		);
	}

	// gallery animation
	if ($(".gallery-area").length > 0) {
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
				},
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
			},
		});
		counterImgTL.fromTo(
			".suite-bg-shape-1",
			{
				x: -300,
			},
			{
				x: 0,
				duration: 1.6,
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
			},
		});
		trucktl.fromTo(
			".explore-shape-1",
			{
				y: -200,
			},
			{
				y: 0,
				duration: 1.6,
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
			},
		});
		counterImgTL.fromTo(
			".explore-shape-2",
			{
				x: 200,
			},
			{
				x: 0,
				duration: 1.6,
			}
		);
	}

	// Testimonial scroll marqee
	if ($(".tp-team-item").length > 0) {
		gsap.set(".tp-team-item.marque", {
			x: "25%",
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: ".tp-team-area ",
					start: "-1000 10%",
					end: "bottom 20%",
					scrub: true,
					invalidateOnRefresh: true,
				},
			})
			.to(".tp-team-item.marque ", {
				x: "-100%",
			});
	}

	// Scroll Zoom Animation
	if ($(".tp-hero-bottom-img-wrap").length > 0) {
		let ms = gsap.matchMedia();
		ms.add("(min-width: 768px)", () => {
			// Home 8
			let tp_hero = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-hero-bottom-img-wrap",
					start: "top 70",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 50%",
				},
			});
			tp_hero.to(".tp-hero-bottom-img", {
				width: "100%",
			});
		});
	}

	// Fade Animation
	if ($(".tp_fade_top").length > 0) {
		gsap.set(".tp_fade_top", { y: -100, opacity: 0 });
		const fadetopArray = gsap.utils.toArray(".tp_fade_top");
		fadetopArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=100",
				},
			});
			fadeTl.to(item, {
				y: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 2.5,
			});
		});
	}

	if ($(".tp_fade_bottom").length > 0) {
		gsap.set(".tp_fade_bottom", { y: 100, opacity: 0 });
		const fadeArray = gsap.utils.toArray(".tp_fade_bottom");
		fadeArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=400",
				},
			});
			fadeTl.to(item, {
				y: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 1.5,
			});
		});
	}

	if ($(".tp_fade_left").length > 0) {
		gsap.set(".tp_fade_left", { x: -100, opacity: 0 });
		const fadeleftArray = gsap.utils.toArray(".tp_fade_left");
		fadeleftArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=100",
				},
			});
			fadeTl.to(item, {
				x: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 2.5,
			});
		});
	}

	if ($(".tp_fade_right").length > 0) {
		gsap.set(".tp_fade_right", { x: 100, opacity: 0 });
		const faderightArray = gsap.utils.toArray(".tp_fade_right");
		faderightArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=100",
				},
			});
			fadeTl.to(item, {
				x: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 2.5,
			});
		});
	}
})(jQuery);
