$("document").ready(function(){
    $(".h-btn").click(function(){
        $(".h-btn").toggleClass("on");
        $("nav .menu").toggleClass("on");
        
    })
    $("nav .menu").mouseover(function(){
        $(".menu-list").addClass("hover")
        
    })//마우스아웃
    $("nav .menu").mouseout(function(){
        $(".menu-list").removeClass("hover")
    })//마우스오버
    $(".menu-list").mouseover(function(){
        $(".menu-list").addClass("hover")
        
    })//마우스아웃
    $(".menu-list").mouseout(function(){
        $(".menu-list").removeClass("hover")
    })//마우스오버
    
    
    ////////////////////////////////////////////////////////////slick///////////////
    $('.top-slide .slick').slick({
        dots: true,
        autoplay : true,
        infinite: true,
        arrows: true
    });
    $('.book-list .slick').slick({
        dots: true,
        autoplay : true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.gallary-list .slick').slick({
        dots: true,
        autoplay : true,
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
    //////////////////////////////////////////////////////탭//////////////////////////////
    $(".book .tab div").eq(0).addClass("on");
    $(".book-list>div").eq(0).show();
    $(".book .tab div").click(function(){
        var i = $(this).index()
        //console.log(i)
        $(".book .tab div").removeClass("on").eq(i).addClass("on")
        $(".book-list>div").hide().eq(i).show();
        
    })//책 탭
    $(".gallary .tab div").eq(0).addClass("on");
    $(".gallary-list>.slick").eq(0).show();
    $(".gallary .tab div").click(function(){
        var k = $(this).index()
        //console.log(k)
        $(".gallary .tab div").removeClass("on").eq(k).addClass("on")
        $(".gallary-list>.slick").hide().eq(k).show();
        
    })//갤러리 탭
    
    
    
    
    
    
    
})//js end