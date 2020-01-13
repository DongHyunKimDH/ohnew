$(document).ready(function () {
  $(window).on('resize', function () {
    var winHei = $(this).height();

    //top_visual 높이 지정
    $('#content .main-topvisual').css('height', winHei); 
  });
  $(window).trigger('resize');

  $(window).on('scroll', function () {
    var scrollT = $(this).scrollTop();

    if (scrollT > $('.main-banner').offset().top - 500) $('.main-banner').addClass('on');
  });
    //터치 슬라이더 여러개 사용시 선택자에 부모 추가
    var mySwiper1 = new Swiper ('.consulting .swiper-container', {
      // 필요 옵션 추가
      // direction: 'horizontal(기본값)', 'vertical'
      // loop: false(기본값), true / 처음 마지막 무한롤링
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction', // bullets(동그라미아이콘), fraction(현재 / 전체)
        clickable : true, // 인디케이터 클릭시 슬라이더 이동
      },
    });
    var mySwiper2 = new Swiper('.casestudy .swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      spaceBetween: 10, // slider 사이 공간
      centeredSlides: true,
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
      firstSlideMessage : '첫번째 슬라이드',
      lastSlideMessage : '마지막 슬라이드',
      slidesPerView: 'auto' // 한 화면에서 보여질 슬라이드 개수 기본값(1)
      
    });

});