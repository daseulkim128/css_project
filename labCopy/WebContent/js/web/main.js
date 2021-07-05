let mainSlide;

$(document).ready(function(){
//	setMainSlide();
	
	
//	$('div[name=main-slide-0]').attr('data-fade', 'in');
//	setTimeout(function(){
//		$('div[name=main-slide-0]').addClass('active');
//	}, 1000);
//	
	$(window).scroll(function() {
	  
	  if($(window).scrollTop() > 0){
		 $('header.header').addClass('active');
	  }else{
		  $('header.header').removeClass('active'); 
	  }
	});
});

function setMainSlide(){
	console.log('test');
	mainSlide = new Swiper('#main_slide', {
		//effect : 'fade', // 페이드 효과 사용
		loop : true, // 무한 반복
		on: {
		    slideChange: function () {
		    	var number = mainSlide.realIndex + 1;
		    	$('#main_slide').find('div.swiper-slide').removeClass('active');
		    	$('#main_slide').find('div.swiper-slide').attr('data-fade', 'out');
		    	$('div[name=main-slide-'+mainSlide.realIndex+']').attr('data-fade', 'in');
		    	setTimeout(function(){
		    		$('div[name=main-slide-'+mainSlide.realIndex+']').addClass('active');
		    	}, 1000);
		    	
		    },
	  	},
	  	autoplay:{
	  		delay: 5000,
	  	},
	  	speed: 1000,
	  	pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
      },
	});
}