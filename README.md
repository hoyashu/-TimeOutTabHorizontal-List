# 타이머, 탭 클릭으로 변경되는 상품 목록

- 사용언어 : Javascript
- 작업 시간 : 8시간

## 기능
1. 쿠키를 이용한 타이머 기능 
![image](https://user-images.githubusercontent.com/42165121/173186879-34b3c497-9dc8-404a-a5b6-2a4d304a1e00.png)

2. 가로 스크롤 Tab으로 변경되는 목록
![image](https://user-images.githubusercontent.com/42165121/173186890-c2f1429e-0b03-4360-b5f1-899ea52a56ec.png)

## 고민 쟁점
1. 카운트 다운 정보를 쿠키로 관리하는 게 맞는지 고민했습니다. 세션은 브라우저를 닫으면 지워지기에 아닌 게 확실하지만, 쿠키는 사용자가 임의로 삭제가 가능하기에 다른 방법이 없을지 고민했습니다.
2. 목록의 상품명 말 줄임(…)하는 방식을 고민했습니다. 처음에 JavaScript 작업했지만, 글자마다 길이가 다른 문제로 이쁘게 표현되지 않아서 CSS의 line-clamp와 box-orient를 사용했습니다.
3. jQuery와 JavaScript 중 어떤 걸 주 사용할지 고민하다 사용성이 더 좋은 JavaScript을 선택했습니다.
