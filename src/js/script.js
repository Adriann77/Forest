const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.nav-bar__mobile-menu');
const allNavItems = document.querySelectorAll('.nav-item');
const currYear = document.querySelector('.year');
const navLinks = document.querySelectorAll('.nav-bar__desktop a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger--active');
	mobile.classList.toggle('show-nav-bar');
});

allNavItems.forEach(el =>
	el.addEventListener('click', () => {
		mobile.classList.remove('show-nav-bar');
		hamburger.classList.remove('hamburger--active');
	})
);
currYear.textContent = new Date().getFullYear();

navLinks.forEach(item =>
	item.addEventListener('scroll', () => {
		console.log(item);
	})
);

document.addEventListener('scroll', () => {
	navLinks.forEach(item => console.log(item));
});


