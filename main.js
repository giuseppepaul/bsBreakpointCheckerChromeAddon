$(function(){
	var breakpoint = $('.breakpoint:visible').attr('data-breakpoint');
	var alertbox = $('<div>').css({
		'position': 'fixed',
		'top': '10px',
		'right': '10px',
		'z-index': 999,
		'background-color': '#fcf8e3',
		'color': '#8a6d3b',
		'padding': '5px 10px',
		'border': '1px solid #8a6d3b',
		'border-radius': '5px'
	}).html("<strong>Current Breakpoint:</strong> " + breakpoint);
	$('body').append(alertbox);

	window.setTimeout(function(){
		alertbox.fadeOut('fast', function(){
			alertbox.remove();	
		})		
	}, 1000);;
})