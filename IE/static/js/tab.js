// ###### [2] ~ 탭 시작 ######
//tab ul
var tabBtn = document.getElementsByClassName("tab_item");
var itemBox = document.getElementsByClassName("item_box");

//화면 로드시, 맨 첫번째 tab active
document.addEventListener("DOMContentLoaded", function () {
    itemBox[0].setAttribute('tabIndex', 1);
    var el = tabBtn[0];
    makeContent(el, 1);

    for (var i = 0; i < tabBtn.length; i++) {
        tabBtn[i].addEventListener('click', function () {
            //ie에서 event capture not working
            for (var i = 0; i < tabBtn.length; i++) {
                tabBtn[i].classList.remove('active');
            }
            ;
            //tab active
            this.classList.add('active')
            //클릭한 tab index확인
            var clickIndex = this.dataset.index
            //현재 content index확인
            var contentIndex = itemBox[0].dataset.index;
            //현재 켜져있는 탭을 또 누른 경우를 제외하고 작동한다.
            if (contentIndex !== clickIndex) {
                //탭 content 변경
                makeContent(this, clickIndex);
            }
        })
    }
})

//세자릿수에 콤마 추가
function numberDot(x) {
    x = x.toLocaleString('ko-KR');
    return x;
};

//[3] - 1 ~ 탭에 따른 목록 변경
function makeContent(el, tabIndex) {
    //ul의 tabIndex를 누른 tab index로 변경
    itemBox[0].setAttribute('tabIndex', tabIndex);
    //탭의 index와 같은 데이터 가져오기
    var result = listData.filter(function (e) {
        return (e.brandCode * 1) === (tabIndex * 1)
    });
    var activeItemList = result[0].itemList;
    var item = "<li class='item'> <div class='img_box'> <a href='#'> <div class='low_label'><span>↓<br>최저가</span></div><div class='thumb_box'> <img src='" + activeItemList[0].img + "' alt=" + activeItemList[0].name + "'> </div></a> <div class='btn btn_add_cart'><img src='./static/img/ico-cart.png' alt='장바구니 아이콘'></div></div><div class='dec_box'> <a href='#'> <div class='dec_name'> <span class='brand'>" + result[0].brandName + "</span> <span class='title'>" + activeItemList[0].name + "</span> </div><div class='dec_star'> <ul> <li>맛<i class='icon'>★</i><span class='star'>" + activeItemList[0].taste + "</span></li><li>안질림<i class='icon'>★</i><span class='star'>" + activeItemList[0].good + "</span></li></ul> </div><div class='dec_price'> <p class='origin_price'>" + numberDot(activeItemList[0].originPrice) + "원</p><p class='sell_price'><span class='per'>" + activeItemList[0].per + "%</span>" + numberDot(activeItemList[0].sellPrice) + "원</p></div></a> </div></li>";
    //새로운 목록으로 변경
    var htlr = "";
    for (var i = 0; i < tabIndex; i++) {
        htlr += item
    }
    itemBox[0].innerHTML = htlr;
    //해당 브랜드에서 진행중인 이벤트가 있는 경우, 광고 배너 출력
    var eventTxt = "";
    if (result[0].event > 0) {
        eventTxt = "<div class='event'><b>아임닭 아임웰</b><span>3만원이상 무료배송 | 1+1 | 사은품</span></div>";
    }
    document.querySelector(".event_box").innerHTML = eventTxt;
    //[3] - 2 ~ 해당 브랜드명과 목록인덱스 콘솔 출력
    console.log(result[0].brandName);
    console.log(activeItemList);
};