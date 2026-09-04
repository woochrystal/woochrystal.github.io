$("window").ready(function(){//2018 퍼블리셔 버전
    //부드럽게 화면 보여주기
    //////////////////////////필터/////////////////////////
    var $itemWrap = $(".item-wrap");
    var $filterBtn = $(".menu ul li button");

    $itemWrap.imagesLoaded(function(){
        $itemWrap.isotope({
            itemSelector : ".item",
            filter :'.Front',
            layoutMode: 'vertical'
        })
    })

    $filterBtn.on("click", function(){
        $filterBtn.removeClass("filter");
        $(this).addClass("filter");

        var selector = $(this).attr("data-filter");

        $itemWrap.isotope({
            filter: selector
        });

        $filterBtn.removeClass("c");
        $(this).addClass("c");
    })
    //////////////////////////모달창//////////////////////////
    
    //////////////////////////////////////
    //////////네비/////////////////////
    ///////////////////////////////
    
 
    $(".bar-btn").click(function(){
        $(".bar-btn > span").toggleClass("on");
        $("nav").toggleClass("slide")
         
    })
    
    
})//js end