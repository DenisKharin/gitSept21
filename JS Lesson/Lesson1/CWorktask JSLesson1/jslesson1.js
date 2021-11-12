// 1. Створити масив з 10 чисел (можна використовувати
//    Math.random Та Math.floor). Скласти результат цих чисел
//    в змінній result.

let arrNumber = [13, 7, 25.3, 46, 98, 74.075, 21, 62, 88, 45];
let result = arrNumber[0] + arrNumber[1] +
    arrNumber[2] + arrNumber[3] + arrNumber[4] +
    arrNumber[5] + arrNumber[6] + arrNumber[7] +
    arrNumber[8] + arrNumber[9];
console.log (`"результат чисел масиву " ${result}`);

// 2. Створити об'єкт book з наступними полями  -
//    назва, кількість сторінок, жанр

let  book1 = {
    title: 'Кобзар',
    pages: 300,
    genre: 'поезiя'
};
console.log(book1);

// 3. Створити об'єкт book з наступними полями  -
//    назва, кількість сторінок, жанр, автори

let book2 = {
    title: 'Енеiда',
    pages: 150,
    genre: 'поезiя',
    authors: 'Котляревський'
};
console.log(book2);

// 4. Створити маис об'єктів book з наступними полями  -
//    назва, кількість сторінок, жанр, автори.
//    Вивести кожну книгу як окремий об'єкт

let arrBooks = [book1, book2];
console.log(arrBooks[book1], arrBooks[book1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let p = height * width;
console.log ("Площа прямокутника " + p + " см^2");

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

// Формула 1/3 пи R^2 h

let heightC = 10;
let dC = 4;
let R = dC/2;
let v = 1/3 * 3.1415 * math.pow (R, 2) * heightC;
console.log ("об'єм циліндра " + v + " m^3");

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let result = math.pow (3, 2) + math.pow (4, 2);
    k = math.sqrt (result);

console.log ("гіпотенуза k = " + k );