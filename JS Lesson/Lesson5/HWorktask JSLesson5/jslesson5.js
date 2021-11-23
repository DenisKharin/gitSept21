// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let rectangleArea = (a, b) => a * b;
// console.log(rectangleArea(5, 4));

// - створити функцію яка обчислює та повертає площу кола

// let circleArea = (r) => Math.PI * Math.pow(r, 2);
// console.log(circleArea(5));

// - створити функцію яка обчислює та повертає площу циліндру

// let cylinderArea = (r, h) => 2 * Math.PI * r * (h + r);
// console.log(cylinderArea(1.5, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [123, 'srtreet', true, -435, 'OKTEN'];
// let printArr = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// };
// printArr(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let createParagraffWithText = (text) => document.write(`<p>${text}</p>`);
// let text = prompt(`Введiть довiльгий текст`);
// createParagraffWithText(text);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через
//   аргумент всім однаковий

// let argumentsUl = (text) => {
//     document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// let text = prompt(`Введiть довiльгий текст`);
// argumentsUl(text);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати
//   через аргумент всім однаковий. Кількість li визначається другим аргументом,
//   який є числовим (тут використовувати цикл)

// 1-й варiант
// let quantityArgumentsUl = (limit, text) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < limit; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// let limit = +prompt(`Введiть число елементв UL`);
// let text = prompt(`Введiть довiльгий текст`);
// quantityArgumentsUl(limit,text);

// 2-й варiант
// let quantityArgumentsUl = (limit, text) => {
//     document.write(`<ul>`);
//     function rec(i) {
//         i++;
//         document.write(`<li>${text}</li>`);
//         if (i === limit) {
//             return;
//         }
//         rec(i);
//     }
//     rec(0);
//     document.write(`</ul>`);
// }
// let limit = +prompt(`Введiть число елементв UL`);
// let text = prompt(`Введiть довiльгий текст`);
// quantityArgumentsUl(limit,text);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//   та будує для них список

let arrElements = [234125, true, 'OKTEN', 32456, false];

let printListElementsArroy = (arrElements) => {
    document.write(`<ul>`);
    for (const index of arrElements) {
        document.write(`<li>${index}</li>`);
    }
    document.write(`</ul>`);
}
printListElementsArroy(arrElements);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
//   та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arrUsers = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28}
// ];
// console.log(arrUsers);
// let printArrayObjects = (arrUsers) => {
//     for (let i = 0; i < arrUsers.length; i++) {
//         let keys = arrUsers[i];
//         for (const key in keys) {
//             document.write(`<div>${key} ${keys[key]}</div>`);
//             console.log(`${key} ${keys[key]}`);
//         }
//         document.write(`<br>`)
//     }
// }
// printArrayObjects(arrUsers);
