var viewportHeight=$(window).height(),mobileNav=$(".mobile-nav-links"),mobileNavToggle=$("#mobile-nav-toggle"),mainContent=$(".main-content"),hero=$(".hero"),heroHeight=hero.height(),navMenu=$(".navigation"),revealer=$("#revealer"),logo=$(".logo"),footer=$("footer"),overlay=$(".overlay"),loadingImg=overlay.find("img"),copyrightDate=$("#date");(function(){overlay.css({height:viewportHeight});loadingImg.css({top:viewportHeight/2-loadingImg.height()/2,left:$(window).width()/2-loadingImg.width()/2});$(window).bind("load",function(){setTimeout(function(){overlay.fadeOut("slow")},100)})})();(function(){hero.css({height:viewportHeight});mainContent.height()<viewportHeight?mainContent.css({height:viewportHeight+navMenu.height(),top:viewportHeight-footer.height()}):mainContent.css({height:"inherit",top:viewportHeight-footer.height()});logo.css({height:viewportHeight/1.5,top:viewportHeight/8});$(window).resize(function(){viewportHeight=$(window).height();hero.css({height:viewportHeight});logo.css({height:viewportHeight/1.5,top:viewportHeight/8});mainContent.height()<viewportHeight?mainContent.css({height:viewportHeight+50,top:viewportHeight-footer.height()}):mainContent.css({height:"inherit",top:viewportHeight-footer.height()})})})();(function(){mobileNavToggle.click(function(e){e.preventDefault();if(mobileNavToggle.hasClass("mobile-active")){mobileNavToggle.removeClass("mobile-active");mobileNav.slideUp("easeInOutQuart")}else{mobileNavToggle.addClass("mobile-active");mobileNav.slideDown("easeInOutQuart")}})})();(function(){$(window).scroll(function(){$(this).scrollTop()>viewportHeight/5?logo.fadeOut(300):logo.fadeIn(300)})})();(function(){revealer.click(function(e){e.preventDefault();$("html,body").animate({scrollTop:viewportHeight-(navMenu.height()+25)},1400,"easeInOutQuart")})})();(function(){var e=new Date,t=e.getFullYear();copyrightDate.html(t)})();