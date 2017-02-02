/*var admin, name;

name="Василий";

admin=name;

alert(admin);
*/

/*var a="1", b=2; c=a+b;

alert(c);*/


/*var a = 1, b = 1, c, d;


c = ++a; alert(c); 
d = b++; alert(d); 
c = (2+ ++a); 
alert(c);*/

/*var name = prompt("Имя?", "");

alert( name );
*/


/*var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

if (year != 2011) {
  alert( 'А вот..' );
  alert( '..и неправильно!' );
}*/

/*var name = prompt("Какое название у JS?","");

if (name=="EcmaScript") {
	alert("Верно");
}
else {
	alert ("false");
}*/

/*var number = prompt("Number?", "");
if (number>0) {
	alert("1");
}
else if (number<0) {
	alert("-1");
}
else {
	alert("0");
}*/

/*var login = prompt("Login?","");
if (login == null) {
	alert("Cancel");
}
else if (login !== "Admin") {
	alert("I dont know you")
}

else {
	var pass = prompt("Password?", "");
	if (pass == null) {
		alert("Cancel");
	}
	else if (pass !== "123") {
	alert("Wrong pass");
	}
	else {
	alert("Welcome");
	}
}*/



/*result=(a+b<4)?"Low":"High";

message = (login=="Vasya")?"Hi!":
					(login=="Director")?"Hello":
					(login=="")?"Empty":
					"";*/


/*var age=prompt("Age?","");

if (!(age >= 14 && age <= 90)) {
	alert(age);
}
else {
	alert("Nan");
}

*/

// alert(undefined + 1); 


/*var sum = 0;

while (true) {

  var value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );
*/

// for (var i = 0; i < 5; ++i) alert( i );


/*for (i=0; i<11; i++) {
	if (i%2!==0 || i<2) continue;	
	console.log(i);
}*/
/*
var i=0;
while (i<3) {
	alert("number "+i+"!")
	i++;
}

*/

/*var num;

do {
	num=prompt("enter number?", "");
}	while (num<100 && num!==null);

*/

/*nextPrime:
  for (var i = 2; i < 10; i++) {
  	console.log(i);
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
      console.log(j);

          }

    console.log(i);
    console.log(j);

  }

*/
/*
var a = 5;

switch (a) {
  case 4:
    alert('Верно!');
    break;

  case 3:                    // (*)
  case 5:                    // (**)
    alert('Неверно!');
    alert('Немного ошиблись, бывает.');
    break;

  default:
    alert('Странный результат, очень странный');
}

*/
/*var browser=prompt("Browser?", "");

if (browser=="ie") {
	alert("You got IE");
}
else if (browser=="chorme" || browser=="firefox" || browser=="safari" || browser=="opera") {
	alert("We support this browsers");
}
else {
	alert("All ok");
}*/

/*var a = +prompt("a?", "");

switch (a) {
	case 0:
		alert(0);
		break;
	case 1:
		alert(1);
		break;
	case 2:
	case 3:
		alert("2,3");
		break;	
	default:		
		break;
}

*/
/*function count() {
  // переменные i,j не будут уничтожены по окончании цикла
  for (var i = 0; i < 3; i++) {
    var j = i * 2;
  }

  alert( i ); // i=3, последнее значение i, при нём цикл перестал работать
  alert( j ); // j=4, последнее значение j, которое вычислил цикл
}

count();*/
/*var from = "Маша";

function showMessage(from, text) {
  from = '**' + from + '**'; // меняем локальную переменную from
  alert( from + ': ' + text );
}



showMessage(from, "Привет");

alert( from );*/

/*var age=+prompt("age?", "");

function checkAge(age) {

	return (age>18)?true:confirm('Родители разрешили?');

}

checkAge();

function checkAge2(age) {

	return (age>18) || confirm('Родители разрешили?');

}

checkAge2(age);
*/
/*
var a, b;

function min(a,b) {
	if (a>b) {
		alert(a);
	}
	else {
		alert(b);
	}
}

min(-5,8);

*/
/*function pow(a,b) {
	var c=a;
	for (var i=1; i<b; i++) {
		c *= a;
	}
	return c;
}


var a=+prompt("a?", ""),
		b=+prompt("b?", "");

if (b<=1) {
	alert("error");
}
else {
	alert(pow(a,b));
}


*/

/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

*/

/*function pow(x, n) {
  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

alert( pow(2, 3) ); // 8
*/

