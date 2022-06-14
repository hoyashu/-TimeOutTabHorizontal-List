// ###### [2] ~ 탭 시작 ######
//화면 로드시, 맨 첫번째 tab active

const tabBtn = document.getElementsByClassName("tab_item");
const itemBox = document.getElementsByClassName("item_box");

document.addEventListener("DOMContentLoaded", () => {
    //tab ul
    itemBox[0].setAttribute('tabIndex', 1);
    const el = tabBtn[0];
    makeContent(el, 1);

    for (var i = 0; i < tabBtn.length; i++) {
        tabBtn[i].addEventListener('click', function () {
            //tab active
            this.classList.add('active')

            //클릭한 tab index확인
            const clickIndex = this.dataset.index
            //현재 content index확인
            const contentIndex = itemBox[0].dataset.index;
            //현재 켜져있는 탭을 또 누른 경우를 제외하고 작동한다.
            if (contentIndex !== clickIndex) {
                //탭 content 변경
                makeContent(this, clickIndex);
            }
        })

        //capture option을 사용해서 click전 모든 tab active상태 해제
        tabBtn[i].addEventListener('click', captureHandler, {
            capture: true
        });
    }
});

//모든 tab active해제
function captureHandler(event) {
    for (var i = 0; i < tabBtn.length; i++) {
        tabBtn[i].classList.remove('active');
    }
};

//세자릿수에 콤마 추가
let numberDot = (x) => x.toLocaleString('ko-KR');

//[3] - 1 ~ 탭에 따른 목록 변경
let makeContent = (el, tabIndex) => {
    //ul의 tabIndex를 누른 tab index로 변경
    itemBox[0].setAttribute('tabIndex', tabIndex);

    //탭의 index와 같은 데이터 가져오기
    const result = listData.filter(e => (e.brandCode * 1) === (tabIndex * 1));
    const activeItemList = result[0].itemList;
    const item = `<li class="item">
                            <div class="img_box">
                                <a href="#">
                                    <div class="low_label"><span>↓<br>최저가</span></div>
                                    <div class="thumb_box">
                                        <img src="${activeItemList[0].img}" alt="${activeItemList[0].name}">
                                    </div>
                                </a>
                                <div class="btn btn_add_cart"><img src="./static/img/ico-cart.png" alt="장바구니 아이콘"></div>
                            </div>
                            <div class="dec_box">
                                <a href="#">
                                    <div class="dec_name">
                                        <span class="brand">${result[0].brandName}</span>
                                        <span class="title">${activeItemList[0].name}</span>
                                    </div>
                                    <div class="dec_star">
                                        <ul>
                                            <li>맛<i class="icon">★</i><span class="star">${activeItemList[0].taste}</span></li>
                                            <li>안질림<i class="icon">★</i><span class="star">${activeItemList[0].good}</span></li>
                                        </ul>
                                    </div>
                                    <div class="dec_price">
                                        <p class="origin_price">${numberDot(activeItemList[0].originPrice)}원</p>
                                        <p class="sell_price"><span class="per">${activeItemList[0].per}%</span>${numberDot(activeItemList[0].sellPrice)}원</p>
                                    </div>
                                </a>
                            </div>
                        </li>`;

    //새로운 목록으로 변경
    let htlr = "";
    for (let i = 0; i < tabIndex; i++) {
        htlr += item
    }
    itemBox[0].innerHTML = htlr;

    //해당 브랜드에서 진행중인 이벤트가 있는 경우, 광고 배너 출력
    var eventTxt = "";
    if (result[0].event > 0) {
        eventTxt = `<div class="event"><b>아임닭 아임웰</b><span>3만원이상 무료배송 | 1+1 | 사은품</span></div>`;
    }
    document.querySelector(".event_box").innerHTML = eventTxt;

    //[3] - 2 ~ 해당 브랜드명과 목록인덱스 콘솔 출력
    console.log(result[0].brandName);
    console.log(activeItemList);
};