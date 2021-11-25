// 1 Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// let defineLengthString = (str1) => {
//     document.write(`<div>Ця стрiнга: ${str1} - маэ довжину ${str1.length}</div>`);
// }
//
// defineLengthString(str1);
// defineLengthString(str2);
// defineLengthString(str3);


// 2 Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// let createNewStringInUpperCase = (str1) => {
//     document.write(`<div>Ця стрiнга: ${str1}<br>великим регiстром ${str1.toUpperCase()}</div><br>`);
// }
// createNewStringInUpperCase(str1);
// createNewStringInUpperCase(str2);
// createNewStringInUpperCase(str3);

// 3 Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// let createNewStringInLowerCase = (str1) => {
//     document.write(`<div>Ця стрiнга: ${str1}<br>малим регiстром - ${str1.toLowerCase()}</div><br>`);
// }
// createNewStringInLowerCase(str1);
// createNewStringInLowerCase(str2);
// createNewStringInLowerCase(str3);

// 4 Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// document.write(`${str} - довжина (${str.length})<br>`);
// let trim = str.trim();
// document.write(`А пiсля чистки вiд зайвих пробiлiв методом .trim - ${trim}<br>довжина - (${trim.length})<br>`);


// 5 Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// document.write(`string: ${str}<br>`);
// let createFunkReturnArrayString = (str) => {
//     let arr = str.split(' ');
//     console.log(arr);
//     document.write(`array: ${arr} <br>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`iндекс масиву ${i} - значення - ${arr[i]}<br>`);   // ['Каждый', 'охотник', 'желает', 'знать']
//         console.log(arr[i]);
//     }
// }
// createFunkReturnArrayString(str);

// 6 Напишіть функцію delete_characters(str, length), яка повертає підрядок,
//   що складається із зазначеної кількості символів.
//   let str = 'Каждый охотник желает знать';
//   document.writeln(delete_characters(str, 7)); // Каждый


// let str = 'Каждый охотник желает знать';
// document.write(str + ` - ця змiнна э ${typeof (str)}<br> щоб вивести пiдрядок данноi стрiнги<br>`);

// 1-й варiант:
// let deleteCharacters = (str) => {
//     let arrStr = str.split(' ');
//     let arrIndexToString = arrStr[0].toString();
//     document.write(`${arrIndexToString} - ${typeof (arrIndexToString)}`);
// }
// deleteCharacters(str);

// 2-й варiант:
// let str = 'Каждый охотник желает знать';
// document.write(str + ` - ця змiнна э ${typeof (str)}<br>пiдрядок данноi стрiнги<br>`);
// let indexStr = +prompt(`ВВЕДIТЬ з 0-го по який INDEX включно:`);
// let length = indexStr + 1;
// let deleteCharacters = (str, length) => {
//     let result = str.substring(0, length);
//     document.write(`<br>RESULT : ${result}`);
//     return result;
// }
// console.log(deleteCharacters(str, length));

// 7 Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і
//   вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести
//   у верхній регістр.
//   let str = "HTML JavaScript PHP";
//   document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// document.write(str + ` <br>ця змiнна э ${typeof (str)}<br><br>`);
// let insertDash = (str) => {
//     let transformStr = str.toUpperCase();
//     document.write(`символи рядка переведенi у верхній регістр:<br>${transformStr}`);
//     document.write(`<br>а тепер замiсть ' ' ми вставляємо тире (-):<br>`);
//     let replaseTransformStr = transformStr.replaceAll(' ', '-');
//     document.write(replaseTransformStr);
// }
// insertDash(str);

// 8 Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого
//   символу рядка з нижнього регістру у верхній.

// let str = `kаждый охотниk желает знать`;
// document.write(str + ` <br>ця змiнна э ${typeof (str)}<br>`);
//
// let transformFirstLetterRegistr = (str) => {
//     let transformSting = str[0].toUpperCase() + str.slice(1);
//     document.write(`<br>Зараз функція, перетворює регістр першого символу рядка з нижнього регістру у верхній:<br><br>${transformSting}`);
//     return transformSting;
// }
// transformFirstLetterRegistr(str);


// 9 Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово
//   починається з великої літери.

// let str = `kаждый охотниk желает знать`;
// document.write(str + ` <br>ця змiнна э ${typeof (str)}<br><br>`);
// let capitalize = (str) => {
//     let arrayStr = str.split(' ');
//     console.log(arrayStr);
//     document.write(`<br>Зараз функція, перетворює рядок, у якому кожне слово починається з великої літери:<br><br>`);
//     for (let i = 0; i < arrayStr.length; i++) {
//         arrayStr[i] = arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].slice(1);
//         console.log(arrayStr[i]);
//         document.write(`${arrayStr[i]} `);
//     }
// }
// capitalize(str);