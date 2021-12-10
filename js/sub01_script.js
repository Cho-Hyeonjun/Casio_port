$(document).ready(function(){ //START


  
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true
  });//Swiper

  $("#sub_container .sub_prod .tab_tit li").click(function(){
    event.preventDefault();
    var idx = $(this).index();

    $("#sub_container .sub_prod .tab_tit li").removeClass("on");
    $(this).addClass("on");

    $(".tab_con > div").removeClass("on");
    $(".tab_con > div").eq(idx).addClass("on");

  });//tab click





}); //END