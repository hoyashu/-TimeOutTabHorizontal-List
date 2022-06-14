// ajax통신으로 가져올 data
var listData = [
    {
        "brandName": "아임닭",
        "brandCode": 1,
        "event": 1,
        "itemList": [{
            "name": "닭가슴살 더블스테이크 모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "아임쿡밀",
        "brandCode": 2,
        "event": 0,
        "itemList": [{
            "name": "한입가득 스팀 닭가슴살 6종 혼합 12/24/36/48팩 [아임닭데이]",
            "img": "./static/img/thumb2.jpeg",
            "taste": 2,
            "good": 3.1,
            "per": 28,
            "originPrice": 30000,
            "sellPrice": 21600
        }]
    },
    {
        "brandName": "마이비밀",
        "brandCode": 3,
        "event": 0,
        "itemList": [{
            "name": "프랑크 소시지 5종 혼합 10/20/30팩 [아임닭데이]",
            "img": "./static/img/thumb3.jpeg",
            "taste": 4,
            "good": 1.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "슬림쿡",
        "brandCode": 4,
        "event": 0,
        "itemList": [{
            "name": "쉐프메이드 닭가슴살 4종 혼합 12/24/36/48팩 [아임닭데이]",
            "img": "./static/img/thumb4.jpeg",
            "taste": 4.9,
            "good": 4.9,
            "per": 28,
            "originPrice": 30000,
            "sellPrice": 21600
        }]
    },
    {
        "brandName": "밀키파인드",
        "brandCode": 5,
        "event": 0,
        "itemList": [{
            "name": "쉐프메이드 통후추맛 닭가슴살 12/24/36팩 [아임닭데이]",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 28,
            "originPrice": 30000,
            "sellPrice": 21600
        }]
    },
    {
        "brandName": "그릭데이",
        "brandCode": 6,
        "event": 0,
        "itemList": [{
            "name": "담백달콤 스틱형 군고구마바 (8개입) 1/3/6팩",
            "img": "./static/img/thumb4.jpeg",
            "taste": 4.9,
            "good": 4.9,
            "per": 28,
            "originPrice": 30000,
            "sellPrice": 21600
        }]
    },
    {
        "brandName": "서비푸드",
        "brandCode": 7,
        "event": 0,
        "itemList": [{
            "name": "통밀 브리또 4종 혼합 8/12/16팩",
            "img": "./static/img/thumb3.jpeg",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "자온",
        "brandCode": 8,
        "event": 0,
        "itemList": [{
            "name": "쫀득쫀득 곤약 찰바 4종 혼합 12/20/28팩",
            "img": "./static/img/thumb2.jpeg",
            "taste": 4.9,
            "good": 4.9,
            "per": 28,
            "originPrice": 30000,
            "sellPrice": 21600
        }]
    },
    {
        "brandName": "호랑이",
        "brandCode": 9,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb3.jpeg",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "김밥",
        "brandCode": 10,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 28,
            "originPrice": 30000,
            "sellPrice": 21600
        }]
    },
    {
        "brandName": "고양이",
        "brandCode": 11,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "향수",
        "brandCode": 12,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "카메라",
        "brandCode": 13,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "연필",
        "brandCode": 14,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "밀크",
        "brandCode": 15,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "핑크",
        "brandCode": 16,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "행복",
        "brandCode": 17,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "웃음",
        "brandCode": 18,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "햇살",
        "brandCode": 19,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    },
    {
        "brandName": "색연필",
        "brandCode": 20,
        "event": 0,
        "itemList": [{
            "name": "모짜렐라 치즈",
            "img": "./static/img/thumb1.png",
            "taste": 4.9,
            "good": 4.9,
            "per": 45,
            "originPrice": 2270,
            "sellPrice": 1490
        }]
    }
];