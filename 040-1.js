//정규식, RegExp
//regular expression

var txt = "Hello World! world!";

var regexp = /World/gi;

console.log(txt.replace(regexp, "Jeremy"));


var str = "123qweasd456";
var regexp1 = /[0-9]/g;
var result = str.match(regexp1);
console.log(result);


var str2 = "re, green, red, gree, gen, red, yellow, blue";
var regexp2 = /(red|green)/g;
var result2 = str2.match(regexp2);
console.log(result2);


var tel = "010-3008-9614";
//3자리 숫자 -4자리 숫자 -4자리
var regexp3 = /^(010)-\d{4}-\d{4}/;  // ^는 데이터의 시작을 고정
console.log(regexp3.test(tel)); //자릿수 맞으면 true/틀리면 false


//이메일
//seungwon.go@gmail.com
//aaa234@abc.co.kr
//afef@foeof
//@
var regexp4 = /^\w+@\w+(\.\w{2,3})+$/;   
// \w+ 문자, +는 하나 이상으로 등등 찾으면서 활용
console.log(regexp4.test("sung@gmail.com"))

 