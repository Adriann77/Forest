const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.nav-bar__mobile-menu');
const allNavItems = document.querySelectorAll('.nav-item');
const currYear = document.querySelector('.year');
const navLinks = document.querySelectorAll('.nav-bar__desktop a');
const sections = document.querySelectorAll('section');
const homeSection = document.querySelector('.Home');
const aboutusSection = document.querySelector('.aboutus');
const ofertSection = document.querySelector('.ofert');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger--active');
	mobile.classList.toggle('show-nav-bar');

	if (hamburger.classList.contains('hamburger--active')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'visible';
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

document.addEventListener('DOMContentLoaded', () => {
	const currentPG = window.location.href;
	if (currentPG.includes('offert')) {
		allNavItems.forEach(el => {
			el.classList.contains('ofert') ? el.classList.add('active')  : el.classList.remove('active')
		});
	}
});
document.addEventListener('DOMContentLoaded', () => {
	const currentPG = window.location.href;
	if (currentPG.includes('contact')) {
		allNavItems.forEach(el => {
			el.classList.contains('contact') ? el.classList.add('active')  : el.classList.remove('active')
		});
	}
});

sections.forEach(el => el.offsetTop);
