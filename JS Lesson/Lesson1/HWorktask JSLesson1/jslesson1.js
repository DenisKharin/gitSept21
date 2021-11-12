// 1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a, b;
// a = "hello ";
// b = "owu ";
//
// alert(a);
// alert (b);
// console.log(a, b);
// document.write(a, b);

// 2. Переприсвоїти кожній змінній з завдання значення на довільне.

// a = "new season ";
// b = "September 2021 JS ";

// 3. Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// alert(a);
// alert(b);
// console.log(a, b);
// document.write(a, b);

// 4. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//   З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = "Фамилия ";
let middleName = "Имя ";
let lastName = "Отчество";
let person = firstName + middleName + lastName;
document.write(person);

// 5. За допомогою 3х різних prompt() отримати 3 слова які являються вашими
//   Імям, По-Батькові та роками.
//
// let name = prompt('Please ENTER your NAME:');
// let lastName = prompt ('Please ENTER your LASTNAME:');
// let age = prompt('Please ENTER your AGE:');

//  6.  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
// document.write("Вітаю " + name + " " + lastName + "! Тобі - " + age + " роки");

// 7. За допомогою оператора typeof визначити типи наступних змінних та
//   вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// let a = 100; let b = '100'; let c = true;
// console.log(typeof a, typeof b, typeof c);

// or

// console.log(a + " - це тип змінної - " + typeof a);
// console.log(b + " - це тип змінної - " + typeof b);
// console.log(c + " - це тип змінної - " + typeof c);

// 8. Визначити відповідний оператор в виразах щоб вийшов відповідний результат.
//    В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true             !=
// 5 ? 6 -> false             >
// 5 ? 6 -> false            >=
// 5 ? 6 -> false            ==, ===
// 10 ? 10 -> true           ===
// 10 ? 10 -> true           ==
// 10 ? 10 -> false          !=
// 10 ? 10 -> false          !==
// 10 ? 10 -> false          <, >
// 123 ? '123' -> false      ===
// 123 ? '123' -> true       ==
//
// 9. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?
//    и почему?
//    let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");     205 (бо це стрiнга i 5 - конкатинацiя, запис який об'эднюэ змiннi i все)
// document.write(str - a + "<br/>");     15
// document.write(str * "2" + "<br/>");   40
// document.write(str / 2 + "<br/>");     10