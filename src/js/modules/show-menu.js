import $ from 'jquery';
//? languages
showMenu($(".header-top--languages .current-lang .current-lang--inner"), $(".header-top--languages .current-lang .submenu"), $(".header-top--languages .current-lang"));
showMenu($(".footer-bottom--languages .current-lang .current-lang--inner"), $(".footer-bottom--languages .current-lang .submenu"), $(".footer-bottom--languages .current-lang"));

//? menu-phones
showMenu($(".header-main .menu-phones .submenu"), $(".header-main .menu-phones .submenu"), $(".header-main .menu-phones .current-phone"));
showMenu($(".header-top .menu-phones .submenu"), $(".header-top .menu-phones .submenu"), $(".header-top .menu-phones .current-phone"));

//? submenu // submenu-lvl-1
showMenu($(".menu-for-you .nav-link .nav-link--inner"), $(".menu-for-you .nav-link .submenu"), $(".menu-for-you .nav-link"));
showMenu($(".menu-for-business .nav-link .nav-link--inner"), $(".menu-for-business .nav-link .submenu"), $(".menu-for-business .nav-link"));

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