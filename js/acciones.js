// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	if ($('#divjuego'))
	{
		$('#uno').on('tap', function(){
			$('#resultado').append('1')
		});
		$('#dos').on('tap', function(){
			$('#resultado').append('2')
		});
		$('#tres').on('tap', function(){
			$('#resultado').append('3')
		});
		$('#cuatro').on('tap', function(){
			$('#resultado').append('4')
		});
	}
	
//}); 
});

