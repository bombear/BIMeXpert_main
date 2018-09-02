

//setTimeout(function() { mainLoader(); }, 1000);

$(function() {

  setTimeout(function() {
    $("#subTitle").hide();
   $("#starterLogoBackground").addClass("small");
  }, 1000);

  setTimeout(function() {
    $("#starterLogoBackground").hide();
  }, 1300);
});

/*function mainLoader(){
    $("#subTitle").hide(100);
    $("#starterLogoContainer").animate({
      top:"0",
      left: "0",
      margin:"0"
    }, function(){
    });
    $("#starterLogo").animate({
      width:"10%"
    }, function(){
        $("#starterLogoBackground").hide();
    });
}*/

$(function(){
     $("footer").load("./footer/footer.html");
   });


$(function(){
     $("header").load("./menu/mainMenu.html");
   });
   
function atmeretezes(){

      if (window.pageYOffset>10){  
        $('header').addClass("sticky");
        $('logo').addClass("stick");  
      }
      else{
        $('header').removeClass("sticky");
        $('logo').removeClass("stick");
        };
  };


function visszahozas(){
  $(document).ready(function(){
    $(document).mousemove(function(event){  
      var pos=event.clientY;
      if(pos<92){
        $('header').removeClass("sticky");
        };
    });
    });
  };

window.addEventListener('scroll', atmeretezes);
window.addEventListener('mousemove', visszahozas);

