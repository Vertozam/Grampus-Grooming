
var overlay = $('#overlay');
var modal = $('.modal');	
var closeButton = $('.modal-close');

// Get all ".service-item"
$('.service-item').click(function(){

	let modalId = this.id;

	// Find need id
	switch (modalId) {
		case 'shpic':
			$('#shpic-modal').addClass('active');
			break;
		case 'corgi':
			$('#corgi-modal').addClass('active');
			break;
		case 'iork':
			$('#iork-modal').addClass('active');
			break;
		case 'spaniel':
			$('#spaniel-modal').addClass('active');
			break;
		case 'bolonka':
			$('#bolonka-modal').addClass('active');
			break;
		case 'biver':
			$('#biver-modal').addClass('active');
			break;
		case 'pudel':
			$('#pudel-modal').addClass('active');
			break;
		case 'cat':
			$('#cat-modal').addClass('active');
			break;
	}
	
	overlay.css('visibility', 'visible');
	$('html').css('overflow-y', 'hidden');	// remove scroll
	$('main').css('filter', 'blur(3px)');
	
});

closeButton.click(function(){
	overlay.css('visibility', 'hidden');
	modal.removeClass('modal active').addClass('modal');
	$('html').css('overflow', 'visible');
	$('main').css('filter', 'blur(0)');
});	

overlay.click(function(){
	overlay.css('visibility', 'hidden');
	modal.removeClass('modal active').addClass('modal');
	$('html').css('overflow', 'visible');
	$('main').css('filter', 'blur(0)');
});	