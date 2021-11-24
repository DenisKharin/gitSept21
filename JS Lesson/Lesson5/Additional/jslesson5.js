// - Дано натуральное число n. Выведите все числа от 1 до n.

// let n = +prompt(`Введiть яке забажаэте натуральне число - N:`);
//
// let printNumsInsideForSecondVariable = (n) => {
//     document.write(`Ви ввели натуральне число - ${n}<br>`);
//     document.write(`А ось всi числа вiд 1-цi до ${n}:<br>`)
//     for (let i = 1; i < n; i++) {
//         document.write(`${i} числo це - ${i};<br>`);
//     }
// }
// printNumsInsideForSecondVariable(n);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в
//   порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let variableA = +prompt(`Введiть значення - А:`);
// let variableB = +prompt(`Введiть значення - B:`);
// let printNumsInsideForSecondVariable = (variableA, variableB) => {
//      if (variableA < variableB) {
//          document.write(`Ви ввели значення А - ${variableA}<br>`);
//          document.write(`i значення В - ${variableB}<br>`);
//          document.write(`Мiж ${variableA} i ${variableB} такi числа:<br>`);
//          for (variableA; variableA < variableB - 1; variableA++) {
//              document.write(`${variableA + 1}<br>`)
//          }
//      } else if (variableA > variableB) {
//          document.write(`Ви ввели значення А - ${variableA}<br>`);
//          document.write(`i значення В - ${variableB}<br>`);
//          document.write(`Мiж ${variableA} i ${variableB} такi числа:<br>`);
//          for (variableA - 1; variableA > variableB + 1; variableA--) {
//              document.write(`${variableA - 1}<br>`);
//          }
//      } else {
//          document.write(`Щось пiшло НЕ ТАК !!!`);
//      }
// }
// printNumsInsideForSecondVariable(variableA, variableB);

// - функція Приймає масив та число "i", та міняє місцями об`єкт який
//   знаходиться в індексі "i" на "i+1"
//
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let swapIndexInArrayAndConnotationVariable = (arr, num) => {
//     document.write(`Були введенi такi даннi:<br>${arr}, ${num}<br>`);
//     for (let i = 0; i < arr.length; i++) {
//         if (i === num) {
//             let variableIndex = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = variableIndex;
//         }
//     }
//     document.write(`<div>Пiсля замiни мiсцями iндексiв ${num} i ${num + 1} у массивi маэмо такий результат:<br>${arr}</div><br>`);
// }
// swapIndexInArrayAndConnotationVariable([9, 8, 0, 4], 0);
// swapIndexInArrayAndConnotationVariable([9,8,0,4], 1);
// swapIndexInArrayAndConnotationVariable([9,8,0,4], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//   Зберігаючи при цьому порядок не нульових значень.
//   Двожина масиву від 2 до 100
//   EXAMPLE:
//   [1,0,6,0,3] => [1,6,3,0,0]
//   [0,1,2,3,4] => [1,2,3,4,0]
//   [0,0,1,0]   => [1,0,0,0]

// let arr1 = [1,0,6,0,3];
// let arr2 = [0,1,2,3,4];
// let arr3 = [0,0,1,0];
//
// let indexMigrationInEndArray = (arr1) => {
//     console.log(`--------`);
//     console.log(`original array: ${arr1}`);
//     let newArr = []; let delArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] === 0) {
//             delArr.push(arr1[i]);
//         } else {
//             newArr.push(arr1[i]);
//         }
//     }
//     for (let j = 0; j < delArr.length; j++) {
//         newArr.push(delArr[j]);
//     }
//     console.log(newArr);
// }
// indexMigrationInEndArray(arr1);
// indexMigrationInEndArray(arr2);
// indexMigrationInEndArray(arr3);