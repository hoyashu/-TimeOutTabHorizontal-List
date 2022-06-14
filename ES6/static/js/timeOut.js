// ###### 타이머 시작 ######
//타이머 시간 설정
const expDay = 5;
const expHours = 11;
const expMin = 10;

document.addEventListener("DOMContentLoaded", () => {
    /* ### 타이머 시작 ### */
    let day;
    let hours;
    let min;

    //방문 기록이 있는 경우
    if (getCookie("timeout")) {
        const now = new Date().getTime();
        const expDate = new Date(getCookie("timeout")).getTime();
        const leftSec = expDate - now;
        day = Math.floor(leftSec / (1000 * 60 * 60 * 24));
        hours = Math.floor((leftSec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        min = Math.floor((leftSec % (1000 * 60 * 60)) / (1000 * 60));
    } else {
        //첫 방문인 경우 초기 설정 값 표시
        day = expDay;
        hours = expHours;
        min = expMin;
        //쿠키 등록
        setCookie("timeout");
    }

    //타이머 값 출력
    document.querySelector(".time_banner .day").innerText = day;
    document.querySelector(".time_banner .hours").innerText = hours;
    document.querySelector(".time_banner .min").innerText = min;
    /* ### 타이머 끝 ### */
})

//쿠키 삭제
function delCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

//쿠키 저장
function setCookie(name) {
    const expDate = new Date();
    const expires = ((expDay * 24 * 60 * 60) + (expHours * 60 * 60) + expMin * 60) * 1000;
    expDate.setTime(expDate.getTime() + expires);
    document.cookie = name + "=" + escape(expDate.toGMTString()) + "; path=/; expires=" + expDate
        .toGMTString() + ";"
}

//쿠키 추출
function getCookie(name) {
    const nameOfCookie = name + "=";
    let x = 0;
    while (x <= document.cookie.length) {
        const y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) === nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) === -1) endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x === 0) break;
    }
    return "";
}

// ###### 타이머 끝 ######