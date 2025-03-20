// 202503 프론트 포폴 작업파일
window.onload = function() {//다 로드 된 후 실행


    //프로젝트 제목 마우스 띄우기
    var pro_tit = [
        "이로케 가구 쇼핑몰",
        "신라호텔 서울 리뉴얼",
        "조말론 런던 안드로이드 앱",
        "우수정 포트폴리오",
        "GTA5",
        "아디다스 이지부스트 리뉴얼",

        //퍼블리싱 회사 포폴
        "포항청춘센터(2023)",
        "영진전문대학교(2022)", 
        "영진전문대학교 입학홈페이지(2022)",
        "경기도 국민안전체험관(2022)",
        "수성구체육회(2021)",
        "원준 코리아(2021)",
        "국회의원 박수영 홈페이지(2021)",
        "한중대영공업(2020)",
    ];
    //퍼블리싱 컨텐츠
    var pro_cons = document.querySelectorAll('.web-content .content');
    // console.log(Array.from(pro_cons))

    //제목박스
    var mouse_box = document.querySelector('.mouse');

    pro_cons.forEach(function(pro, index){
        // console.log(pro)
        pro.addEventListener('mouseover',function(e){//마우스 올렸을때 이벤트
            var mouseX = e.pageX;//마우스 수평 좌표
            var mouseY = e.pageY;//마우스 수직 좌표

            mouse_box.style.left = (mouseX + 15) + 'px';
            mouse_box.style.top = (mouseY + 15) + 'px';
            mouse_box.innerHTML = pro_tit[index];//index(순서대로) .mouse에 내용 넣기
            mouse_box.style.display = 'block';

        });//mouseover end

        pro.addEventListener('mousemove',function(e){//마우스 움직일때 이벤트
            var mouseX = e.pageX;//마우스 수평 좌표
            var mouseY = e.pageY;//마우스 수직 좌표

            mouse_box.style.left = (mouseX + 15) + 'px';
            mouse_box.style.top = (mouseY + 15) + 'px';
        });
        
        pro.addEventListener('mouseout',function(){//마우스 나갔을때
            mouse_box.style.display = 'none';
        });//mouseover end
    })

    // 스크롤
    // 스크롤 y좌표
    let scrollY = window.scrollY;
    const title01 = document.getElementById('title01');
    
    // console.log(title01)
    const title02 = document.getElementById('title02');
    const title03 = document.getElementById('title03');
    const title04 = document.getElementById('title04');
    window.addEventListener('scroll',function(){
        scrollY = window.scrollY;
        console.log(title01.offsetTop,':',scrollY)
        
    })






    
};
