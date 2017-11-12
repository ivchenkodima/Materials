//Деструктуризация

'use strict';

let [firstName, lastName] = ["Илья", "Кантор"];

alert(firstName); // Илья
alert(lastName);  // Кантор

// При таком присвоении первое значение массива пойдёт
 // в переменную firstName, второе – в lastName, 
 // а последующие (если есть) – будут отброшены.

// Ненужные элементы массива также можно отбросить, поставив лишнюю запятую:

'use strict';

// первый и второй элементы не нужны
let [, , title] = "Юлий Цезарь Император Рима".split(" ");

alert(title); // Император

====================================================================

// Оператор «spread»

// Если мы хотим получить и последующие значения массива, 
// но не уверены в их числе – можно добавить ещё один 
// параметр, который получит «всё остальное», 
// при помощи оператора "..." («spread», троеточие):

'use strict';

let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

alert(firstName); // Юлий
alert(lastName);  // Цезарь
alert(rest);      // Император,Рима (массив из 2х элементов)


// Значением rest будет массив из оставшихся элементов массива. Вместо
 // rest можно использовать и другое имя переменной, 
 // оператор здесь – троеточие. Оно должно стоять только
 //  последним элементом в списке слева.


'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {width: w, height: h, title} = options;

alert(title);  // Меню
alert(w);      // 100
alert(h);      // 200


'use strict';

let options = {
  title: "Меню"
};

let {width=100, height=200, title} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200


'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {title, ...size} = options;

// title = "Меню"
// size = { width: 100, height: 200} (остаток)

====================================================================

// Вложенные деструктуризации
'use strict';

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Пончик", "Пирожное"]
}

let { title="Меню", size: {width, height}, items: [item1, item2] } = options;

// Меню 100 200 Пончик Пирожное
alert(title);  // Меню
alert(width);  // 100
alert(height); // 200
alert(item1);  // Пончик
alert(item2);  // Пирожное