/*function sumTo(n) {
	var c=0;
for (var i=1; i<=n; i++){
	c+=i;
	}
	return c;
}

alert( sumTo(100) );

*/

/*function sumTo(n) {
 if (n==1) return 1;
 return n+sumTo(n-1); 
}

alert( sumTo(10000) );

*/
/*
function sumTo(n) {
	return n*(n+1)/2;
}
alert ( sumTo(100));
*/

/*function factorial (n){
	if (n==1) return 1;
	return n*factorial(n-1);
}
alert (factorial(4));
*/
/*
function fib(n) {
	return n<=1?n:fib(n-1)+fib(n-2);
}

alert (fib(3));
alert (fib(7));
alert (fib(77));
*/


/*function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(3) );
alert( fib(7) );
alert( fib(77) );
*/
/*var f = function factorial(n) {
  return n ? n*factorial(n-1) : 1;
};

var g = f;  // скопировали ссылку на функцию-факториал в g
 f=null;

alert( g(5) ); // 120, работает!

alert( f(4) );
*/

/*function g() { return 1; }

alert(g);
*/
/*
(function g() { return 1; });

alert(g);

*/

/*function pow(x, n) {
	var result = 1;

	for (var i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n < 0) {
	alert('Степень ' + n +
	 'не поддерживается, введите целую степень, большую 0');
} else {
	alert(pow(x, n));
}


*/

/*var a = +prompt("a?", ""), b = +prompt("b?", "");

alert ( a + b );
*/
/*
alert ( (0.1*10 + 0.2*10)/10 );

*/
/*
var i = 0;
while (i != 10) {
  i += 0.2;
}

*/
/*
var a = +prompt("a?", "");

var c = Math.floor(a);

alert ( (a*1000 - c*1000)/1000 );

*/
/*
var max = 100;

alert ( Math.round(Math.random() * max) );


*/

/*function ucFirst(str) {
  
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("вася") );
*/

/*function checkSpam(str) {
  var lowerStr = str.toLowerCase();

  return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
*/
/*
function truncate(str, length) {
	if (str.length > length) {
		return str.slice(0, length - 3) + '...';
	}

	return str;
}

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 10) );
alert( truncate("Всем привет!", 5) );




*/
/*
  function extractCurrencyValue(str) {
      return +str.slice(1);
    }

alert(extractCurrencyValue('$150'));



*/
/*
function isEmpty(obj) {
  for (var key in obj){
  	return false;
  }
  return true;
}

var schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); */



/*var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function summ(obj) {
	var sum=0;
	for (var key in obj) {
		sum += obj[key];
	}	
	alert (sum||"0");
}

summ(salaries);
*/

/*"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var maxName = "";

for (var name in salaries) {
	if (max < salaries[name]){
		max = salaries[name];
		maxName = name;
	}
}

alert( maxName || "no employers");



*/


/*var goods = [1,2,3];
goods.push("Компьютер");
alert(goods);
*/

/*var styles = ["Jazz", "Bluez"];
styles.push("RocknRoll");
styles[styles.length-2] = "Classic";

alert(styles.shift());
styles.unshift("Reggi");
*/
/*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var min = 1;
var max = arr.length-1;

var rand = min + Math.floor(Math.random() * (max + 1 - min));

alert(arr[rand]);*/


/*var numbers = [];

while (true) {

  var value = prompt("Введите число", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

alert( sum );
*/
/*function find(array, value) {
  if (array.indexOf) { // если метод существует
    return array.indexOf(value);
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

var arr = ["a", -1, 2, "b"];

var index = find(arr, 2);

alert( index );

console.log('')


*/

var A = [8,7,4,5,2,1]

function BubbleSort(A)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (A[j+1] < A[j])
           { var t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
        }
     }                     
    return A;    // На выходе сортированный по возрастанию массив A.
}

console.log(BubbleSort(A));


function SelectionSort(A)       // A - массив, который нужно
{                               // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { var min = i;
       for (var j = i+1; j < n; j++)
        { if (A[j] < A[min]) min = j; } 
       var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
     }                    
    return A;    // На выходе сортированный по возрастанию массив A.
}




var a = {
 x: 1,
  text: "text",
  success: true,
  data: [
   {
     y: 25
    }
  ]
};

Создание рекурсивной вложенности:
a.data.push(a);
a.data.push(a.data);


Проверка верности решения:
var b = util.deepClone(a);
b.data[1].z = 15;
console.warn(a, b);
























