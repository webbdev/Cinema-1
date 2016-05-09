// Keep parent menu item highlighted when hovering over submenu

$(document).ready(function () {
  var $nav = $('.dropdown-menu > li');
	$nav.hover(
	  function() {
        $(this).children('a').addClass('hovered');
	  },
	  function() {
        $(this).children('a').removeClass('hovered');
	  }
	);
});

// Search bar
$(document).ready(function(){
  $("#searchBtnOpen").click(function(){
    $("#nav-search").slideToggle("2000");
  });
      
  $(".closebtn").click(function(){
    $("#nav-search").slideUp("2000");
  });

});


// Settings' submenu 
var flagswap=0;
$(document).ready(function () {
  $('.sett').click(function() {
	if(flagswap==0) {
	  $('#myNav').animate({marginRight:0},500);
	  $('.settings').css("background-color", "#343434");
	  flagswap=1;

	} else {
	  $('.settings').css("background-color", "#434343"); 
	  $('#myNav').animate({marginRight:'-230px'},500);
	  flagswap=0;
	}
  });  
});


// Left sidebar menu 
var fl=0;
$(document).ready(function () {
  $('.navbar-toggle').click(function() {
	if(fl==0) {
	  $('#myLeftMenu').animate({marginLeft:0},500);
	  $('.navbar-toggle').css("background-color", "#343434");
	  fl=1;

	} else {
	  $('.navbar-toggle').css("background-color", "#434343");
	  $('#myLeftMenu').animate({marginLeft:'-230px'},500);
	  fl=0;
	}
  });


  	// Change icons on collapse

    // Change arrow icon on click 
    $("#dashboard").on('click', function () {
        $("#dashboard .icon").toggleClass("icon ion-arrow-down-b icon ion-arrow-up-b");
    });

    // Change angle icon on click 
    $("#campaigns").on('click', function () {
        $("#campaigns .fa").toggleClass("fa fa-angle-right fa fa-angle-down");
    });

});


