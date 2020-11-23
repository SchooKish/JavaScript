'use strict'

//Задание 1

var Tc = prompt('Укажите температуру в Цельсиях', 20);
var Tf;

Tf = (9 / 5) * Tc + 32;

alert('Температура в Фаренгейтах ' + Tf);


//Задание 2

var admin, name;
name = 'Василий';
admin = name;
alert(admin);


//Задание 3

/*
1. 10 + 10 = 20
2. 20 + "10" = "2010"
3. "2010" присваиваем в переменную result
4. с помощью console.log выводим result в консоль
*/

let result = 10 + 10 + "10";
console.log(result);

/*
1. 10 + "10" = "1010"
2. "1010" + 10 = "101010"
3. "101010" присваиваем в переменную result
4. с помощью console.log выводим result в консоль
*/

result = 10 + "10" + 10;
console.log(result);

/*
1. 10 + 10 = 20
2. 20 + +"10" = 30, унарный плюс приводит строку в число
3. 30 присваиваем в переменную result
4. с помощью console.log выводим result в консоль
*/

result = 10 + 10 + +"10";
console.log(result);

/*
1. Пустые кавычки это 0
2. 10 / -0 = -infinity
3. -infinity присваиваем в переменную result
4. с помощью console.log выводим result в консоль
*/

result = 10 / -"";
console.log(result);

/*
1. + приводит в число только 2
2. а при делении нка строку выходит NaN
3. NaN присваиваем в переменную result
4. с помощью console.log выводим result в консоль
*/

result = 10 / +"2,5";
console.log(result);
