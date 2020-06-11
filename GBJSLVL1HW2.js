"use strict";
/*
задание 1 
*/

//пример 1 
let a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c);
// ответ: 2
/* 
используется префиксная запись инкримента
сначала переменна 'a' увеличится на еденицу, а затем значение вернется в  'c' 
*/

//пример 2 
d = b++;
alert(d);
//ответ: 1
/*
используется постфиксная запись инкримента 
значение 'b' записывается в 'd', а затем увеличивается на единицу.
*/
//пример 3
c = 2 + ++a;
alert(c);
//Ответ: 5
/* 
используется префиксная запись инкримента
сначала переменна 'a' увеличится на еденицу, и после произойдет сложение.
Поскольку ранее мы уже использовали инкримент для 'a' - значение уже было увеличенно ранее в первом примере. 
*/
//пример 4 
d = 2 + b++;
alert(d);
//ответ: 4
/* 
используется постфиксная запись инкримента 
значение 'b' уже было увеличенно ранее в первом примере.
значение 'b' складывается и передается в переменную 'd', а затем увеличивается на еденицу. 
*/
alert(a); //3 
alert(b); //3

/*
задание 2
*/

let a = 2;
let x = 1 + (a *= 2);

a = 4;
x = 5;

/*
В данном примере в первую очередь выполняется  операция присваивания с умножением в скобках 
затем  плюсуем еденицу и получаем результат который записывается в переменную 'x'
*/

/*
задание 3
*/

let a = 3;
let b = 6;

// if (a >= 0 && b >= 0) {
//     console.log('Разность чисел равна: ' + (a - b));
// } else if  (a <= 0 && b <= 0) {
//     console.log('Произведение чисел равно: ' + (a * b));
// } else {
//     console.log ('Сумма чисел с разными знаками равна: '+ (a + b));    
// }

function doMath(a, b) {
    a = +a;
    b = +b;
    if (Math.sign(a) == 1 && Math.sign(b) == -1 || Math.sign(a) == -1 && Math.sign(b) == 1) {
        return ('Сумма чисел с разными знаками равна: ' + (a + b));
    } else if (a <= 0 && b <= 0) {
        return ('Оба числа отрицательны и произведение равно: ' + (a * b));
    } else if (a >= 0 && b >= 0) {
        return ('Оба числа положительны и разность равна: ' + (a - b));
    } else {
        return ('Что-то пошло не так')
    }
}

console.log(doMath(a, b));

/*
задание 4
*/

function sumNumbers(a, b) {
    a = +a;
    b = +b;
    return (a + b);
}

// console.log(sumNumbers(5, 6));

function multNumbers(a, b) {
    a = +a;
    b = +b;
    return (a * b);
}

// console.log(multNumbers(5, 6));

function subNumbers(a, b) {
    a = +a;
    b = +b;
    return (a - b);
}

// console.log(subNumbers(5, 6));

function divNumbers(a, b) {
    a = +a;
    b = +b;
    return ((a / b).toFixed(1));
}

// console.log(divNumbers(6, 6));

/*
задание 5
*/

let a = prompt('Введи первое число: ');
let b = prompt('Введи второе число: ');
let operation = prompt('Что делать с числами?: ');

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'mult':
            return multNumbers(a, b);
        case 'sum':
            return sumNumbers(a, b);
        case 'div':
            return divNumbers(a, b);
        case 'sub':
            return subNumbers(a, b);
        default:
            console.log('error: use mult, sum, div, sub');
            break;
    }
}

// let a = 3;
// let b = 3;
// let operation = 'div';

console.log(mathOperation(a, b, operation));

/*
задание 6 
*/

// let sumtoAcc = '125522';
let sumtoAcc = prompt('Укажите сумму для внесения на счет: ');

function finishRoubles(sumtoAcc) {

    let lastNum = sumtoAcc.split('');
    const el = Number(lastNum.pop());

    if (el > 1 && el < 5) {
        return ('Вы положили на счет ' + sumtoAcc + ' рубля');
    } else if (el == 1) {
        return ('Вы положили на счет ' + sumtoAcc + ' рубль');
    } else {
        return ('Вы положили на счет ' + sumtoAcc + ' рублей')
    }
}

console.log(finishRoubles(sumtoAcc));