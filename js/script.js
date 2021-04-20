const mobile_menu = () => {
	const burger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	const body = document.querySelector('.scroll');
	burger.addEventListener('click' ,() => {
		menu.classList.toggle('menu-active');
		body.classList.toggle('overflow');
		burger.classList.toggle('toggle');
	});
}

mobile_menu();