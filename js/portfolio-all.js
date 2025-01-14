$("window").ready(function(){
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
    
    
        //////////////////////////필터/////////////////////////
    $(".item-wrap").imagesLoaded(function(){

        $(".item-wrap").isotope({
            itemSelector : ".item"
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
     
       var offset =[];
    for (var i = 0; i < $(".part").length; i++){
        offset.push($(".part").eq(i).offset().top)
        console.log(offset)
    }
    
       $(window).resize(function(){
        offset = [];
        for (i = 0; i < $(".part").length; i++){
        offset.push($(".part").eq(i).offset().top)
        console.log(offset)
    }
    })
    
    
    $(".indicator ul li").eq(0).addClass("one");
    
        $(window).scroll(function(){
        var pos = $(window).scrollTop();
             
      
            
        if(pos > offset[0] && pos < offset[1]){
            $("nav ul li a").removeClass("one").eq(0).addClass("one")
            $(".indicator ul li").removeClass("one").eq(1).addClass("one");
            console.log(offset[1], pos)
        }
            else if(pos >= offset[1] && pos < offset[2]){
                $("nav ul li a").removeClass("one").eq(1).addClass("one")
              $(".indicator ul li").removeClass("one").eq(2).addClass("one");
        }else if(pos >= offset[2] && pos < offset[3]){
            $("nav ul li a").removeClass("one").eq(2).addClass("one")
              $(".indicator ul li").removeClass("one").eq(3).addClass("one");
        }else if(pos >= offset[3]-10){
            $("nav ul li a").removeClass("one").eq(3).addClass("one")
                 $(".indicator ul li").removeClass("one").eq(4).addClass("one");
                 }else{
                     $("nav ul li a").removeClass("one").eq(0).addClass("one")
            $(".indicator ul li").removeClass("one").eq(0).addClass("one");
        } 
            
         
    })     
        $("header nav li").click(function(){
        var k = $(this).index();
        $("html,body").stop().animate({
            scrollTop : offset[k]+20
        },1000)
        
    })
            $(".indicator ul li").click(function(){
        var k = $(this).index();
        $("html,body").stop().animate({
            scrollTop : offset[k - 1]+20
        },1200)
        
    })
        $(".indicator ul li").eq(0).click(function(){
            $("html,body").stop().animate({
                scrollTop : 0
                
            },1200)
            
            
        })
    $("section").click(function(){
        $(".bar-btn>div").removeClass("on");
        $("nav").removeClass("slide")
        
    })
    
 
    $(".bar-btn").click(function(){
        $(".bar-btn>div").toggleClass("on");
        $("nav").show().toggleClass("slide")
         
    })
     
    
    //////////프로그레스바//////////////
    //////////////////////////////////
    var bar1 = new ProgressBar.Circle("#pro1",{
        // progressbar 를 적용할 div id 값을 입력 + 종류를 선택
        // line - circle - semicircle
        strokeWidth: 10, // 채워지는 선의 굵기
        easing: "easeInOut", // 값이 채워지는 애니메이션 속도
        duration: 1400, // 총 진행시간(예제는 1.4초)
        color: "#004FFF", // 채워지는 선의 색상
        trailWidth: 10, // 배경 선의 굵기
        trailColor: "#e5e5e5", // 배경 선의 색상
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")}
    })
    bar1.animate(0.85)
    
        var bar2 = new ProgressBar.Circle("#pro2",{
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 1400, 
        color: "#004FFF", 
        trailWidth: 10, 
        trailColor: "#e5e5e5", 
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")}
    })
    bar2.animate(0.9)
    
        var bar3 = new ProgressBar.Circle("#pro3",{
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 1400, 
        color: "#004FFF", 
        trailWidth: 10, 
        trailColor: "#e5e5e5", 
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")}
    })
    bar3.animate(0.8)
    
        var bar4 = new ProgressBar.Circle("#pro4",{
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 1400, 
        color: "#004FFF", 
        trailWidth: 10, 
        trailColor: "#e5e5e5", 
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")}
    })
    bar4.animate(0.85)
    
        var bar5 = new ProgressBar.Circle("#pro5",{
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 1400, 
        color: "#004FFF", 
        trailWidth: 10, 
        trailColor: "#e5e5e5", 
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")}
    })
    bar5.animate(0.7)
    
        var bar6 = new ProgressBar.Circle("#pro6",{
        strokeWidth: 10,
        easing: "easeInOut",
        duration: 1400, 
        color: "#004FFF", 
        trailWidth: 10, 
        trailColor: "#e5e5e5", 
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")}
    })
    bar6.animate(0.98)
    
        $(window).scroll(function(){
        var pos = $(window).scrollTop()
        if(pos >= 5500){
            $(".progress").fadeIn(500)
        }
    })
    

    
    $(".close").click(function(){
        $(".aw-modal").fadeOut(300)
        $(".pf-modal").fadeOut(300)
        $('body').css("overflow", "scroll");
    })
    $(".content").click(function(){
        var t = $(this).index()
        $(".pf-modal").eq(t).fadeIn(300)
        $('body').css("overflow", "hidden");
    })
    $(".item").click(function(){
        var t = $(this).index()
        $(".aw-modal").eq(t).fadeIn(300)
        $('body').css("overflow", "hidden");
        $(".twentytwenty-container").twentytwenty({
				default_offset_pct: 0.5
			});
    })
    
     

    var content_txt = [
        "아디다스 이지부스트 리뉴얼 사이트",
        "GTA5 원프레임 반응형 사이트",
        "옹성우 홍보 사이트 부트스트랩",
        "우수정 포트폴리오 반응형 사이트",
        "국립생태원 메인화면 리뉴얼",
        "대림미술관 풀페이지 사이트 (준비중)"
    ]
    $(".web-content .content").mouseover(function(){
        if($( window ).width() < 1280) {
            $('.mouse').hide();
        }else{
            $('.mouse').show();
        }
    var C_list = $(".web-content .content").index(this);
        
        
        
    $(document).mousemove(function(e){
         mouseX = e.pageX;
        mouseY = e.pageY;
      $('.mouse').css("left", mouseX+15).css("top", mouseY+15).html(content_txt[C_list]);
    })
    })
    $(".web-content .content").mouseout(function(){
        $('.mouse').hide();
    })
    
    //비교슬라이드

      
    
    
    
    
    
  
    
    
    $(".phone-body").mouseover(function(){
        $(this).stop().animate({
            scrollTop: $(".phone-body").height() * 5
        }, 5000, "linear")
    })
    $(".phone-body").mouseout(function(){
        $(this).stop().animate({
            scrollTop: 0
        })
    })
    
    
    
    
    
    
    
})//js end