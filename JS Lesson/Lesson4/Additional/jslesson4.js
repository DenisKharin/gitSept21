// - створити функцію, яка якщо приймає один аргумент,
//   просто вивдоить його, якщо два аргументи - складає або
//   конкатенує їх між собою.

function concatArg() {
    // ПЕРЕРОБЛЕНИЙ
    if (arguments.length > 1) {
        let newStr = `${arguments[0]}  ${arguments[1]}`;
        document.write(newStr);
    } else {
        let newStr = arguments[0];
        document.write(newStr);
    }
                             //     ПОМИЛКОВИЙ
                             //     for (let i = 0; i < arguments.length; i++) {
                             //     if (i < 1) {
                             //        let str = `${arguments[i]} `;
                             //        document.write(str);
                             //     }
                             //     if (i > 0) {
                             //         document.write(`${arguments[i]} `);
                             //     }
                             // };
    return;
}
let variable = +prompt(`Введiть кiлькiсть АРГУМЕНТIВ якi ви будете вводити - 1 чи 2`);
if (variable === 1) {
    let arg = prompt(`Введiть будь яке "стрiнгове" значенння`);
    concatArg(arg);
} else if (variable === 2) {
    let arg = prompt(`Введiть 1-е будь яке "стрiнгове" значенння`);
    let arg2 = prompt(`Введiть 2-е будь яке "стрiнгове" значенння`);
    concatArg(arg, arg2);
} else if (variable !== 1 || variable !== 2) {
    document.write(`Вибачте!!! Але щось пiшло не так...`);
}

// - створити функцію  яка приймає два масиви та скаладає значення
//   елементів з однаковими індексами  та повертає новий результуючий
//   масив.

//   EXAMPLE:
//       [1,2,3,4]
//       [2,3,4,5]
//   результат
//       [3,5,7,9]

// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// console.log(arr1);
// console.log(arr2);
// function sumIndexArrows(arr1, arr2) {
//     let sumArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i === j) {
//                 sumArr.push(arr1[i] + arr2[j]);
//             }
//         }
//     }
//     return sumArr;
// }
// console.log(sumIndexArrows(arr1, arr2));


// - Створити функцію яка приймає масив будь яких объектів, та
//   повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima'}, {age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arrObjects = [{name: 'Dima'}, {age: 13}, {model: 'Camry'}];
// console.log(arrObjects);
//
// function returnArrObjetKeys(arrObject) {
//     let newArrObject = [];
//     for (let i = 0; i < arrObjects.length; i++) {
//         for (const key in arrObjects[i]) {
//             newArrObject[i] = key;
//         }
//     }
//     return newArrObject;
// }
//
// console.log(returnArrObjetKeys(arrObjects));

//  - Створити функцію яка приймає масив будь яких объектів,
//    та повертає масив значень всіх обєктів
//    EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let arrObjects = [{name: 'Dima'}, {age: 13}, {model: 'Camry'}];
//
// function returnArrObjectIndex(arrObjects) {
//     let newArrObjectKeys = [];
//     let counter = 0;
//     for (i = 0; i < arrObjects.length; i++) {
//         let keys = arrObjects[i];
//         for (const keysIndex in keys) {
//             newArrObjectKeys[counter] = keys[keysIndex];
//             counter++
//         }
//     }
//     return newArrObjectKeys;
// }
//
// console.log(arrObjects);
// console.log(returnArrObjectIndex(arrObjects));