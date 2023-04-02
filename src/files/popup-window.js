document.addEventListener('DOMContentLoaded', function(){
	var modalButtons = document.querySelectorAll('.popup');
	var closeButtons = document.querySelectorAll('.popup-close-button');

	modalButtons.forEach(function(item){
		item.addEventListener('click', function(event){
		event.preventDefault();
		var modalID = this.getAttribute('data-modal');
		var modalElem = document.querySelector('.modal[data-modal="'+ modalId +'"]');

		modalElem.classList.add('active');

		});
	});

});

