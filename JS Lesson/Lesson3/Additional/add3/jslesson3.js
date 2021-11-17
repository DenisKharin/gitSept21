// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let arrNew = [];
// let k;
// for (let i = 0, k = 0; i < 100; i++, k++) {
//     if (k % 2 === 0) {
//         arrNew[i] = k;
//     }
// }
// console.log(arrNew);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let arrNew = [];
// let k;
// for (let i = 0, k = 0; i < 100; i++, k++) {
//     if (k % 2 !== 0) {
//         arrNew[i] = k;
//     }
// }
// console.log(arrNew);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arrNew = [];
// let num;
// for (let i = 0; i < 20; i++) {
//     num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//     arrNew[i] = num;
// }
// console.log(arrNew);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arrNew = [];
// let num;
// for (let i = 0; i < 20; i++) {
//     num = Math.floor(Math.random() * (732 - 8)) + 8;
//     arrNew[i] = num;
// }
// console.log(arrNew);

// 2. Вивести за допомогою console.log кожен третій елемен

// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 2; i <= nums.length; i += 3) {
//     console.log(nums[i]);
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо
//    цей елемент є парним.

// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 2; i <= nums.length; i += 3) {
//     if (nums[i] % 2 === 0) {
//         console.log(nums[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей
//    елемент є парним та записати їх в новий масив

// let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18, 2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let newNums = [];
// for (let i = 2; i <= nums.length; i += 3) {
//     if (nums[i] % 2 === 0) {
//         newNums.push(nums[i]);
//     }
// }
// console.log(newNums);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// let nums = [2, 17, 13, 45, 66, 100, -18, 3, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i <= nums.length; i++) {
//     let x = nums[i+1];
//     if (x % 2 === 0) {
//         console.log(nums[i]);
//     }
// }

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let exp = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i <= exp.length; i++) {
//     if (exp[i] === 1 || exp[i] === 9 || exp[i] === 56) {
//         console.log(exp[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// 1-й варiант
// let check = [100,250,50,168,120,345,188];
// let sum = 0;
// for (const number of check) {
//     sum += number;
// }
// console.log(Math.round(sum/check.length));

// 2-й варiант
// let check = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < check.length; i++) {
//     sum += check[i];
// }
// console.log(Math.round(sum/check.length));


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arrRandom = [];
// let arrMult = [];
// let index;
// for (let i = 0; i < 10; i++) {
//     index = Math.floor(Math.random() * (10 - 1)) + 1;
//     arrRandom.push(index);
//     arrMult.push(index*5);
//
// }
// console.log(arrRandom);
// console.log(arrMult);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arrow = [126, false, 'OKTEN', 32, 'WEB', true, 912, -1213, null];
// console.log(arrow);
// let arrNums = [];
// for (const step of arrow) {
//     if (typeof (step) === "number") {
//         arrNums.push(step);
//     }
// }
// console.log(arrNums);

//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let arrUserCities = [];
//
// for (const useW in usersWithId) {
//     for (const citiesW in citiesWithId) {
//         if (useW.id == citiesW.user_id) {
//             arrUserCities = useW;
//         }
//     }
// }
// console.log(arrUserCities);

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arrNums = [];
// for (let i = 0; i < 10; i++) {
//     let random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//     arrNums.push(random);
//     if (random % 2 ===0) {
//         console.log(random);
//     }
// }
// console.log(arrNums);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let nums = [];
// let copyNums = [];
// let ist;
// let i = 0;
// while (i < 10) {
//     ist = Math.floor(Math.random() * (300 - 1 + 1)) + 1;
//     nums.push(ist); copyNums.push(ist);
//     i++;
// }
// console.log(nums);
// console.log(copyNums);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arrAbc = [ 'a', 'b', 'c'];
// let row = '';
// for (let i = 0; i < arrAbc.length; i++) {
//       row = row + arrAbc[i];
// }
// console.log(row);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arrAbc = [ 'a', 'b', 'c'];
// let word = '';
// let i = 0;
// while (i < arrAbc.length) {
//     word = word + arrAbc[i];
//     i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arrAbc = [ 'a', 'b', 'c'];
// let string = '';
// for (const letters of arrAbc) {
//     string = string +letters;
// }
// console.log(string);