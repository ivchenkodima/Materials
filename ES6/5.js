// Итераторы

'use strict';

let arr = [1, 2, 3]; // массив — пример итерируемого объекта

for (let value of arr) {
  alert(value); // 1, затем 2, затем 3
}
Также итерируемой является строка:

'use strict';

for (let char of "Привет") {
  alert(char); // Выведет по одной букве: П, р, и, в, е, т
}

var arr = [
	{name:'kate', age:'23'},
	{name:'dima', age:'23'},
	{name:'olga', age:'25'},
	{name:'olga', age:'15'}
];
var newA
