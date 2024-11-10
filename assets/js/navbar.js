var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#navigation');
const CShamburgerMenu = document.querySelector('#navigation .toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('active');
	CSnavbarMenu.classList.toggle('active');
	CSbody.classList.toggle('open');
	ariaExpanded();
});

function ariaExpanded() {
	const csUL = document.querySelector('#expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

const dropDowns = Array.from(document.querySelectorAll('#navigation .dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('active');
	};
	item.addEventListener('click', onClick);
}
