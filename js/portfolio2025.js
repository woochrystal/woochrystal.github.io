// 202503 프론트 포폴 작업파일


//프로젝트 제목 마우스 띄우기
//퍼블리싱 제목명
var pub_tit = [
    "아디다스 이지부스트 리뉴얼 사이트",
    "GTA5 원프레임 반응형 사이트",
    "옹성우 홍보 사이트 부트스트랩",
    "우수정 포트폴리오 반응형 사이트",
];
//퍼블리싱 컨텐츠
var pub_cons = document.querySelectorAll('.web-content .content');

//제목박스
var mouse_box = document.querySelector('.mouse');

pub_cons.forEach(function(pub, index){
    pub.addEventListener('mouseover',function(){//마우스 올렸을때 이벤트
        console.log(index)

        document.addEventListener('mousemove', function (e){//mouseover 이벤트가 발생했을때
            var mouseX = e.pageX;//마우스 수평 좌표
            var mouseY = e.pageY;//마우스 수직 좌표

            mouse_box.style.left = (mouseX + 15) + 'px'; //left: 15px
            mouse_box.style.top = (mouseY + 15) + 'px'; //left: 15px
            mouse_box.innerHTML = pub_tit[index];//index(순서대로) .mouse에 내용 넣기
            mouse_box.style.display = 'block';
        });

    });//mouseover end
    
    pub.addEventListener('mouseout',function(){//마우스 나갔을때
        mouse_box.style.display = 'none';
    });//mouseover end
})

