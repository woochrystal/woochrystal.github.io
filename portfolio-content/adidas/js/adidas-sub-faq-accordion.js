$("document").ready(function(){
    
    $(".thema li.q").eq(0).addClass("p")
    $(".thema li.a").eq(0).show()
   $(".thema li.q").click(function(){
       $(this).next().slideToggle(500).siblings(".thema li.a").slideUp(500);
       $(".thema li.q").removeClass("p")
       $(this).toggleClass("p")
       
   })
    $(".thema li.q").eq(0).removeClass("p")
    
});//js end 