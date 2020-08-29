$(window).scroll(function(){
    var scrollT =document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollT);
    var wz =$("#two").offset().top -$(window).height()/2;
    var cul =$("#fin").offset().top -$(window).height()/1.2;
    if(scrollT>wz){
        $(".mz").addClass("animated bounceInUp show").removeClass("fade")
    }
    if(scrollT>cul){
        $(".final").addClass("animated slideInRight show").removeClass("fade")
        $(".ff").addClass("animated slideInLeft show").removeClass("fade")
    }
});
window.onload=function(){
    $(".map").addClass("animated slideInRight show").removeClass("fade")
    $(".jr").addClass("animated slideInLeft show").removeClass("fade")
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