//Spread Operator
//배열, 문자열같은 형태의 데이터를 요소 하나하나 모두 분리하여 사용하게 하는 문법

var arr1 = [4,5,6];
var arr2 = [1,2,3]; //1,2,3 분리
var arr3 = [...arr2, ...arr1];

var cd = "CDEFG"; //C,D,E,F,G로 분리함
var alphabet = ["A", "B",...cd]; //A, B, C, D,E, F, G