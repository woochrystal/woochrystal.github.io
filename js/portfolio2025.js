// 202503 프론트 포폴 작업파일
window.onload = function() {//다 로드 된 후 실행


//프로젝트 제목 마우스 띄우기
//퍼블리싱 제목명
var pub_tit = [
    "이로케 가구",
    "신라호텔 서울 리뉴얼",
    "조말론 앱",
    "아디다스 이지부스트 리뉴얼",
    "GTA5",
    "옹성우 홍보 사이트 부트스트랩",
    "우수정 포트폴리오",
];
//퍼블리싱 컨텐츠
var pub_cons = document.querySelectorAll('.web-content .content');
// console.log(Array.from(pub_cons))

//제목박스
var mouse_box = document.querySelector('.mouse');

pub_cons.forEach(function(pub, index){
    console.log(pub)
    pub.addEventListener('mouseover',function(){//마우스 올렸을때 이벤트

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
        console.log(mouse_box.style.display)
    });//mouseover end
})

document.addEventListener('mousemove', function(e) {
    var mouseBox = document.querySelector('.mouse');

    // 마우스가 .content 영역 밖으로 벗어났을 때, .mouse 숨기기
    if (!document.querySelector('.web-content').contains(e.target)) {
        mouseBox.style.display = 'none'; // 마우스가 .content 영역을 벗어났다면 숨기기
    }
});


};
