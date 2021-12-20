$(document).ready(function(){ //START


  $(".btn_lang, .h_btn ul").click(function(){
    $(".h_btn ul").stop().slideDown();
  });
  $(".btn_lang, .h_btn ul").mouseover(function(){
    $(".h_btn ul").stop().slideDouw();
  });
  $(".btn_lang, .h_btn ul").mouseout(function(){
    $(".h_btn ul").stop().slideUp();
  });


  startWidth();

  function startWidth(){
    win = $(window).width();
    if (win < 780) {
      mobileBox();
    } else {
      pcBox();
    }
  }

  

  function mobileBox() { // mobile start
    // 모바일에서 실행 내용

  $("header .menu .btn_menu").click(function(){
    $("header .menu nav").stop().slideDown();
  });
  $("header .menu .btn_menu").mouseleave(function(){
    $("header .menu nav").stop().slideUp();
  });
  
  } //mobile end

  function pcBox() { // PC start
    // PC에서 실행 내용
  } // PC end

  $(".btn_h_search, .h_search fieldset").mouseover(function(){
    $("header .h_search fieldset").stop().show();
  });
  $(".btn_h_search, .h_search fieldset").mouseout(function(){
    $("header .h_search fieldset").stop().hide();
  });


  $("footer .all_bar button.opne").click(function(){
    $(".all_menu").stop().css({"height":"415px", "top":"-415px"});
  });
  $("footer .all_bar button.close").click(function(){
    $(".all_menu").stop().css({"height":"0",  "top":"0"});
  });





}); //END