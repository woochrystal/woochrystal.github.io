$("document").ready(function ( ) {
    $(".nav>ul>li").hover(function (){
        var i=$(this).index();
        $(".nav ul li ol").eq(i).stop().slideToggle();
    })
    //오피셜-공지
    $(".list a").eq(0).addClass("on")
    $(".list a").click(function(){
        $(".list a").removeClass("on")
        $(this).addClass("on");
    })
    
    $(".search").click(function(){
        $(".gnb>ul>li>input").fadeToggle(300)
    })
    
    
    
    
    
})