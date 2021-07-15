// 카드 데이터 배열 입력
var imgArray = new Array();
for (var i = 0; i < 22; i++) {
    imgArray[i] = './images/' + i + '.png';
}
// minor 카드 추가,제거 함수
function Plus_Minor() {
    for (var i = 22; i < 78; i++) {
        imgArray[i] = './images/' + i + '.png';
    }
}
function Delete_Minor() {
    for (var i = 22; i < 78; i++) {
        imgArray.splice(i);
    }
}

// 카드 섞기(셔플) 함수
var indexArray = new Array();
var First_Shuffle_Check = -1; // 카드 수, 종류 변경시 -1로 변경
var play_card_num = 3;
var data_card_num = 21;
function Shuffle_Card() {
    First_Shuffle_Check = 1;
    for (var i = 0; i < play_card_num; i++) {
        indexArray[i] = Math.round(Math.random() * data_card_num);
        // 중복 검사
        for (var search = 0; search < i; search++) {
            if (indexArray[i] == indexArray[search]) {
                i--;
                break; // 다음 것을 검색할 필요가 없으므로 중복검사 반복을 나갑니다.
            }
        }
    }

}

// 카드 전체 오픈 함수
function OpenCardAll() {
    if (First_Shuffle_Check < 0) {
        alert('Please press the SHUFFLE button!!');
        return 0;
    }
    for(var i=0; i < play_card_num; i++) {
        OpenCard(i);
    }
}

// 카드 오픈 함수
function OpenCard(num) {
    if (First_Shuffle_Check < 0) {
        alert('Please press the SHUFFLE button!!');
        return 0;
    }
    $('#card' + num).attr({ src: './images/' + indexArray[num] + '.png' });
}
// 카드 닫기 함수
function CloseCard() {
    for (var i = 0; i < 5; i++) {
        $('#card' + i).attr({ src: './images/back.png' });
    }
}
//radio 체크
function CheckRadio() {
    var chk_radio = $('input[name=piece]:checked').val();
    if (chk_radio == 3) {
        alert('You select 3 cards');
        play_card_num = 3;
        First_Shuffle_Check = -1;
        Show_3Card();
    }
    else if (chk_radio == 5) {
        alert('You select 5 cards')
        play_card_num = 5;
        Show_5Card();
        First_Shuffle_Check = -1;
    }
}
// checkbox 체크
function CheckBox() {
    var isMinorChk = $("input[name='Minor']").prop("checked");

    if (isMinorChk == true) {
        alert("You check Minor\nPlease press the SHUFFLE button");
        data_card_num = 78;
        First_Shuffle_Check = -1;
        Plus_Minor();
    }
    else if (isMinorChk == false) {
        alert('You cancel Minor');
        data_card_num = 21;
        First_Shuffle_Check = -1;
        Delete_Minor();
    }
}

// 카드 수 변화
function Show_3Card() {
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    CloseCard();
    $('.box').css({
        "width": "580px",
        "margin-left": "-290px"
    });
    $('.box_2').css({
        "width": "380px"
    });
    // $('.box').css({
    //     "margin-left" : "-340px"
    // });
}
function Show_5Card() {
    document.getElementById("card3").style.display = "inline";
    document.getElementById("card4").style.display = "inline";
    CloseCard();
    $('.box').css({
        "width": "580px",
        "margin-left": "-290px"
    });
    $('.box_2').css({
        "width": "380px"
    });
    // $('.box').css({
    //     "margin-left" : "-500px"
    // });
}

function alert_landscape() {
    alert('Please change to landscape mode(가로 모드)!');
}

// 이미지 프리로딩

var preloadImage = new Array;

function preload() {
    
    for(var i=0; i<78; i++) {
        preloadImage[i]  = new Image();
        preloadImage[i].src="images\\" + i + ".png";
        console.log(preloadImage[i]);
    }
}
window.onload = function() {
    Show_3Card();
    preload();
}