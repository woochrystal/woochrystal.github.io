// 202503 프론트 포폴 작업파일
document.addEventListener('DOMContentLoaded', function() {//다 로드 된 후 실행


    //프로젝트 제목 마우스 띄우기
    var pro_tit = [
        "이로케 가구 쇼핑몰",
        "신라호텔 서울 리뉴얼",
        "조말론 런던 안드로이드 앱",
        "우수정 포트폴리오 ver_2",
        "우수정 포트폴리오 ver_1",
        "GTA5",
        "아디다스 이지부스트 리뉴얼",

        //퍼블리싱 회사 포폴
        "포항청춘센터(2023)",
        "영진전문대학교(2022)", 
        "영진전문대학교 입학홈페이지(2022)",
        "경기도 국민안전체험관(2022)",
        "경북관광공사(2021)",
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

    

    // 웹네비 높이값
    var web_nav = document.querySelector('.web_nav');
    var w_nav_height = web_nav.offsetHeight;

    function navScroll(title){
        const section_tit = document.getElementById(title);//title의 위치에 원하는 id값
        var title_top = section_tit.offsetTop;
        var fin_top = title_top - w_nav_height

        // console.log('top', section_tit.offsetTop)
        window.scrollTo({
            top: fin_top,// 타겟 섹션 + 네비높이값
            behavior: 'smooth'//부드럽게 스크롤
        });
    }

    var nav_link = document.querySelectorAll('nav a');
    nav_link.forEach(link => {
        link.addEventListener('click',function(e){
            e.preventDefault();//링크이동 제거
            var getId = this.getAttribute('data-title');
            navScroll(getId);//클릭한 data-title값으로 이동
        })
        
    });

    // 스크롤
    const sections = document.querySelectorAll('#title01, #title02, #title03, #title04');
    
    // 스크롤 y좌표
    function uav_under(){
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;

        sections.forEach((section, index)=>{
            const sectionTop = section.offsetTop;//각 영역 상단위치
            const sectionBottom = sectionTop + section.offsetHeight; //상단+하단값(스크롤위치)

            //현재 스크롤 위치가 섹션의 상단과 하단 사이에 있을 때(영역안)
            if (scrollY <= sectionTop && scrollY + windowHeight > sectionTop && scrollY < sectionBottom) {
                nav_link.forEach(link => link.classList.remove('one'));
                nav_link[index].classList.add('one');
            }
            if (scrollY == 0) {
                nav_link.forEach(link => link.classList.remove('one')); //클래스 제거
            }
        })
    }

    window.addEventListener('scroll', uav_under);
    window.addEventListener('load', uav_under);
    uav_under();

    // 상세정보
    function infoClick(){
        const proBtn = document.querySelector('.profile_btn');
        const proTxt = document.querySelector('.profile-txt');

        proBtn.addEventListener('click',function(){
            if(!proBtn.classList.contains('on')){//on 클래스가 있는지 확인(없을때)
                proBtn.classList.add('on');
                proTxt.classList.add('active');
            }else{
                proBtn.classList.remove('on');
                proTxt.classList.remove('active');
            }
        })

    }

    infoClick()





    
});
