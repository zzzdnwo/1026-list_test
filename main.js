$(document).ready(function(){

	//메뉴 클릭 했을 때마다 if 쳐주는걸로 해야하나?
	let ulLength = document.querySelectorAll('ul li').length;

	if(ulLength>3){
		console.log(ulLength);
		$('#up').show();
		$('#down').show();
	}else{
		console.log(ulLength);
		$('#up').hide();
		$('#down').hide();
	};

	$('#up').click(function(){
		$('div ul li:last-child').insertBefore(('div ul li:first-child'));
		//$('div ul').css('margin-top',114);
		//$('div ul').animate({'margin-top':0})
	});
	$('#down').click(function(){
		$('div ul li:first-child').insertAfter(('div ul li:last-child'));

	});


});