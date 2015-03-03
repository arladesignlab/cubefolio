$(function() {
  //Variables
  oneSubmenu=true;
  $('.MainMenu-mobileMenu').click(function(event){
    event.preventDefault();
    $('.MainMenu-list').slideToggle("fast");
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
    var altoContainer = $('.FeaturedNode-imageContainer').width()*0.612;
    $('.FeaturedNode-imageContainer').css('height',altoContainer);
      for (var i = 0; i < containers.length; i++) {
        var altoImg = $(containers[i]).children('.FeaturedNode-image').height();
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
    $(window).resize(function(){
      var altoContainer = $('.FeaturedNode-imageContainer').width()*0.612;
      $('.FeaturedNode-imageContainer').css('height',altoContainer);
      $('.FeaturedNode-imageContainer').children('.FeaturedNode-image').css("height",altoContainer);

    });
  featuredImages();
});
