var swiper = new Swiper('.swiper-container', {

        pagination: '.swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        effect: 'coverflow',/* effect: 'flip','coverflow',
        slide', 'fade',cube*/
        paginationClickable: true,/*点击下一页切换到下一页*/
        direction: 'horizontal',
        /*vertical是上下滑动，horizontal是左右滑动*/
        autoplay: 4000,/*下一页时间*/
        loop: true,/*循环播放*/
        speed: 1000,
      
        grabCursor: true,
        // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        // 操作包括触碰，拖动，点击pagination等。
        autoplayDisableOnInteraction:false,
    });
window.onload=function(){
    $(".up").addClass("animated fadeInUpBig show").removeClass("fade")
    $(".down").addClass("animated fadeInDownBig show").removeClass("fade")
};


