document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.getElementById('theme-toggle');
	const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	const saved = localStorage.getItem('theme');
	const initial = saved || (prefersDark ? 'dark' : 'light');

	function applyTheme(theme) {
		document.body.classList.toggle('dark-mode', theme === 'dark');
		localStorage.setItem('theme', theme);
		if (toggleBtn) {
			toggleBtn.textContent = theme === 'dark' ? 'Bright Mode' : 'Dark Mode';
			toggleBtn.setAttribute('aria-pressed', theme === 'dark');
		}
	}

	applyTheme(initial);

	if (toggleBtn) {
		toggleBtn.addEventListener('click', () => {
			const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
			applyTheme(newTheme);
		});
	}


	const clickable = document.querySelectorAll('mainoo.html');
	clickable.forEach(img => {
		img.addEventListener('click', (e) => {
			const target = img.getAttribute('data-target');
			if (target) {
				window.location.href = target;
			}
		});
		img.style.cursor = 'pointer';
	});
});

let slideIndex = 1;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});

