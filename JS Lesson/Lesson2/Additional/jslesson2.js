// 1 Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//   Потрібно зробити перевірку, якщо кількість елементів у масиві більше
//   або дорівнює 3, то виводиться повідомлення про те, що це великий
//   масив, в якому  3 і більше елементи.
//   Інакше слід вивести на екран повідомлення про те, що це маленький
//   масив, в якому менше 3-х елементів.

// 1й варiант
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// let arrIndex = friends.length >= 3 ? "Це великий масив, в якому  3 і більше елементи" : "Це маленький масив, в якому менше 3-х елементів";
// document.write(arrIndex);

// 2й варiант
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3) {
//     document.write(`Це великий масив, в якому  3 і більше елементи`);
// } else {
//     document.write(`Це маленький масив, в якому менше 3-х елементів`);
// }

// 2 Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//   Знайти, яке з них є середнім (більше одного, але менше за інше).
//   Перевірити, чи знаходиться перше число між двома іншими.

// let a = +prompt(`Введiть 1-е число`);
// let b = +prompt(`Введiть 2-е число`);
// let c = +prompt(`Введiть 3-е число`);
// if ((a > b && a < c) || (a < b && a > c)) {
//     document.write(`мiж 2-м ${b} i мiж 3-м числом ${c} <br> Середнэ число це 1-е число ${a}`);
// } else if ((a < b && b < c) || (a < b && b > c)) {
//     document.write(`мiж 1-м ${a} i мiж 3-м числом ${c} <br> Середнэ число це 2-е число ${b}`);
// } else {
//     document.write(`мiж 1-м ${a} i мiж 2-м числом ${b} <br> Середнэ числоце 3-е число ${c}`);
// }

// 3 Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }


// 4 Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let num = +prompt(`Введiть число вiд - 100 до 100`);
// let result = num === 0 ? 'число НУЛЕВЕ' : num > 1 ? 'число ПОЗИТИВНЕ' : num < -1 ? 'число НЕГАТИВНЕ' :  'НЕ ПОЗИТИВНЕ';
// document.write(result);