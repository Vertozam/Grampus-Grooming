// Get close button
let close_button = document.getElementById('close-window');

// Get modal shpic
let modal_shpic = document.getElementById('modal-shpic');

// Get all services items
let shipc = document.getElementById('shpic');

close_button.onclick = function(window){
	window.style.display = 'none';
}

shpic.onclick = function(){
	modal_shpic.style.display = 'flex';
}
