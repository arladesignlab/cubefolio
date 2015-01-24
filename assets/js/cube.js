$(function() {
  //Variables
  oneSubmenu=true;
  $('.NoMenu').click(function(){
    $('.MainMenu-subMenu').slideUp("fast");
  });
  
  $('.MainMenu-mobileMenu').click(function(event){
    event.preventDefault();
    $('.MainMenu-list').slideToggle("fast");
  });
  $('.MainMenu-item').on("click",function(event){
    event.preventDefault();
    if ($(this).hasClass("active")==true) {
      $('.MainMenu-subMenu').slideUp("fast");
      $(this).removeClass("active");
      oneSubmenu=true;

    }
    else
    {
      if (oneSubmenu==false){
        $('.MainMenu-subMenu').slideUp("fast");
        $('.MainMenu-item').removeClass("active");
        $(this).children('.MainMenu-subMenu').slideDown("fast");
        $(this).addClass("active");

      }
      else
      {
        $(this).addClass("active");
        $(this).children('.MainMenu-subMenu').slideDown("fast");
        oneSubmenu=false;
      }
      
    }
  });
  $('#slides').click(function(){
    $('.MainMenu-subMenu').slideUp("fast");
    var sizeWindow = $(window).width();
    console.log(sizeWindow);
    if (sizeWindow<768){
      $('.MainMenu-list').slideUp("fast");  
    };
  });
  function featuredImages(){ 
    var containers = $('.FeaturedNode-imageContainer');
      for (var i = 0; i < containers.length; i++) {
        var altoContainer = $(containers[i]).height();
        var altoImg = $(containers[i]).children('img').height();
        if (altoImg<altoContainer) {
            console.log("la imagen "+i+" es mas chica que el container")
            var scala= altoContainer/altoImg;
            var margen= (altoContainer-altoImg)/2;
            console.log("se tiene que escalar "+scala+" y el margen de "+margen);
            $(containers[i]).children('.FeaturedNode-image').css("transform","scale("+scala+")");
            $(containers[i]).children('.FeaturedNode-image').css("margin",margen);
            
        };        
      };
    };
  featuredImages();
});