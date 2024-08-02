/**
 * Controls fade in of website sections based on users scroll location
 */

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.1,
};

let observer = new IntersectionObserver(fadeIn, options);

//Selection page blocks
const sections = document.querySelectorAll('.content-container');

sections.forEach((section) => {
	observer.observe(section);
});

//FadeIn function
function fadeIn(entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('appear');
			observer.unobserve(entry.target);
		} else {
			return;
		}
	});
}
