$("window").ready(function(){//2018 퍼블리셔 버전
    //부드럽게 화면 보여주기
    //////////////////////////필터/////////////////////////
    $(".item-wrap").imagesLoaded(function(){
        $(".item-wrap").isotope({
            itemSelector : ".item",
            filter :'.Front',
            layoutMode: 'vertical'
        }) 
    }) 

    $(".menu ul li").on("click", function(){
        $(".menu ul li").removeClass("filter");
        $(this).addClass("filter")
        var selector = $(this).attr("data-filter");
        $(".item-wrap").isotope({
            filter :selector
        })
        $(".menu ul li").removeClass("c");
        $(this).toggleClass("c");
    })
    //////////////////////////모달창//////////////////////////
    
    //////////////////////////////////////
    //////////네비/////////////////////
    ///////////////////////////////
    
 
    $(".bar-btn").click(function(){
        $(".bar-btn>div").toggleClass("on");
        $("nav").toggleClass("slide")
         
    })
    
    
})//js end