$("document").ready(function(){
    //부드럽게 화면 보여주기
    $("body").css("display", "none");
 
    $("body").fadeIn(2000);
     
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);     
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
    
    var offset =[];
    setTimeout(function(){
        
    for (var i = 0; i < $(".section").length; i++){
        offset.push($(".section").eq(i).offset().top)
        console.log(offset)
    }
    },100)
    $(window).resize(function(){
        offset = [];
        for (var i = 0; i < $(".section").length; i++){
        offset.push($(".section").eq(i).offset().top)
        console.log(offset)
    }
    }) 
    $(".top .img-wrap").addClass("delete");
    //헤더이미지 없애기
    $(".bar-btn").click(function(){
        $(".bar-btn").toggleClass("on");
        $("nav").toggleClass("slide");
    })//햄버거+네비 설정   
    
    $(window).scroll(function(){
        var pos = $(window).scrollTop();
        console.log(pos);
        if(pos>=600){
            $(".header-bg").addClass("fixed");
        }else{
            $(".header-bg").removeClass("fixed");
        }
        $("header li").removeClass("one")
        
         if(pos>= offset[0]&&  pos < offset[1]){
            $("header li").eq(0).addClass("one")
        }else if(pos>= offset [1]&&  pos < offset[2]){
         $("header li").eq(1).addClass("one")
        }else if(pos>= offset [2] &&  pos < offset[3]){
             $("header li").eq(2).addClass("one")
        }else if(pos>= offset [3]){
                $("header li").eq(3).addClass("one")
        }
         
    })//네비 상단고정+헤더밑줄 변화 section3까지
    $(".top nav ul li").click(function(){
        var i = $(this).index();
        $("window, body").stop().animate({
            
        })
    })//네비클릭시 이동 
    
    
    
    
    
     


    
    
        
    $("nav ul li").click(function(){
        var k = $(this).index();
        $("html,body").stop().animate({
            scrollTop : offset[k]
        },1000)
        
    })
    
    
    //네비 스크롤 이동
    
    
    var $tab_content = $(".modal"),
        $tab_list = $(".profile .wrap");
    
        $tab_list.eq(0).addClass("f")
        $tab_content.eq(0).show()

    $tab_list.on("click", function(){
        var i = $(this).index();
        $tab_list.removeClass("f").eq(i).addClass("f")
        $tab_content.hide().eq(i).show();
    })
    

  
        
    
    
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
})//js end