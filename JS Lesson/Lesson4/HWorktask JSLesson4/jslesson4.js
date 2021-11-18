// - створити функцію яка обчислює та повертає площу прямокутника зі
//   сторонами а і б
//
// function  triangleАrea(a, b) {
//     let result = a * b;
//     return result;
// }
// let a = +prompt(`Введiть A - вистоту прямокутника`);
// let b = +prompt(`Введiть B - довжину прямокутника`);
//
// let place = triangleАrea(a, b);
// console.log(place);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleArea (radius) {
//     let result = 3.1415 * Math.pow(radius, 2);
//     return result;
// }
// let radius = +prompt(`Введiть R - радiус кола`);
// let circle = circleArea(radius);
// console.log(circle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та
// радіутом r (2 пи R (h + R))

// function cylindeArea(h, r) {
//     let result = 2 * 3.1415 * r * (h + r);
//     return result;
// }
// let h = +prompt(`Введiть H - висоту цидiндра`);
// let r = +prompt(`Введiть R - радiус цидiндра`);
// let ist =  cylindeArea(h, r);
// console.log(ist);

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrEnter(arrow) {
//     for (let i = 0; i < arrow.length; i++) {
//         console.log(arrow[i]);
//     }
// }
// let arrow = [123, 'srt', null, -34, true, 'OKTEN'];
// arrEnter(arrow);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createParagraf(text) {
//     document.write(`<p> ${text} </p>`);
//     return;
// }
// let text = prompt(`Введiть довiльний текст...`);
// createParagraf(text);

// - створити функцію яка створює ul з трьома елементами li.
//   Текст li задати через аргумент всім однаковий

// function ulCreate (liText) {
//     document.write(`<ul>`);
//         document.write(`<li> ${liText} </li>`);
//         document.write(`<li> ${liText} </li>`);
//         document.write(`<li> ${liText} </li>`);
//     document.write(`</ul>`);
//     return;
// }
// let liText = prompt(`Введiть довiльний текст`);
// ulCreate(liText);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати
//   через аргумент всім однаковий. Кількість li визначається другим аргументом,
//   який є числовим (тут використовувати цикл)

// function ulCreate(liText, liSize) {
//     document.write(`<p>`);
//     for (let i = 0; i < liSize; i++) {
//         document.write(`<li> ${liText} </li>`);
//     }
//     document.write(`</p>`);
//     return;
// }
// let liText = prompt(`Введiть довiльний текст`);
// let liSize = +prompt(`Введiть число елементiв UL`);
// ulCreate(liText, liSize);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//   та будує для них список

// function enterArrow(arr) {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li> ${arr[i]} </li>`);
//     }
//     document.write(`</ul>`);
//     return;
// }
// let arr = [234656, "string", true, 'OKTENWEB', null, 'UNIVERSITY', 2021];
// enterArrow(arr);

// - створити функцію яка приймає масив
//   об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

// function objArrow(arr) {
//     for (const user of arr) {
//     document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
//     return;
// }
// let arr = [
//     {
//         id: 1,
//         name: 'Denis',
//         age: 44,
//     },
//     {
//         id: 2,
//         name: 'Tanja',
//         age: 43,
//     },
//     {
//         id: 3,
//         name: 'Ilija',
//         age: 16,
//     },
//     {
//         id: 4,
//         name: 'Timofej',
//         age: 13,
//     }
// ];
// objArrow(arr);