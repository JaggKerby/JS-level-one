let cels = +prompt('Укажи теипературу в цельсиях: ');
let fr = (9/5) * cels + 32; 
alert(fr);

let admin;
let name;
name = 'Василий';
admin = name;
console.log(admin);

console.log(10 + 10 + '10');
/* 
исполнение идет слева направо. значения сравниваются попарно. если оба значения числа - выполняем сложение чисел. В слу-
чае сложения числа и строки - число преобразуется в строку и склеиваются 2 строки 
итоговый результат 2010
*/
console.log(10 + '10' + 10);
/* 
исполнение идет слева направо. значения сравниваются попарно. если оба значения числа - выполняем сложение чисел. В слу-
чае сложения числа и строки - число преобразуется в строку и склеиваются 2 строки 
итоговый результат 101010
*/

console.log(10 + 10 + +'10'); 
/* 
используется унарный плюс для преобразования строки в число.
так как все элементы явялются числами - будет выполнена операция сложения. 
итоговый резульатат - число 30.
*/ 


console.log(10 / -'');
/* 
1 выполняется математическая операция отличная от сложения - все элементы будут приравнены к числу.
2 пустая строка - имеет значение false - при приведении к числу - приобретает значение 0.
3 выполняется деление на 0 
4 унарный минус меняет результат выражения на противоположный 
5 получаем -Infinity 
*/

console.log(10 / +'2.5');
/* 
1 выполняется математическая операция отличная от сложения - все элементы будут приравнены к числу.
2 строка 2.5 имеет перед собой унарный плюс - оператор преведения к числу. 
3 будет произведено деление 2-х чисел
*/

let mode = "normal"; //- корректно 
let my_valu3 = 102; //- плохой пример наименования переменной
let 3my_value3 = "102"; //- не является корректным переменная не будет объявлена
let __hello__ = "world"; //- плохой пример наименования переменной
let $$$ = "money"; //- плохой пример наименования переменной
let !0_world = true; //- не является корректным переменная не будет объявлена
