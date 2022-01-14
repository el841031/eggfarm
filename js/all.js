$(document).ready(function () {

  // 下拉式選單
  $('.li-one').hover(function () {
    $('.item-open').fadeToggle(200);
    }
  );

  // 點選選單變色 (告訴使用者目前位置)
  $('.nav-item-a').click(function (e) {
    e.preventDefault(); 
    $(this).addClass('active');
    $(this).parent().siblings().find('.nav-item-a').removeClass('active');
  });
  

  // 漢堡選單
  $('.hamburger').click(function () {
    $(this).toggleClass("is-active");
    $('.ham-nav').toggleClass("open");
  }); 


  // top按鈕
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 400 ){
      $('.top').fadeIn(200);
    } else {
      $('.top').fadeOut(0);
    }
  });

  $('.top').click(function () { 
    $('html, body').animate({scrollTop: 0}, 600); 
  });

  

  // (Swiper 套件)
  // banner-01
  new Swiper('#swiper1', {
    loop: true,
    speed: 2500, 
    autoplay: { 
      delay: 4000,
      disableOnInteraction: false, // 滑鼠滑動過後也能自動切換照片
    },
    effect: 'fade',
  
    // 小圓點
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // banner-02
  new Swiper('#swiper2', {
    loop: true,
    speed: 2500, 
    autoplay: { 
      delay: 5000,
      disableOnInteraction: false,
    },
  
    // 小圓點
    pagination: {
      el: '.swiper-pagination',
    },
  });



  // (Lightbox 2 套件)
  lightbox.option({
		'resizeDuration': 600, // 放大的速度
    'wrapAround': true,
    'disableScrolling': true,
    'alwaysShowNavOnTouchDevices': true,
    // 'positionFromTop': 250,
  })

  let scrollWidth = document.documentElement.scrollWidth;
  if(scrollWidth <= 576){
    lightbox.option({
      'positionFromTop': 250,
    })
  }else if(scrollWidth > 576 && scrollWidth <= 992){
    lightbox.option({
      'positionFromTop': 150,
    })
  }else if(scrollWidth > 992 && scrollWidth <= 1200){
    lightbox.option({
      'positionFromTop': 100,
    })
  }else{
    lightbox.option({
      'positionFromTop': 50,
    })
  }


  // (AOS套件)
  AOS.init({
    duration: 1000,
    once: true,
  })

});
