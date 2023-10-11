const sectionMargin = 100;


window.addEventListener('scroll', () => {
	const current =
		sections.length -
		[...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - sectionMargin) -
		1;
	console.log(current);

	switch (current) {
		case 0:
			allNavItems[0].classList.add('active');
			allNavItems[1].classList.remove('active');
			allNavItems[3].classList.add('active');
			allNavItems[4].classList.remove('active');
			break;

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