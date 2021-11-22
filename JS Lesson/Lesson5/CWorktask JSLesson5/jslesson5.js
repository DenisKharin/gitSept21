// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let a = +prompt(`Введiть перше число А:`);
// let b = +prompt(`Введiть друге число B:`);
// let c = +prompt(`Введiть третэ число C:`);
//
// let leastNumbersFromThree = (a, b, c) => {
//     if (a > b && b > c || a < b && a > c) {
//         document.write(`Найменьше з ${a}, ${b}, та ${c} - це ${c}`)
//     }
// }
// leastNumbersFromThree(a,b,c);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let a = +prompt(`Введiть перше число А:`);
// let b = +prompt(`Введiть друге число B:`);
// let c = +prompt(`Введiть третэ число C:`);
//
// let greatestNumbersFromThree = (a, b, c) => {
//     if (a > b && b > c || a > c && b < c) {
//         document.write(`Найбiльше з ${a}, ${b}, та ${c} - це ${a}`);
//     }
// }
// greatestNumbersFromThree(a, b, c);

// - створити функцію яка повертає найбільше число з масиву

// let arrNums = [234, 45356, -452, 86732, 3455, 4676,532];
// let greatestNumFromArrow = (arrNums) => {
//     let num = 0;
//     for (let i = 0; i < arrNums.length; i++) {
//         if (num < arrNums[i]) {
//             num = arrNums[i];
//         }
//     }
//     console.log(`найбільше число з масиву - ${num}`);
//
// }
// greatestNumFromArrow(arrNums);

// - створити функцію яка повертає найменьше число з масиву

// let arrNums = [234, 45356, -452, 86732, 3455, 4676,532];
// let leastNumFromArrow = (arrNums) => {
//     let num = 0;
//     for (let i = 0; i < arrNums.length; i++) {
//         if (arrNums[i] < num) {
//             num = arrNums[i];
//         }
//     }
//     console.log(`найменьше число з масиву - ${num}`);
// }
// leastNumFromArrow(arrNums);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та
//   повертає його. Приклад [1,2,10]->13

// let arrNums = [234, 45356, -452, 86732, 3455, 4676,532];
// let sumNumbersOfArrow = (arrNums) => {
//     let sum = 0;
//     for (const index of arrNums) {
//         sum = sum + index;
//     }
//     console.log(`сумарне значення елементів масиву ${sum}`);
// }
// sumNumbersOfArrow(arrNums);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його
//   значень.

// let arrNums = [234, 45356, -452, 86732, 3455, 4676, 532];
//
// let meanarifNumsOfArrow = (arrNums) => {
//     let sumNumbers = 0;
//
//     function rec(i) {
//         sumNumbers = sumNumbers + arrNums[i];
//         i++;
//         if (i === arrNums.length) {
//             return sumNumbers = sumNumbers / arrNums.length;;
//         }
//         rec(i);
//     }
//     rec(0);
//     return sumNumbers;
// }
// console.log(`середнє арифметичне чисел масиву - ${meanarifNumsOfArrow(arrNums)}`);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а
//   виводить найбільше (Math використовувати заборонено);

// let nums = +prompt(`Введiть кiлькiсть ЧИСЕЛ яких треба стволрити РАМДОМНО:`);
//
// let acceptRandNumsPrintLeastAndEnterGreatest = (nums) => {
//     let arrRandomNums = [];
//     for (let i = 0; i < nums; i++) {
//         arrRandomNums[i] = Math.floor(Math.random() * 777);
//     }
//     document.write(`Ви вибрали ${nums} рандомних чисел - ${arrRandomNums}`);
//     let minNumbers = arrRandomNums[0];
//     let copyArr=[];
//     for (let j = 0; j < arrRandomNums.length; j++) {
//         copyArr[j] = arrRandomNums[j];
//         if (minNumbers > arrRandomNums[j]) {
//             minNumbers = arrRandomNums[j];
//         }
//     }
//     document.write(`<br>найменьше з них - це ${minNumbers}`);
//     let maxNumbers = copyArr[0];
//     for (let k = 0; k < copyArr.length; k++) {
//         if (maxNumbers < copyArr[k]) {
//             maxNumbers = copyArr[k];
//         }
//     }
//     document.write(`<br>а найбiльше з них - це ${maxNumbers}`);
// }
//
// acceptRandNumsPrintLeastAndEnterGreatest(nums);

// - створити функцію яка заповнює масив рандомними числами
//   (цей код генерує рандомні числа в діапазоні від 0 до 100 -
//   Math.round(Math.random()*100)) та виводить його.

// let randomArr = [];
// let nums = +prompt(`Введiть кiлькiсть ЧИСЕЛ яких треба стволрити РАМДОМНО:`);
// let acceptRandomNunsInArrow = (nums) => {
//     document.write(`<div>кiлькiсть ЧИСЕЛ в масивi - ${nums} (вiд 0 до 100)</div>`);
//     let randomArr = [];
//     for (let i = 0; i < nums; i++) {
//         randomArr[i] = Math.round(Math.random()*100);
//         document.write(`${i+1}-e це: ${randomArr[i]}<br>`);
//     }
// }
// acceptRandomNunsInArrow(nums);


// - створити функцію яка заповнює масив рандомними числами в
//   діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве
//   значення діапазону.

// let nums = +prompt(`Введiть кiлькiсть ЧИСЕЛ яких треба створити РАМДОМНО:`);
// let limit = +prompt(`Введiть LIMIT рандомних чисел вiд 0 до ...`);
// let acceptLimitRandomNumsForArrow = (nums) => {
//     let newArrow = [];
//     document.write(`<div>кiлькiсть ЧИСЕЛ в масивi - ${nums} (вiд 0 до ${limit})</div>`);
//     for (let i = 0; i < nums; i++) {
//         newArrow[i] = Math.round(Math.random()*limit);
//         document.write(`${i+1}-e це: ${newArrow[i]}<br>`);
//     }
// }
// acceptLimitRandomNumsForArrow(nums);

// - Функція приймає масив та робить з нього новий масив в зворотньому
//   порядку. [1,2,3] -> [3, 2, 1].

// let arr1 = [1,2,3];
// let reverseArrow = (arr1) => {
//     let arr2 = [];
//     for (let i = arr1.length - 1; i >= 0; i--) {
//         arr2.push(arr1[i]);
//     }
//     return arr2;
// }
// console.log(arr1);
// console.log(reverseArrow(arr1));


