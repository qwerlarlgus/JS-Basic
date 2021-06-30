//음료 목록
//코카콜라 - 700, 오렌지주스 - 1200, 커피 - 500, 물 - 700
//보리차 - 1200, 포카리 - 1000, 뽀로로 - 1300
//각각의 음료는 총 5개씩 보유

//고객지갑 - 10000
//음료자판기 최초 잔돈 - 1000

//동전 투입 - 100, 500, 1000
import "./049-final.css"

let coin = 1000; 

document.getElementById("current").innerHTML = coin + "원";

function color_change() {

  if (coin >= 1300) {
    document.getElementById("coke").style.color = "blue";
    document.getElementById("orange").style.color = "blue";
    document.getElementById("coffee").style.color = "blue";
    document.getElementById("water").style.color = "blue";
    document.getElementById("tea").style.color = "blue";
    document.getElementById("pokari").style.color = "blue";
    document.getElementById("pororo").style.color = "blue";
  } else if (coin >= 1200) {
     document.getElementById("coke").style.color = "blue";
    document.getElementById("orange").style.color = "blue";
    document.getElementById("coffee").style.color = "blue";
    document.getElementById("water").style.color = "blue";
    document.getElementById("tea").style.color = "blue";
    document.getElementById("pokari").style.color = "blue";
  } else if (coin >= 1000) {
    document.getElementById("coke").style.color = "blue";
    document.getElementById("coffee").style.color = "blue";
    document.getElementById("water").style.color = "blue";
    document.getElementById("pokari").style.color = "blue";
  } else if (coin >= 500) {
    document.getElementById("coffee").style.color = "blue";
  } else if (coin >= 100) {
  } else {
    document.getElementById("coke").style.color = "red";
    document.getElementById("orange").style.color = "red";
    document.getElementById("coffee").style.color = "red";
    document.getElementById("water").style.color = "red";
    document.getElementById("tea").style.color = "red";
    document.getElementById("pokari").style.color = "red";
    document.getElementById("pororo").style.color = "red";
  }
}

function click_btn1() {
    coin = coin + 1000;
    color_change();
    alert("1000원 넣음");
    document.getElementById("current").innerHTML = coin + "원";
}

function click_btn2() {
    coin += 500;
    color_change();
    alert("500원 넣음");
    document.getElementById("current").innerHTML = coin + "원";
}

function click_btn3() {
    coin += 100;
    color_change();
    alert("100원 넣음");
    document.getElementById("current").innerHTML = coin + "원";
}

function click_coffee() {
    if (coin < 700) {
        alert("돈이 부족합니다");
    } else {
        coin -= 700;
        alert("물 뽑음");
        color_change();
        document.getElementById("current").innerHTML = coin + "원";
    }
}

function click_water() {
    if (coin < 500) {
        alert("돈이 부족합니다");
    } else {
        coin -= 500;
        alert("커피 뽑음");
        color_change();
        document.getElementById("current").innerHTML = coin + "원";
    }
}

function click_tea() {
    if (coin < 1000) {
        alert("돈이 부족합니다");
    } else {
        coin -= 1000;
        alert("포카리 뽑음");
        color_change();
        document.getElementById("current").innerHTML = coin + "원";
    }
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", click_btn1);

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", click_btn2);

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", click_btn3);

const coffee = document.getElementById("coffee");
coffee.addEventListener("click", click_coffee);

const water = document.getElementById("water");
water.addEventListener("click", click_water);

const tea = document.getElementById("tea");
tea.addEventListener("click", click_tea);
