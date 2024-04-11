function activateMenuLink(sectionId) {
	document.querySelectorAll('.nav-item').forEach(item => {
		item.classList.remove('active');
	});

	document.querySelector(`.nav-item[href="index.html#${sectionId}"]`).classList.add('active');
}

function onScroll() {
	const scrollPosition = window.scrollY + window.innerHeight / 2;

	document.querySelectorAll('section').forEach(section => {
		if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
			activateMenuLink(section.id);
		}
	});
}

window.addEventListener('scroll', onScroll);
document.addEventListener('DOMContentLoaded', onScroll);
