const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.nav-bar__mobile-menu');
const allNavItems = document.querySelectorAll('.nav-item');
const currYear = document.querySelector('.year');
const navLinks = document.querySelectorAll('.nav-bar__desktop a');
const sections = document.querySelectorAll('section');
const homeSection = document.querySelector('.Home');
const aboutusSection = document.querySelector('.aboutus');
const ofertSection = document.querySelector('.ofert');
let currentPos;

window.addEventListener('scroll', () => {
	currentPos = window.scrollY;
});

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger--active');
	mobile.classList.toggle('show-nav-bar');

	if (hamburger.classList.contains('hamburger--active')) {
		document.body.style.overflow = 'hidden';
	}
});

allNavItems.forEach(el =>
	el.addEventListener('click', () => {
		mobile.classList.remove('show-nav-bar');
		hamburger.classList.remove('hamburger--active');
		document.body.style.overflow = 'visible';
	})
);
currYear.textContent = new Date().getFullYear();

const sectionMargin = 90;

window.addEventListener('scroll', () => {
	const current =
		sections.length -
		[...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - sectionMargin) -
		1;

	console.log(current);
	switch (current) {
		case 1:
			allNavItems[0].classList.remove('active');
			allNavItems[1].classList.add('active');
			allNavItems[2].classList.remove('active');
			allNavItems[3].classList.remove('active');
			allNavItems[4].classList.add('active');
			allNavItems[5].classList.remove('active');
			break;

		case 3:
			allNavItems[1].classList.remove('active');
			allNavItems[2].classList.add('active');
			allNavItems[3].classList.remove('active');
			allNavItems[4].classList.remove('active');
			allNavItems[5].classList.add('active');
			allNavItems[6].classList.remove('active');
			break;
		case 4:
			allNavItems[0].classList.add('active');
			allNavItems[1].classList.remove('active');
			allNavItems[3].classList.add('active');
			allNavItems[4].classList.remove('active');

			break;
	}
});

sections.forEach(el => el.offsetTop);
