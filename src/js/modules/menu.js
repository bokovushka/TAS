if (window.innerWidth < 1024) {
	let lastScrollTop = 0;
	$(window).scroll(function (event) {
		let st = $(this).scrollTop();
		if (st > lastScrollTop && $(window).scrollTop() >= 130) {
			$(".header").addClass("header--hide")
		} else {
			$(".header").removeClass("header--hide");
			$(".header").addClass("header--show")
		}
		lastScrollTop = st;
	});
}