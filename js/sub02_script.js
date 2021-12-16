$(document).ready(function(){ //START


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {

    1280: {
      slidesPerView: 3,
      spaceBetween: 30
    }
    }
  });

  





  startWidth();
  resonsiveWidth();

  function startWidth(){
 
    win = $(window).width();
    if (win < 1280) {
      mobileBox();
    } else {
      pcBox();
    }
  }

  function resonsiveWidth() {
    
    var win = $(window).width();
    var timer = null;
    var sec = 0;
    $(window).on('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        win = $(window).width();
        if (win < 1280) {
          mobileBox();
        } else {
          pcBox();
        }
        }, sec);
      });
    }


  function mobileBox() {
    console.log("m");
    $(".helfBtn ul").show();

    $(".helfBtn").mouseover(function(){
      $(this).children("ul").stop().show();
      $(this).removeClass("on")
    });
    $(".helfBtn").mouseout(function(){
      $(".helfBtn").children("ul").stop().show();
      $(".helfBtn").removeClass("on")
    });
    $(".sub02_visual .helf li").css({"margin-bottom":"10px"}) 
  }

  function pcBox() {
    console.log("pc");
    // PC에서 실행 내용
    $(".helfBtn ul").hide();

    $(".helfBtn").mouseover(function(){
      $(this).find("ul").stop().slideDown();
      $(this).addClass("on")
    });
    $(".helfBtn").mouseout(function(){
      $(this).find("ul").stop().slideUp();
      $(this).removeClass("on")
    });
  }


}) //END