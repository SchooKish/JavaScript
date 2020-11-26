'use strict'

// Задание 1



function task1() {
    // пример 1
    
    let a = 1, b = 1, c, d;

    c = ++a;

    alert(c); // ответ: 2, потому что  инкремент в префиксной форме, а сначала увиличивается на 1 и после записывается в с

    // пример 2 

    d = b++;

    alert(d); // ответ: 1, потому что инкремент в постфиксной форме, значение b сначало присваивается в d, а после уже увеличивается на 1 

    // пример 3

    c = 2 + ++a;

    alert(c) // ответ: 5, потому что а равна 2 епосле примера 1, здесь увеличивается на еще 1 префиксным инкрементом до присваивания в с, плюс складывается с 2, итого 5

    // пример 4 

    d = 2 + b++;

    alert(d); // ответ 4, потму что после примера 2 b  увеличился на 1 и стал 2, 2 + 2 = 4, а постфиксный инкримет увиличивает b после присваивания значения в d

    alert(a) // после всех операций ответ 3
    alert(b) // после всех операций ответ 3

}

task1 ();

// Задание 2
function task2(){
    let a = 2; // ну тут понятно
    let x = 1 + (a *= 2); // а это тоже самое что х = 1 + (a = a * 2) то есть x = 1+(a=2*2), x=1+4, x = 5 
    alert(x); //ответ 5
}
 
task2();

// Задание 3

function task3() {
    let a = +prompt("Введите первое число");
    let b = +prompt("Введите второе число");
    let x;

    if (a >= 0 && b >= 0) {
        x = a - b;
        alert("Вы ввели положительные числа, их разность равна: " + x);    
    } else if (a < 0 && b < 0) {
        x = a * b;
        alert("Вы ввели отрицательные числа, их произведение равно: " + x);      
    } else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
        x = a + b;
        alert("Вы ввели разные числа, их сумма равна: " + x);    
    }
}

task3();

// Задание 4

function task4() {
    let a = +prompt("Введите первое число");
    let b = +prompt("Введите второе число");
    
    function sum(a, b) {
        return(a+b);
    }

    function dif(a, b) {
        return(a-b);
    }

    function com(a, b) {
        return(a*b);
    }

    function par(a, b) {
        return(a/b);
    }

    let summ = sum(a, b);
    alert("сумма а и b: " + summ)

    let diff = dif(a, b);
    alert("разность а и b: " + diff)
    
    let comm = com(a, b);
    alert("произведение а и b: " + comm)

    let parr = par(a, b);
    alert("разность а и b: " + parr)
}

task4();

//Задание 5

function task5() {
    let arg1 = +prompt("Введите первое число");
    let arg2 = +prompt("Введите второе число");
    let operation = prompt("выберите операцию над числами из предложенных и введите ее: sum (сумма), dif (разность), com (произведение), par (деление).")

    function mathOperation(arg1, arg2, operation) {
        function sum(arg1, arg2) {
            return(arg1 + arg2);
        }
    
        function dif(arg1, arg2) {
            return(arg1 - arg2);
        }
    
        function com(arg1, arg2) {
            return(arg1 * arg2);
        }
    
        function par(arg1, arg2) {
            return(arg1 / arg2);
        }

        switch(operation) {
            case 'sum':
                let summ = sum(arg1, arg2);
                alert("сумма а и b: " + summ);
                break;
            case 'dif':
                let diff = dif(arg1, arg2);
                alert("разность а и b: " + diff);
                break;
            case 'com':
                let comm = com(arg1, arg2);
                alert("произведение а и b: " + comm);
                break;
            case 'par':
                let parr = par(arg1, arg2);
                alert("разность а и b: " + parr);
                break;
        }
    }

    mathOperation(arg1, arg2, operation);

}

task5();

