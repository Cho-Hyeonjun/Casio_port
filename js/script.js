$(document).ready(function(){ //START


  $(".btn_lang, .h_btn ul").mouseover(function(){
    $(".h_btn ul").stop().slideDown();
  });
  $(".btn_lang, .h_btn ul").mouseout(function(){
    $(".h_btn ul").stop().slideUp();
  });

  $(".btn_h_search, header .search fieldset").mouseover(function(){
    $("header .search fieldset").stop().show();
  });
  $(".btn_h_search, .search fieldset").mouseout(function(){
    $("header .search fieldset").stop().hide();
  });

  
  $("footer .all_bar button.opne").click(function(){
    $(".all_menu").stop().css({"height":"415px", "top":"-415px"});
  });
  $("footer .all_bar button.close").click(function(){
    $(".all_menu").stop().css({"height":"0",  "top":"0"});
  });





}); //END