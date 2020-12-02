const btn = document.querySelectorAll('a[href^="#"]');
const popupBtn = document.querySelectorAll('.popup__btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__button');
const blur = document.querySelector('.test');

btn.forEach(function(elem) {
	elem.addEventListener('click', function(e) {
		e.preventDefault()
		const id = elem.hasAttribute('href') ? elem.getAttribute('href') : 'body'
		document.querySelector(id).scrollIntoView ({
			behavior: 'smooth',
			block: 'start'
		})
	})
});



popupBtn.forEach(function(elem) {
	elem.addEventListener('click', function(e) {
		popup.classList.add('active');
		blur.classList.add('blur');
	});
});

popupClose.addEventListener('click', function(e) {
	popup.classList.remove('active');
	blur.classList.remove('blur');
});
