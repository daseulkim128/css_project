

$(document).ready(function(){

	$(window).scroll(function() {
	  
	  if($(window).scrollTop() > 0){
		 $('header.header').addClass('active');
	  }else{
		  $('header.header').removeClass('active'); 
	  }
	});
});
