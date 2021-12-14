$(document).ready(function(){ //START

  $(document).scroll(function(){

    var st = $(this).scrollTop();
    var aa = $(".visual01").offset().top - 200;
    var bb = $(".visual02").offset().top - 200;
    var cc = $(".product").offset().top - 800;

    if(st > aa && st <= bb){
      $(".v_txt_box01").addClass("view posi")
    }else{
      $(".v_txt_box01").removeClass("view posi")
    }
    if(st > bb){
      $(".v_txt_box02").addClass("view posi")
    }else{
      $(".v_txt_box02").removeClass("view posi")
    }if(st > cc){
      $(".product fieldset").addClass("view posi")
    }else{
      $(".product fieldset").removeClass("view posi")
    }

  })//scroll


$("header .menu .btn_menu").click(function(){
  $("header .menu nav").stop().slideDown();
});





}); //END