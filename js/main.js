var viewportHeight = $(window).height(),
	mobileNav = $('.mobile-nav-links'),
	mobileNavToggle = $('#mobile-nav-toggle'),
	mainContent = $('.main-content'),
	hero = $('.hero'),
	heroHeight = hero.height(),
	navMenu = $('.navigation'),
	revealer = $('#revealer'),
	logo = $('.logo'),
	workHeader = $('.work-header'),
	workHeaderHeight = workHeader.height(),
	workAnimation = $('#work-animation'),
	footer = $('footer'),
	overlay = $('.overlay'),
	loadingImg = overlay.find('img'),
	copyrightDate = $('#date');

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
			
			 if(workHeaderHeight < workAnimation.height() ) {
			 	workHeader.css({'height': workAnimation.height()});
			 } else {
			 	workHeader.css({'height':'inherit'});
			 }

				

			if(mainContent.height() < viewportHeight) {
				console.log('main content is less');
				mainContent.css({'height' : viewportHeight + 50,'top': viewportHeight - footer.height()});	
			} else {
				console.log('main content is enough');
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
	      logo.fadeOut(300);
	    } else {
	      logo.fadeIn(300);
	    }

	    if($(this).scrollTop() > viewportHeight/7) {
	    	workAnimation.fadeOut(300);
	    	workHeader.css({'height':workAnimation.height()});
	    }else {
	    	workAnimation.fadeIn(300);
	    	workHeader.css({'height':'inherit'});

	    }
	});
}());

(function(){
	// Revealer window scroll to top
	revealer.click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: viewportHeight - (navMenu.height() + 25)
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

// Portfolio items caption animation
(function() {

	$(window).bind("load", function() {
	
	setTimeout(function(){

		var portfolio_item = $('.portfolio_item'),
		image = portfolio_item.find('img'),
		imageHeight = image.height(),
		imageWidth =  image.width();

		console.log(image)
		console.log(imageWidth, imageHeight);
		imageHeight = image.height(),
		imageWidth =  image.width();

			$(window).resize(function(){
		imageHeight = image.height(),
		imageWidth =  image.width();
	});

	$(document).on("mouseover", ".portfolio_item", function(e){
		var that = $(this);	
		that.find('.portfolio_caption').css({'opacity': 1, 'width': imageWidth, 'height': imageHeight});
		e.preventDefault();
	});

	$(document).on("mouseout", ".portfolio_item", function(e){
		var that = $(this);
		that.find('.portfolio_caption').css('opacity', 0);
	});


	
	}, 500);

	if(Modernizr.touch){

		setTimeout(function(){
			$('.portfolio_caption').css('opacity', 0.7);
		}, 1000);	
	};


   	}); // end window.bind-load

	
}());
