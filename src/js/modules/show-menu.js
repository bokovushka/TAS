import $ from 'jquery';
//menu
showMenu($(".header-top--languages .current-lang svg"), $(".header-top--languages .current-lang .submenu"), $(".header-top--languages .current-lang"));
showMenu($(".footer-bottom--languages .current-lang svg"), $(".footer-bottom--languages .current-lang .submenu"), $(".footer-bottom--languages .current-lang"));

showMenu($(".menu-for-you .nav-link svg"), $(".menu-for-you .nav-link .submenu"), $(".menu-for-you .nav-link"));
showMenu($(".menu-for-business .nav-link svg"), $(".menu-for-business .nav-link .submenu"), $(".menu-for-business .nav-link"));


showMenu($(".header-main-menu .brand-menu .nolink"), $(".header-main-menu .brand-menu .submenu"), $(".header-main-menu .brand-menu"));


showMenu($(".header-main .menu-phones .i-arrow-down"), $(".header-main .menu-phones .submenu"), $(".header-main .menu-phones .current-phone"));
showMenu($(".header-top .menu-phones .i-arrow-down"), $(".header-top .menu-phones .submenu"), $(".header-top .menu-phones .current-phone"));

function showMenu(link, menu, burger) {
	$(document).mouseup(function (e) {
		if (burger.is(e.target) || burger.has(e.target).length !== 0) {
			if (!burger.hasClass('active')) {
				menu.addClass('active');
				burger.addClass('active');
				link.addClass('active');
			}
			// else {
			// 	menu.removeClass('active'); // скрываем его
			// 	burger.removeClass('active');
			// }
			else {
				if ((link.is(e.target) || link.has(e.target).length !== 0)) {
					if (link.hasClass('active')) {
						menu.removeClass('active'); // скрываем его
						burger.removeClass('active');
						link.removeClass('active');
					}
				}
			}
		}
		else {
			if (!menu.is(e.target) // если клик был не по нашему блоку
				&& menu.has(e.target).length === 0) { // и не по его дочерним элементам
				menu.removeClass('active'); // скрываем его
				burger.removeClass('active');
				link.removeClass('active');
			}
		}
	});
};