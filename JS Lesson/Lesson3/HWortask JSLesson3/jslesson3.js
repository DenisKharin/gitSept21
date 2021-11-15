// 1 створити масив з:
//     - з 5 числових значень
//     - з 5 стічкових значень
//     - з 5 значень стрічкового, числового та булевого типу
//     - та вивести його в консоль

// let arrNum = [31, 107, 78, 54, -32];
// console.log(arrNum);
// let arrStr = ['Group', 'September', '2021', 'JavaScript', 'Complex'];
// console.log(arrStr);
// let arrAsorty = [true, 81, 'Ukraine', -5, 'Infinity'];
// console.log(arrAsorty);

// 2 Створити пустий масив. Наповнити його будь-якими значеннями
//   звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr.push('begin');
// arr.push(true);
// arr.push(45);
// console.log(arr);

//  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
// document.write(`block DIV c довільним текстом <br>`);
// }

//  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`block DIV - ${i + 1} c довільним текстом <br>`);
// }

//  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>block h1 c довільним текстом</h1>`);
//     i++;
// }

//  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>block h1 - ${i + 1} c довільним текстом</h1>`);
//     i++;
// }

//  - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1234, 4523, 4556, 745, 12, 578,80, 123, 356, 790];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

//  - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let areStr = ['Absolut','Rodeo','BMW','Dior','Bird','Fox','Tiger','Wild','Circus','Lesson'];
// for (let i = 0; i < areStr.length; i++) {
//     console.log(areStr[i]);
// }

//  - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrStep = [123, false, 'Denis', -867, null, 'Street 76', 49, true, 98765, 'GAMER'];
// for (let i = arrStep.length - 1; i >= 0; i--) {
//     const mix = arrStep[i];
//     console.log(mix);
// }

//  - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [true, 89, false, 'Show', 54, 'Most', 'GO ON', 7675, 'JavaScript', null];
// for (const arrElement of arr) {
//     if (typeof (arrElement) === "boolean") {
//         console.log(arrElement);
//     }
// }

//  - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// 1-й варiант
// let arr = [true, 89, false, 'Show', 54, 'Most', 'GO ON', 7675, 'JavaScript', null];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof (arr[i]) === "number") {
//         console.log(arr[i]);
//     }
// }
// 2-й варiант
// let arr = [true, 89, false, 'Show', 54, 'Most', 'GO ON', 7675, 'JavaScript', null];
// for (const arrElement of arr) {
//     if (typeof (arrElement) === "number") {
//         console.log(arrElement);
//     }
// }

//  - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [true, 89, false, 'Show', 54, 'Most', 'GO ON', 7675, 'JavaScript', null];
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     if (typeof (arrElement) === "string") {
//         console.log(arrElement);
//     }
// }

//  - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через
//    звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrVoid = [];
// for (let i = 0; i < 10; i++) {
//     let index = +prompt(`Введiть рандомне ЧИСЛОВЕ значення`);
//     arrVoid.push(index);
//     console.log(`${i} - ` + index);
//     i++;
//     let str = prompt(`Введiть рандомне СТРИНГОВЕ значення чи NULL натиснув ВIДМIНА `);
//     arrVoid.push(str);
//     console.log(`${i} - ` + str);
//     i++;
// }

//  - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку
//    через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`крок iтерацii ${i + 1}`);
//     document.write(`<div>крок iтерацii ${i + 1}</div>`);
// }

//  - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку
//    через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`крок iтерацii ${i + 1}`);
//     document.write(`<div>крок iтерацii ${i + 1}</div>`);
// }

//  - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку
//    через console.log та document.write

// for (let i = 0; i < 100; i = i + 2) {
//     console.log(`крок iтерацii ${i + 1}`);
//     document.write(`<div>крок iтерацii ${i + 1}</div>`);
// }

//  - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через
//    console.log + document.write

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`парний крок ${i}`);
//         document.write(`<div>парний крок ${i}</div>`);
//     }
// }

//  - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.
//    через console.log + document.write

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(`не парний крок ${i}`);
//         document.write(`<div>не парний крок ${i}</div>`);
//     }
// }