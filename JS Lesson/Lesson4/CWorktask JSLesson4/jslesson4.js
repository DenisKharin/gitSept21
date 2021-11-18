// - створити функцію яка приймає три числа та виводить найменьше.
//   (Без Math.min!)

// function minNums(a, b, c) {
//     if (a < b && c > a || a < b && b > c) {
//         document.write(`Найменьше число з ${a}, ${b} i ${c} - це ${a}`);
//     } else if (a > b && b > c || a > c && a < b) {
//         document.write(`Найменьше число з ${a}, ${b} i ${c} - це ${c}`);
//     } else if (a > b && c > b || a < c && a > b) {
//         document.write(`Найменьше число з ${a}, ${b} i ${c} - це ${b}`);
//     }
//     return;
// }
//
// let a = +prompt(`Введiть число А...`);
// let b = +prompt(`Введiть число B...`);
// let c = +prompt(`Введiть число C...`);
// minNums(a, b, c);

// - створити функцію яка приймає три числа та виводить найбільше.
//   (Без Math.max!)

// function maxNums(a, b, c) {
//    if (a > b && b > c || a > c && c > b) {
//        document.write(`Найбiльше число з ${a}, ${b} i ${c} - це ${a}`);
//    } else if (a < b && b > c || a > c && b > a) {
//        document.write(`Найбiльше число з ${a}, ${b} i ${c} - це ${b}`);
//    } else if (a > b && b < c || a < b && c > a) {
//        document.write(`Найбiльше число з ${a}, ${b} i ${c} - це ${c}`);
//    }
//    return;
// }
// let a = +prompt(`Введiть число А...`);
// let b = +prompt(`Введiть число B...`);
// let c = +prompt(`Введiть число C...`);
// maxNums(a, b, c);


// - створити функцію яка повертає найбільше число з масиву

// let arr = [456, 0, 23, 3850,-34, 2435, 3.1415, 378, 888];
// let dat = 0;
// function maxNumsArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= dat) {
//             dat = arr[i];
//         }
//     }
//     return dat;
// }
// maxNumsArr(arr);
// document.write(`Hайбільше число з масиву  ${dat}`);

// - створити функцію яка повертає найменьше число з масиву

// let arr = [456, 0, 23, 3850,-34, 2435, 3.1415, -378, 888];
// let dat = 0;
// function minNumsarr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= dat) {
//             dat = arr[i];
//         }
//     }
//     return dat;
// }
// minNumsarr(arr);
// document.write(`Hайменьше число з масиву  ${dat}`);

// - створити функцію яка приймає масив чисел, сумує значення елементів
//   масиву та повертає його. Приклад [1,2,10]->13

// let arr = [456, 0, 23, 3850,-34, 2435, 3.1415, -378, 888];
// let resultSum = 0;
// function sumArr(arr) {
//     for (const element of arr) {
//         resultSum = resultSum + element;
//     }
//     return resultSum;
// }
// document.write(`Сумарне значення елементів масиву ` + sumArr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє
//   арифметичне його значень.

// let arr = [456, 0, 23, 3850,-34, 2435, 3.1415, -378, 888];
// let perem = 0;
// function srArifmeticsArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        perem  = perem + arr[i];
//     }
//     let result = perem / arr.length;
//     return result;
// }
// document.write(`Cереднє арифметичне значення елементів масиву ` + srArifmeticsArr(arr));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//   а виводить найбільше (Math використовувати заборонено);

// let nums = [456, 0, 23, 3850,-34, 2435, 3.1415, -378, 888];
// function minNums (nums) {
//     let min = nums[0];
//     let max = nums[0];
//     for (const element of nums) {
//         if (element < min) {
//             min = element;
//         }
//         if (element > max) {
//             max = element;
//         }
//     }
//     console.log(`Найбільше число масиву ${max}`);
//     return min;
// }
// document.write(`Найменьше число масиву ${minNums(nums)}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 -
//  Math.round(Math.random()*100)) та виводить його.

// let forArr = [];
// function plusArrValue(forArr) {
//     for (let i = 0; i < 10; i++) {
//         forArr[i] = Math.floor(Math.random()*50);
//     }
//     return forArr;
// }
// plusArrValue(forArr);
// console.log(forArr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні
//   від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
//
// function randomiser(arr, limit) {
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
// let limit = +prompt(`Введiть лiмiт рандомних чисел вiд 0 до ...`);
// randomiser(arr, limit);
// console.log(arr);

// - Функція приймає масив та робить з нього новий масив в зворотньому
//   порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2, 3];
// let newArr = [];
// function backNewArr(arr) {
//
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const arrElement = arr[i];
//         newArr.push(arrElement);
//     }
//     return newArr;
// }
// backNewArr(arr);
// console.log(arr);
// console.log(newArr);


