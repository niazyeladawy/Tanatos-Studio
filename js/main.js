$(function(){

    'use strict';

    // trigger nice scroll
    $("html").niceScroll(
        {
            cursorcolor:"#F7600E",
            cursorwidth:"10px"
        }
    );

    // change header height
    $("header").height($(window).height());

    // scroll to features
    $(".arrow i").click(function(){
        $("html , body").animate({
            scrollTop: $(".features").offset().top
        },1000)
    })

    // scroll to features
    $(".hire").click(function(){
        $("html , body").animate({
            scrollTop: $(".our-team").offset().top
        },1000)
    })

    // show more
    
        $(".our-work .show-more").on("click",function(){
            $(".our-work .item-box .hidden").slideToggle();
            
            //change text of show more element just for demonstration purposes to this demo
            $(this).text() === 'Show less' ? $(this).text('Show more') : $(this).text('Show less');
        })

    
    // check testimonials
    var leftarrow = $(".testimon .fa-chevron-left"),
        rightarrow = $(".testimon .fa-chevron-right");
        
   function checkClients(){
       
        
        $(".client:first").hasClass("active") ? leftarrow.fadeOut(): leftarrow.fadeIn();
        $(".client:last").hasClass("active") ? rightarrow.fadeOut(): rightarrow.fadeIn();
   }

   checkClients()

   $(".testimon i").click(function(){
        if($(this).hasClass("fa-chevron-right")){

            $(".testimon .active").fadeOut(100,function(){
                
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                checkClients()
            });
        }
        else{
            $(".testimon .active").fadeOut(100,function(){
                
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                checkClients()
            });
        }
    });

    // scroll top
    // show button on scroll
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1500){
            $(".scrolltops .scrolltop").fadeIn();
        }
        else{
            $(".scrolltops .scrolltop").fadeOut();
        }
        
    });

    // scroll to top
    $(".scrolltops .scrolltop").on("click" ,function(){
        $("html,body").animate({scrollTop:0},1000);
    });
    
    
});