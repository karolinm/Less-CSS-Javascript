//to top button
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn(1000);
		} else {
			$('.scrollToTop').fadeOut(1000);
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});


// jquery content slider

$(document).ready(function(){
  
$(".slide_up").hide();
$("div.slide").hide();
 $(".slide_down").click(function(){
        $("div.slide").slideDown();
        $(".slide_down").hide();
        $(".slide_up").show();
    });    
 $(".slide_up").click(function(){
        $("div.slide").slideUp();
        $(".slide_up").hide();
        $(".slide_down").show();
    });
    
$(".slide_up2").hide();
$("div.slide2").hide();
 $(".slide_down2").click(function(){
        $("div.slide2").slideDown();
        $(".slide_down2").hide();
        $(".slide_up2").show();
    });    
 $(".slide_up2").click(function(){
        $("div.slide2").slideUp();
        $(".slide_up2").hide();
        $(".slide_down2").show();
    });

    $(".slide_up3").hide();
$("div.slide3").hide();
 $(".slide_down3").click(function(){
        $("div.slide3").slideDown();
        $(".slide_down3").hide();
        $(".slide_up3").show();
    });    
 $(".slide_up3").click(function(){
        $("div.slide3").slideUp();
        $(".slide_up3").hide();
        $(".slide_down3").show();
    });

    $(".slide_up4").hide();
$("div.slide4").hide();
 $(".slide_down4").click(function(){
        $("div.slide4").slideDown();
        $(".slide_down4").hide();
        $(".slide_up4").show();
    });    
 $(".slide_up4").click(function(){
        $("div.slide4").slideUp();
        $(".slide_up4").hide();
        $(".slide_down4").show();
    });
     $(".slide_up5").hide();
$("div.slide5").hide();
 $(".slide_down5").click(function(){
        $("div.slide5").slideDown();
        $(".slide_down5").hide();
        $(".slide_up5").show();
    });    
 $(".slide_up5").click(function(){
        $("div.slide5").slideUp();
        $(".slide_up5").hide();
        $(".slide_down5").show();
    });
    $(".slide_up6").hide();
$("div.slide6").hide();
 $(".slide_down6").click(function(){
        $("div.slide6").slideDown();
        $(".slide_down6").hide();
        $(".slide_up6").show();
    });    
 $(".slide_up6").click(function(){
        $("div.slide6").slideUp();
        $(".slide_up6").hide();
        $(".slide_down6").show();
    });
     $(".slide_up7").hide();
$("div.slide7").hide();
 $(".slide_down7").click(function(){
        $("div.slide7").slideDown();
        $(".slide_down7").hide();
        $(".slide_up7").show();
    });    
 $(".slide_up7").click(function(){
        $("div.slide7").slideUp();
        $(".slide_up7").hide();
        $(".slide_down7").show();
    });
     $(".slide_up8").hide();
$("div.slide8").hide();
 $(".slide_down8").click(function(){
        $("div.slide8").slideDown();
        $(".slide_down8").hide();
        $(".slide_up8").show();
    });    
 $(".slide_up8").click(function(){
        $("div.slide8").slideUp();
        $(".slide_up8").hide();
        $(".slide_down8").show();
    });
     $(".slide_up9").hide();
$("div.slide9").hide();
 $(".slide_down9").click(function(){
        $("div.slide9").slideDown();
        $(".slide_down9").hide();
        $(".slide_up9").show();
    });    
 $(".slide_up9").click(function(){
        $("div.slide9").slideUp();
        $(".slide_up9").hide();
        $(".slide_down9").show();
    });
    $(".slide_up10").hide();
$("div.slide10").hide();
 $(".slide_down10").click(function(){
        $("div.slide10").slideDown();
        $(".slide_down10").hide();
        $(".slide_up10").show();
    });    
 $(".slide_up10").click(function(){
        $("div.slide10").slideUp();
        $(".slide_up10").hide();
        $(".slide_down10").show();
    });
  $(".slide_up11").hide();
$("div.slide11").hide();
 $(".slide_down11").click(function(){
        $("div.slide11").slideDown();
        $(".slide_down11").hide();
        $(".slide_up11").show();
    });    
 $(".slide_up11").click(function(){
        $("div.slide11").slideUp();
        $(".slide_up11").hide();
        $(".slide_down11").show();
    });
  $(".slide_up12").hide();
$("div.slide12").hide();
 $(".slide_down12").click(function(){
        $("div.slide12").slideDown();
        $(".slide_down12").hide();
        $(".slide_up12").show();
    });    
 $(".slide_up12").click(function(){
        $("div.slide12").slideUp();
        $(".slide_up12").hide();
        $(".slide_down12").show();
    });


    $(".slide_uplang").hide();
$("div.slidelang").hide();
 $(".slide_downlang").click(function(){
        $("div.slidelang").slideDown();
        $(".slide_downlang").hide();
        $(".slide_uplang").show();
    });    
 $(".slide_uplang").click(function(){
        $("div.slidelang").slideUp();
        $(".slide_uplang").hide();
        $(".slide_downlang").show();
    });
    
$(".slide_upmobile").hide();
$("div.slidemobile").hide();
 $(".slide_downmobile").click(function(){
        $("div.slidemobile").slideDown();
        $(".slide_downmobile").hide();
        $(".slide_upmobile").show();
    });    
 $(".slide_upmobile").click(function(){
        $("div.slidemobile").slideUp();
        $(".slide_upmobile").hide();
        $(".slide_downmobile").show();
    });
});

// Anchor links with spacing in top

 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
&& location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 330 //offsets for fixed header
        }, 1000);
        return false;
      }
    }
  });
  //Executed on page load with URL containing an anchor tag.
  if($(location.href.split("#")[1])) {
      var target = $('#'+location.href.split("#")[1]);
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 330 //offset height of header here too.
        }, 1000);
        return false;
      }
    }
});

//Counter-up

jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 50,
                time: 5000
            });
        });


