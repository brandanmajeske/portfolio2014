var viewportHeight = $(window).height(),
	mobileNav = $('.mobile-nav-links'),
	mobileNavToggle = $('#mobile-nav-toggle'),
	mainContent = $('.main-content'),
	hero = $('.hero'),
	heroHeight = hero.height(),
	navMenu = $('.navigation'),
	revealer = $('#revealer'),
	logo = $('.logo'),
	panel = $('.panel'),
	workHeader = $('.work-header'),
	workHeaderHeight = workHeader.height(),
	workAnimation = $('#work-animation'),
	portrait = $('#portrait'),
	aboutHeader = $('.about-header'),
	footer = $('footer'),
	overlay = $('.overlay'),
	loadingImg = overlay.find('img'),
	copyrightDate = $('#date'),
	rand = 1,
	iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

var socialMedia = {
	facebook : 'http://facebook.com/brandanmajeske',
	twitter : 'http://twitter.com/brandanmajeske',
	googleplus : 'https://plus.google.com/104486624241215576395',
	github : 'https://github.com/brandanmajeske',
	linkedin : 'http://www.linkedin.com/pub/brandan-majeske/2b/142/873'
}

var social = function() {
var output = '<ul>',
	myList = document.querySelectorAll('.socialmediaicons');


 for( var key in arguments[0] ) {
 	output += '<li><a href="' + socialMedia[key] + ' "target="_blank">' + 
 	'<img src="images/social/'+key+'.png" alt="icon for '+key+'">' +
 	'</a></li>';
 	}
	output += '</ul>';
	for (var i = myList.length -1; i >= 0; i--) {
		myList[i].innerHTML = output;
	}
}(socialMedia);

(function(){
	overlay.css({'height': viewportHeight});
	
	if(overlay.css({'display':'block'})){
		
	loadingImg.fadeIn(300).css({'top': (viewportHeight/2 - (loadingImg.height()/2)), 'left': ($(window).width()/2 - (loadingImg.width()/2))});
		
	}
	

	
	if(iOS){
	
	   	setTimeout(function(){
			//overlay.fadeOut('slow');
			overlay.css({
			'-webkit-transition': 'opacity 1s ease-in-out',
	    	'-moz-transition': 'opacity 1s ease-in-out',
	    	'-ms-transition': 'opacity 1s ease-in-out',
	    	'-o-transition': 'opacity 1s ease-in-out',
	     	'opacity': '0'
			});
			overlay.remove();
			}, 1000);

	
	} else {
		
	$(window).bind("load", function() {
	   		
	   	setTimeout(function(){
	
			overlay.css({
			'-webkit-transition': 'opacity 1s ease-in-out',
	    	'-moz-transition': 'opacity 1s ease-in-out',
	    	'-ms-transition': 'opacity 1s ease-in-out',
	    	'-o-transition': 'opacity 1s ease-in-out',
	     	'opacity': '0'
			});
			overlay.remove();
			}, 1200);
		
		});	
	}


}());

var resizePanels = function(){

			var panelHeight = [];
			var winWidth = $(window).width();

			if((winWidth > 640)){

				panel.each(function(){
				var that = $(this);
				panelHeight.push(that.outerHeight());
				
			});


				var biggestPanel = Math.max.apply(null,panelHeight);

				panel.css({'min-height':biggestPanel});

			}; 

			if(winWidth < 636){
				panel.css({'min-height':'inherit'});
			}
};

resizePanels();


(function(){

	hero.css({'height': viewportHeight});

	if(mainContent.height() < viewportHeight) {
	mainContent.css({'height' : viewportHeight + navMenu.height(),'top': viewportHeight - footer.height()});	
	} else {
		mainContent.css({'height':'inherit','top': viewportHeight - footer.height()});
	}
	logo.css({'height': viewportHeight/ 1.5, 'top': viewportHeight/8});

	$(window).resize(function(){
			viewportHeight = $(window).height();
			hero.css({'height': viewportHeight});
			
			logo.css({'height': viewportHeight/ 1.5, 'top': viewportHeight/8});
			
			resizePanels();

			 if(workHeaderHeight < workAnimation.height() ) {
			 	workHeader.css({'height': workAnimation.height()});
			 } else {
			 	workHeader.css({'height':'inherit'});
			 }

			

			if(mainContent.height() < viewportHeight) {
				
				mainContent.css({'height' : viewportHeight + 50,'top': viewportHeight - footer.height()});	
			} else {

				mainContent.css({'height':'inherit','top': viewportHeight - footer.height()});
			}
	});


}());

