const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.nav-bar__mobile-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger--active');
	mobile.classList.toggle('show-nav-bar');
});
