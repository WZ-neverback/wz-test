$(window).scroll(function(){
    var scrollT =document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollT);
    var jrTop =$(".jr").offset().top -$(window).height()/1.5;
    var oneTop =$("#one").offset().top -$(window).height()/4;
    var backTop =$("#two").offset().top -$(window).height()/2;
    // console.log(backTop);
    // console.log(oneTop);
    // console.log(jrTop);
    if(scrollT>backTop){
        $(".th").addClass("animated slideInLeft show").removeClass("fade")
        $(".geo").addClass("animated slideInRight show").removeClass("fade")
    }
    if(scrollT>jrTop){
        $(".fi").addClass("animated bounceInUp show").removeClass("fade")
    }
    if(scrollT>oneTop){
        $(".se").addClass("animated bounceInUp show").removeClass("fade")
    }
});


window.onload=function(){
    $(".map").addClass("animated slideInRight show").removeClass("fade")
    $(".jr").addClass("animated slideInLeft show").removeClass("fade")
    $(".up").addClass("animated bounceInUp show").removeClass("fade")
            var totop=document.getElementById("fh");
            totop.style.display="none";
            var time=null;
            totop.onclick=function(){
            time=setInterval(function(){
            var backTop=document.documentElement.scrollTop||document.body.scrollTop;
            document.documentElement.scrollTop-=100;
            var speedTop=backTop/5;
            document.documentElement.scrollTop=backTop-speedTop;
            if(backTop==0){
                clearInterval(time);
            }
            },30);
        }
        
        window.onscroll=function(){
            var backTop=document.documentElement.scrollTop||document.body.scrollTop;
            if(backTop<500){
                totop.style.display="none";
            }else totop.style.display="block";
        }};