$(document).ready(function(){

	let ulLength = document.querySelectorAll('ul').length;
	if(ulLength >3){
		console.log(ulLength);
		$('#up').hide();
		$('#down').show();
	}else{
		console.log(ulLength);
	}
	$('#up').click(function(){
		$('div ul li:last-child').insertBefore(('div ul li:first-child'));
		//$('div ul').css('margin-top',114);
		//$('div ul').animate({'margin-top':0})
	});
	$('#down').click(function(){
		$('div ul li:first-child').insertAfter(('div ul li:last-child'));

	});


});