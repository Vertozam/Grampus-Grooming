
var overlay = $('#overlay');
var priceModal = $('.price-modal');	
var priceCloseButton = $('.price-modal-close');

// Get all ".service-item"
$('.price-card').click(function(){

	let modalId = this.id;

	// Find need id
	switch (modalId) {
		case 'decor-pet':
			$('#modal-decor').addClass('active');
			break;
		case 'hard-pet':
			$('#hard-decor').addClass('active');
			break;
		case 'big-pet':
			$('#big-decor').addClass('active');
			break;
	}
	
	overlay.css('visibility', 'visible');
	$('html').css('overflow-y', 'hidden');	// remove scroll
	$('main').css('filter', 'blur(3px)');
	
});

priceCloseButton.click(function(){
	overlay.css('visibility', 'hidden');
	priceModal.removeClass('price-modal active').addClass('price-modal');
	$('html').css('overflow', 'visible');
	$('main').css('filter', 'blur(0)');
});	

overlay.click(function(){
	overlay.css('visibility', 'hidden');
	priceModal.removeClass('price-modal active').addClass('price-modal');
	$('html').css('overflow', 'visible');
	$('main').css('filter', 'blur(0)');
});	

