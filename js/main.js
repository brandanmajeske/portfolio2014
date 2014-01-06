var viewportHeight = $(window).height(),
	mainContent = $('.main-content'),
	hero = $('.hero'),
	heroHeight = hero.height(),
	navMenu = $('.navigation'),
	revealer = $('#revealer'),
	logo = $('.logo'),
	footer = $('footer'),
	overlay = $('.overlay'),
	loadingImg = overlay.find('img');

(function(){
	overlay.css({'height': viewportHeight});

	loadingImg.css({'top': (viewportHeight/2 - (loadingImg.height()/2)), 'left': ($(window).width()/2 - (loadingImg.width()/2))});

	$(window).bind("load", function() {
   		setTimeout(function(){
		overlay.fadeOut('slow');
		}, 100);
   	});


}());

// Determine viewport height and set the hero image and body content divs height based on result
(function(){
	//viewportHeight -= 50;
	hero.css({'height': viewportHeight});
	//mainContent.css({'height' : viewportHeight + 50,'top': viewportHeight});
	//mainContent.css({'height' : viewportHeight + navMenu.height(),'top': viewportHeight});
	if(mainContent.height() < viewportHeight) {
	mainContent.css({'height' : viewportHeight + navMenu.height(),'top': viewportHeight - footer.height()});	
	} else {
		mainContent.css({'height':'inherit','top': viewportHeight - footer.height()});
	}
	logo.css({'height': viewportHeight/ 1.5, 'top': viewportHeight/8});
	
	//Reposition everything based on viewport height when window is resized
	$(window).resize(function(){
			viewportHeight = $(window).height();
			hero.css({'height': viewportHeight});
			//mainContent.css({'height' : viewportHeight + 50,'top': viewportHeight - footer.height()});
			logo.css({'height': viewportHeight/ 1.5, 'top': viewportHeight/8});


			if(mainContent.height() < viewportHeight) {
			mainContent.css({'height' : viewportHeight + 50,'top': viewportHeight - footer.height()});	
			} else {
				mainContent.css({'height':'inherit','top': viewportHeight - footer.height()});
			}
	});


}());

(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > viewportHeight/5) {
	      logo.fadeOut(300);
	    } else {
	      logo.fadeIn(300);
	    }
	});
}());

(function(){
	// Revealer window scroll to top
	revealer.click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: viewportHeight - (navMenu.height() + 35)
		}, 1400, 'easeInOutQuart');
	});

}());