(function(){
	mobileNavToggle.click(function(e){
		e.preventDefault();

		if(mobileNavToggle.hasClass('mobile-active')){
			mobileNavToggle.removeClass('mobile-active');
			mobileNav.slideUp('easeInOutQuart');

		} else {
			mobileNavToggle.addClass('mobile-active');
			mobileNav.slideDown('easeInOutQuart');
		}



	});
}());

(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > viewportHeight/5) {
	      logo.stop().animate({opacity: 0}, 300);
	      workAnimation.stop().animate({opacity: 0}, 200);
	    } else {
	      logo.stop().animate({opacity: 1}, 300);
	      workAnimation.stop().animate({opacity: 1}, 200);
	    }


	    	if($(this).scrollTop() > aboutHeader.height()) {

			if(rand == 1 && $(this).scrollTop() > 300){
				rand = 2;
				portrait.attr('src', 'images/portrait'+rand+'.jpg');
			}
	
			portrait.stop().animate({opacity: 0}, 100);
			aboutHeader.load(portrait);


	    	}else {

			portrait.stop().animate({opacity: 1}, 0);
				
			if(rand == 2 && $(this).scrollTop() <= 10 ){
				setTimeout(function(){
					rand = 1;
					portrait.attr('src', 'images/portrait'+rand+'.jpg');
					aboutHeader.load(portrait);
				}, 500);
				
			}

	    }


	});
}());

(function(){

	revealer.click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: viewportHeight
		}, 1400, 'easeInOutQuart');
	});

}());

(function(){
	var d = new Date();
	var n = d.getFullYear();
	copyrightDate.html(n);
}());

(function() {
	$.ajax({
		type: 'GET',
		cache: true,
		url: 'data/skills.json',
		dataType: 'json',
		beforeSend: function(){
			$('#update_skills').empty().append('<img src="images/loading.svg" />');
		},
		success: function (data){
			$('#update_skills').empty();

			var output = '<ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-3">';
				
				$.each(data, function(key, val){
					output += '<li class="panel">';
					output += '<img src="'+val.icon_url+'"/>';
					output += '<h3>'+val.skill_name+'</h3>';
					output += '<div class="description_container">';
					output += '<p>'+val.description+'</p>';
					output += '</div>';
					output += '</li>';
				});

			output += '</ul>';
			$('#update_skills').html(output);
		},
		error: function(data){
			console.log('error finding portfolio' + data);
		}
	});
}());

(function(){
	$.ajax({
			type: 'GET',
			cache: true,
			url: 'data/portfolio.json',
			dataType: 'json',
			success: function (data){
				$('#update_portfolio').empty();

				var output = '<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-3">';
					
					$.each(data, function(key, val){
						output += '<li class="portfolio_item">';
						output += '<a href="'+val.project_url+'" target="_blank"><img src="'+val.image_url+'"/>';
						output += '<div class="portfolio_caption">';
						output += '<h3>'+val.name+'</h3>';
						output += '<p class="hide-for-small-only">'+val.description+'</p>';
						output += '</div>';
						output += '</a></li>';
					});

				output += '</ul>';
				$('#update_portfolio').html(output);
			},
			error: function(data){
				console.log('error finding portfolio' + data);
			}
	});

}());

(function(){
	if (!Modernizr.svg) {
	    $('img[src$=".svg"]').each(function()
	    {
	        $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
	    });
	}

	function isIE () {
  	var myNav = navigator.userAgent.toLowerCase();
  	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	};

	if( isIE() == true ){
	$('img[src$=".svg"]').each(function()
	    {
	        $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
	    });
	}

}());

(function() {

	$(window).bind("load", function() {
	
	setTimeout(function(){

	var portfolio_item = $('.portfolio_item'),
	image = portfolio_item.find('img'),
	imageHeight = image.height(),
	imageWidth =  image.width(),
	caption = $('.portfolio_caption');

	imageHeight = image.height(),
	imageWidth =  image.width();


	$(window).resize(function(){
		imageHeight = image.height(),
		imageWidth =  image.width();
	});

	if(!Modernizr.touch){

		$(document).on("mouseover", ".portfolio_item", function(e){
			var that = $(this);	
			that.find(caption).css({'opacity': 1, 'width': imageWidth, 'height': imageHeight});
			e.preventDefault();
		});

		$(document).on("mouseout", ".portfolio_item", function(e){
			var that = $(this);
			that.find(caption).css('opacity', 0);
		});
	
	} else {
		caption.remove();
	}

	}, 500);
	

   	});


}());
