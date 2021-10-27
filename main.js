$(document).ready(function(){

	let ulLength = document.querySelectorAll('ul li').length;
	const del = document.getElementById("delete");
	let ul = document.querySelector('ul');
	const item = ul.getElementsByTagName('li');
	
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
	
	del.addEventListener("click",function(){
		let ulLength = document.querySelectorAll('ul li').length;
		item[0].remove();
		if(ulLength>4){
			console.log(ulLength);
			$('#up').show();
			$('#down').show();
		}else{
			console.log(ulLength);
			$('#up').hide();
			$('#down').hide();
		};
	});
});	
