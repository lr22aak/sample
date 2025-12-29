jQuery(function($) {
    $(document).ready( function() {

	// tab fucnctionality for all items
       $('.tabs-menu li').click(function() {
            var tab_id = $(this).attr('data-tab');
            $('.tabs-menu li').removeClass('active');
            $('.tab-data').removeClass('active');
            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
        });


    // articles slider fucnctionality
        $('.artcls .artcls_content').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.muliple_artcls ul',
		  autoplay: true,
		  autoplaySpeed: 1500,
		  arrows: false,
		  adaptiveHeight: true
		});

		$('.muliple_artcls ul').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.artcls .artcls_content',
		  dots: false,
		  focusOnSelect: true,
		  vertical: true,
		  arrows: false,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		  		vertical: false,
		      }
		    }
		  ]
		});


	// impressive section slider fucnctionality
		$('.impressive_tip .tips_slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  nav: false,
		  dots: true,
		  autoplay: true,
		  adaptiveHeight: true,
		  autoplaySpeed: 2000
		});


	// banner slider 
		$('.banner .slider').slick({
		  dots: true,
		  nav: false,
		  infinite: true,
		  speed: 1000,
		  fade: true,
		  cssEase: 'linear',
		  autoplay: true,
		  autoplaySpeed: 1800,
		  arrows: false
		});


	// partners slider
		$('.partners_content ul').slick({
		  dots: false,
		  nav: false,
		  infinite: true,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  slidesToShow: 5,
		  slidesToScroll: 2,
		  responsive: [
		    {
		    	breakpoint: 980,
		      	settings: {
		  		slidesToShow: 4,
		  		slidesToScroll: 2,
		      }
		  	},
		  	{
		    	breakpoint: 768,
		      	settings: {
		  		slidesToShow: 3,
		  		slidesToScroll: 2,
		      }
		  	},
		  	{
		      	breakpoint: 480,
		      	settings: {
		  		slidesToShow: 2,
		  		slidesToScroll: 1,
		      }
		    }
		  ]
		});


    // testimonials slider fucnctionality
		$('.testimonial .testi_content-slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.testimonial ul',
		  autoplay: false,
		  arrows: false,
		  autoplaySpeed: 2000,
		  adaptiveHeight: true
		});

		$('.testimonial ul').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.testimonial .testi_content-slider',
		  dots: false,
		  arrows: false,
		  focusOnSelect: true
		});

	// mobile menu btn
		$(".menu_btn").click(function(){
            $(".banner_menu .banner_menu-content").slideToggle();
            $(this).toggleClass("change");
        });

	// have any quesions section fucnctionality
		$(".accdn_content h3").on('click', function() {
		    $('.accdn_value').not($(this).next('.accdn_value')).slideUp();
		    $(this).next('.accdn_value').slideToggle();
		    $(this).parent(".accdn_content").toggleClass("down").siblings().removeClass('down');
		});

	// fixed navbar
		var myDiv = document.getElementById('header'); //get #myDiv
		var height = myDiv.clientHeight;
		$(window).on("scroll", function() {
	        if($(window).scrollTop() > height - 200) {
	          $(".header").addClass("stycky_header");
	        } else {
	           $(".header").removeClass("stycky_header");
	        }
	    });

	// menu on click functionality
		// $('a[href*=\\#]').on('click', function(event){     
		//     event.preventDefault();
		//     $('html,body').animate({scrollTop:$(this.hash).offset().top - 70}, 1000);
		//     $(this).parent("li").addClass("active").siblings().removeClass("active");
		// });


	// pop-up tab functionlaity
		$('.image_details').click(function() {
            var tab_id = $(this).attr('data-tab');
            $('.image_details').removeClass('active');
            $('.tab-data').removeClass('active');
            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
            $('body').css('overflow','hidden');
        });

        $('.pop-cls').click(function() {
            $('.tab-data').removeClass('active');
            $('.our_team_detailed-content').removeClass('active');
            $('body').css('overflow','auto');
        })


    });
});